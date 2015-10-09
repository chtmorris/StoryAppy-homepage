import React from 'react';
import Parse from 'parse';
import ga from 'react-google-analytics';



let contact = new Parse.Object('Contact');

function validateEmail(email){
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      emailSent: false,
      message: this.props.message,
      style: this.props.style
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    
    ga('create','UA-68630239-1', 'auto')
    ga('send','event','AppStore','download','Landing Page')

    event.preventDefault();
    var emailAddress = React.findDOMNode(this.refs.emailInput).value
    if ((emailAddress != "") && validateEmail(emailAddress)) {
      contact.set('email', emailAddress);
      contact.save();
      this.setState({emailSent: true});
    } else {
      console.log("empty email field");
    }
  }
  
  render(){
    let form;
    if (!this.state.emailSent) {
      form = (
        <form>
          <div className="grid-block">
            <div className="medium-8 grid-block">
              <input ref="emailInput" type="text" placeholder="Email Address" className="e-mail" required />
            </div>
            <div className="medium-4 grid-block">
              <a onClick={this.handleClick} className="expand button submit-email" href="#">Submit</a>
            </div>
          </div>
        </form>
      );
    } else {
      form = (
        <div className="vertical grid-block">
          <div className="grid-content">
            <p className="get-email-text">
              Thanks for getting in touch. We will get back to you asap.
            </p>
          </div>
        </div>
      );
    }
    let message = this.state.message || 'StoryAppy is a writing tool for the classroom. Sign up for a free trial';
    let style = this.state.style || 'get-email-text';

    return(
      <div className="grid-container white-box">
        <div className="vertical medium-horizontal grid-block">
          <div className="grid-block">
            <p className={style}>
              {message}
            </p>
          </div>
          <div className="grid-block align-center">
            {form}
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
