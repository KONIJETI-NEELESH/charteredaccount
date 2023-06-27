import AutoplayCarouselWithData from './AutoplayCarouselWithData.js';
import './style.css';
function App() {
  const carouselData = [
    {
      image: 'https://www.grandmarkca.com/wp-content/uploads/2018/12/GM_Services_Banner_Insolvency.jpg',
      title: 'INSOLVENCY \n PROFESSIONALS'
    },
    {
      image: 'https://www.grandmarkca.com/wp-content/uploads/2018/12/GM_Inside_Banner_Tax-Consulting.jpg',
      title: 'TAX CONSULTING'
    },
    {
      image: 'https://www.grandmarkca.com/wp-content/uploads/2018/12/GM_Services_Banner_AUDITASSURANCE.jpg',
      title: 'AUDIT & ASSURANCE',
    },
  ];
  return (
    <div className="App">
      <input type='checkbox' id='toggle' />
      <nav className='nav'>
        <a href='#'><img src="https://grandmarkca.com/wp-content/uploads/2018/11/GM_Logo_updated-new-1.png" className="navbar-brand" href="" height="50vi" width="240vi" /></a>
        <label className='navbar-toggler' for="toggle">
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </label>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT US</a>
          </li>
        </ul>
      </nav>
      <AutoplayCarouselWithData carouselData={carouselData} autoplayInterval={3000} transitionDuration={600} />
      <div className='outer-div'>
        <p className='outerDiv-p1'>NOW WE HAVE PRESENCE IN 28 CITIES ACROSS INDIA</p>
        <p className='dot-p'>&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&nbsp;<i class="fa-regular fa-circle-dot"></i>&nbsp;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;</p>
        <div className='inner-div'>
          <div className='left-innerDiv'>
            <p className='innerDiv-p1'>G R A N D M A R K & ASSOCIATES has its presence since 1991 and many of our clients are associated with us for over decades. The name of Firm has changed recently and now we are counted as one of India’s Leading CA Firms. As a Firm we are constantly evolving and today we are a proud team of 31 Partners at 28 locations. Going ahead, we aspire to be India’s biggest Accounting Firm having presence at all the important Business Centres of India.</p>
            <p className='innerDiv-p2'>The Firm is looking after Audits, Taxation, Accounting, Valuation, Merger & Acquisition, Corporate Compliance, Financial and business affairs of Corporate, Firms, individuals, families and not-for-profit entities for nearly THREE decades now.</p>
            <p className='outerDiv-p2'><span className='span-p2'>Learn More:</span> About G R A N D M A R K | Our Partners | Our Offices</p>
          </div>
          <div className='right-innerDiv'>
            <p className='right-p'><span className='span-p'>W</span>ork Ethics</p>
            <p className='right-p'><span className='span-p'>E</span>mployees – Our most valuable asset</p>
            <p className='right-p'><span className='span-p'>S</span>ervice to our clients</p>
            <p className='right-p'><span className='span-p'>S</span>ervice to the Community</p>
            <p className='right-p'><span className='span-p'>E</span>xpert business partner</p>
            <p className='right-p'><span className='span-p'>L</span>eadership</p>
          </div>
        </div>
      </div>
      <div className='service-div'>
        <div className='service'><p className='serviceDiv-p'>OUR SERVICES</p></div>
        <div className='serviceDivs'>
          <div className='service-divs'>
            <div className='serviceDiv'>
              <img className='service-img' src='https://www.grandmarkca.com/wp-content/uploads/2021/03/pngegg-10.png' />
              <p className='serviceDiv-p2'>Tax Consulting</p>
            </div>
            <div className='serviceDiv'>
              <img className='service-img' src='https://www.grandmarkca.com/wp-content/uploads/2021/03/pngegg-13.png' />
              <p className='serviceDiv-p2'>Forensic Audit & <br />Fraud Detection</p>
            </div>
            <div className='serviceDiv'>
              <img className='service-img' src='https://www.grandmarkca.com/wp-content/uploads/2021/03/pngegg-16.png' />
              <p className='serviceDiv-p2'>Global Services</p>
            </div>
          </div>
          <div className='service-divs'>
            <div className='serviceDiv'>
              <img className='service-img' src='https://www.grandmarkca.com/wp-content/uploads/2021/03/pngegg-11.png' />
              <p className='serviceDiv-p2'>Audit & Assurance</p>
            </div>
            <div className='serviceDiv'>
              <img className='service-img' src='https://www.grandmarkca.com/wp-content/uploads/2021/03/pngegg-14.png' />
              <p className='serviceDiv-p2'>Corporate Law &<br />Compliances</p>
            </div>
            <div className='serviceDiv'>
              <img className='service-img' src='https://www.grandmarkca.com/wp-content/uploads/2021/03/pngegg-17.png' />
              <p className='serviceDiv-p2'>Legal Desk</p>
            </div>
          </div>
          <div className='service-divs'>
            <div className='serviceDiv'>
              <img className='service-img' src='https://www.grandmarkca.com/wp-content/uploads/2021/03/pngegg-7.png' />
              <p className='serviceDiv-p2'>Business Consulting & <br />Outsourcing Services</p>
            </div>
            <div className='serviceDiv'>
              <img className='service-img' src='https://www.grandmarkca.com/wp-content/uploads/2021/03/pngegg-15.png' />
              <p className='serviceDiv-p2'>Insolvency Professionals</p>
            </div>
            <div className='serviceDiv'>
              <img className='service-img' src='https://www.grandmarkca.com/wp-content/uploads/2021/03/pngegg-18.png' />
              <p className='serviceDiv-p2'>NRI Desk</p>
            </div>
          </div>
        </div>
      </div>
      <div className='knowledge-div'>
        <p className='knowledge-p'>KNOWLEDGE POOL</p>
        <p className='dot-p'>&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&nbsp;<i class="fa-regular fa-circle-dot"></i>&nbsp;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;</p>
        <p className='knowledge-p1'>Our Experts Speak</p>
        <div className='knowledgeDiv'>
          <div className='knowledge-divs'>
            <p className='knowledge-p2'>TIPS FOR SMES & START-UPS TO SECURE THEIR FINANCIAL DATA FROM CYBERSECURITY THREATS</p>
            <p className='knowledge-italic'><i class="fa-regular fa-calendar-days"></i>&nbsp; August 27, 2021</p>
            <i class="fa-solid fa-chevron-right"></i><span className='knowledge-p3'> &nbsp; Read More</span>
          </div>
          <div className='knowledge-divs'>
            <p className='knowledge-p2'>RBI – MASTER DIRECTION ON DIGITAL PAYMENT SECURITY CONTROLS</p>
            <p className='knowledge-italic'><i class="fa-regular fa-calendar-days"></i>&nbsp;  February 20, 2021</p>
            <i class="fa-solid fa-chevron-right"></i><span className='knowledge-p3'> &nbsp; Read More</span>
          </div>
          <div className='knowledge-divs'>
            <p className='knowledge-p2'>BAD BANK : IS THIS A GOOD IDEA?</p>
            <p className='knowledge-italic'><i class="fa-regular fa-calendar-days"></i>&nbsp;  February 13, 2021</p>
            <i class="fa-solid fa-chevron-right"></i><span className='knowledge-p3'> &nbsp; Read More</span>
          </div>
        </div>
      </div>
      <footer>
        <div className='footer-div'>
          <div className='footerDiv'>
            <img className='footer-img' src='https://www.grandmarkca.com/wp-content/uploads/2018/11/GM_Logo_updated1-1-1.jpg' />
            <p className='footer-p'>More than 700 man-years of experience.</p>
            <p className='footer-p'>31 Partners, 28 Offices across India.</p>
            <p className='footer-p'>Access to 100 plus professional experts.</p>
            <p className='footer-p'>Indian and overseas.</p>
            <span className='footer-span'>Read more…</span>
          </div>
          <div className='footerDiv'>
            <p className='footer-head'>KNOW MORE ABOUT US</p>
            <p className='footerP'><i class="fa-solid fa-chevron-right"></i>&nbsp; &nbsp; Home</p>
            <p className='footerP'><i class="fa-solid fa-chevron-right"></i>&nbsp; &nbsp; Services</p>
            <p className='footerP'><i class="fa-solid fa-chevron-right"></i>&nbsp; &nbsp; Knowledge Pool</p>
            <p className='footerP'><i class="fa-solid fa-chevron-right"></i>&nbsp; &nbsp; About Us</p>
            <p className='footerP'><i class="fa-solid fa-chevron-right"></i>&nbsp; &nbsp; Blog</p>
            <p className='footerP'><i class="fa-solid fa-chevron-right"></i>&nbsp; &nbsp; Contact Us</p>
          </div>
          <div className='footerDiv'>
            <p className='footer-head'>CONTACT US</p>
            <p className='footer-p'><i class="fa-regular fa-mobile"></i>&nbsp; &nbsp; +91-11-26692449 / 42705151</p>
            <p className='footer-span'><i class="fa-solid fa-envelope"></i>&nbsp; &nbsp; info@grandmarkca.com</p>
            <p className='footer-p'><i class="fa-solid fa-location-dot"></i>&nbsp; &nbsp; We are Present in 28 cities</p>
            <span className='footer-span'>Our Offices</span>&nbsp; | &nbsp;<span className='footer-span'>Our Partners</span>
          </div>
        </div>
      </footer>
      <div className='sub-footer'>
        <div className='div1'>
          <span className='footer-span'>Grandmark & Associates</span><span className='footer-p'>&nbsp;<i class="fa-regular fa-copyright"></i> 2019</span>
        </div>
        <div className='div2'>
          <span className='sub-span'><i class="fa-brands fa-linkedin-in"></i></span>
          <span className='sub-span'><i class="fa-brands fa-facebook-f"></i></span>
          <span className='sub-soan'><i class="fa-brands fa-twitter"></i></span>
          <span className='sub-span'><i class="fa-brands fa-youtube"></i></span>
        </div>
      </div>
    </div>
  );
}

export default App;
