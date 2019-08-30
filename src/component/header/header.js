import React, {Component} from 'react';
import './header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
   constructor(props) {
      super(props)
      this.state = {

      }
   }

   handleClick = (event) => {
      event.preventDefault()
      console.log(event.target.value)
   }
   render() {
      return (
         <div>
            <header>
               <h1>
                  Simple forum
                  <h2>
                     Making things simpler since 2019.
                  </h2>
               </h1>
            </header>
            <div className = 'router-bar'>
               <Link to ='/'>Homepage </Link>
               <Link to ='/user'>Userpage </Link>
               <Link to ='/topic'>Topic </Link>
               <Link to ='/createtopic'>Create Topic</Link>
               <Link to ='/login'>Login</Link>

            </div>
         </div>
      )
   }
}

export default Header