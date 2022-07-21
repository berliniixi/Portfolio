import React from 'react'
import './portfolio.css'
import ECOMMERCE from '../../assets/gitHub1.jpg'
import EBANKING from '../../assets/gitHub2.jpg'
import GAME from '../../assets/gitHub3.jpg'
import GitHubButton from 'react-github-btn'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ECOMMERCE} alt="" />
          </div>

          <h3>E-Commerce</h3>
            <div className="portfolio__item-cta">
              <GitHubButton href="https://github.com/ntkme/github-buttons/subscription" data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_dimmed;" data-size="large" aria-label="Watch ntkme/github-buttons on GitHub">Watch</GitHubButton>   
              </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={EBANKING} alt="" />
          </div>

          <h3>E-Banking System</h3>
            <div className="portfolio__item-cta">
              <GitHubButton href="https://github.com/ntkme/github-buttons/subscription" data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_dimmed;" data-size="large" aria-label="Watch ntkme/github-buttons on GitHub">Watch</GitHubButton>   
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={GAME} alt="" />
          </div>

          <h3>Space Shooter Game</h3>
            <div className="portfolio__item-cta">
              <GitHubButton href="https://github.com/ntkme/github-buttons/subscription" data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_dimmed;" data-size="large" aria-label="Watch ntkme/github-buttons on GitHub">Watch</GitHubButton>   
            </div>
        </article>
      </div>
    </section >
  )
}

export default Portfolio