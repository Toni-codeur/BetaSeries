import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {detailSerie, detailEpisodeParIdSerie, addEpisodeVu} from '../actions/index'
import DetailEpisodeParSaisonContent from '../components/detail-episode-par-saison'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import ButtonHome from '../components/button-home'
import {Link} from 'react-router'
class DetailEpisode extends Component {
    constructor(props) {
      super(props)
      console.log('------------------------------------');
      console.log(props);
      console.log('------------------------------------');
      this.state = {displayOnlyMines :  false}
  }
  componentWillMount() {
    this.props.detailSerie(this.props.params.id),
    this.props.detailEpisodeParIdSerie(this.props.params.id, this.props.params.saison)
    //recupere id du post dans url
  }

  renderSerieContent() {
    const {serieContent} = this.props
    const {episodeContent} = this.props
    if(serieContent) {
      return <DetailEpisodeParSaisonContent key={episodeContent.id} episodeContent={episodeContent} serieContent={serieContent} addEpisodeVuCallBack={(episodeContent) => this.addEpisodeVuCallBack(episodeContent)}/>
    }
  }

  addEpisodeVuCallBack(episodeContent) {
    this.props.addEpisodeVu(episodeContent)
  }
  render() {
    return (
      <div>
         {<ButtonHome/>}
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
  ...bindActionCreators({detailSerie,detailEpisodeParIdSerie,addEpisodeVu}, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(DetailEpisode)