
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import proformaLogo from '../images/proforma-logo-1.png';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={proformaLogo} alt="Proforma Insights Logo" className="footer-logo" />
          <div className="footer-description">
            <p>Proforma Insights has been offering professional services to clients for many years and aims for customer satisfaction by delivering genuine expertise and providing excellent service.</p>
          </div>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/profile.php?id=61586117833991" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="footer-contact-section">
          <h3 className="footer-section-title">Contact</h3>
          <div className="footer-contact-item">
            <MapPin size={20} className="footer-contact-icon" />
            <p>Ratnachowk, Pokhara</p>
          </div>
          <div className="footer-contact-item">
            <Phone size={20} className="footer-contact-icon" />
            <p>+977-61-545445, 061-545445</p>
          </div>
          <div className="footer-contact-item">
            <Mail size={20} className="footer-contact-icon" />
            <p>proforma@gmail.com</p>
          </div>
        </div>

        <div className="footer-quick-links">
          <h3 className="footer-section-title">Quick Links</h3>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-services-section">
          <h3 className="footer-section-title">Our Business</h3>
          <ul className="footer-links-list">
            <li><Link to="#accounting">Proforma Consultancy</Link></li>
            <li><Link to="#finance">Om Finance Limited</Link></li>
            <li><Link to="#packages">ABC Tution Centre</Link></li>
            <li><Link to="#printpack">Print Pack Pvt. Ltd</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>&copy; 2026 Copyright - Proforma Group</p>
      </div>
    </footer>
  );
}