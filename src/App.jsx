import { useState } from 'react'
import './App.css'

// Icons as SVG components
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const HeadphonesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
)

const RoofIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const ClipboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <path d="M9 14l2 2 4-4"/>
  </svg>
)

const InstallIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2"/>
    <line x1="6" y1="10" x2="6" y2="14"/>
    <line x1="10" y1="10" x2="10" y2="14"/>
    <line x1="14" y1="10" x2="14" y2="14"/>
    <line x1="18" y1="10" x2="18" y2="14"/>
  </svg>
)

const MaintenanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <path d="M2 20h20"/>
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null)
  const [showContactPopup, setShowContactPopup] = useState(false)

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const openContactPopup = () => {
    setShowContactPopup(true)
  }

  const closeContactPopup = () => {
    setShowContactPopup(false)
  }

  const faqs = [
    {
      question: "How much electricity do you consume?",
      answer: "A typical household consumes about 3-4.5 units per day on average. That amounts to about ₹2,000/month in electricity bills. The amount varies based on the state you live in as electricity rates are decided by the state government. The state also gives subsidy on electricity consumption and hence electricity bills can vary."
    },
    {
      question: "Is rooftop solar suitable for my home?",
      answer: "If you/your parents live in an independent home with terrace, you should be able to install a rooftop solar setup in your home. Currently, regulations are not clear about installing personal rooftop solar systems in apartments and flats. In such cases, you will need to install systems at a society level for all flats at the same time."
    },
    {
      question: "Will solar damage my roof or affect resale value?",
      answer: "A professionally installed system does not damage the roof, can actually improve resale value, and has potential to achieve higher rental yields. Poor installations, however, can cause leakage or clutter. Installer quality matters more than panel brand."
    },
    {
      question: "Do I need a battery?",
      answer: "In most urban homes, no. Grid-connected rooftop solar works without batteries by using net metering. Solar Rooftop systems produce electricity during the day, typically excess of usage. The additional production is available as credits which offset night time consumption from the grid. Most people who install grid-connected rooftop systems see ZERO electricity bills, excluding fixed charges."
    },
    {
      question: "If electricity goes, why doesn't solar work?",
      answer: "Current regulations do not allow live power to flow back into the grid when it is down. This prevents accidents for line workers. If you face the issue of power cuts in your area, it is recommended to install a battery as well to ensure you get uninterrupted power to your home."
    },
    {
      question: "I have 5 ACs at home. Can a rooftop solar system handle this?",
      answer: "A solar system will not stop your ACs or appliances from working. Everything continues to run on the grid as usual. Solar acts as a complementary energy source, reducing the total electricity you consume over the day rather than powering all devices at once. If the system is correctly sized and well installed, your electricity bills can effectively become zero."
    },
    {
      question: "Will my electricity bill actually reduce?",
      answer: "Yes, your electricity bill will reduce, but it may not always become zero. The actual savings depend on how much electricity you use during the day, your per-unit tariff (which varies by state and slab), and how well your system is sized and oriented on the roof. In most well-designed installations, homes typically see a 90% reduction in their annual electricity bills."
    },
    {
      question: "How long does it take to break even?",
      answer: "Typically 4–6 years with subsidy, slightly longer without subsidy. After this, electricity is essentially free for the remaining life of the system (20–25 years)."
    },
    {
      question: "What about subsidy?",
      answer: "Under the PM Surya Ghar scheme, eligible homes can receive central subsidies up to ₹78,000 for a 3 kW system. A 2-3 BHK house can be powered with a 3-4 kW solar rooftop system."
    },
    {
      question: "Does dust really reduce performance?",
      answer: "Yes. In India, dust can reduce output by up to 30% if panels are not cleaned regularly. Hotspots caused by dirt can also reduce panel life. Periodic maintenance is not optional if you want long-term performance."
    },
    {
      question: "If I rent out my house later, does solar help?",
      answer: "Often yes. Owners can charge a rental premium or recover electricity costs informally from tenants. Lower monthly bills make the property more attractive."
    }
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <img src="/logo.jpeg" alt="Griha Solar" className="navbar-logo" />
          <div className="navbar-cta">
            <a href="tel:9981394554" className="navbar-phone">
              <PhoneIcon />
              <span>9981394554</span>
            </a>
            <button onClick={openContactPopup} className="btn btn-primary">Get Free Quote</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>
              Reduce your electricity bills to <span>ZERO!</span>
            </h1>
            <p className="hero-description">
              <strong>Griha Solar</strong> helps you throughout the process of installing rooftop solar and <strong>guarantees long-term performance</strong>
            </p>
            <button onClick={openContactPopup} className="btn btn-secondary btn-large">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Benefits of Rooftop Solar Section */}
      <section className="usp">
        <div className="container">
          <h2>Benefits of Rooftop Solar</h2>
          <div className="usp-grid">
            <div className="usp-card">
              <div className="usp-icon">
                <StarIcon />
              </div>
              <h4>₹30,000 Annual Savings</h4>
              <p>On average, households can save ₹30,000 annually on electricity bills with a solar system.</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon">
                <StarIcon />
              </div>
              <h4>Breakeven 5 Years</h4>
              <p>With PM Surya Ghar subsidy, most households will break even in their investment in 5 years</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon">
                <StarIcon />
              </div>
              <h4>25 Years Free Electricity</h4>
              <p>After the breakeven period, households get free electricity for 20+ years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey" id="journey">
        <div className="container">
          <div className="section-header">
            <h2>The Griha Solar <span>Journey</span></h2>
            <p>From decision to lifetime performance – we're with you every step of the way</p>
          </div>

          {/* USP Section */}
          <section className="usp">
            <div className="container">
              <div className="usp-grid">
                <div className="usp-card">
                  <div className="usp-icon">
                    <StarIcon />
                  </div>
                  <h4>High Quality Materials</h4>
                  <p>Premium panels and components for maximum efficiency and longevity</p>
                </div>
                <div className="usp-card">
                  <div className="usp-icon">
                    <StarIcon />
                  </div>
                  <h4>Hassle-Free Installation</h4>
                  <p>Same day installation with trained technicians and zero disruption</p>
                </div>
                <div className="usp-card">
                  <div className="usp-icon">
                    <StarIcon />
                  </div>
                  <h4>Long-term O&M + Cleaning</h4>
                  <p>Scheduled maintenance and cleaning to ensure peak performance always</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Step 1: Before Installation */}
          <div className="journey-step">
            <div className="step-badge blue">01</div>
            <div className="step-content">
              <div className="step-left">
                <h3>Before Installation</h3>
                <p className="step-tagline">Clarity & Trust</p>
                <p className="step-description">
                  Get expert guidance from our solar advisors. We analyze your needs, 
                  survey your roof, and design the perfect system for your home.
                </p>
              </div>
              <div className="step-right">
                <div className="step-features">
                  <div className="step-feature">
                    <span className="feature-icon blue"><HeadphonesIcon /></span>
                    <span>Single Point of Contact</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon blue"><CheckIcon /></span>
                    <span>Savings & Subsidy Guidance</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon blue"><RoofIcon /></span>
                    <span>Roof Survey & 3D Modelling</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon blue"><CheckIcon /></span>
                    <span>Custom System Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Installation */}
          <div className="journey-step">
            <div className="step-badge green">02</div>
            <div className="step-content">
              <div className="step-left">
                <h3>Installation</h3>
                <p className="step-tagline">Hassle-free</p>
                <p className="step-description">
                  We handle all approvals, paperwork, and installation. Trained technicians 
                  complete the setup in a single day with zero hassle for you.
                </p>
              </div>
              <div className="step-right">
                <div className="step-features">
                  <div className="step-feature">
                    <span className="feature-icon green"><ClipboardIcon /></span>
                    <span>Net-metering & Approvals</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon green"><CheckIcon /></span>
                    <span>Subsidy & Financing Help</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon green"><InstallIcon /></span>
                    <span>Single Day Installation</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon green"><CheckIcon /></span>
                    <span>System Commissioning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: After Installation */}
          <div className="journey-step">
            <div className="step-badge orange">03</div>
            <div className="step-content">
              <div className="step-left">
                <h3>After Installation</h3>
                <p className="step-tagline">Peace of Mind</p>
                <p className="step-description">
                  Enjoy worry-free solar with remote monitoring, scheduled cleaning, 
                  and guaranteed performance. We're with you for the long run.
                </p>
              </div>
              <div className="step-right">
                <div className="step-features">
                  <div className="step-feature">
                    <span className="feature-icon orange"><ChartIcon /></span>
                    <span>Remote Performance Monitoring</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon orange"><CheckIcon /></span>
                    <span>Scheduled Panel Cleaning</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon orange"><MaintenanceIcon /></span>
                    <span>Claims & Support</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon orange"><CheckIcon /></span>
                    <span>Output Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked <span>Questions</span></h2>
            <p>Everything you need to know about going solar with Griha Solar</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{faq.question}</span>
                  <div className="faq-icon">
                    <PlusIcon />
                  </div>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Solar Journey?</h2>
          <p>Take the first step towards energy independence. Get a free consultation and personalized quote today!</p>
          <div className="cta-buttons">
            <a href="tel:9981394554" className="btn btn-primary">
              <PhoneIcon />
              Call Now: 9981394554
            </a>
            <button onClick={openContactPopup} className="btn btn-outline">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/logo.jpeg" alt="Griha Solar" />
              <p>
                Griha Solar is a consumer energy brand that owns the homeowner's entire rooftop solar journey. 
                From decision to lifetime performance – we make solar simple, reliable, and rewarding.
              </p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#journey">Our Journey</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><button onClick={openContactPopup} className="footer-link-btn">Contact Us</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Our Process</h4>
              <ul className="footer-links">
                <li><a href="#journey">Solar Consultation</a></li>
                <li><a href="#journey">Roof Survey</a></li>
                <li><a href="#journey">Installation</a></li>
                <li><a href="#journey">Maintenance</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <UserIcon />
                <span>Dipak Agrawal</span>
              </div>
              <div className="footer-contact-item">
                <PhoneIcon />
                <a href="tel:9981394554">9981394554</a>
              </div>
              <div className="footer-contact-item">
                <MailIcon />
                <a href="mailto:contact@grihasolar.com">contact@grihasolar.com</a>
              </div>
              <div className="footer-contact-item">
                <LocationIcon />
                <span>Serving Pan India</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Griha Solar. All rights reserved.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Popup Modal */}
      {showContactPopup && (
        <div className="popup-overlay" onClick={closeContactPopup}>
          <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closeContactPopup}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="popup-header">
              <h3>Get in Touch</h3>
              <p>Choose how you'd like to connect with us</p>
            </div>
            <div className="popup-options">
              <a href="tel:9981394554" className="popup-option popup-option-phone">
                <div className="popup-option-icon">
                  <PhoneIcon />
                </div>
                <div className="popup-option-content">
                  <h4>Call Us</h4>
                  <span>9981394554</span>
                  <p>Talk to Dipak Agrawal directly</p>
                </div>
              </a>
              <a href="mailto:contact@grihasolar.com" className="popup-option popup-option-email">
                <div className="popup-option-icon">
                  <MailIcon />
                </div>
                <div className="popup-option-content">
                  <h4>Email Us</h4>
                  <span>contact@grihasolar.com</span>
                  <p>We'll respond within 24 hours</p>
                </div>
              </a>
              <a href="https://wa.me/919981394554" target="_blank" rel="noopener noreferrer" className="popup-option popup-option-whatsapp">
                <div className="popup-option-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="popup-option-content">
                  <h4>WhatsApp</h4>
                  <span>Chat with us</span>
                  <p>Quick responses on WhatsApp</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
