import React, { Component } from 'react'


const nwea = () => (
  <div className="portfolio-page">
    <p><em>Featured at the Harvard Strategic Data Project Institute</em></p>
    <h4>Why</h4>
    <p>Many School data managers are former teachers and don't have technical training to develop ETL (extract-transform-load) processes.</p>
    <p>I developed a tool that does the heavy lifting in prepping data for analysis.</p>
    <h4>What</h4>
    <p>This proof-of-concept tool: processes raw CSVs, restructures them into data into database friendly format, and outputs charts ready for decks</p>
    <h4>Tech</h4>
    <ol>
      <li>R/Shiny</li>
      <li>Highcharts.js</li>
    </ol>
    <h4>Where</h4>
    <p><a href='https://grahampicard.shinyapps.io/shinydashboard-map/' target='_blank  '>shinyapps.io</a>, use the example CSV to start the tool.</p>
    <p>Code on <a href='https://github.com/grahampicard/shinydashboard-map'>GitHub</a></p>
  </div>
)
  
const spotify = () => (
  <div className="portfolio-page">
    <h4>Why</h4>
    <p>Spotify and Songkick make interesting available through their public APIs, and a simple web-app can make this data digestible to non-technical audiences</p>
    <h4>What</h4>
    <p>This site provdes an overview of Audio Features (tempo, duration, loudness, etc.) for each track on an album and snapshot of the last 50 concerts that the artist/group has performed.</p>
    <h4>Tech</h4>
    <ol>
      <li>R/Shiny</li>
      <li>Highcharts.js</li>
    </ol>
    <h4>Where</h4>
    <p><a href='https://grahampicard.shinyapps.io/artist-analyzer/' target='_blank  '>shinyapps.io</a>, type in an artist’s name and click “search” to start</p>
    <p>Code on <a href='https://github.com/grahampicard/spotify-album-vizualizer'>GitHub</a></p>
  </div>
)

const wbc = () => (
  <div className="portfolio-page">
    <h4>Why</h4>
    <p>Every four years, the World Baseball Classic takes over the MLB offseason. It’s a rare opportunity where sabermetricians and stats fans can compare the parity of international leagues. By creating a tool that compares player ranking and projecting performance, baseball fans can learn more about how leagues compare to one another</p>
    <h4>What</h4>
    <p>View <a href='https://twitter.com/TravisRPetersen?lang=en'>Travis Petersen</a>’s forecasted odds over the course of the tournament and compare the simulated performance of individual players.</p>
    <h4>Attributions</h4>
    <p>Calculations, projections, and data collection by Travis Petersen. Visualizations and front end development by me.</p>
    <h4>Tech</h4>
    <ol>
      <li>R/Shiny</li>
      <li>Highcharts.js</li>
    </ol>    
    <h4>Where</h4>
    <p><a href='https://travisrpetersen.shinyapps.io/wbc_predictions/' target='_blank'>shinyapps.io</a></p>
  </div>
)

const surveymonkey = () => (
  <div className="portfolio-page">
    <h4>Why</h4>
    <p>I was managing evalutaion for a 3,500+ person event, with ~150 sessions. I wrote a short wrapper to pull data directly from SurveyMonkey’s API to update Tableau dashboards.</p>
    <h4>What</h4>
    <p>This wrapper performs two main tasks:</p>
    <ol>
      <li>Pull survey design details for a given survey</li>
      <li>Pull all responses for a given survey</li>
    </ol>
    <h4>Tech</h4>
    <ol>
      <li>Python 3.x</li>
    </ol>
    <p>Requires a Premium SurveyMonkey account.</p>
    <h4>Where</h4>
    <p>Code on <a href='https://github.com/grahampicard/survey-monkey-api-wrapper' target='_blank'>GitHub</a></p>
  </div>
)

const pitchfork = () => (
  <div className="portfolio-page">
    <h4>Why</h4>
    <p>When I was first learning Python, I was interested in the idea of web-scraping, APIs, and creating visualizations programmatically. To make these goals concrete, I decided to write a short blog post in which I analyzed my Spotify library to see if I am a 'Pitchfork guy'.</p>
    <h4>What datasets are included</h4>
    <p>This post looks at two data sources</p>
    <ol>
      <li>Spotify - accessed through API</li>
      <li>Pitchfork - Scraped</li>
    </ol>
    <h4>Where</h4>
    <p><a href='https://thesottovoce.wordpress.com/' target='_blank'>thesottovoce.wordpress.com</a></p>
    <p>Code on <a href='https://github.com/grahampicard/spotify_pitchfork_metadata' target='_blank'>GitHub</a></p>
  </div>
)

const marchmadness = () => (
  <div className="portfolio-page">
    <h4>Why</h4>
    <p>Each year, students in <a href='https://twitter.com/TravisRPetersen?lang=en'>Travis Petersen</a>'s Fordham Sports Analytics spring class create models to predict the outcomes of the NCAA March Madness tournament. I developed a site to summarize the performance of the class over time, and the results of each individual game.</p>
    <h4>What to see</h4>
    <p>On the landing page, you'll see a line graph that shows each student group's cumulative logloss (a measure of a model's error).</p>
    <p>Click on any game found in the navigation on the left to see how the class' predictions fared against the actual results.</p>
    <h4>Where</h4>
    <p><a href='http://fordhamsportsanalytics.com/' target='_blank'>Fordham Sports Analytics Homepage</a></p>
  </div>  
)

const components = {
  'nwea': nwea,
  'spotify': spotify,
  'wbc': wbc,
  'surveymonkey': surveymonkey,
  'pitchfork': pitchfork,
  'marchmadness': marchmadness
}

export default components