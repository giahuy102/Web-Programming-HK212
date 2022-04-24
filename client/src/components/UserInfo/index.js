import React from 'react'
import './style.css'

const UserInfo = () => {
  return (
    <div className="container">
      <div className="row d-block header">Member Infomation</div>
      <form>
        <div className="row justify-content-around">
          <div className="col-3">
            <div className="text-left">User Name</div>
            <div className="myInput">johncarter101</div>
          </div>
          <div className="col-3">
            <div>Password</div>
            <div className="d-flex">
              <div className="col-8 myInput">******</div>
              <a hreft="" className="col-2 changeps">Change password</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5">User Name</div>
          <div className="col-5">Password</div>
        </div>
        <div className="row">
          <div className="col-5">User Name</div>
          <div className="col-5">Password</div>
        </div>
        <div className="row">
          Image
        </div>
        <div className="row">
          Update
        </div>
      </form>
    </div>
  )
}

export default UserInfo