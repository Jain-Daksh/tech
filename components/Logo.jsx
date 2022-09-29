import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/amazon-logo-s3f.png'
import Image2 from '../images/airbnb-2-logo-png-transparent.png'
/*
import Image3 from '../images'
import Image4 from '../images'
import Image5 from '../images'
import Image6 from '../images'
import Image7 from '../images'
*/
import Image8 from '../images/line1.png'

const images = [
  {
    "id": "1",
    "className": "col",
    "image": Image1,
    "images": Image2,

    
  },
  {
    "id": "2",
    "image": Image1,
    "images": Image2,
    "className": "col logodown",
   
  },
  {
    "id": "3",
    "className": "col",
    "image": Image1,
    "images": Image2,

    
  },
  {
    "id": "4",
    "image": Image1,
    "images": Image2,
    "className": "col logodown",
  },
]

function Logo() {
  return (
    <>
      <section className="section1 logo">
        <div className="container ">
          <div className="row">
            <div className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-xs-12 mt-5">
              <h3 className="heading mt-5">
                We Make The Most Of Our Investment And Building Relationship
              </h3>
              <p className="paragraph">
                Righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire, that they cannot foresee the pain and trouble.
              </p>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-6 col-sm-12 col-xs-12 mt-5 mb-5">
              <div className="container">
                <div className="row mt-5">
                  {
                    images.map((value) => (
                      <div className={value.className}>
                        <div className="">
                          <Image key={value.id} src={value.image} height={50} width={50} className="customer-logo" />
                        </div>
                        <div className="">
                          <Image key={value.id} src={value.images} height={50} width={50} className="customer-logo" />
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

            </div>

          </div>
          <Image src={Image8} className="svg line1 mb-5" />
        </div>
      </section>
    </>
  )
}

export default Logo
