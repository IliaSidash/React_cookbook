import React, { Component } from 'react';


//scss
import '../scss/Loader.scss';

//components

class Loader extends Component {

    render() {

        return (

        <div class="showbox">
            <div class="loader">
                <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                </svg>
            </div>
          </div>

        );
    }
}

export default Loader;