import { useState } from 'react'
import './App.css'

// Icons as SVG components
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

// 1. Single Point of Contact
const HeadphonesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

// 2. Savings & Subsidy Guidance (Matching the checkmark in your screenshot)
const SavingsIcon = () => (
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
  </svg>

);

// 3. Roof Survey & 3D Modelling
const RoofIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

// 4. Custom System Design (Matching the checkmark in your screenshot)
const DesignIcon = () => (
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
  </svg>
);

const QualityIcon = () => (
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"/>
  </svg>
)

const InstallIcon = () => (
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8H9m4-8V6c0-.26522-.1054-.51957-.2929-.70711C12.5196 5.10536 12.2652 5 12 5H4c-.26522 0-.51957.10536-.70711.29289C3.10536 5.48043 3 5.73478 3 6v9h2m14 0h2v-4m0 0h-5M8 8.66669V10l1.5 1.5m10 5c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5S15.6193 14 17 14s2.5 1.1193 2.5 2.5Zm-10 0C9.5 17.8807 8.38071 19 7 19s-2.5-1.1193-2.5-2.5S5.61929 14 7 14s2.5 1.1193 2.5 2.5Z"/>
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

const CleanIcon = () => (
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3M3.22302 14C4.13247 18.008 7.71683 21 12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-3.72916 0-6.92858 2.26806-8.29409 5.5M7 9H3V5"/>
  </svg>
)

const PerformanceIcon = () => (
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 1 0-18c1.052 0 2.062.18 3 .512M7 9.577l3.923 3.923 8.5-8.5M17 14v6m-3-3h6"/>
  </svg>
)

const ToolsIcon = () => (
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"/>
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
  const [showContactPopup, setShowContactPopup] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <div className="navbar-brand">
            <img
              src="/logo-icon.png"   // house + panel icon
              alt="Griha Solar Logo"
              className="navbar-logo-icon"
              width={80}
              height={80}
            />
            <img
              src="/griha-solar-text.png"   // GRIHA SOLAR text image
              alt="Griha Solar"
              className="navbar-logo-text"
              width={300}
              height={100}
            />
          </div>
          <div className="navbar-right">
            <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#journey">Our Approach</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li>
                <button onClick={openContactPopup} className="btn-consultation btn btn-secondary btn-large">
                  <span className="btn-text">
                    Book FREE consultation
                  </span>
                </button>
              </li>
            </ul>

            <button
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
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
            <button onClick={openContactPopup} className="btn-consultation btn btn-secondary btn-large">
              <span className="btn-icon">
                <img src="/calendar-icon.png" alt="Calendar" />
              </span>
              <span className="btn-text">
                Book FREE consultation
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Benefits of Rooftop Solar Section */}
      <section className="usp" id="benefits">
        <div className="container">
          <div className="section-header">
            <h2>Benefits of <span>Rooftop Solar</span></h2>
            <p>Adopting solar is not only the greener choice, it is also a no-brainer economically.</p>
          </div>
          <div className="usp-grid">
            <div className="usp-card">
              <img
                src="/annual-savings-icon.png"
                alt="Annual Savings"
                className="usp-icon-image"
                width={110}
                height={110}
              />
              <h4>₹30,000 Annual Savings</h4>
              <p className="usp-description">On average, households can save ₹30,000 annually on electricity bills with a rooftop solar system.</p>
            </div>
            <div className="usp-card">
              <img
                src="/breakeven-period-icon.png"
                alt="Breakeven Period"
                className="usp-icon-image"
                width={110}
                height={110}
              />
              <h4>Breakeven in 5 Years</h4>
              <p className="usp-description">With <b>PM Surya Ghar subsidy</b>, most households will break even in their investment in 5 years</p>
            </div>
            <div className="usp-card">
              <img
                src="/free-electricity-icon.png"
                alt="Free Electricity"
                className="usp-icon-image"
                width={110}
                height={110}
              />
              <h4>25 Years Free Electricity</h4>
              <p className="usp-description">After the breakeven period, households get free electricity for 20+ years.</p>
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
                  <img
                    src="/high-quality-icon.png"
                    alt="High Quality"
                    className="usp-icon-image"
                    width={110}
                    height={110}
                  />
                  <h4>High Quality Materials</h4>
                  <p className="usp-description">Premium panels and components for maximum efficiency and longevity</p>
                </div>
                <div className="usp-card">
                  <img
                    src="/hassle-free-icon.png"
                    alt="Hassle-Free Installation"
                    className="usp-icon-image"
                    width={110}
                    height={110}
                  />
                  <h4>Hassle-Free Installation</h4>
                  <p className="usp-description">Same day installation with trained technicians and zero disruption</p>
                </div>
                <div className="usp-card">
                  <img
                    src="/long-term-performance-icon.png"
                    alt="Long-term Performance"
                    className="usp-icon-image"
                    width={110}
                    height={110}
                  />
                  <h4>Long-term Performance</h4>
                  <p className="usp-description">Scheduled cleaning & maintenance to ensure long-term performance</p>
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
                    <span className="feature-icon blue"><SavingsIcon /></span>
                    <span>Savings & Subsidy Guidance</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon blue"><RoofIcon /></span>
                    <span>Roof Survey & 3D Modelling</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon blue"><DesignIcon /></span>
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
                    <span className="feature-icon green"><CheckIcon /></span>
                    <span>Approvals & Net-metering</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon green"><QualityIcon /></span>
                    <span>High Quality Materials</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon green"><ToolsIcon /></span>
                    <span>Trained Technicians</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon green"><InstallIcon /></span>
                    <span>One Day Installation</span>
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
                    <span className="feature-icon orange"><CleanIcon /></span>
                    <span>Scheduled Panel Cleaning</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon orange"><MaintenanceIcon /></span>
                    <span>Claims & Support</span>
                  </div>
                  <div className="step-feature">
                    <span className="feature-icon orange"><PerformanceIcon /></span>
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
              <img src="griha-solar-text.png" alt="Griha Solar" />
              <p>
                We are a consumer energy brand that owns the homeowner's entire rooftop solar journey. 
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
                <a href="https://www.linkedin.com/in/dipakda/">Dipak Agrawal</a>
              </div>
              <div className="footer-contact-item">
                <PhoneIcon />
                <a href="tel:9981394554">9981394554</a>
              </div>
              <div className="footer-contact-item">
                <MailIcon />
                <a href="mailto:dipak19da@gmail.com">dipak19da@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <LocationIcon />
                <span>Serving Chhattisgarh & Odisha</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Griha Solar Private Limited. All rights reserved.</p>
            {/* <div className="footer-social">
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
            </div> */}
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
              <a href="mailto:dipak19da@gmail.com" className="popup-option popup-option-email">
                <div className="popup-option-icon">
                  <MailIcon />
                </div>
                <div className="popup-option-content">
                  <h4>Email Us</h4>
                  <span>dipak19da@gmail.com</span>
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
