import React, { Component } from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ButtonHome from '../components/button-home'
import MySeriesListItem from '../components/my-series-list-item'
import {readAllFilmFromUser, deleteFilm} from '../actions/index'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
class MySerieList extends Component {
    constructor(props) {
        super(props)
        this.state = {displayOnlyMines :  false}
    }
    componentWillMount () {
        this.props.readAllFilmFromUser()
    }
    renderFilms() {
        const {seriess} = this.props
        console.log('------------------------------------');
        console.log(this.props);
        console.log('------------------------------------');
        let arraySeries ;
        if(seriess) {
            arraySeries = seriess;
        }
        return arraySeries.map((serie) => {
            return <MySeriesListItem key={serie.id} serie={serie} id={serie.id} title={serie.title} deleteMySerieCallBack={(serie) => this.deleteMySerieCallBack(serie)}/>
        })
    }
    deleteMySerieCallBack(serie) {
        this.props.deleteFilm(serie)
    }
  render() {
    return (
      <div className='col-md-6 col-md-offset-3'>
        <h1>Liste de mes serie</h1>
        <Link to={'series-list'} className="button button-circle button-primary">+</Link>
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
                {this.renderFilms()}
            </ReactCSSTransitionGroup>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        seriess: state.series
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readAllFilmFromUser,deleteFilm}, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(MySerieList)