import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// CSS styles as a string
const styles = `
/* CSS Variables for Color Scheme */
:root {
  --green: #B9FF66;
  --dark: #191A23;
  --grey: #F3F3F3;
  --black: #000;
  --white: #FFF;
}

/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap');

/* Base Styles */
.surveyterra-homepage * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.surveyterra-homepage {
  font-family: 'Space Grotesk', -apple-system, Roboto, Helvetica, sans-serif;
  background: var(--white);
  color: var(--black);
  line-height: 1.5;
  width: 100%;
  min-height: 100vh;
  position: relative;
}

/* Navigation Styles */
.surveyterra-homepage .navigation {
  display: flex;
  width: 100%;
  padding: 16px 100px;
  justify-content: center;
  align-items: center;
  position: relative;
  background: var(--white);
}

.surveyterra-homepage .nav-container {
  display: flex;
  width: 100%;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
}

.surveyterra-homepage .logo {
  display: flex;
  align-items: center;
}

.surveyterra-homepage .logo-text {
  font-family: 'Spicy Rice', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 28px;
  color: var(--black);
}

.surveyterra-homepage .nav-links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.surveyterra-homepage .nav-link {
  color: var(--black);
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.surveyterra-homepage .nav-link:hover {
  color: var(--green);
}

/* Button Styles */
.surveyterra-homepage .btn-primary {
  display: inline-flex;
  padding: 20px 35px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 14px;
  background: var(--dark);
  color: var(--white);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.surveyterra-homepage .btn-primary:hover {
  background: var(--black);
  transform: translateY(-2px);
}

.surveyterra-homepage .btn-secondary {
  display: inline-flex;
  padding: 20px 35px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 14px;
  border: 1px solid var(--dark);
  background: transparent;
  color: var(--black);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.surveyterra-homepage .btn-secondary:hover {
  background: var(--dark);
  color: var(--white);
}

.surveyterra-homepage .btn-tertiary {
  display: inline-flex;
  padding: 20px 35px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 14px;
  background: var(--green);
  color: var(--black);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.surveyterra-homepage .btn-tertiary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(185, 255, 102, 0.3);
}

.surveyterra-homepage .full-width {
  width: 100%;
}

/* Hero Section */
.surveyterra-homepage .hero {
  display: flex;
  width: 100%;
  padding: 40px 100px 0;
  justify-content: center;
  align-items: flex-start;
  background: var(--white);
}

.surveyterra-homepage .hero-container {
  display: flex;
  width: 100%;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
  gap: 108px;
}

.surveyterra-homepage .hero-content {
  flex: 1;
  max-width: 531px;
}

.surveyterra-homepage .hero-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 60px;
  font-weight: 500;
  line-height: normal;
  color: var(--black);
  margin-bottom: 35px;
}

.surveyterra-homepage .text-green {
  color: #2FFF00;
}

.surveyterra-homepage .hero-description {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: var(--black);
  margin-bottom: 35px;
  max-width: 498px;
}

.surveyterra-homepage .hero-image {
  flex-shrink: 0;
}

.surveyterra-homepage .hero-image img {
  width: 600px;
  height: 515px;
  object-fit: cover;
}

/* Section Heading */
.surveyterra-homepage .section-heading {
  display: flex;
  padding: 80px 100px 40px;
  justify-content: flex-start;
  align-items: center;
}

.surveyterra-homepage .heading-badge {
  display: inline-flex;
  padding: 0 7px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 7px;
  background: var(--green);
  color: var(--black);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: normal;
}

/* CTA Image */
.surveyterra-homepage .cta-image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  margin-bottom: 80px;
}

.surveyterra-homepage .cta-image {
  width: 546px;
  height: 483px;
  object-fit: cover;
}

.surveyterra-homepage .floating-cta-btn {
  position: absolute;
  right: 200px;
  top: 50%;
  transform: translateY(-50%);
}

/* Services Section */
.surveyterra-homepage .services {
  padding: 0 100px 80px;
}

.surveyterra-homepage .services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1440px;
  margin: 0 auto;
}

.surveyterra-homepage .service-card {
  display: flex;
  width: 600px;
  height: 310px;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
  border-radius: 45px;
  border: 1px solid var(--dark);
  box-shadow: 0 5px 0 0 var(--dark);
  position: relative;
}

.surveyterra-homepage .service-card.grey {
  background: var(--grey);
}

.surveyterra-homepage .service-card.green {
  background: var(--green);
}

.surveyterra-homepage .service-card.dark {
  background: var(--dark);
}

.surveyterra-homepage .service-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1;
}

.surveyterra-homepage .service-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
}

.surveyterra-homepage .service-title {
  display: inline-flex;
  padding: 0 7px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 7px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: normal;
}

.surveyterra-homepage .service-title.green {
  background: var(--green);
  color: var(--black);
}

.surveyterra-homepage .service-title.white {
  background: var(--white);
  color: var(--black);
}

.surveyterra-homepage .service-link-icon {
  align-self: flex-start;
}

.surveyterra-homepage .service-description {
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  max-width: 251px;
}

.surveyterra-homepage .service-card.dark .service-description {
  color: var(--white);
  font-weight: 500;
}

.surveyterra-homepage .service-card.grey .service-description,
.surveyterra-homepage .service-card.green .service-description {
  color: var(--black);
}

.surveyterra-homepage .service-image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.surveyterra-homepage .service-image img {
  width: 210px;
  height: auto;
}

/* CTA Block */
.surveyterra-homepage .cta-block {
  padding: 80px 100px;
}

.surveyterra-homepage .cta-card {
  display: flex;
  width: 100%;
  max-width: 1240px;
  height: 347px;
  padding: 60px;
  align-items: center;
  border-radius: 45px;
  background: var(--grey);
  margin: 0 auto;
  position: relative;
}

.surveyterra-homepage .cta-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
  max-width: 500px;
}

.surveyterra-homepage .cta-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: normal;
  color: var(--black);
}

.surveyterra-homepage .cta-description {
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--black);
}

.surveyterra-homepage .cta-illustration {
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
}

/* Case Studies */
.surveyterra-homepage .case-studies {
  padding: 80px 100px;
}

.surveyterra-homepage .section-header {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 80px;
}

.surveyterra-homepage .section-subtitle {
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--black);
  max-width: 580px;
  margin-top: 21px;
}

.surveyterra-homepage .case-studies-container {
  display: flex;
  padding: 70px 60px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 45px;
  background: var(--dark);
  gap: 64px;
}

.surveyterra-homepage .case-study {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1;
  position: relative;
}

.surveyterra-homepage .case-study-description {
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--white);
}

.surveyterra-homepage .case-study-link {
  display: flex;
  align-items: center;
  gap: 15px;
  color: var(--green);
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.surveyterra-homepage .case-study-link:hover {
  color: var(--white);
}

.surveyterra-homepage .case-study-divider {
  position: absolute;
  right: -32px;
  top: 0;
  width: 1px;
  height: 100%;
  background: var(--white);
}

/* Process Steps */
.surveyterra-homepage .process-steps {
  padding: 80px 100px;
}

.surveyterra-homepage .steps-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1234px;
  margin: 0 auto;
}

.surveyterra-homepage .step-card {
  display: flex;
  flex-direction: column;
  padding: 41px 60px;
  border-radius: 45px;
  border: 1px solid var(--dark);
  box-shadow: 0 5px 0 0 var(--dark);
  background: var(--grey);
  cursor: pointer;
  transition: all 0.3s ease;
}

.surveyterra-homepage .step-card.expanded {
  background: var(--green);
}

.surveyterra-homepage .step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.surveyterra-homepage .step-label {
  display: flex;
  align-items: center;
  gap: 25px;
}

.surveyterra-homepage .step-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 60px;
  font-weight: 500;
  line-height: normal;
  color: var(--black);
}

.surveyterra-homepage .step-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: normal;
  color: var(--black);
}

.surveyterra-homepage .step-toggle svg {
  transition: transform 0.3s ease;
}

.surveyterra-homepage .step-card:hover .step-toggle svg {
  transform: rotate(180deg);
}

.surveyterra-homepage .step-divider {
  width: 100%;
  height: 1px;
  background: var(--black);
  margin: 30px 0;
}

.surveyterra-homepage .step-description {
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--black);
  max-width: 1114px;
}

/* Map Section */
.surveyterra-homepage .map-section {
  padding: 80px 100px;
  display: flex;
  justify-content: center;
}

.surveyterra-homepage .world-map {
  width: 100%;
  max-width: 1048px;
  height: auto;
}

/* Bottom CTA */
.surveyterra-homepage .bottom-cta {
  padding: 80px 100px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.surveyterra-homepage .bottom-cta-card {
  display: flex;
  padding: 60px;
  align-items: center;
  border-radius: 45px;
  background: var(--grey);
  flex: 1;
}

.surveyterra-homepage .bottom-cta-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
  max-width: 500px;
}

.surveyterra-homepage .bottom-cta-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: normal;
  color: var(--black);
}

.surveyterra-homepage .bottom-cta-description {
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--black);
}

.surveyterra-homepage .bottom-cta-image {
  flex-shrink: 0;
}

.surveyterra-homepage .bottom-cta-image img {
  width: 496px;
  height: 489px;
  object-fit: cover;
}

/* Contact Section */
.surveyterra-homepage .contact-section {
  padding: 80px 100px;
}

.surveyterra-homepage .contact-container {
  display: flex;
  padding: 60px;
  align-items: flex-start;
  border-radius: 45px;
  background: var(--grey);
  gap: 100px;
}

.surveyterra-homepage .contact-form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 556px;
}

.surveyterra-homepage .radio-buttons {
  display: flex;
  gap: 35px;
}

.surveyterra-homepage .radio-option {
  display: flex;
  align-items: center;
  gap: 14px;
}

.surveyterra-homepage .radio-input {
  display: flex;
  align-items: center;
  gap: 14px;
}

.surveyterra-homepage .radio-input input[type="radio"] {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--black);
  background: var(--white);
  appearance: none;
  position: relative;
  cursor: pointer;
}

.surveyterra-homepage .radio-input input[type="radio"]:checked::after {
  content: '';
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--green);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.surveyterra-homepage .radio-input label {
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--black);
  cursor: pointer;
}

.surveyterra-homepage .form-fields {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.surveyterra-homepage .form-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.surveyterra-homepage .form-field label {
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: var(--black);
}

.surveyterra-homepage .form-field input,
.surveyterra-homepage .form-field textarea {
  padding: 18px 30px;
  border-radius: 14px;
  border: 1px solid var(--black);
  background: var(--white);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--black);
}

.surveyterra-homepage .form-field input::placeholder,
.surveyterra-homepage .form-field textarea::placeholder {
  color: #898989;
}

.surveyterra-homepage .form-field textarea {
  height: 190px;
  resize: vertical;
}

.surveyterra-homepage .contact-illustration {
  flex-shrink: 0;
}

/* Footer */
.surveyterra-homepage .footer {
  padding: 0 100px;
}

.surveyterra-homepage .footer-content {
  display: flex;
  flex-direction: column;
  padding: 55px 60px 50px;
  border-radius: 45px 45px 0 0;
  background: var(--dark);
  gap: 50px;
}

.surveyterra-homepage .footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.surveyterra-homepage .footer-logo {
  font-family: 'Spicy Rice', sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
  color: var(--white);
  text-decoration: underline;
}

.surveyterra-homepage .footer-nav {
  display: flex;
  gap: 40px;
}

.surveyterra-homepage .footer-nav a {
  color: var(--white);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.surveyterra-homepage .footer-nav a:hover {
  color: var(--green);
}

.surveyterra-homepage .social-icons {
  display: flex;
  gap: 20px;
}

.surveyterra-homepage .footer-middle {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 154px;
}

.surveyterra-homepage .footer-contact {
  display: flex;
  flex-direction: column;
  gap: 27px;
}

.surveyterra-homepage .contact-badge {
  display: inline-flex;
  padding: 0 7px;
  border-radius: 7px;
  background: var(--green);
  color: var(--black);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  width: fit-content;
}

.surveyterra-homepage .contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.surveyterra-homepage .contact-info p {
  color: var(--white);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
}

.surveyterra-homepage .footer-subscription {
  display: flex;
  padding: 58px 40px;
  align-items: center;
  border-radius: 14px;
  background: #292A32;
}

.surveyterra-homepage .subscription-form {
  display: flex;
  align-items: center;
  gap: 20px;
}

.surveyterra-homepage .subscription-form input {
  padding: 22px 35px;
  border-radius: 14px;
  border: 1px solid var(--white);
  background: transparent;
  color: var(--white);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  width: 285px;
}

.surveyterra-homepage .subscription-form input::placeholder {
  color: var(--white);
}

.surveyterra-homepage .footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.surveyterra-homepage .footer-divider {
  width: 100%;
  height: 1px;
  background: var(--white);
}

.surveyterra-homepage .footer-legal {
  display: flex;
  gap: 40px;
}

.surveyterra-homepage .footer-legal p,
.surveyterra-homepage .footer-legal a {
  color: var(--white);
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.surveyterra-homepage .footer-legal a {
  text-decoration: underline;
  transition: color 0.3s ease;
}

.surveyterra-homepage .footer-legal a:hover {
  color: var(--green);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .surveyterra-homepage .navigation,
  .surveyterra-homepage .hero,
  .surveyterra-homepage .services,
  .surveyterra-homepage .cta-block,
  .surveyterra-homepage .case-studies,
  .surveyterra-homepage .process-steps,
  .surveyterra-homepage .map-section,
  .surveyterra-homepage .bottom-cta,
  .surveyterra-homepage .contact-section,
  .surveyterra-homepage .footer {
    padding-left: 50px;
    padding-right: 50px;
  }
  
  .surveyterra-homepage .hero-container {
    gap: 50px;
  }
  
  .surveyterra-homepage .hero-title {
    font-size: 48px;
  }
  
  .surveyterra-homepage .services-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .surveyterra-homepage .service-card {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .surveyterra-homepage .navigation,
  .surveyterra-homepage .hero,
  .surveyterra-homepage .services,
  .surveyterra-homepage .cta-block,
  .surveyterra-homepage .case-studies,
  .surveyterra-homepage .process-steps,
  .surveyterra-homepage .map-section,
  .surveyterra-homepage .bottom-cta,
  .surveyterra-homepage .contact-section,
  .surveyterra-homepage .footer {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .surveyterra-homepage .nav-container {
    flex-direction: column;
    gap: 20px;
  }
  
  .surveyterra-homepage .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .surveyterra-homepage .hero-container {
    flex-direction: column;
    text-align: center;
  }
  
  .surveyterra-homepage .hero-title {
    font-size: 36px;
  }
  
  .surveyterra-homepage .hero-image img {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
  
  .surveyterra-homepage .service-card {
    flex-direction: column;
    height: auto;
    padding: 30px;
    text-align: center;
  }
  
  .surveyterra-homepage .service-image img {
    width: 150px;
  }
  
  .surveyterra-homepage .case-studies-container {
    flex-direction: column;
    gap: 40px;
  }
  
  .surveyterra-homepage .case-study-divider {
    display: none;
  }
  
  .surveyterra-homepage .bottom-cta {
    flex-direction: column;
  }
  
  .surveyterra-homepage .bottom-cta-image img {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
  
  .surveyterra-homepage .contact-container {
    flex-direction: column;
    gap: 40px;
  }
  
  .surveyterra-homepage .contact-form {
    width: 100%;
  }
  
  .surveyterra-homepage .footer-top {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  
  .surveyterra-homepage .footer-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .surveyterra-homepage .footer-middle {
    flex-direction: column;
    gap: 40px;
  }
  
  .surveyterra-homepage .footer-legal {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .surveyterra-homepage .hero-title {
    font-size: 28px;
  }
  
  .surveyterra-homepage .heading-badge {
    font-size: 24px;
  }
  
  .surveyterra-homepage .service-title {
    font-size: 24px;
  }
  
  .surveyterra-homepage .step-number {
    font-size: 40px;
  }
  
  .surveyterra-homepage .step-title {
    font-size: 24px;
  }
  
  .surveyterra-homepage .cta-title,
  .surveyterra-homepage .bottom-cta-title {
    font-size: 24px;
  }
}
`;

