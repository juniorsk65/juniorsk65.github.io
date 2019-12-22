import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import me from '../assets/images/me.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Luciano Jr | Developer" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Hi, I'm Luciano</h2>
                </header>
                <p>
                  Graduating in computer engineering, loves embedded systems and
                  web / mobile application creation. Dedicated, hardworking and
                  always looking for new experiences.
                </p>
                <ul className="icons">
                  <li>
                    <a
                      href="https://twitter.com/"
                      className="icon fa-twitter alt"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      className="icon fa-facebook alt"
                    >
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/luciano__junior/"
                      className="icon fa-instagram alt"
                    >
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/juniorsk65"
                      className="icon fa-github alt"
                    >
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dribbble.com"
                      className="icon fa-dribbble alt"
                    >
                      <span className="label">Dribbble</span>
                    </a>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={me} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Values</h2>
              <p>
                Collaborating well is more important than someone's skillset.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-heartbeat"></span>
                <strong></strong> Passion
              </li>
              <li className="style2">
                <span className="icon fa-comments"></span>
                <strong></strong> Comunication
              </li>
              <li className="style3">
                <span className="icon fa-bullseye"></span>
                <strong></strong> Focus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong></strong> Curiosity
              </li>
              <li className="style5">
                <span className="icon fa-life-ring"></span>
                <strong></strong> Cooperation
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
          </section>
          <section id="second" className="main special">
            <header className="major">
              <h2>Toolbox</h2>
              <p>Front-End Development (Learning)</p>
            </header>
            <ul className="features">
              <li>
                {/* <CircularProgressbar value={percentage} text={`${percentage}%`} />; */}
                <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={55}>
                    <img style={{ width: 70, marginTop: -5 }} src="https://facebook.github.io/react-native/img/header_logo.svg"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>React Native</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={60}>
                    <img style={{ width: 80, marginTop: -5 }} src="https://image.flaticon.com/icons/png/512/919/919832.png"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>Typescript</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={45}>
                    <img style={{ width: 70, marginTop: -5 }} src="https://facebook.github.io/react-native/img/header_logo.svg"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>React JS</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={60}>
                    <img style={{ width: 80, marginTop: -5 }} src="https://cdn.iconscout.com/icon/free/png-512/code-280-460136.png"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>HTML | CSS</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={45}>
                    <img style={{ width: 70, marginTop: -5 }} src="https://avatars1.githubusercontent.com/u/12551863?s=200&v=4"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>Gatsby</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={30}>
                    <img style={{ width: 70, marginTop: -5 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>PHP</h3>
              </li>
            </ul>
            <header className="major">
              <p>Back-End Development (Learning)</p>
            </header>
            <ul className="features">
              <li>
                 <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={60}>
                    <img style={{ width: 100, marginTop: -5 }} src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>Node JS</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={65}>
                    <img style={{ width: 70, marginTop: -5 }} src="https://cdn2.iconfinder.com/data/icons/web-application-3/100/app_application_web_software_settings_notifications_-05-512.png"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>Rest APIs</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={40}>
                    <img style={{ width: 80, marginTop: -5 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>GraphQL</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={65}>
                    <img style={{ width: 80, marginTop: -5 }} src="https://image.flaticon.com/icons/png/512/274/274439.png"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>MySQL</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <CircularProgressbarWithChildren style={{width: 100}} value={10}>
                    <img style={{ width: 80, marginTop: -5 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"/>
                  </CircularProgressbarWithChildren>
                </span>
                <h3>AWS</h3>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Blog
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Work</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
