import React, { Component } from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ButtonHome from '../components/button-home'
import SerieListItem from '../components/serie-list-item'
import {readAllSeriesFromUser, deleteSerie} from '../actions/index'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
class SerieList extends Component {
    constructor(props) {
        super(props)
        this.state = {displayOnlyMines :  false}
    }
    componentWillMount () {
        this.props.readAllSeriesFromUser()
    }
    renderSeries() {
        const {series} = this.props
        console.log('------------------------------------');
        console.log(this.props);
        console.log('------------------------------------');
        let arraySeries ;
        if(series) {
            arraySeries = series;
        }
        return arraySeries.map((serie) => {
            return <SerieListItem key={serie.id} serie={serie} id={serie.id} title={serie.title} deleteSerieCallBack={(serie) => this.deleteSerieCallBack(serie)}/>
        })
    }
    deleteSerieCallBack(serie) {
        this.props.deleteSerie(serie)
    }
  render() {
    return (
      <div className='col-md-6 col-md-offset-3'>
        <h1>Liste de mes films vue</h1>
            <Link to={'film-list'} className="button button-circle button-primary">+</Link>
            {<ButtonHome/>}

        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Action</th>
                </tr>
            </thead>
            <ReactCSSTransitionGroup component="tbody"
            transitionEnterTimeout = {500}
            transitionLeaveTimeout = {300}
            transitionName="fade">
                {this.renderSeries()}
            </ReactCSSTransitionGroup>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        series: state.series
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readAllSeriesFromUser,deleteSerie}, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(SerieList)