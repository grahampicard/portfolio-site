import React, { Component } from 'react'


const nwea = () => (
  <div className="portfolio-page">
    <h4>Why…</h4>
    <p>Many school data managers are former teachers. They interpret results and find insights quickly once the data is in a familiar format. However, many managers don't have the technical training to develop an ETL (extract-transform-load) process, and datasets come from vendors in disparate formats. For an R learning group, I developed a tool that streamlines the ETL process, provides some visualizations, and serves as a template for new R users to learn more about interactive tools.</p>
    <h4>What this tool does…</h4>
    <p>Thousands of schools across the country administer NWEA’s Measure of Academic Progress Assessment each year, and they all receive results in a CSV export available through their admin login. This proof-of-concept tool (developed with Shiny, styled with bootstrap) models how to:</p>
    <ol>
      <li>Use R to develop a basic ETL process that outputs CSV outputs</li>
      <li>Create reusable PNG visualizations that area ready to communicate high level results to executive audiences.</li>
    </ol>
    <h4>How to use it…</h4>
    <p><a href='https://grahampicard.shinyapps.io/shinydashboard-map/' target='_blank  '>View NWEA Assessment Tool on shinyapps.io</a> and use the example CSV to start the tool.</p>
    <p>All code available on <a href='https://github.com/grahampicard/shinydashboard-map'>Github</a></p>
  </div>
)
  
const spotify = () => (
  <div className="portfolio-page">
    <h4>Why…</h4>
    <p> Companies like Spotify have amassed an unbelievable amount of data on nearly every component of digital music. Many features of the data are made available to the public through APIs. After gaining access to a few APIs (Spotify and Songkick), I created simple web-app that makes this data digestible to non-technical audiences while learning the ins and outs of a few APIs and JavaScript visualization libraries. </p>
    <h4>What this tool does…</h4>
    <p>This site provdes:</p>
    <ol>
      <li> An overview of all the Audio Features (like tempo, duration, loudness) for each track on an album.</li>
      <li> A snapshot of the last 50 concerts that the artist/group has performed.</li>
    </ol>
    <h4>How to use it…</h4>
    <p> Type in an artist’s name and click “search”.</p>
    <p>All code available on <a href='https://github.com/grahampicard/spotify-album-vizualizer'>Github</a></p>
    <p><a href='https://grahampicard.shinyapps.io/artist-analyzer/' target='_blank  '>View Artist Tool on shinyapps.io</a></p>
  </div>
)

const wbc = () => (
  <div className="portfolio-page">
    <h4>Why…</h4>
    <p>Every four years, the World Baseball Classic takes over the MLB offseason. It’s a rare opportunity where sabermetricians and stats fans can compare the parity of international leagues. By creating a tool that compares player ranking and projecting performance, baseball fans can learn more about how leagues compare</p>
    <h4>What this tool does…</h4>
    <p>In this project, you can view <a href='https://twitter.com/TravisRPetersen?lang=en'>Travis Petersen</a>’s forecasted odds over the course of the tournament and compare the simulated performance of individual players.</p>
    <h4>Attributions</h4>
    <p>Calculations, projections, and data collection by Travis Petersen. Visualizations and front end development by me.</p>
    <p><a href='https://travisrpetersen.shinyapps.io/wbc_predictions/' target='_blank'>View projections on shinyapps.io</a></p>
  </div>
)

const surveymonkey = () => (
  <div className="portfolio-page">
    <h4>Why…</h4>
    <p>For 3,600 person event, there were  ~150 sessions all sharing the same survey template. SurveyMonkey’s out-of-the-box reporting left didn’t quite allow the granularity to allow us to cut the data in all the ways that we desired. To drive a Tableau dashboard that allowed our organization to monitor results in near real-time, I wrote a short wrapper to pull data directly from SurveyMonkey’s API once a session ends.</p>
    <h4>What this tool does…</h4>
    <p>This wrapper performs two main tasks:</p>
    <ol>
      <li>Pull survey design details for a given survey</li>
      <li>Pull all responses for a given survey</li>
    </ol>
    <p>All results are outputted in a pandas data format.</p>
    <h4>How to use it…</h4>
    <ol>
      <li>Register for a SurveyMonkey Premium account</li>
      <li>Create an application and get a bearer token</li>
    </ol>
    <p>Written for Python 3.x</p>
    <p>View code on <a href='https://github.com/grahampicard/survey-monkey-api-wrapper' target='_blank'>github</a></p>
  </div>
)

const pitchfork = () => (
  <div className="portfolio-page">
    <h4>Why…</h4>
    <p>When I was first learning Python, I was interested in the idea of web-scraping, APIs, and creating visualizations programmatically. To make these goals concrete, I decided to write a short blog post in which I analyzed my Spotify library to see if I am a 'Pitchfork guy'.</p>
    <h4>What datasets are included…</h4>
    <p>This post looks at two data sources</p>
    <ol>
      <li>Spotify - accessed through API</li>
      <li>Pitchfork - Scraped</li>
    </ol>
    <h4>Where to see it...</h4>
    <p>View code on <a href='https://github.com/grahampicard/spotify_pitchfork_metadata' target='_blank'>github</a></p>
    <p>View the post on my <a href='https://thesottovoce.wordpress.com/' target='_blank'>wordpress site</a></p>
  </div>
)

const marchmadness = () => (
  <div className="portfolio-page">
    <h4>Why…</h4>
    <p>Each year, students in <a href='https://twitter.com/TravisRPetersen?lang=en'>Travis Petersen</a>'s Fordham Sports Analytics spring class create models to predict the outcomes of the NCAA March Madness tournament. I developed a site to summarize the performance of the class over time, and the results of each individual game.</p>
    <h4>What to see...</h4>
    <p>On the landing page, you'll see a line graph that shows each student group's cumulative logloss (a measure of a model's error).</p>
    <p>Click on any game found in the navigation on the left to see how the class' predictions fared against the actual results.</p>
    <h4>Where to see it...</h4>
    <p>View code on <a href='https://github.com/grahampicard/spotify_pitchfork_metadata' target='_blank'>github</a></p>
    <p>View the site at the <a href='http://fordhamsportsanalytics.com/' target='_blank'>Fordham Sports Analytics Homepage</a></p>
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