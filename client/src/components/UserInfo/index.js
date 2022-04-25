import React from 'react'
import './style.css'

import avarta from '../../assets/images/images.jpg'

const UserInfo = () => {
  const username = "johncarter101"
  const name = "John Carter"
  const email = "johncarter101@gmail.com"
  const phone = "091537684"
  const address = "Ho Chi Minh"
  return (
    <div className="container">
      <div className="row d-block header">Member Infomation</div>
      <form className='form-box-margin  pb-2'>
        <div className="my-4 d-md-flex">
          <div className="col-lg-4 col-md-5">
            <div> <h5>User Name</h5></div>
            <div className="myInput">{username}</div>
          </div>
          <div className="col-md-5 mt-sm-4 mt-md-0 form-margin">
            <div>
              <h5>
                Password
              </h5>
            </div>
            <div className="d-lg-flex">
              <div className="myInput">******</div>
              <div className='d-flex align-items-center'>
                <a hreft="" className=" changeps">Change password</a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-md-4 d-md-flex">
          <div className="col-lg-4 col-md-5">
            <label htmlFor='nameInput'> 
              <h5>Name</h5>
            </label>
            <input type="text" id="nameInput" value={name} className="myInput"></input>
          </div>
          <div className="col-lg-4 col-md-5 mt-sm-4 mt-md-0 form-margin">
            <label htmlFor='emailInput'> 
              <h5>Email</h5>
            </label>
            <input type="text" id="emailInput" value={email} className="myInput"></input>
          </div>
        </div>
        <div className="my-4 d-md-flex">
          <div className="col-lg-4 col-md-5">
            <label htmlFor='phoneInput'> 
              <h5>Phone</h5>
            </label>
            <input type="text" id="phoneInput" value={phone} className="myInput"></input>
          </div>
          <div className="col-lg-4 col-md-5 mt-sm-4 mt-md-0 form-margin">
            <label htmlFor='addressInput'> 
              <h5>Address</h5>
            </label>
            <input type="text" id="addressInput" value={address} className="myInput"></input>
          </div>
        </div>
        <div className="row my-4">
          <div className='col-lg-4 col-md-5 '>
            <div className='mt-4'>
              <img src={avarta} alt="" className='img-thumbnail'></img>
            </div>
            <div className='mt-3 col'>
              <input className="" id="imgSrc" type="file" />
            </div>
          </div>
          <div className="col-lg-4 col-md-5 mt-sm-4 mt-md-0 form-margin d-flex align-items-center justify-content-sm-center justify-content-md-start">
            <button className='updatebtn'> Update</button>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default UserInfo