/* eslint-disable max-len */
import React from 'react';

export const Main = () => {
  return (
    <>
      <h1>About the Netflix Titles API</h1>
      <p>Data related to Netflix, which includes information such as the title of the content, director, cast, country of production, release year, and type. The data also includes information about the duration of the content, rating, and genre, among other attributes. This information can be leveraged by analysts to make informed decisions regarding content acquisition and distribution.</p>

      <h3>ROUTES</h3>
      <ul>
        <li>/directory = list all movies and tv-shows</li>
        <li>/directory/title/:title = a specific movie or tv-show, replace :title with the name of the movie/tv-show</li>
        <li>/directory/year/:year = get all the titles from a specific year, replace :title with the year (1988 for example)</li>
      </ul>
    </>

  )
}