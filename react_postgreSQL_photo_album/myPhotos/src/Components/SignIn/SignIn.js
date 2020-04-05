import React, {Component} from 'react';

class SignIn extends Component  {
  // In order to use props we need to pass it to the constructor.
  constructor(props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    }
  }

  // In order to get the input value of "#password, #email" we will creat a function (any).
  onEmailChange = (event) =>  {
    this.setState({signInEmail: event.target.value})
  }
  
  onPasswordChange = (event) =>  {
    this.setState({signInPassword: event.target.value})
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
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
    .then(response => response.json())
    .then(user => {
      // console.log(user)
      if(user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
    .catch(console.log)
  }


  render() {
    // because we are using props we need to prefix every prop with "this.props" that is the way with common js 
    // But the ES6 way is more cleaner with destructuring like the code below.
    const { onRouteChange } = this.props; 
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
                onClick={ this.onSubmitSignIn }
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Sign in" 
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('register') } className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
      );
    }
}

export default SignIn;
