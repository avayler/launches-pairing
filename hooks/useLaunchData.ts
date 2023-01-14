import {useState, useEffect} from "react"

export const useLaunchData= () => {
  const [launches, setLaunches] = useState<Array<Launch>>([])

  async function updateLaunches(){
    //get launch json
    const launchData = await fetch("https://api.spacexdata.com/v4/launches")
    const launchJson = await launchData.json()

    console.log("yeet1")
    //get core json
    const coreData = await fetch("https://api.spacexdata.com/v4/cores");
    const coreJson = await coreData.json();
    
    console.log("yeet2")
    //filter quantity
    const filteredLaunches = <Array<Launch>>launchJson
      .sort((a:Launch,b:Launch)=>(b.date_unix-a.date_unix))
      .slice(0,10);

    console.log(filteredLaunches)

    //rebuild launch list with corrected cores
    const launchList = (filteredLaunches).map((l) =>{

      //rebuild core with corrected serial
      const cores = l.cores.map((c)=>{

	//find serial from core
	const serial = (<Array<CoreData>>coreJson)?.find((x) => (c.core == x.id)).serial;

	console.log(serial)

	// rebuild core with serial
	const completeCore = {...c, serial}
	
	//console.log(completeCore)
	//return rebuilt core
	return completeCore
      } )
      // return rebuild launch
      return {...l, cores};
    })
    setLaunches(<Array<Launch>>launchList)
  }

  useEffect(()=>{
    updateLaunches().catch((e)=>{console.error(e)})
  },[])

  return launches
}
