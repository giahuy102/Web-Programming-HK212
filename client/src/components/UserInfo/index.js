import React from 'react'
import './style.css'

import { useEffect, useState } from 'react'

// import avatar from '../../assets/images/images.jpg'
import axios from 'axios'

import FileUploadForm from '../FileUploadForm'

const UserInfo = () => {
  const [username,setUserName] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [avatar, setAvatar] = useState("no_avatar.png")

  const this_member_id = JSON.parse(localStorage.getItem('jwt_data')).id;

  useEffect( () => {
    axios({
        method: 'get',
        url: `http://localhost/home/user/${this_member_id}`,
    }).then(function (response) {
        let user = response.data;
        console.log(user)
        setUserName(user.USERNAME);
        setName(user._NAME);
        setEmail(user.EMAIL);
        setPhone(user.PHONENUMBER);
        setAddress(user._ADDRESS);
        setAvatar(user.AVATAR);

    }).catch(function (error) {
        console.log(error);
    });
  }, [])

  const updateUserInfo = async () => {
    console.log(email)
    console.log(phone)
    await axios({
        method: 'post',
        url: `http://localhost/home/user/${this_member_id}`,
        data: {
          name: name,
          email: email,
          address: address,
          phone: phone
        }
    }).then(function (response) {
        let user = response.data;
        setUserName(user.USERNAME);
        setName(user._NAME);
        setEmail(user.EMAIL);
        setPhone(user.PHONENUMBER);
        setAddress(user._ADDRESS);
    }).catch(function (error) {
        console.log(error);
    });
}

  return (
    <div className="container">
      <div className="row d-block header">Member Infomation</div>
      <form className='form-box-margin  pb-2'>
        <div className="my-4 d-md-flex">
          <div className="col-lg-4 col-md-5">
            <div> <h5>User Name</h5></div>
            <div className="myInput gray">{username}</div>
          </div>
          <div className="col-md-5 mt-sm-4 mt-md-0 form-margin">
            <div>
              <h5>
                Password
              </h5>
            </div>
            <div className="d-lg-flex">
              <div className="myInput gray">******</div>
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
            <input type="text" id="nameInput" value={name} className="myInput" onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="col-lg-4 col-md-5 mt-sm-4 mt-md-0 form-margin">
            <label htmlFor='emailInput'> 
              <h5>Email</h5>
            </label>
            <input type="text" id="emailInput" value={email} className="myInput" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
        </div>
        <div className="my-4 d-md-flex">
          <div className="col-lg-4 col-md-5">
            <label htmlFor='phoneInput'> 
              <h5>Phone</h5>
            </label>
            <input type="text" id="phoneInput" value={phone} className="myInput" onChange={(e) => setPhone(e.target.value)}></input>
          </div>
          <div className="col-lg-4 col-md-5 mt-sm-4 mt-md-0 form-margin">
            <label htmlFor='addressInput'> 
              <h5>Address</h5>
            </label>
            <input type="text" id="addressInput" value={address} className="myInput" onChange={(e) => setAddress(e.target.value)}></input>
          </div>
        </div>
        <div className="row my-4">
          <div className='col-lg-4 col-md-5 '>
            <div className='mt-4'>
              <img src={`http://localhost/uploads/image/${avatar}`} alt="" className='img-thumbnail'></img>
            </div>
            {/* <div className='mt-3 col'>
              <input className="" id="imgSrc" type="file" />
            </div> */}
            <FileUploadForm this_member_id={this_member_id} setAvatar={setAvatar}/>
          </div>
          <div className="col-lg-4 col-md-5 mt-sm-4 mt-md-0 form-margin d-flex align-items-center justify-content-center justify-content-md-start">
            <button className='updatebtn' onClick={updateUserInfo}> Update</button>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default UserInfo