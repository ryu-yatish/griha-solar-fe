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

const ConsultationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="10" r="2"/>
    <path d="M12 14v1"/>
  </svg>
)

const RoofIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
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

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your interest! Dipak Agrawal will contact you shortly at the provided number.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const faqs = [
    {
      question: "How much can I save with solar panels?",
      answer: "Most homeowners save 50-80% on their electricity bills after installing solar panels. The exact savings depend on your roof size, location, and current energy usage. Our team will provide a detailed savings estimate during the free consultation."
    },
    {
      question: "How long does installation take?",
      answer: "A typical residential solar installation takes 1-3 days once all permits are approved. The entire process from consultation to turning on your system usually takes 4-6 weeks, depending on local permit processing times."
    },
    {
      question: "What maintenance is required?",
      answer: "Solar panels require minimal maintenance. With our 5-year monthly cleaning service included, we ensure your panels operate at peak efficiency. We also monitor performance and handle any issues that arise."
    },
    {
      question: "Are there any government subsidies available?",
      answer: "Yes! India offers various subsidies for residential solar installations under the PM Surya Ghar scheme. You can get up to 40% subsidy for systems up to 3kW and 20% for systems between 3-10kW. We handle all the paperwork for you."
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide a comprehensive warranty package including 25 years on solar panels, 10 years on inverters, and 5 years on installation workmanship. Our performance guarantee ensures your system produces as promised."
    },
    {
      question: "Can solar panels work during power outages?",
      answer: "With a hybrid solar system and battery backup, your home can have power even during grid outages. We offer various battery storage solutions to meet your backup power needs."
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
            <a href="#contact" className="btn btn-primary">Get Free Quote</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <SunIcon />
              <span>Trusted Solar Partner in India</span>
            </div>
            <h1>
              Power Your Home with <span>Clean Solar Energy</span>
            </h1>
            <p className="hero-description">
              Switch to solar and save up to 80% on your electricity bills. Griha Solar provides 
              end-to-end solar solutions with premium quality panels, expert installation, and 
              5 years of free maintenance.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500<span>+</span></div>
                <div className="stat-label">Happy Homes</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5<span>MW</span></div>
                <div className="stat-label">Power Installed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25<span>Yr</span></div>
                <div className="stat-label">Panel Warranty</div>
              </div>
            </div>
          </div>
          <div className="hero-form" id="contact">
            <h3>Get Your Free Solar Quote</h3>
            <p>Fill in your details and we'll call you back within 24 hours</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <div className="container">
          <div className="section-header">
            <h2>The Griha Solar <span>Experience</span></h2>
            <p>From consultation to maintenance, we ensure a seamless solar journey for you</p>
          </div>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-step">1</div>
              <div className="experience-icon">
                <ConsultationIcon />
              </div>
              <h3>Solar Guide Consultation</h3>
              <p>Our experts analyze your energy needs and design a custom solar solution for your home.</p>
              <div className="experience-features">
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Free energy audit</span>
                </div>
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Custom system design</span>
                </div>
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Subsidy guidance</span>
                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-step">2</div>
              <div className="experience-icon">
                <RoofIcon />
              </div>
              <h3>Roof Survey</h3>
              <p>Our technical team visits your site to assess roof structure and optimal panel placement.</p>
              <div className="experience-features">
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Structural assessment</span>
                </div>
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Shadow analysis</span>
                </div>
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Optimal positioning</span>
                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-step">3</div>
              <div className="experience-icon">
                <InstallIcon />
              </div>
              <h3>Professional Installation</h3>
              <p>Certified technicians install your system with precision and care, ensuring maximum efficiency.</p>
              <div className="experience-features">
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Certified technicians</span>
                </div>
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Premium components</span>
                </div>
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Net metering setup</span>
                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-step">4</div>
              <div className="experience-icon">
                <MaintenanceIcon />
              </div>
              <h3>After Installation Care</h3>
              <p>Enjoy worry-free solar power with our comprehensive maintenance and performance guarantee.</p>
              <div className="experience-features">
                <div className="experience-feature">
                  <CheckIcon />
                  <span>5-year monthly cleaning</span>
                </div>
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Performance monitoring</span>
                </div>
                <div className="experience-feature">
                  <CheckIcon />
                  <span>Output guaranteed</span>
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
          <h2>Ready to Go Solar?</h2>
          <p>Join hundreds of happy homeowners who have made the switch. Get a free consultation and quote today!</p>
          <div className="cta-buttons">
            <a href="tel:9981394554" className="btn btn-primary">
              <PhoneIcon />
              Call Now: 9981394554
            </a>
            <a href="#contact" className="btn btn-outline">
              Get Free Quote
            </a>
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
                Griha Solar is your trusted partner for residential and commercial solar solutions. 
                We are committed to making clean energy accessible and affordable for every Indian home.
              </p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#experience">Our Process</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#experience">Solar Consultation</a></li>
                <li><a href="#experience">Roof Survey</a></li>
                <li><a href="#experience">Installation</a></li>
                <li><a href="#experience">Maintenance</a></li>
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
    </>
  )
}

export default App
