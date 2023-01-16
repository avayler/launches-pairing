import {useState, useEffect} from "react"

export const useLaunchData= () => {
  const [launches, setLaunches] = useState<Array<Launch>>([])

  async function updateLaunches(){
    //get launch json
    const launchData = await fetch("https://api.spacexdata.com/v4/launches")
    const launchJson = await launchData.json()

    //get core json
    const coreData = await fetch("https://api.spacexdata.com/v4/cores");
    const coreJson = await coreData.json();

    //get payload data
    const payloadData = await fetch("https://api.spacexdata.com/v4/payloads");
    const payloadJson = await payloadData.json();
    
    //filter quantity
    const filteredLaunches = <Array<Launch>>launchJson
//       .sort((a:Launch,b:Launch)=>(b.date_unix-a.date_unix))
      .slice(0,10);

    //rebuild launch list with corrected cores
    const launchList = filteredLaunches.map((l) =>{

      //rebuild core with corrected serial
      const cores = l.cores.map((c)=>{

	//find serial from core
	const core = (<Array<CoreData>>coreJson)
	  .find((x) => (c.core == x.id));
	const serial = core?.serial

	// rebuild core with serial
	const completeCore = {...c, serial}
	
	//return rebuilt core
	return completeCore
      } )

      // rebuild payloads with payload data
      const payloads = l.payloads.map((p)=>{
	const payload = (<Array<PayloadData>>payloadJson)
	  .find((x)=>(p == x.id))
	return payload
      })

      // return rebuild launch
      return {...l, cores, payloads};
    })

    setLaunches(<Array<Launch>>launchList)

  }

  useEffect(()=>{
    updateLaunches().catch((e)=>{console.error(e)})
  },[])

  return launches
}
