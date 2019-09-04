import React, {Component} from 'react';
import './about.css'
import { Header} from 'semantic-ui-react';

class AboutMe extends Component {
render() {
   return (
      <div className='main-body'>
         <Header as='h1'>Hello There!</Header>
         <p className = 'main-paragraph'>
            Hello, my name is Dennis Ninic, I go by pupper-bot on github, or just Pupperbot, and I am a React full stack web developer!
            I am a huge nerd, and fell in love with web development when my boss showed me
            one of his projects for web development. I decided that I wanted to do the same
            thing, and here I am! 
         </p>

         <p className ='main-paragraph'>
            This Forum aptly named Simple-Forum, was one of my final projects for the coding bootcamp I have been taking this last year.
            This project started from the idea simplicity. I wanted the front end to be very minimal yet effective, with a comprehensive
            UI (I tried making it look presentable!), while keeping the codebase clean and easily readable.
            This site is mainly used to show my knowledge in both front and backend development using things such as:
            <ul>
               <li>Base React(State, Props, Hooks, etc.)</li>
               <li>Fetching from an API in the frontend</li>
               <li>Setting up my own API using Hapi, and Knex for hitting the database</li>
               <li>Knowledge behind Postgresql, and table structures</li>
               <li>Being able to use 3rd party Auth specifically Auth0</li>
            </ul>
            I have been working on this for the past couple weeks now, and am really proud with how much I have learned over the past year.
            This will always be a benchmark for my abilities as a web developer, and can not wait to become part of the community.
         </p>
         <p className ='main-paragraph'>
            I hope you all enjoy! Here are some helpful links to get you by:
            <ul>
               <li><a href = 'https://github.com/pupper-bot/simple-forum'>Github</a></li>
            </ul>
         </p>
      </div>
   )};
}


export default AboutMe