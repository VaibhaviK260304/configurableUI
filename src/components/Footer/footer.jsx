import React from 'react';
import "./footer.css"

const Footer = ({ links }) => {
    return (
        <footer>
            <ul>
                <li className='head'>OUR ACCOUNTS</li>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>
                            {link.text}
                            {link.icon && <i className={link.icon}></i>}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="services">
                <p className='head'>OUR DELICIOUS CAKE SERVICES</p>
                    <ul>
                        <li className='f-text'>Custom cakes</li>
                        <li className='f-text'>Cupcakes</li>
                        <li className='f-text'>Wedding cakes</li>
                    </ul>
            </div>

            <div className="address-contact">
                <p className='head'>VISIT US </p>
                    <address className='f-text'>
                        Near Durga Mandir,Tumsar<br /> Cakeville, Deliciousland
                    </address>
                <p className='head'>CONTACT US</p>
                    <ul>
                        <li className='f-text'>Phone: <a href="tel:+11234567890">+1(123)456-7890</a></li>
                        <li className='f-text'>Email: <a href="mailto:deliciouscakes@shree-cakes.com">deliciouscakes@shree-cakes.com</a></li>
                    </ul>
            </div>
        </footer>
    );
};

export default Footer;
