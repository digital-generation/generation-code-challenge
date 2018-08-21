import React, { Component } from 'react';
import './App.css';

import YourComponent from "./YourComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Welcome to the Digital Generation Code Challenge!</h1>
        <h3>Intro:</h3>

        <p>At Generation, we have many users: students, teachers, employers, and the core Generation team.</p>
        <p>Everything we do at Generation is centered around better serving the needs of these users. </p>
        <p>In your role, you'll be using your ninja JavaScript skills to empower Generation to better serve these users.</p>
        <p>That's why we've included this piece in the recruiting process. It gives you an opportunity to demonstrate your creative problem-solving, user-centric design, and coding style. </p>
        <h3> Here's how it works:</h3>
        <p></p>

        <p>Below are some real-life <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/User_story">user stories</a> that we face at Generation.</p>
        <p>We'd love to see how you use JS and React to address these user stories.</p>
        <p>Feel free to add libraries, create new components, or otherwise change the codebase. This app is yours!</p>
        <p>If you're having trouble, don't be afraid to ask for help!</p>

        <strong>Student user stories:</strong>
        <ul>
          <li>As a student, I want to see a map of <b>Mexico City</b></li>
          <li>As a student, I want to see a map that has <b>all the stores</b> represented as <b>markers/pins</b> on the map. (<a target="_blank"  rel="noopener noreferrer" href="https://developers.google.com/maps/documentation/javascript/examples/marker-simple">What a google maps marker is?</a>)</li>
          <li>As a student, I want to be able to click on a store marker and add it to a list of <b>'My Favorite Stores'</b></li>
          <li>As a student, I want to be able to click on a store in the <b>'My Favorite Stores'</b> and remove if from the list</li>
        </ul>

        <strong>Helpful tips:</strong>
        <ul>
          <li>Feel free to use our Google Maps API key: <b>AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A</b></li>
          <li>The list of stores is located in the file <b>store_directory.json</b> </li>
          <li><b>Focus on the user, not the technology.</b> A simple implementation that impresses the user is better than a super technical solution that impresses other developers.</li>
          <li>That said, code that is easy to follow is always appreciated :)</li>
        </ul>

        <YourComponent />
      </div>
    );
  }
}

export default App;
