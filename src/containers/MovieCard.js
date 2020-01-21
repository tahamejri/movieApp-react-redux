import StarRatings from "react-star-ratings";
import { Route, NavLink } from 'react-router-dom'
import React, { Component } from "react";
import { connect } from "react-redux";
import { editMovie, selected, deleteMovie } from "../actions/actionCreators";

import { SHOW_ALL } from "../actions/actionTypes";
import { bindActionCreators } from "redux";
import ModalComponent from "./ModalComponent";
import MovieDescription from './MovieDescription.js'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


class MovieCard extends React.Component {

  submit = () => {
    confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='custom-ui'>
          <h1>Are you sure?</h1>
          <p>You want to delete this file?</p>
          <button onClick={onClose}>No</button>
          <button
            onClick={() => {
              this.props.deleteMovie(this.props.id);
              onClose();
            }}
          >
            Yes, Delete it!
</button>
        </div>
      );
    }
  })
}










  render() {
    return (
      <div className="movie-card card">
        <Route path={`/moviedescription/${this.props.id}`} component={MovieDescription} />
        <img className="card-img-top" src={this.props.image} alt="" />
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>

          <p className="card-subtitle mb-2 text-muted">{this.props.year}</p>
          <StarRatings
            rating={this.props.rating}
            starDimension="30px"
            starSpacing="1px"
          />
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="mt-1">
              <NavLink to={`/moviedescription/${this.props.id}`}>
                <button onClick={() => this.props.selected(this.props)} id="descriptionButton">Movie Description</button>
              </NavLink>
            </div>
            <div className="card-footer-badge ">
              <NavLink to="/home/EditMovie">
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal1"
                  onClick={() => { this.props.selected(this.props) }
                  }>edit</button>
              </NavLink>


              <button
                onClick={this.submit}
                id="removeButton"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies };
  // return {
  //   movies: getVisibleMovies(state.movies, state.visibilityFilter),
  //   visibilityFilter: state.visibilityFilter
  // };
};




const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // deleteMovie,
      editMovie,
      selected,
      deleteMovie
      //setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);










