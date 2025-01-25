import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-content">
        <aside class="footer-brand">
            <div class="footer-icon"></div>
            <p class="brand-text">
                ORACLE CARD DECK
                <br />
              providing Best Services since 2008
            </p>
        </aside>
        <nav>
            <h6 class="footer-heading">Services</h6>
            <a class="footer-link">Branding</a>
            <a class="footer-link">Design</a>
            <a class="footer-link">Marketing</a>
            <a class="footer-link">Advertisement</a>
        </nav>
        <nav>
            <h6 class="footer-heading">Company</h6>
            <a class="footer-link">About us</a>
            <a class="footer-link">Contact</a>
            <a class="footer-link">Jobs</a>
            <a class="footer-link">Press kit</a>
        </nav>
        <nav>
            <h6 class="footer-heading">Legal</h6>
            <a class="footer-link">Terms of use</a>
            <a class="footer-link">Privacy policy</a>
            <a class="footer-link">Cookie policy</a>
        </nav>
    </div>
</footer>
  )
}

export default Footer
