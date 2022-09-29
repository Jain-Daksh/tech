import React from 'react'
import Image from 'next/future/image'

import Image1 from '../images/Pair programming-pana.svg'

import Image2 from '../images/customer-review.png'
import Image3 from '../images/service1.png'
import Image4 from '../images/accounting.png'
import Image5 from '../images/desktop.png'
import Image6 from '../images/spiral.png'
import Image7 from '../images/triangle.png'
import Image8 from '../images/plus.png'
import Image9 from '../images/rightarrow.png'

const product = [
  {
    "id": "1",
    "image": Image2,
    "heading": "Leverage Technology",
    "paragraph": "Who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee."
  },
  {
    "id": "2",
    "image": Image3,
    "heading": "Software Developer ",
    "paragraph": "Who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee."
  },
  {
    "id": "3",
    "image": Image4,
    "heading": "Business Analysis",
    "paragraph": "Who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee."
  },
  {
    "id": "4",
    "image": Image5,
    "heading": "Analytic Solution",
    "paragraph": "Who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee."
  },
]

const offer = [
  {
    "id": "1",
    "heading": "430+",
    "paragraph": "Completed Project"
  },
  {
    "id": "2",
    "heading": "4.8",
    "paragraph": "Google rating"
  }, {
    "id": "3",
    "heading": "200+",
    "paragraph": "Happy Client"
  }
]
function Products() {
  return (
    <>
      <section className='section1 products'>
        <div className='container'>
          <div className="row mt-5">
            <div className="">
              <Image src={Image6} className="product-svg arroba-product" />
              <Image src={Image7} className="product-svg triangle-product" />
              <Image src={Image8} className="product-svg plus-product" />
            </div>
            <div className="col text-center mt-5">
              <h1 className="products-heading heading text-center">We provide best service </h1>
              <h1 className="products-heading heading text-center">for your Business</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div className="row">
                <Image src={Image1} className="img-fluid" />
              </div>
              <div className="row  text-center my-5">
                {
                  offer.map((value) => (
                    <div className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-sm-4  my-3">
                      <h1 className="products-heading"><strong>{value.heading}</strong></h1>
                      <small className="products-heading " >{value.paragraph}</small>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
              {
                product.map((values) => (
                  <div className="card mb-3 product-card mx-4">
                    <div className="card-body product-card-body">
                      <div className="row pt-3">
                        <div
                          className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-xs-3 product-logo-image d-flex justify-content-center">
                          <Image key={values.id} src={values.image} className="product-logo" />
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6 col-sm-7 col-xs-7">
                          <h5 className="sub-heading sub-heading-products  ">{values.heading}</h5>
                          <p className="paragraph sub-heading-products ">{values.paragraph}</p>

                        </div>
                        <div
                          className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 mt-3 product-logo-image d-flex justify-content-center">
                          <Image src={Image9} className="arrow-image" />

                        </div>
                      </div>

                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <Image src={Image8} className="product-svg mb-4" />
          <Image src={Image7} className="product-svg triangle-products mb-3" />

        </div>
      </section>
    </>
  )
}

export default Products
