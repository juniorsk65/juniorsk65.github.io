import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>More about me</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
      Congue imperdie
    </section>
    <section>
      <h2>Contacts</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>João Pessoa - PB &bull; Brazil</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:juniorsk65@gmail.com">juniorsk65@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="https://twitter.com/" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://facebook.com" className="icon fa-facebook alt">
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
          <a href="https://dribbble.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">Edited by Luciano Jr</p>
    <p className="copyright">
      &copy; 2019. Design by Gatsby Starter:{' '}
      <a href="https://html5up.net">HTML5 UP</a>{' '}
    </p>
  </footer>
)

export default Footer
