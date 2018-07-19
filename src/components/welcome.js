import React, {Component} from 'react';
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'
import github from '../images/github.png'
import gabe from '../images/gabe.jpg'
import Projects from './projects'


class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="header">
            <div className="avi">
              <h1>Gabriel Afflitto</h1>
              <p>Software Developer</p>
              <img src={gabe} height='300' width='200' id="gabe"></img>
            </div>
            <div className="welcome-intro">
              <p className="intro">
                I am enthusiastic about bringing drive and passion to the software development industry.
                Prior to attending the <a href={'https://www.turing.io/'} target='_blank' className="turing">Turing School of Software & Design</a>, my background was in construction and since my Turing enrollment, I have
                learned the technical skills to be a valuable contributor to the technology industry.
                I have pushed the boundaries of what I thought was possible of myself and I look forward to continuing that drive wherever I go.
              </p>
            </div>
          </div>
          <ul className="links">
            <li className="linked"><a href={'https://www.linkedin.com/in/gabeafflitto'} target='_blank'><img src={linkedin} className="icon"></img></a></li>
            <li className="github"><a href={'https://github.com/GabrielAfflitto'} target='_blank'><img src={github} className="icon"></img></a></li>
            <li className="email"><a href={'mailto:gafflitto92@gmail.com?subject=Hey There!'}><img src={email} className="icon"></img></a></li>
          </ul>
        </div>
        <Projects />
      </div>
    )
  }
}

export default Welcome;
