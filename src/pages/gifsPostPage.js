import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import { Redirect } from "react-router-dom";
import NavBar from '../component/navBar'
import {APIendpoint} from '../config/variables'

// Fix #4 Employee can login and get a token.
class GifsPostPage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      file: null,
      gifId:0
    };
    this.fileInputHandler = React.createRef();
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendForm = () => {
    console.log(this.fileInputHandler," <<:>> ",this.fileInputHandler.current);
    if (!this.state.title || !this.fileInputHandler.current.files[0]){
        alert('Enter valid Title or File ')
        return
    }


    const fileData = new FormData() 
    fileData.append('file', this.fileInputHandler.current.files[0])
    fileData.append('title', this.state.title)
    fileData.append('authorId', '4')
    fileData.append('isGif', 'true')
    fileData.append('flaged', 'false')
    fileData.append('createdOn', new Date())

    fetch(APIendpoint + '/gifs', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')} 4`,
      },
      body:fileData
    })
    .then(res => {
        res.json().then((data)=>{
            console.log('DATA:',data.data.gifId, JSON.stringify(data.data))
            this.setState({gifId:data.data.gifId})
        })
        
    })
    .catch(err => {
      console.log(err)
      alert('Invalid username or password')
    });
  }

   render() {
    if(this.state.gifId>0){
        const articlePath = '/gifs/'+this.state.gifId
       return <Redirect to={articlePath} />
    }

    return (
        <>
<MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard style={{ margin: "10%" }}>
        <MDBCardBody>
          <form onSubmit={this.sendForm}>
            <p className="h5 text-center mb-4">Post Gif</p>
            <div className="grey-text">
              <MDBInput
                label="Gif Title"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="title"
                 autoComplete="title" 
                value={this.state.title}
                onInput={this.handleInput}
              />
              <div className="custom-file">
    <input
      type="file"
      ref={this.fileInputHandler}
    />
  </div>
            </div>
            <div className="text-center">
              <MDBBtn onClick={this.sendForm}>Post Gif</MDBBtn>
            </div>
          </form>
         
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
     <hr/>
    </>
    )}
}


export default GifsPostPage;