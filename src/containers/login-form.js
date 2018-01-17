import React, { Component } from 'react'
import {Link} from 'react-router'
import {reduxForm} from 'redux-form'
import {loginUser} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const formConfig = {
  form : "createPostForm",
  fields : ['login','password'],
  validate : validate
}
class LoginForm extends Component {
  constructor(props) {
      super(props)
      this.state = {displayOnlyMines :  false}
      console.log('------------------------------------');
      console.log(props);
      console.log('------------------------------------');
  }
  render() {
    const {fields : {login,password},handleSubmit,errors} = this.props
    return (
      <div>
        <div className="login-page">
          <div className="form">
            <form className="login-form" onSubmit={handleSubmit(this.loginUser.bind(this))}>
              <div className={`form-group ${login.touched && login.invalid ? 'has-danger' : '' }`}>
                <input type="text" placeholder="username" {...login}/>
                <div>{login.touched && errors.login}</div>
              </div>
              <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : '' }`}>
                <input type="password" placeholder="password" {...password}/>
                <div>{password.touched && errors.password}</div>
              </div>
                  <button type="submit" className="btn btn-success" disabled={this.props.invalid}>Connexion</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  loginUser(post) {
    this.props.loginUser(post);
    browserHistory.push('/');
  }
}
function validate(values) {
  const errors = {};
  if(!values.login) {
    errors.login = 'Votre Login'
  }
  if(!values.password) {
    errors.password = 'Votre Password'
  }
  return errors
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({loginUser}, dispatch),
})
export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(LoginForm))