import React from 'react'

import avatar from '../../../assets/images/images.jpg'


const Single_comment = ({usercomment}) => {
  return (
    <div className='row py-md-4 py-sm-3 border-bottom'>
        <div className='col-sm-3 col-md-2 '>
            <img src={avatar} className='img-thumbnail my-image' ></img>
        </div>
        <div className='col'>
            {usercomment.CONTENT}
        </div>
    </div>
  )
}

export default Single_comment