import React, { Component } from 'react'
import {Link} from 'react-router'
import DetailEpisodeParIdEpisodeContent from '../components/detail-episode-par-id-episode'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ListComment from '../components/list-comment'
import CommentForm from './form-add-com'
import ButtonHome from '../components/button-home'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {detailSerie, detailEpisodeParIdEpisode,listComment} from '../actions/index'

class DetailEpisode extends Component {
  componentWillMount() {
    this.props.detailSerie(this.props.params.id),
    this.props.detailEpisodeParIdEpisode(this.props.params.episode),
    this.props.listComment(this.props.params.episode)
    //recupere id du post dans url
  }
  renderSerieContent() {
    const {serieContent} = this.props
    const {episodeContent} = this.props
    if(serieContent) {
      return <DetailEpisodeParIdEpisodeContent episodeContent={episodeContent} serieContent={serieContent}/>
    }
  }
  renderComment() {
     const {comment} = this.props
     let arrayComments ;
    if(comment) {
        arrayComments = comment;
       return arrayComments.map((comment) => {
        return <ListComment key={comment.id} comment={comment} id={comment.id} text={comment.text}/>
        })
    }
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
                <div className="detailBox">
                    <div className="titleBox">
                        <label>Commentaire</label>
                    </div>
                    <div className="actionBox">
                        <ul className="commentList">
                            {this.renderComment()}
                        </ul>
                          <CommentForm initialValues={{id: this.props.params.episode}}/>
                    </div>
                </div>
        </ReactCSSTransitionGroup>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    episodeContent: state.detailEpisodeSerie,
    serieContent: state.activeSerie,
    comment: state.comment
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({detailSerie,detailEpisodeParIdEpisode,listComment}, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(DetailEpisode)