import sec1Img from '../assets/xmm-img1.png';

const Section1 = () => {
  return (
    
    
    <div className="py-5 px-5 d-flex justify-content-center"  style={{background: 'linear-gradient(120deg, #030417 40%, #2d185b 100%)', height: '900px'}}>


        <div className="row  align-items-center mt-5 pt-4 px-5" style={{width: '1400px', marginTop: '200px'}}>


            <div className="col-lg-6">
              <img src={sec1Img} alt="Hero Illustration" className="img-fluid" style={{ width: '500px', height: '600px' }}/>
            </div>
         

            <div className="col-lg-6 text-left gap-2">
                <h1 className='mt-4 text-white' style={{fontSize: '60px'}}>Best Ever Token Designed For Remarkable Success</h1>
              <p className="lead pt-3 text-secondary">The main advantage of supporting SXMM is the project is focused on creating Volume and Market Making through. XMM empowers businesses to creative dynamic content target specific</p>
              <div className="mt-4 d-flex justify-content-between align-items-center" style={{width: '350px'}}>
                <div className='text-white'><i className="bi bi-check2-square"></i> Market</div>
                <div className='text-white'><i className="bi bi-check2-square"></i> Volume</div>
                <div className='text-white'><i className="bi bi-check2-square"></i>Trend</div>
              </div>
              <a href="#" className="btn btn-warning btn-lg mt-5 px-4 py-3 rounded-pill">Read Whitepaper</a>
            </div>


        </div>
      
    </div>
  )
}

export default Section1