// Types
interface FormData {
  contactType: 'sayHi' | 'getQuote';
  name: string;
  email: string;
  message: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  bgColor: 'grey' | 'green' | 'dark';
  titleBg: 'green' | 'white';
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  expanded: boolean;
}

interface CaseStudy {
  description: string;
  link: string;
}

interface SurveyTerraHomepageProps {
  onNavClick?: (section: string) => void;
  onButtonClick?: (action: string) => void;
  onFormSubmit?: (formData: FormData) => void;
}

const SurveyTerraHomepage: React.FC<SurveyTerraHomepageProps> = ({
  onNavClick,
  onButtonClick,
  onFormSubmit
}) => {
  const [formData, setFormData] = useState<FormData>({
    contactType: 'sayHi',
    name: '',
    email: '',
    message: ''
  });

  // Inject styles
  React.useEffect(() => {
    const styleId = 'surveyterra-homepage-styles';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = styles;
      document.head.appendChild(styleElement);
    }
  }, []);

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  const handleNavClick = (section: string) => {
    if (onNavClick) {
      onNavClick(section);
    }
  };

  const handleButtonClick = (action: string) => {
    if (onButtonClick) {
      onButtonClick(action);
    }
  };

  const services: Service[] = [
    {
      title: "Instant Payouts",
      description: "Get paid immediately after completing surveys. No waiting periods, no minimum thresholds - cash out starting from $1 via PayPal, Venmo, or gift cards.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/36ad78354f18c3813904cbd8607117d8b264806e?width=420",
      bgColor: "grey",
      titleBg: "green"
    },
    {
      title: "High-Paying Surveys",
      description: "Get paid immediately after completing surveys. No waiting periods, no minimum thresholds - cash out starting from $1 via PayPal, Venmo, or gift cards.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/89b086ebe6689329b966a319ae8811800566753a?width=420",
      bgColor: "green",
      titleBg: "white"
    },
    {
      title: "Community Rewards",
      description: "Get paid immediately after completing surveys. No waiting periods, no minimum thresholds - cash out starting from $1 via PayPal, Venmo, or gift cards.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/35b3e4cdb9831ba0f10111b0649d502b4a6d2bc7?width=418",
      bgColor: "dark",
      titleBg: "white"
    },
    {
      title: "Smart Matching",
      description: "Get paid immediately after completing surveys. No waiting periods, no minimum thresholds - cash out starting from $1 via PayPal, Venmo, or gift cards.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c8b533a4e5d5a6fd16e35a4c005b2f65048b9e4d?width=420",
      bgColor: "grey",
      titleBg: "green"
    },
    {
      title: "Mobile Earning",
      description: "Get paid immediately after completing surveys. No waiting periods, no minimum thresholds - cash out starting from $1 via PayPal, Venmo, or gift cards.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/a46c47fe11b2be2cc23081e7174ba6187680ca38?width=420",
      bgColor: "green",
      titleBg: "white"
    },
    {
      title: "Earnings Dashboard",
      description: "Get paid immediately after completing surveys. No waiting periods, no minimum thresholds - cash out starting from $1 via PayPal, Venmo, or gift cards.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/49b836997129c11a6d2818ead553828da5f8e19a?width=420",
      bgColor: "dark",
      titleBg: "green"
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Quick Registration",
      description: "Create your free account in under 60 seconds. Simply enter your email, choose a password, and verify your account. No credit card required, no hidden fees - just start your earning journey immediately.",
      expanded: true
    },
    {
      number: "02",
      title: "Profile Setup",
      description: "",
      expanded: false
    },
    {
      number: "03",
      title: "Survey Matching",
      description: "",
      expanded: false
    },
    {
      number: "04",
      title: "Start Earning",
      description: "",
      expanded: false
    },
    {
      number: "05",
      title: "Instant Payouts",
      description: "",
      expanded: false
    },
    {
      number: "06",
      title: "Maximize Earnings",
      description: "",
      expanded: false
    }
  ];

  const caseStudies: CaseStudy[] = [
    {
      description: "For a college student in California, we provided flexible earning opportunities that resulted in $347 earned last month",
      link: "Learn more"
    },
    {
      description: "For a busy mom in Texas, we created a perfect work-from-home solution that resulted in $520 monthly earnings and 200+ completed surveys",
      link: "Learn more"
    },
    {
      description: "For a retired teacher in Florida, we developed an engaging earning routine that increased monthly income by $430 and provided 150+ survey completions during leisure time.",
      link: "Learn more"
    }
  ];

  return (
    <div className="surveyterra-homepage">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">SurveyTeraa</span>
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link" onClick={() => handleNavClick('about')}>About us</a>
            <a href="#surveys" className="nav-link" onClick={() => handleNavClick('surveys')}>Surveys</a>
            <a href="#contact" className="nav-link" onClick={() => handleNavClick('contact')}>Contact Us</a>
            <a href="#market" className="nav-link" onClick={() => handleNavClick('market')}>Market Research</a>
            <button className="btn-secondary" onClick={() => handleButtonClick('contact')}>Contact Us</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Opinions Are Worth Money – <span className="text-green">Start Earning Today!</span>
            </h1>
            <p className="hero-description">
              Transform downtime into dollars. Join thousands earning $50-$500+ monthly by sharing your thoughts on brands you already use.
            </p>
            <button className="btn-primary" onClick={() => handleButtonClick('start-earning')}>Start Earning Now</button>
          </div>
          <div className="hero-image">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/8e5a0ddd99c3e79a2dda19f77798086e16f64d30?width=1201" alt="Illustration" />
          </div>
        </div>
      </section>

      {/* Section Heading */}
      <section className="section-heading">
        <div className="heading-badge">Turn Your Spare Minutes Into Real Cash</div>
      </section>

      {/* Call to Action Image */}
      <div className="cta-image-container">
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/dc8481c5d23388d78414a2b1188ae1b6bc2688a8?width=1092" alt="Survey illustration" className="cta-image" />
        <button className="btn-primary floating-cta-btn" onClick={() => handleButtonClick('start-earning')}>Start Earning Now</button>
      </div>

      {/* Services Section */}
      <section className="services">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.bgColor}`}>
              <div className="service-content">
                <div className="service-header">
                  <div className={`service-title ${service.titleBg}`}>
                    {service.title}
                  </div>
                  <div className="service-link-icon">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                      <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23"/>
                      <path d="M11.25 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L12 26L11.25 24.701ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12 26L12.75 27.299L30.0706 17.299L29.3206 16L28.5706 14.701L11.25 24.701L12 26Z" fill="#B9FF66"/>
                    </svg>
                  </div>
                </div>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Block */}
      <section className="cta-block">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">Your Next Paycheck is Just One Click Away</h2>
            <p className="cta-description">
              Join over 50,000 members who are already earning money from home. Start taking surveys today and get your first payout within 24 hours.
            </p>
            <button className="btn-primary" onClick={() => handleButtonClick('earn-now')}>Earn Now</button>
          </div>
          <div className="cta-illustration">
            <svg width="494" height="395" viewBox="0 0 494 395" fill="none">
              <path d="M169 163.5C215.644 163.5 257.858 167.471 288.398 173.887C303.673 177.095 316 180.91 324.497 185.13C328.746 187.24 332.011 189.439 334.208 191.694C336.403 193.948 337.5 196.222 337.5 198.5C337.5 200.778 336.403 203.052 334.208 205.306C332.011 207.561 328.746 209.76 324.497 211.87C316 216.09 303.673 219.905 288.398 223.113C257.858 229.529 215.644 233.5 169 233.5C122.356 233.5 80.1417 229.529 49.6016 223.113C34.3275 219.905 21.9997 216.09 13.5029 211.87C9.25392 209.76 5.98872 207.561 3.79199 205.306C1.59696 203.052 0.5 200.778 0.5 198.5C0.5 196.222 1.59696 193.948 3.79199 191.694C5.98872 189.439 9.25392 187.24 13.5029 185.13C21.9997 180.91 34.3275 177.095 49.6016 173.887C80.1417 167.471 122.356 163.5 169 163.5Z" stroke="black"/>
              <path d="M277 177L294.789 222.06L341.11 207.874L316.972 249.877L356.944 277.247L309.055 284.563L312.578 332.879L277 300L241.422 332.879L244.945 284.563L197.056 277.247L237.028 249.877L212.89 207.874L259.211 222.06L277 177Z" fill="#D9D9D9"/>
              <path d="M112.194 306.102L135.134 264L158.258 306.102L200.269 329.134L158.258 352.166L135.134 394.269L112.194 352.166L70 329.134L112.194 306.102Z" fill="#B9FF66"/>
              <circle cx="152.5" cy="186.5" r="62" fill="black" stroke="black"/>
              <ellipse cx="132" cy="173" rx="10" ry="20" fill="white"/>
              <ellipse cx="173" cy="173" rx="10" ry="20" fill="white"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <div className="section-header">
          <div className="heading-badge">Case Studies</div>
          <p className="section-subtitle">See How Real Members Are Earning with Surveys Terra</p>
        </div>
        <div className="case-studies-container">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study">
              <p className="case-study-description">{study.description}</p>
              <div className="case-study-link" onClick={() => handleButtonClick(`case-study-${index}`)}>
                <span>{study.link}</span>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0705 6.29904L19.3205 5L18.5705 3.70096L1.25 13.701L2 15Z" fill="#B9FF66"/>
                </svg>
              </div>
              {index < caseStudies.length - 1 && <div className="case-study-divider"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="process-steps">
        <div className="section-header">
          <div className="heading-badge">How You Start Earning</div>
          <p className="section-subtitle">Simple Step-by-Step Guide to Making Money with Surveys</p>
        </div>
        <div className="steps-container">
          {processSteps.map((step, index) => (
            <div key={index} className={`step-card ${step.expanded ? 'expanded' : ''}`}>
              <div className="step-header">
                <div className="step-label">
                  <span className="step-number">{step.number}</span>
                  <span className="step-title">{step.title}</span>
                </div>
                <div className="step-toggle">
                  <svg width="58" height="59" viewBox="0 0 58 59" fill="none">
                    <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/>
                    {step.expanded ? (
                      <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black"/>
                    ) : (
                      <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23"/>
                    )}
                  </svg>
                </div>
              </div>
              {step.expanded && (
                <>
                  <div className="step-divider"></div>
                  <div className="step-description">{step.description}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/598b7a682efa04d43eeb83d478cfcd840d7d8599?width=2096" alt="World map showing survey participants" className="world-map" />
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <div className="bottom-cta-card">
          <div className="bottom-cta-content">
            <h2 className="bottom-cta-title">Your Next Paycheck is Just One Click Away</h2>
            <p className="bottom-cta-description">
              Join over 50,000 members who are already earning money from home. Start taking surveys today and get your first payout within 24 hours.
            </p>
            <button className="btn-primary" onClick={() => handleButtonClick('earn-now')}>Earn Now</button>
          </div>
        </div>
        <div className="bottom-cta-image">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/e39304cafec4c77183671f693c6d10e73a456bbf?width=992" alt="Earning illustration" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-header">
          <div className="heading-badge">Contact Us</div>
          <p className="section-subtitle">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
        </div>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="radio-buttons">
              <div className="radio-option">
                <div className="radio-input">
                  <input 
                    type="radio" 
                    id="sayHi" 
                    name="contactType" 
                    value="sayHi"
                    checked={formData.contactType === 'sayHi'}
                    onChange={(e) => handleFormChange('contactType', e.target.value as 'sayHi' | 'getQuote')}
                  />
                  <label htmlFor="sayHi">Say Hi</label>
                </div>
              </div>
              <div className="radio-option">
                <div className="radio-input">
                  <input 
                    type="radio" 
                    id="getQuote" 
                    name="contactType" 
                    value="getQuote"
                    checked={formData.contactType === 'getQuote'}
                    onChange={(e) => handleFormChange('contactType', e.target.value as 'sayHi' | 'getQuote')}
                  />
                  <label htmlFor="getQuote">Get a Quote</label>
                </div>
              </div>
            </div>
            <div className="form-fields">
              <div className="form-field">
                <label>Name</label>
                <input 
                  type="text" 
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleFormChange('name', e.target.value)}
                />
              </div>
              <div className="form-field">
                <label>Email*</label>
                <input 
                  type="email" 
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleFormChange('email', e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label>Message*</label>
                <textarea 
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn-primary full-width">Send Message</button>
          </form>
          <div className="contact-illustration">
            <svg width="692" height="649" viewBox="0 0 692 649" fill="none">
              <path d="M366.641 162.061L387.068 0.5L386.909 163.337L427.445 5.60362L407.017 167.165L467.024 15.6514L426.488 173.545L505.007 30.6432L444.841 182.157L540.756 50.2603L462.077 193.162L573.632 74.343L477.876 206.08L603.475 102.253L491.761 220.913L629.489 133.673L503.73 237.499L651.353 168.122L513.625 255.362L668.749 204.964L521.126 274.341L681.356 243.719L526.233 294.118L689.017 283.751L528.786 314.213L691.57 324.42L528.786 334.628L689.017 365.09L526.233 354.883L681.356 405.121L521.126 374.659L668.749 444.036L513.625 393.638L651.353 480.878L503.73 411.501L629.489 515.328L491.761 427.928L603.475 546.747L477.876 442.76L573.632 574.657L462.077 455.838L540.756 598.58L444.841 466.684L505.007 618.197L426.488 475.455L467.024 633.189L407.017 481.676L427.445 643.396L386.909 485.503L387.068 648.5L366.641 486.779L346.213 648.5L346.213 485.503L305.676 643.396L326.264 481.676L266.257 633.189L306.794 475.455L228.274 618.197L288.44 466.684L192.526 598.58L271.205 455.838L159.49 574.657L255.405 442.76L129.806 546.747L241.52 427.928L103.792 515.328L229.551 411.501L81.9282 480.878L219.656 393.638L64.5326 444.036L212.155 374.659L51.9248 405.121L207.048 354.883L44.2644 365.09L204.495 334.628L41.7109 324.42L204.495 314.213L44.2644 283.751L207.048 294.118L51.9248 243.719L212.155 274.341L64.5326 204.964L219.656 255.362L81.9282 168.122L229.551 237.499L103.792 133.673L241.52 220.913L129.806 102.253L255.405 206.08L159.49 74.343L271.205 193.162L192.526 50.2603L288.44 182.157L228.274 30.6432L306.794 173.545L266.257 15.6514L326.264 167.165L305.676 5.60362L346.213 163.337V0.5L366.641 162.061Z" stroke="black" strokeWidth="2"/>
              <path d="M95.7147 470.596L141.422 495.5L95.7147 520.604L70.7109 566.21L45.7072 520.604L0.000260592 495.5L45.7072 470.596L70.7109 424.789L95.7147 470.596Z" fill="#B9FF66"/>
              <path d="M217.102 244.065L298.777 288.566L217.102 333.425L172.422 414.922L127.742 333.425L46.0666 288.566L127.742 244.065L172.422 162.211L217.102 244.065Z" fill="#191A23"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-logo">SurveyTerra</div>
            <div className="footer-nav">
              <a href="#about" onClick={() => handleNavClick('about')}>About us</a>
              <a href="#services" onClick={() => handleNavClick('services')}>Services</a>
              <a href="#cases" onClick={() => handleNavClick('cases')}>Use Cases</a>
              <a href="#pricing" onClick={() => handleNavClick('pricing')}>Pricing</a>
              <a href="#blog" onClick={() => handleNavClick('blog')}>Blog</a>
            </div>
            <div className="social-icons">
              <div className="social-icon">
                <svg width="130" height="30" viewBox="0 0 130 30" fill="none">
                  <circle cx="15" cy="15" r="15" fill="white"/>
                  <path d="M8.22154 22.0586H11.3056V12.0742H8.22154V22.0586Z" fill="black"/>
                  <path d="M7.94116 8.88672C7.94116 9.87109 8.73555 10.668 9.76359 10.668C10.7449 10.668 11.5393 9.87109 11.5393 8.88672C11.5393 7.90234 10.7449 7.05859 9.76359 7.05859C8.73555 7.05859 7.94116 7.90234 7.94116 8.88672Z" fill="black"/>
                  <path d="M19.8103 22.0586H22.9412V16.5742C22.9412 13.9023 22.3337 11.793 19.2028 11.793C17.7075 11.793 16.6795 12.6367 16.2589 13.4336H16.2122V12.0742H13.2683V22.0586H16.3524V17.1367C16.3524 15.8242 16.586 14.5586 18.2215 14.5586C19.8103 14.5586 19.8103 16.0586 19.8103 17.1836V22.0586Z" fill="black"/>
                  <path d="M80 15.0913C80 6.75456 73.2863 0 65 0C56.7137 0 50 6.75456 50 15.0913C50 22.6369 55.4435 28.9047 62.6411 30V19.4726H58.8306V15.0913H62.6411V11.8053C62.6411 8.03245 64.879 5.90264 68.2661 5.90264C69.9597 5.90264 71.6532 6.2069 71.6532 6.2069V9.91886H69.7782C67.9032 9.91886 67.2984 11.0751 67.2984 12.2921V15.0913H71.4718L70.8065 19.4726H67.2984V30C74.496 28.9047 80 22.6369 80 15.0913Z" fill="white"/>
                  <circle cx="115" cy="15" r="15" fill="white"/>
                  <path d="M121.996 11.4915C122.685 10.9745 123.306 10.3541 123.788 9.63028C123.168 9.90602 122.444 10.1128 121.72 10.1818C122.479 9.73369 123.03 9.04435 123.306 8.18267C122.616 8.59628 121.824 8.90648 121.031 9.07881C120.342 8.35501 119.411 7.94141 118.377 7.94141C116.378 7.94141 114.758 9.56135 114.758 11.5604C114.758 11.8362 114.793 12.1119 114.861 12.3876C111.863 12.2153 109.174 10.7677 107.382 8.59628C107.072 9.11328 106.9 9.73369 106.9 10.423C106.9 11.6638 107.52 12.7668 108.52 13.4216C107.934 13.3872 107.348 13.2493 106.865 12.9736V13.008C106.865 14.7659 108.106 16.2135 109.76 16.5581C109.485 16.6271 109.14 16.696 108.83 16.696C108.588 16.696 108.382 16.6615 108.14 16.6271C108.588 18.0747 109.933 19.1087 111.518 19.1432C110.277 20.1082 108.726 20.6942 107.037 20.6942C106.727 20.6942 106.452 20.6597 106.176 20.6252C107.761 21.6592 109.657 22.2452 111.725 22.2452C118.377 22.2452 121.996 16.7649 121.996 11.974C121.996 11.8017 121.996 11.6638 121.996 11.4915Z" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="footer-contact">
              <div className="contact-badge">Contact us:</div>
              <div className="contact-info">
                <p>Email: info@surveyterra.com</p>
                <p>Phone: 555-567-8901</p>
                <p>Address: 1234 Main St<br/>Moonstone City, Stardust State 12345</p>
              </div>
            </div>
            <div className="footer-subscription">
              <div className="subscription-form">
                <input type="email" placeholder="Email" />
                <button className="btn-tertiary" onClick={() => handleButtonClick('subscribe')}>send a hi</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-legal">
              <p>© 2023 Positivus. All Rights Reserved.</p>
              <a href="#privacy" onClick={() => handleNavClick('privacy')}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SurveyTerraHomepage;