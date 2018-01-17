import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ButtonHome from '../components/button-home'
import {listSerie, addSerie} from '../actions/index'
import SeriesListItem from '../components/series-list-item'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Link} from 'react-router'
const FontAwesome = require('react-fontawesome');
class SeriesList extends Component {
    constructor(props) {
        super(props)
        console.log('------------------------------------');
        console.log(props);
        console.log('------------------------------------');
        this.state = {displayOnlyMines :  false}
    }
    componentWillMount () {
        this.props.listSerie()
    }
    renderSeries() {
        const {series} = this.props
        let arraySeries ;
        if(series) {
            arraySeries = series;
        }
        return arraySeries.map((serie) => {
            return <SeriesListItem key={serie.id} serie={serie} id={serie.id} title={serie.title} addSeriesCallBack={(serie) => this.addSeriesCallBack(serie)}/>
        })
    }
    addSeriesCallBack(serie) {
        this.props.addSerie(serie)
    }
  render() {
    return (
      <div className='col-md-6 col-md-offset-3'>
        <h1>Liste des series</h1>
        {<ButtonHome/>}
        <Link to={'my-serie'} className="button button-circle button-primary"><FontAwesome  className='super-crazy-colors'
        name='reply'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></Link>
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
    ...bindActionCreators({listSerie,addSerie}, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(SeriesList)