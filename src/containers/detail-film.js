import React, { Component } from 'react'
import DetailFilmContent from '../components/detail-film'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {detailFilm} from '../actions/index'
import ButtonHome from '../components/button-home'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const FontAwesome = require('react-fontawesome');
class DetailFilm extends Component {
  componentWillMount() {
    this.props.detailFilm(this.props.params.id)
    //recupere id du post dans url
  }
  renderFilmContent() {
    const {filmContent} = this.props
    if(filmContent) {
      return <DetailFilmContent filmContent={filmContent}/>
    }
  }
  render() {
    return (
      <div>
         {<ButtonHome/>}
         <Link to={'film-list'} className="button button-circle button-primary"><FontAwesome  className='super-crazy-colors'
        name='reply'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></Link>
        <ReactCSSTransitionGroup component="div"
            transitionEnterTimeout = {500}
            transitionLeaveTimeout = {300}
            transitionName="fade">
                {this.renderFilmContent()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    filmContent: state.activeFilm
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({detailFilm}, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(DetailFilm)
