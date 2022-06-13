import axios from 'axios';
import React, { useState } from 'react'
import './style.css'

const ChangePassword = () => {
    const [oldpassword, setOldpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [renewpassword, setRenewpassword] = useState("");
    const [status, setStatus] = useState("");
    const this_member_id = 1;
    const update_password = async () =>{
        await axios({
            method: 'post',
            url: `http://localhost/home/user/${this_member_id}/changePassword`,
            data: {
                oldpassword: oldpassword,
                newpassword: newpassword,
                renewpassword: renewpassword
            }
        }).then(function (response) {
            console.log(response.data);
            setStatus(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }
  return (
    <div className="container">
      <div className="row d-flex justify-content-center header">Change Password</div>
      <form className='pb-2'>
        <div className="my-md-4 d-flex justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <label htmlFor='oldpassword'> 
              <h5>Old password</h5>
            </label>
            <input type="password" id="oldpassword" className="myInput" onChange={(e) => setOldpassword(e.target.value)}></input>
          </div>
        </div>
        <div className="my-4 d-flex justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <label htmlFor='newpassword'> 
              <h5>New password</h5>
            </label>
            <input type="password" id="newpassword" className="myInput" onChange={(e) => setNewpassword(e.target.value)}></input>
          </div>
        </div>
        <div className="my-4 d-flex justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <label htmlFor='renewpassword'> 
              <h5>Repeat new password</h5>
            </label>
            <input type="password" id="renewpassword" className="myInput" onChange={(e) => setRenewpassword(e.target.value)}></input>
          </div>
          
        </div>
        <div className="d-flex justify-content-center">
            {(status != "")? (
                <div className='error'>{status}</div>
            ): null}
        </div>
        
      </form> 
      <div className="row mb-4">
          <div className="d-flex align-items-center justify-content-center ">
            <button className='updatebtn' onClick={update_password}> Update</button>
          </div>
        </div>
    </div>
  )
}

export default ChangePassword