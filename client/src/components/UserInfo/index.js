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
      <form className=''>
        <div className="row justify-content-around my-4">
          <div className="col-3">
            <div> <h5>User Name</h5></div>
            <div className="myInput">{username}</div>
          </div>
          <div className="col-4">
            <div>
              <h5>
                Password
              </h5>
            </div>
            <div className="d-flex">
              <div className="col-8 myInput">******</div>
              <div className='col d-flex align-items-center'>
                <a hreft="" className=" changeps">Change password</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-around my-4">
          <div className="col-3">
            <label htmlFor='nameInput'> 
              <h5>Name</h5>
            </label>
            <input type="text" id="nameInput" value={name} className="myInput"></input>
          </div>
          <div className="col-4">
            <label htmlFor='emailInput'> 
              <h5>Email</h5>
            </label>
            <input type="text" id="emailInput" value={email} className="myInput"></input>
          </div>
        </div>
        <div className="row justify-content-around my-4">
          <div className="col-3">
            <label htmlFor='phoneInput'> 
              <h5>Phone</h5>
            </label>
            <input type="text" id="phoneInput" value={phone} className="myInput"></input>
          </div>
          <div className="col-4">
            <label htmlFor='addressInput'> 
              <h5>Address</h5>
            </label>
            <input type="text" id="addressInput" value={address} className="myInput"></input>
          </div>
        </div>
        <div className="row d-flex my-4 justify-content-around">
          <div className='col-3 d-flex flex-column align-items-center'>
            <div className='mt-4'>
              <img src={avarta} alt="" className='img-thumbnail'></img>
            </div>
            <div className='mt-3 col'>
              <input className="" id="imgSrc" type="file" />
            </div>
          </div>
          <div className="col-4 d-flex align-items-center">
            <button className='updatebtn'> <h2>Update</h2></button>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default UserInfo