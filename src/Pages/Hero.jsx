
import heroImage from '../assets/xmm-hero.png';
import logoImg from '../assets/xmm-logo.png';

const Hero = () => {
  return (
    <div>
      <section className="hero-section text-light" style={{ backgroundColor: '#7148fe', height: '1000px' }}>
        <div className="container py-4">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#"><img src={logoImg} alt="XMM Logo" style={{width: '80px'}}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mr-5">
                  <a className="nav-link fs-5" href="#about">About Us</a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link fs-5" href="#tokenomics">Tokenomics</a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link fs-5" href="#roadmap">Roadmap</a>
                </li>
                <li className="nav-item mr-5">
                  <a className="nav-link fs-5" href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-warning rounded-pill ml-auto px-5 py-3 text-white" href="#">Buy Token</a>
          </nav>
          

          {/* Hero Content */}
          <div className="row align-items-center mt-4 pt-4" style={{width: '1400px'}}>
            <h1 className=" font-weight-bold mt-2" style={{fontSize: '125px'}}>MARKETING MAKING WITH XMM.</h1>
            <div className="col-lg-7 text-left gap-2">
              <p className="lead pt-3">XMM empowers businesses to create dynamic content, target specific demographics, and optimize their digital presence.</p>
              <a href="#" className="btn btn-warning btn-lg mt-4 rounded-pill">Join Telegram</a>
              <div className="mt-4">
                <h4 className='mt-4'>OUR HAPPY CUSTOMERS</h4>
                <p className="lead mt-4">Our happy customers are at the heart of everything we do</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="col-lg-5">
              <img src={heroImage} alt="Hero Illustration" className="img-fluid" style={{ width: '550px', height: '500px', marginTop: '-120px' }}/>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="scroll-down-indicator d-flex justify-content-center align-items-center" style={{height: '160px'}}>
        <div className='d-flex justify-content-center align-items-center' style={{backgroundColor: '#03031d', width: '160px', height:'100%' , borderRadius: '50%', marginBottom: '-100px'}}>
            <a href="#next-section" className='p-4 text-light' style={{backgroundColor: '#7148fe', width: '110px', height:'117px' , borderRadius: '50%'}}>
            <i className="bi bi-arrow-down" style={{fontSize: '57px'}}></i>
            </a>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
