import "./featurecard.css"
import {theme} from "./../../data"

function featurecard({title, img}) {
  return (
    <>
      <div className="feature-card" style={{backgroundColor: theme.primary}}>
        <img src={img} alt={title} className="feature-img"/>
        <p className="feature-title">{title}</p>
      </div>
    </>
  )
}

export default featurecard