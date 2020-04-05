import React from 'react';

class Register extends React.Component {
 // In order to use props we need to pass it to the constructor.
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    }
  }
  onNameChange = (event) =>  {
    this.setState({name: event.target.value})
  }
  // In order to get the input value of "#password, #email" we will creat a function (any).
  onEmailChange = (event) =>  {
    this.setState({email: event.target.value})
  }
  
  onPasswordChange = (event) =>  {
    this.setState({password: event.target.value})
  }
  
  onSubmitSignIn = () => {
    //sending the email & password info after the button click
    // fetch by default does a GET request but her we need a POST request as this route is specified in the api server.js as "app.post()"
    // to make this a post request the seconde argument need's to be an object that describes what the request will be. like so
    /* 
      {
        method: '',
        // because "content-type" has a hyphen it's rapped with quote's.
        headers: {'content-type': ''},
        // In order to send the object to the server we need to convert it to JSON 
        body: ''
      }
    */
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
    .then(response => response.json())
    .then(user => {
      if(user) {
        this.props.loadUser(user)
        this.props.onRouteChange('home')
      }
    })
    .catch(console.log)

  }



  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="text" 
                  name="name"  
                  id="name" 
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address" 
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password" 
                  id="password" 
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input 
              onClick={this.onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Register" />
            </div>
          </div>
        </main>
      </article>
    );
  }

}

export default Register;
