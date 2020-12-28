import React, { useEffect } from 'react'
// Redux
import { Row, Col } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
// My Components

import Loader from '../../components/utils/Loader'
import { getProductDetails } from '../../store/actions/productActions'
import Footer from '../../components/layout/Footer'
import PayPalButton from '../../components/PayPalButton'
import CenterContainer from '../../components/utils/CenterContainer'

// Assets
import classes from './ProductScreen.module.css'
import slide10 from '../../assets/FooterImages/slide10.png'
import slide1 from '../../assets/FooterImages/slide1.jpg'
import slide2 from '../../assets/FooterImages/slide2.jpg'
import slide3 from '../../assets/FooterImages/slide3.jpg'
import slide4 from '../../assets/FooterImages/slide4.jpg'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productId = match.params.id

  const productDetails = useSelector((state) => state.productDetails)
  const { product } = productDetails

  useEffect(() => {
    if (!product || product._id !== productId) {
      dispatch(getProductDetails(productId))
    }

    console.log(product)
  }, [dispatch, product, productId])

  return (
    <>
      <div className={classes.productScreen_container}>
        <CenterContainer bgPadding='50px'>
          <div className={classes.mainInfo_container}>
            <Row>
              <Col md={6}>
                <img
                  className={classes.bigImg}
                  src={slide10}
                  alt='Start Doing'
                />
              </Col>
              <Col md={6}>
                <div>
                  {!product || !product.price || !product.description ? (
                    <Loader />
                  ) : (
                    <div className={classes.productInfo_container}>
                      <h3>{product.description}</h3>
                      <p>{`$${product.price}`}</p>
                      <PayPalButton
                        amount={product.price}
                        planId={product.planId}
                      />
                    </div>
                  )}
                </div>
              </Col>
            </Row>
            <div className={classes.images_container}>
              <Row>
                <Col md={3}>
                  <img src={slide1} alt='personal training slide' />
                </Col>
                <Col md={3}>
                  <img src={slide2} alt='personal training quote' />
                </Col>
                <Col md={3}>
                  <img src={slide3} alt='personal training exercise two' />
                </Col>
                <Col md={3}>
                  <img src={slide4} alt='personal training quote two' />
                </Col>
              </Row>
            </div>
          </div>
        </CenterContainer>
      </div>
      <Footer bgColor='black' fontColor='white' position='fixed' />
    </>
  )
}

export default ProductScreen
