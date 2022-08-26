import React, { useEffect } from 'react'
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Listgroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
  // get product id from url
  const match = useParams()
  const productId = match.id
  // get quantity of product from url search params
  const [searchParams] = useSearchParams()
  const qty = searchParams.values().next().value
    ? Number(searchParams.values().next().value)
    : 1
  //
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])
  return <div>Cart Screen</div>
}

export default CartScreen
