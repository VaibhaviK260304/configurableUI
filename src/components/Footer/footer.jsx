import "./footer.css"

const Footer = ({ address, phone, socialLinks }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{address}</p>
        <p>Phone: {phone}</p>
        <div className="social-icons">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={link.name} />
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Cake Shop</p>
      </div>
    </footer>
  );
};

export default Footer;
