import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ButtonHome from '../components/button-home'
import {searchAmiesFacebook, addAmie} from '../actions/index'
import SearchAmiesFacebookContent from '../components/search-amies-facebook-content'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Link} from 'react-router'
const FontAwesome = require('react-fontawesome');
class SearchAmiesFacebookList extends Component {
    constructor(props) {
        super(props)
        this.state = {displayOnlyMines :  false}
    }
    componentWillMount () {
        this.props.searchAmiesFacebook()
    }
    renderAmies() {
        const {amies} = this.props
        let arrayAmies ;
        if(amies) {
            arrayAmies = amies;
        }
        return arrayAmies.map((amie) => {
            return <SearchAmiesFacebookContent key={amie.id} amie={amie} id={amie.id} login={amie.login} addAmieCallBack={(serie) => this.addAmieCallBack(serie)}/>
        })
    }
    addAmieCallBack(amie) {
        this.props.addAmie(amie)
    }
  render() {
    return (
      <div className='col-md-6 col-md-offset-3'>
        <h1>Ajouts Amie</h1>
        <Link to={'amis'} className="button button-circle button-primary"><FontAwesome  className='super-crazy-colors'
        name='reply'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></Link>
            {<ButtonHome/>}

        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Action</th>
                </tr>
            </thead>
            <ReactCSSTransitionGroup component="tbody"
            transitionEnterTimeout = {500}
            transitionLeaveTimeout = {300}
            transitionName="fade">
                {this.renderAmies()}
            </ReactCSSTransitionGroup>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('------------------------------------');
  console.log('state',state);
  console.log('------------------------------------');
    return {
        amies: state.amies
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({searchAmiesFacebook,addAmie}, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(SearchAmiesFacebookList)
