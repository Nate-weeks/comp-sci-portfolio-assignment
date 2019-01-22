import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      classname: "App"
    }
    this.pickClass = this.pickClass.bind(this)
  }


  pickClass() {
    let arrayOfNames = ["App-purple", "App-red", "App-blue", "App-orange", "App-yellow", "App-green"];
    var randomnumber = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    return arrayOfNames[randomnumber]
  }

  onClick = (event) => {
    event.preventDefault()
    let name = this.pickClass();
    this.setState({classname: name})
  }

  render() {
    return (
      <div className={this.state.classname}>
      <h1>Nate Weeks</h1>
      <p>Hello Everybody, I've been doing various web developmenty things for
      the past two years or so.  I attended a web development bootcamp in boston
      called launch academy where we learned to develop dynamic apps using
      Ruby on Rails and React.  There I made a group project and a "breakable toy"
      using the technologies they taught us.  I've taken quite a few different web
      courses at marlboro and produced a few things that are still visible on the web.
      I'll link to them below.
      </p>
      <h2>Projects:</h2>
      <a href="https://admistus.herokuapp.com/">Launch Academy Breakable toy</a>
      <p>This was my final project at launch. It's basically a crud app that lets
      users keep track of kids in a school and some information associated with them.
      There's some conditional viewing code based on priviledges granted to different
      users and some interface pieces around transferring kids between facilities.
      Everything is hosted on heroku and all the images are on AWS, but it looks like
      that s3 bucket has expired and some things are a little broken.</p>
      <a href="https://starcation.herokuapp.com/">Launch Academy Group Project</a>
      <p>Group project at launch built on all the same technologies.  It's a
      review site for celestial bodies</p>
      <a href="https://community-house-data.herokuapp.com/">College React and Rails project</a>
      <p>Another project built on rails with a react front end to keep track of student
      data. This one is built specifically for Community house.  It has an interactive
      calendar and an entirely unpolished and unfinished user interface.</p>
      <a href="http://leslienate.tech">self-hosted web-site to play with cookies</a>
      <p>Here I worked with Leslie to set up a linnode and use it as a web-server
      with apache.  We did a few little demos, the one that is still up is using cookies to save username entries.</p>
      <a href="http://nate-weeks-portfolio.herokuapp.com">The link to this site!</a>
      <p>This site is built using <a href="https://github.com/facebook/create-react-app">
      create-react-app </a>and deployed to heroku.  I followed this guide to deploy it:
      <a href="https://blog.heroku.com/deploying-react-with-zero-configuration">  Deploying
      React with Zero Configuration</a> </p>
      <a href="https://github.com/Nate-weeks/pig-latin-translator">Pig-latin translator</a>
      <p>This is a firefox plugin I made with a group in the coding workshop that translates
      any page on the internet into pig-latin.  We used a recursive javascript function
      to select and alter all the text elements on the page. That function makes a fetch
      call to a flask server I hosted on a linnode at <a href= "http://leslienate.tech:81/piglatin">
      http://leslienate.tech:81/piglatin</a> that takes plaintext and outputs pig-latin.
      This was necessary because we wrote the translation program in python and couldn't
      integrate that into the plugin code.</p>

      <p>Here's a button that changes the color to a random rainbow color just to prove
      I'm using javascript!</p>
      <button onClick={this.onClick}>Rainbow colors</button>
      </div>
    );
  }
}

export default App;
