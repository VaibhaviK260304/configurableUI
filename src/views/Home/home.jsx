import "./home.css";
import { features, siteDetails, theme } from "../../data";
import FeatureCard from "../../components/Feature Card/featurecard";
import Footer from "../../components/Footer/footer";

const Home = () => {
  const footerLinks = [
    // { text: "Home", url: "/" },
    { icon: 'fab fa-facebook', text: "Facebook ", url: "https://www.facebook.com/p/Shree-cakes-100071162995912/"},
    { text: "Twitter ", url: "https://x.com/ghanshyam_baker?lang=en&mx=2", icon: 'fab fa-twitter' },
    { text: "Instagram ", url:"https://www.instagram.com/sribakery_trichy/", icon: 'fab fa-instagram'}
  ];

  return (
    <div>
      <h1 className="title" style={{ color: theme.dark }}>
        {siteDetails.title}
      </h1>
      <p className="description">{siteDetails.description}</p>

      {siteDetails.showFeatures ? (
        <div className="features">
          {features.map((feature, i) => {
            const { title, img } = feature;

            return <FeatureCard key={i} title={title} img={img} />;
          })}
        </div>
      ) : null}

      <Footer links= {footerLinks} />
    </div>
  );
};

export default Home;