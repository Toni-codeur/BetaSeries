import React, { Component } from 'react'
import DetailSerieContent from '../components/detail-serie'
import ButtonHome from '../components/button-home'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import {bindActionCreators} from 'redux'
import {detailSerie, detailEpisodeParIdSerie} from '../actions/index'

const FontAwesome = require('react-fontawesome');
class DetailSerie extends Component {
  componentWillMount() {
    this.props.detailSerie(this.props.params.id),
    this.props.detailEpisodeParIdSerie(this.props.params.id)
    //recupere id du post dans url
  }
  renderSerieContent() {
    const {serieContent} = this.props
    const {episodeContent} = this.props
    if(serieContent) {
      return <DetailSerieContent episodeContent={episodeContent} serieContent={serieContent}/>
    }
  }
  render() {
    return (
      <div>
        {<ButtonHome/>}
        <Link to={'my-serie'} className="button button-circle button-primary"><FontAwesome  className='super-crazy-colors'
        name='reply'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></Link>
        <ReactCSSTransitionGroup component="div"
            transitionEnterTimeout = {500}
            transitionLeaveTimeout = {300}
            transitionName="fade">
                {this.renderSerieContent()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    episodeContent: state.detailEpisodeSerie,
    serieContent: state.activeSerie
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({detailSerie,detailEpisodeParIdSerie}, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(DetailSerie)