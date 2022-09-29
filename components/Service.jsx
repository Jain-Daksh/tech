import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/service1.png'
import Image2 from '../images/service2.png'
import Image3 from '../images/serivce3.svg'
import Image4 from '../images/service4.png'
function Service() {
  return (
    <div>
       <section className="section1 service">
    <div className="container">
      <div className="row">
        <h4 className="heading text-center my-4">All Solution In One Platfrom</h4>
      </div>

      <div className="container">
        <div className="row">
          <div className="card-group">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="card card-service mx-2 ">
                <div className="center">
                    <Image src={Image1} className='d-flex image-service' />
                </div>
                <div className="card-body">
                  <h5 className="sub-heading">Leverage Technology</h5>
                  <p className="paragraph">we denounce with righteous by the charms of pleasure of the moment, so blinded by
                    desire </p>
                  <a className="d-flex justify-content-center service-footer" href="">Learn More --&gt; </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="card card-service mx-2 ">
                <Image src={Image2} className='image-service' />
                <div className="card-body">
                  <h5 className="sub-heading">Boost Performance
                  </h5>
                  <p className="paragraph">we denounce with righteous by the charms of pleasure of the moment, so blinded by
                    desire
                  </p>
                  <a className="d-flex justify-content-center service-footer" href="">Learn More --&gt; </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="card card-service mx-2">
              <Image src={Image3} className='image-service' />
                <div className="card-body">
                  <h5 className="sub-heading">100% Vetted and Safe
                  </h5>
                  <p className="paragraph">we denounce with righteous by the charms of pleasure of the moment, so blinded by
                    desire</p>
                  <a className="d-flex justify-content-center service-footer" href="">Learn More --&gt; </a>
                </div>

              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="card card-service  mx-2">
              <Image src={Image4} className='image-service' />
                <div className="card-body">
                  <h5 className="sub-heading">100% Business Success</h5>
                  <p className="paragraph">we denounce with righteous by the charms of pleasure of the moment, so blinded by
                    desire</p>
                  <a className="d-flex justify-content-center service-footer" href="">Learn More --&gt; </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Service