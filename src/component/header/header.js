import React, {Component} from 'react';
import './header.css'
import { Link } from 'react-router-dom'

import { Menu , Header, Icon} from 'semantic-ui-react'

class HeaderMain extends Component {
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
            <Header as='h2' className = 'header-main'>
               <Icon name='github square' />
               <Header.Content>Simple Forum</Header.Content>
               <Header.Subheader>Keeping things real simple.</Header.Subheader>
            </Header>
            <div>
            <Menu className = 'menu-main'>
                  <Menu.Item>
                     <Link to ='/'>Homepage </Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to ='/user'>Userpage </Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to ='/topic'>Topic </Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to ='/createtopic'>Create Topic</Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to ='/login'>Login</Link>
                  </Menu.Item>
               </Menu>

            </div>
         </div>
      )
   }
}

export default HeaderMain