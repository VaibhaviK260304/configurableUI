import "./home.css";
import { features, siteDetails, theme } from "../../data";
import FeatureCard from "../../components/Feature Card/featurecard";
import Footer from "../../components/Footer/footer";

const Home = () => {
  const footerLinks = [
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

<section className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to Shree Cakes! We are passionate about creating delightful cakes that celebrate life's special moments.
          Our journey began in [year], and since then, we've been crafting sweet memories for our wonderful customers.
          From classic flavors to custom designs, we pour love into every creation.
        </p>

      </section>
      <section className="meet-the-team">
        <h2>OUR TEAM</h2>
        <p>Behind every delectable cake is a team of passionate bakers, decorators, and artists. We take pride in our craftsmanship and attention to detail. Get to know the faces behind the magic!</p>
      </section>

      <section className="specialty-cakes">
        <h2>Our Specialty Cakes</h2>
        <p>Discover Our Signature Creations: Explore our specialty cakes—each a masterpiece of flavor and design on our given accounts (Instagram, Facebook etc.). Whether it’s a whimsical unicorn cake or an elegant tiered wedding cake, we create edible works of art.</p>
      </section>

      <section className="customization">
        <h2>Customize Your Cake</h2>
        <p>Your Dream Cake, Your Way: At Shree Cakes, customization is key. Choose your flavors, colors, and decorations. Want a cake shaped like a favorite book? We’ll make it happen!</p>
      </section>

      <section className="delivery-info">
        <h2>Delivery & Pickup</h2>
        <p>Free Delivery and Fast Delivery.Delivering Happiness: We deliver across [delivery areas]. Our friendly team ensures your cake arrives fresh and on time. Prefer pickup? Swing by our bakery during business hours.</p>
      </section>

      <section className="seasonal-specials">
        <h2>Seasonal Treats</h2>
        <p>Taste the Seasons: From heart-shaped Valentine’s Day treats to spooky Halloween cupcakes, our seasonal specials celebrate every occasion. Check back often for limited-time delights.Remember, our seasonal specials are available for a limited time, so mark your calendar and indulge in these delightful creations. 🎂✨<br/><br/><b>Valentine’s Day Delights : </b>
            <br/>Heart-Shaped Bliss: Our heart-shaped cakes and cupcakes are the perfect way to say “I love you.” From rich red velvet to luscious strawberry, these treats are adorned with edible flowers and sweet messages.
            <br/>Chocolate Dipped Strawberries: Juicy strawberries dipped in velvety chocolate—pure romance in every bite.
            <br/>Cupid’s Cupcakes: Fluffy vanilla cupcakes topped with swirls of pink buttercream and edible glitter. Guaranteed to make hearts flutter!
            <br/><br/><b>Easter Extravaganza:</b><br/>
            Egg Hunt Cupcakes: Hidden surprises await inside these pastel cupcakes. Crack them open to find mini chocolate eggs or fluffy bunny marshmallows.
            <br/>Carrot Cake Towers: Layers of spiced carrot cake with cream cheese frosting, decorated like adorable spring gardens.
            <br/>Chick and Bunny Cookies: Hand-decorated sugar cookies in the shape of chicks, bunnies, and colorful Easter eggs.
            <br/><br/><b>Halloween Haunts:</b>
            <br/>Spooky Spiderweb Cake: Dark chocolate cake with orange buttercream, spun sugar spiderwebs, and creepy-crawly fondant spiders.
            <br/>Pumpkin Patch Cupcakes: Mini pumpkin-shaped cupcakes topped with cinnamon cream cheese frosting.
            <br/><br/><b>Thanksgiving Treats:</b>
            <br/>Pecan Pie Cupcakes: Maple-infused cupcakes with a pecan pie filling and a dollop of whipped cream.
            <br/>Harvest Apple Cake: Layers of apple-spiced cake with caramel drizzle and candied apple slices.
            <br/>Turkey Sugar Cookies: Adorable turkey-shaped cookies with colorful royal icing feathers.
            <br/><br/><b>Christmas Cheer:</b>
            <br/>Gingerbread Wonderland: Gingerbread houses, snowflake cookies, and spiced gingerbread cupcakes.
            <br/>Peppermint Bark Cake: Layers of chocolate and peppermint cake, frosted with candy cane buttercream.
            <br/>Festive Yule Log: A rolled chocolate sponge cake filled with chestnut cream and dusted with powdered sugar.</p>
      </section>

      <Footer links= {footerLinks} />
    </div>
  );
};

export default Home;