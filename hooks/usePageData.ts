import {useState, useEffect} from "react"

export const usePageData = () => {
  const [launches, setLaunches] = useState<Array<Launch>>([])

  async function updateLaunches(){
    const data = await fetch("https://api.spacexdata.com/v4/launches")
    const json = await data.json()

    setLaunches(<Array<Launch>>json)
  }

  useEffect(()=>{
    updateLaunches().catch((e)=>{console.error(e)})
  },[])

  return launches
}
