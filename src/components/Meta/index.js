import React from 'react'
import ZofeLink from '@components/ZofeLink'
import Search from '@components/Search'
import logo from '@images/zofe-logo.png'
import twitter from '@images/social-icons/twitter.svg'
import facebook from '@images/social-icons/facebook.svg'
import './styles.css'

const Header = ({ siteTitle }) => (
  <header className="main-header">
    <div className="header-content">
      <ZofeLink to="/" className="zofe-logo no-underline">
        <img src={logo} alt="ZOFE Logo - A yellow cube made of smaller cubes, written ZOFE in one face" />
      </ZofeLink>

      <nav className="main-menu">
        <Search />
        <hr />
        <ul>
          <li>
            <ZofeLink to="/">Home</ZofeLink>
          </li>
          <li>
            <ZofeLink to="/sobre">Sobre</ZofeLink>
          </li>
          <li>
            <ZofeLink to="/contato">Contato</ZofeLink>
          </li>
        </ul>

        <ul>
          <li>
            <ZofeLink to="https://twitter.com/zofepod" className="social-icon no-underline">
              <img src={twitter} alt="ZOFE no Twitter" />
            </ZofeLink>
          </li>
          <li>
            <ZofeLink to="https://fb.com/zofepod" className="social-icon no-underline">
              <img src={facebook} alt="ZOFE no Facebook" />
            </ZofeLink>
          </li>
        </ul>

          <h5 className="footer-feeds-title">Feeds</h5>
          <ul className="footer-feeds-list">
            <li className="footer-feed-item">
              <ZofeLink
                to="https://zofe.com.br/feed/podcast.xml"
                className="footer-feed-link"
                title="Podcast"
              >
                Podcast
              </ZofeLink>
            </li>
            <li className="footer-feed-item">
              <ZofeLink
                to="itpc://zofe.com.br/feed/podcast.xml"
                className="footer-feed-link"
                title="Apple Podcast"
              >
                Apple Podcast
              </ZofeLink>
            </li>
            <li className="footer-feed-item">
              <ZofeLink
                to="https://www.google.com/podcasts?feed=aHR0cHM6Ly96b2ZlLmNvbS5ici9mZWVkL3BvZGNhc3QueG1s"
                className="footer-feed-link"
                title="Google Podcast"
              >
                Google Podcast
              </ZofeLink>
            </li>
            <li className="footer-feed-item">
              <ZofeLink
                to="https://pca.st/dMr0"
                className="footer-feed-link"
                title="Pocketcasts"
              >
                Pocketcasts
              </ZofeLink>
            </li>
            <li className="footer-feed-item">
              <ZofeLink
                to="https://overcast.fm/itunes580335548/zone-of-front-enders-podcast"
                className="footer-feed-link"
                title="Overcast"
              >
                Overcast
              </ZofeLink>
            </li>
            <li className="footer-feed-item">
              <ZofeLink
                to="http://www.stitcher.com/s?fid=250044&refid=stpr"
                className="footer-feed-link"
                title="Stitcher"
              >
                Stitcher
              </ZofeLink>
            </li>
            <li className="footer-feed-item">
              <ZofeLink
                to="https://open.spotify.com/show/13Q4XtzJ1tSZ7trS4dSOf6?si=LOLsMSQFTcOLSG6a7VLPSw"
                className="footer-feed-link"
                title="Spotify"
              >
                Spotify
              </ZofeLink>
            </li>
            <li className="footer-feed-item">
              <ZofeLink
                to="https://zofe.com.br/feed/posts.xml"
                className="footer-feed-link"
                title="Posts"
              >
                Posts
              </ZofeLink>
            </li>
          </ul>
      </nav>
    </div>
  </header>
)

export default Header
