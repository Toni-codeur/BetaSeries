import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ButtonHome from '../components/button-home'
import AmiesListItem from '../components/amies-list-item'
import {listAmis, deleteAmie, blockAmie} from '../actions/index'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Link} from 'react-router'
const FontAwesome = require('react-fontawesome');
class MyAmiesList extends Component {
    constructor(props) {
        super(props)
        this.state = {displayOnlyMines :  false}
    }
    componentWillMount () {
        this.props.listAmis()
    }
    renderAmies() {
        const {amies} = this.props
        let arrayAmies ;
        if(amies) {
            arrayAmies = amies;
            return arrayAmies.map((amie) => {
                return <AmiesListItem key={amie.id} amie={amie} id={amie.id} login={amie.login} deleteAmieCallBack={(amie) => this.deleteAmieCallBack(amie)}  blockAmieCallBack={(amie) => this.blockAmieCallBack(amie)}/>
            })
        }
    }
    deleteAmieCallBack(amie) {
        this.props.deleteAmie(amie)
    }
    blockAmieCallBack(amie) {
        this.props.blockAmie(amie)
    }
  render() {
    return (
      <div className='col-md-6 col-md-offset-3'>
        <h1>Liste de mes amies</h1>
        {<ButtonHome/>}
        <Link to={'search-amies-facebook'} className="button button-circle button-primary"><FontAwesome  className='super-crazy-colors'
        name='plus'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></Link>

        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>XP</th>
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
    return {
        amies: state.amies
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({listAmis,deleteAmie,blockAmie}, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(MyAmiesList)