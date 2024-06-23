import "./home.css"
import {features, siteDetails, theme} from "./../../data"
import FeatureCard from "./../../components/Feature Card/featurecard"
import Footer from "./../../components/Footer/footer"

function home() {
  return (
    <div>
        <h1  className="title" style ={{color: theme.dark}}>
            {siteDetails.title}
        </h1>
        <p className="description">{siteDetails.description}</p>

    {siteDetails.showFeatures ? 
        <div className="features">
            {
                features.map((feature, i)=>{
                    const{title, img}  = feature

                    return(
                       <FeatureCard key={i} title={title} img={img} />
                    )
                })
            }
        </div> 
        :
         null}
    </div>
  )
}

export default home