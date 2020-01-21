import React, { Component } from 'react'
import { connect } from "react-redux";

class MovieDescription extends Component {
    render() {
        return (
            <center>
            <div className='moviedesMain'>
            <div className='title'>
                <h1>
             {this.props.item.title}  
             </h1> 
            </div>
            <div className='image'>
                <img className ='descimage' src={this.props.item.image} alt='movie image'/>
            </div>
            <div className='trailer'></div>
            <div className='description'>{this.props.item.description}</div>
            </div>
            </center>
        )
    }
}

const mapStateToProps = state => {
    return { item:state.selectedred  };  
  };


  export default connect(mapStateToProps, null)(MovieDescription);

