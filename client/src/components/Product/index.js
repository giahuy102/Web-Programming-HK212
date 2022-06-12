import React from 'react'
import Comment from '../Comment'
import './style.css'

const Product = () => {
  return (
    <div className='container'>
        <div className='detail'>
            <Comment product_id={1}/>
        </div>
    </div>
  )
}

export default Product