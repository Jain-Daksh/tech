import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/rhombus.png'
import Image2 from '../images/arrow-down.png'
import Image3 from '../images/plus.png'
import Image4 from '../images/Team-amico (1).svg'
import Image5 from '../images/up-arrow.png'
import Image6 from '../images/spiral.png'
import Image7 from '../images/triangle.png'
import { Play} from 'react-bootstrap-icons'

function Homepage() {
  return (
    <>
      <div className="homepage-section ">
        <div className="container mx-auto">
          <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-5">

            <div className='mt-5'>
              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-outline-success mx-1 button ">Intuitive IT Solution</button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-10">
                  <div className=''>
                    <Image src={Image1} className="d-none" />
                    <Image src={Image1} className="d-none" />
                    <Image src={Image1} className="rhombus-3 d-none" />
                    <Image src={Image1} className="rhombus-4 d-none" />
                  </div>

                <h2 className="home-heading">Best Solution And
                  Grow <spam className="heading-home-spam">Your Business</spam> Easier Than Ever</h2>
                <p className="paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque
                  laudantium, totam rem aperiam, eaque.</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="mt-2">
                  <button className="btn btn-outline-success  button d-flex justify-content-start" type="submit">Schedule A
                    Call</button>
                </div>
                <div className="home-logo mx-3">
                  <i className="fa fa-play  d-flex justify-content-center"><Play height={30} width={30}/></i>
                </div>
                <div className="home-text paragraph">
                  <p>Watch now</p>
                </div>
              </div>
            </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 dot-design mt-5 mb-3 .d-none .d-sm-block">
              <Image src={Image2} className='svg arrow-down' />
              <Image src={Image3} className='svg-home svg' />
              <Image src={Image4} className='imagehomepage img-fluid' />
          
            </div>
            <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 .d-sm-block .d-md-block mb-3">
            <p className="svg">Scroll Down </p>
            <Image src={Image5} className='svg' />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <Image src={Image3} className='svg plus' />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <Image src={Image6} className='spiral svg' />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <Image src={Image7} className='triangle svg' />
          </div>
        </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
