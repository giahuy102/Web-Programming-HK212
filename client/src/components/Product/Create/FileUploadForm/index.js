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
        this.props.setUrl(res.data);
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
            <input 
                type="file" accept='image/*' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                onChange={ (event) => this.onChange(event)}
            />
                {/* <form >
                    <input type="file" onChange={this.onChange} />
                </form> */}
            <button 
                style={{ width: 100 }} type="button" className="btn btn-primary"
                onClick={this.onSubmit}
            >
                Upload
            </button>
        </>
       )
      }
        
}

export default FileUploadForm;