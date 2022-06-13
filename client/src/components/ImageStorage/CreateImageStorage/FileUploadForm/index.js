import React from 'react'
import axios from 'axios';
// import './style.css'


class FileUploadForm extends React.Component {
    UPLOAD_ENDPOINT = `http://localhost/dashboard/uploadImg`;
    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }
    async onSubmit(e){
        e.preventDefault() 
        let res = await this.uploadFile(this.state.file);
        // this.props.setAvatar(res.data);
        console.log(res.data);
    }
    onChange(e) {
        console.log(e.target.files[0]);
        this.setState({file:e.target.files[0]})
    }
    async uploadFile(file){
        

        const formData = new FormData();
        
        formData.append('avatar',file)
        
        return  await axios.post(this.UPLOAD_ENDPOINT, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
      }
    
      render() {
        return (
            <>
            
            <form >
                <input type="file" onChange={ this.onChange } />
            </form>
            <button type="submit" onClick={this.onSubmit} className="small-updatebtn mt-3 mb-sm-0 mb-3">Upload Image</button>

          </>
       )
      }
        
}

export default FileUploadForm;