import React, { Component } from 'react'
import {reduxForm} from 'redux-form'
import {commentEpisode} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

const formConfig = {
  form : "createPostForm",
  fields : ['text', 'id'],
  validate : validate
}
class CommentForm extends Component {
  constructor(props) {
      super(props)
      this.state = {displayOnlyMines :  false}
      console.log('------------------------------------');
      console.log('comment',props);
      console.log('------------------------------------');
  }
  render() {
    const {fields : {text,id},handleSubmit,errors} = this.props
    return (
      <div>
          <form onSubmit={handleSubmit(this.commentEpisode.bind(this))} className="form-inline" >
                <div className={`form-group ${text.touched && text.invalid ? 'has-danger' : '' }`}>
                    <input className="form-control" type="text" {...text} placeholder="Your comments" />
                    <div>{text.touched && errors.text}</div>
                </div>
                <input className="form-control" type="hidden" {...id}/>

                {/* <input name="idEpisode" type="hidden" 23value="xm4jq" />> */}
                <button type="submit" className="btn btn-default" disabled={this.props.invalid}>Ajouter</button>
            </form>    
      </div>
    )
  }
  commentEpisode(post) {
    this.props.commentEpisode(post);
    browserHistory.push('/');
  }
}
function validate(values) {
  const errors = {};
  if(!values.text) {
    errors.text = 'Votre commentaire'
  }
  return errors
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({commentEpisode}, dispatch),
})
export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(CommentForm))