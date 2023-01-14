import { useLaunchData } from "../../hooks"
import style from "./launches.module.css"

export const Launches = () => {
  const launchData = useLaunchData()
  
  if(!launchData || launchData.length <= 0) return (
    <div>
      No Launches Found!
    </div>
  )

  return(
    <div className={style.cards}>
    {launchData
      .map((launch, index) => (
	<div className={style.card} key={index}> 
	  <div className={style.patch}>
	      <img src={launch.links.patch.small||"/img/starman.jpg"} />
	  </div>
	  <div className={style.content}>
	    <div className={style.header}>
	      <div className={style.primary}>
		{launch.name || "Unnamed Launch"}
	      </div>
	      <div className={style.secondary}>
		{new Date(launch.date_utc).toLocaleDateString(navigator.language)}
	      </div>
	    </div>
	    <div className={style.details}>
	      {launch.details?.trim() || "No details available" }
	    </div>
	    <div>
	      <div>
		Core Serials:
	      </div>
	      <ul>
		{launch.cores.map((core, index)=>(
		  <li key={index} >
		    {core.serial || " Serial Unknown "}
		  </li>
		))}
	      </ul>
	    </div>
	  </div> 
	</div>
      ))}
    </div>
  )
  
}
