import React, {Component} from 'react';
import musicbuddy from '../images/musicbuddy.png'


class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div>
          <img src={musicbuddy} className="thumbnail"></img>
          <div className="row">
            <div className="col-md">
              <h3>Overview</h3>
              <p>blah</p>
            </div>
            <div className="col-md">
              <h3>Areas of focus</h3>
              <p>shit</p>
            </div>
          </div>
        </div>
        <div className="app-buttons">
          <a href={'https://music-buddy.herokuapp.com/'} target="_blank">Launch Application</a>
          <a href={'https://github.com/GabrielAfflitto/music-buddy'} target="_blank">Repository Page</a>
        </div>
      </div>
    )
  }
}

export default Projects;
