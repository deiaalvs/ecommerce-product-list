import React from 'react';
import styles from '../product/Product.css'
import SocialNetworks from './footerComponents/SocialNetworks'
import FooterInfo from './footerComponents/FooterInfo'
import FooterLinks from './footerComponents/FooterLinks'
import FooterCommun from './footerComponents/FooterCommun'

function Footer () {
    return (
        <footer className="footer">
            <div className="row">
                <FooterInfo />
                <FooterLinks />
                <FooterCommun />
                <SocialNetworks />
            </div>
    </footer>
    )
}

export default Footer;