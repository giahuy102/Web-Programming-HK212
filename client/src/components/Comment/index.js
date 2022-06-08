import React from 'react'
import { useState } from 'react'
import './style.css'

import avatar from '../../assets/images/images.jpg'
import Single_comment from './Single_comment'

const Comment = () => {
  const [comment_lst, setComment_lst] = useState([
    {
      id: 1,
      image: avatar,
      comment: 'abcalkdfj aosd iasodjf ',
    },
    {
      id: 2,
      image: avatar,
      comment: 'abcalkdfj aosd iasodjf ',
    },
    {
      id: 3,
      image: avatar,
      comment: 'abcalkdfj aosd iasodjf ',
    },
    {
      id: 4,
      image: avatar,
      comment: 'abcalkdfj aosd iasodjf ',
    },
  ])

  const addComment = () => {
    setComment_lst([...comment_lst, {
      id: 5,
      image: avatar,
      comment: 'New comment !!!!!!!!!!asdkfj asldkjfl askdjf;sl kdfjas;l dkfasjd; flksdjf; aslkdf j;asdlkf jas;dflk asdjfl;k sjdf;slkdjf'
    }])
  }

  return (
    <div className='container'>
      {comment_lst.map((usercomment) => (
        <Single_comment usercomment={usercomment}/>
      ))}
      <div className='row py-md-4 py-sm-3'>
        <div className='d-none d-md-block col-md-2 '>
          <img src={avatar} className='img-thumbnail my-image' ></img>
        </div>
        <div className='col-md'>
          <textarea className='form-control' rows="3" placeholder='Add comment' id='commentInput'></textarea>
        </div>
      </div>
      <div className='row'>
        <div className="mt-sm-4 mt-md-4 d-flex align-items-center justify-content-sm-center justify-content-md-end">
          <button className='uploadbtn' onClick={addComment}> Upload</button>
        </div>
      </div>
    </div>
  )
}

export default Comment