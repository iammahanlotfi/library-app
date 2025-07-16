
import styles from "./SideCard.module.css" 

function SideCard({data : {image , title} , mood}) {

  return (
    <div className={styles.card} style={mood ? {backgroundColor : "#c3d6fa"} : {backgroundColor : "#7c6ee9"}} >  
        <img src={image} alt= {title} />
        <p>{title}</p>
    </div>
  )
}

export default SideCard