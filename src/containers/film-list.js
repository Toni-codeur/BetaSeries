import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {listFilm, addFilm} from '../actions/index'
import ButtonHome from '../components/button-home'
import FilmListItem from '../components/film-list-item'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Link} from 'react-router'
const FontAwesome = require('react-fontawesome');
class FilmList extends Component {
    constructor(props) {
        super(props)
        console.log('------------------------------------');
        console.log(props);
        console.log('------------------------------------');
        this.state = {displayOnlyMines :  false}
    }
    componentWillMount () {
        this.props.listFilm()
    }
    renderFilms() {
        const {series} = this.props
        console.log('------------------------------------');
        console.log('this', this.props);
        console.log('------------------------------------');
        let arraySeries ;
        if(series) {
            arraySeries = series;
        }
        return arraySeries.map((serie) => {
            return <FilmListItem key={serie.id} serie={serie} id={serie.id} title={serie.title} addFilmCallBack={(serie) => this.addFilmCallBack(serie)}/>
        })
    }
    addFilmCallBack(serie) {
        this.props.addFilm(serie)
    }
  render() {
    return (
      <div className='col-md-6 col-md-offset-3'>
        <h1>Liste des films</h1>
        <Link to={'serie'} className="button button-circle button-primary"><FontAwesome  className='super-crazy-colors'
        name='reply'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></Link>
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
    console.log('------------------------------------');
    console.log('ttttttt',state);
    console.log('------------------------------------');
    return {
        series: state.series
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({listFilm,addFilm}, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(FilmList)