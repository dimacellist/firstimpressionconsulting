import React from 'react'
import Axios from 'axios'

const API_PATH = 'http://localhost:1992/my-reactapp/api/contact/index.php'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    Axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json'},
      data: this.state
    })

    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({
      error: error.message
    }))
  }

  render() {
    return(
      <form method="post" action="../mailer.php" className="form">
      <div className="row">
        <div className="col span-1-of-3">
          <label>Name</label>
        </div>
        <div className="col span-2-of-3">
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Your name" 
            required 
            value={this.state.name}
            onChange = {
              e => this.setState({
                name: e.target.value
              })
            }
          />
        </div>
      </div>		
      <div className="row">
        <div className="col span-1-of-3">
          <label>Email</label>
        </div>
        <div className="col span-2-of-3">
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Your email" 
            required 
            value={this.state.email}
            onChange = {
              e => this.setState({
                email: e.target.value
              })
            }
          />
        </div>
      </div>			
      <div className="row">
        <div className="col span-1-of-3">
          <label>Send a message</label>
        </div>
        <div className="col span-2-of-3">
          <textarea 
            name="message" 
            id="message" 
            placeholder="Your message"
            value={this.state.message}
            onChange = {
              e => this.setState({
                message: e.target.value
              })
            }>
          </textarea>
        </div>
      </div>		
      <div className="row">
        <div className="col span-1-of-3">
            <label>&nbsp;</label>
        </div>
        <div className="col span-2-of-3">
          <input 
            type="submit" 
            value="SUBMIT"
            onClick = {
              e => this.handleFormSubmit(e)
            } 
          />
        </div>
        <div className="col span-2-of-3">
          {this.state.mailSent &&
            <p>Thank you, Your message Has been Sent</p>
          }
        </div>
      </div>  
    </form>
    )
  }
}

export default Form
