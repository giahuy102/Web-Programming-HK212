import React from 'react'
import { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'

import avatar from '../../assets/images/images.jpg'
import Single_comment from './Single_comment'

const Comment = ({product_id}) => {
  const this_member_id = 3
  const [comment_lst, setComment_lst] = useState([])
  const [new_comment, setNewComment] = useState([])
  const [userAvatar, setUserAvatar] = useState("")

  useEffect( () => {
      axios({
        method: 'get',
        url: `http://localhost/home/product/${product_id}/comment`,
      }).then(function (response) {
          // console.log(response);
          setComment_lst(response.data);
      }).catch(function (error) {
          console.log(error);
      });
      axios({
          method: 'get',
          url: `http://localhost/home/user/${this_member_id}`,
      }).then(function (response) {
          let user = response.data;
          setUserAvatar(user.AVATAR);

      }).catch(function (error) {
          console.log(error);
      });
  }, [])

  const addComment = async () => {
    await axios({
        method: 'post',
        url: `http://localhost/home/product/${product_id}/comment`,
        data: {
            member_id: this_member_id,
            content: new_comment
        }
    }).then(function (response) {
        setComment_lst(response.data)
    }).catch(function (error) {
        console.log(error);
    });
  }

  return (
    <div className='container'>
      {comment_lst.map((usercomment) => (
        <Single_comment usercomment={usercomment}/>
        // <h3>{usercomment.CONTENT}</h3>
      ))}
      <div className='row py-md-4 py-sm-3'>
        <div className='d-none d-md-block col-md-2 '>
          <img src={`http://localhost/uploads/image/${userAvatar}`} className='img-thumbnail my-image' ></img>
        </div>
        <div className='col-md'>
          <textarea 
            className='form-control' 
            rows="3" 
            placeholder='Add comment' 
            value={new_comment} 
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className='row'>
        <div className="mt-sm-3 mt-md-3 d-flex align-items-center justify-content-sm-center justify-content-md-end">
          <button className='uploadbtn' onClick={addComment}> Upload</button>
        </div>
      </div>
    </div>
  )
}

export default Comment