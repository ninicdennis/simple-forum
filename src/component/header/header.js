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
                     <Link to ='/'>
                        <Icon name = 'home' />Home 
                        </Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to ='/createtopic'><Icon name = 'paper plane outline' />Create A Thread
                     </Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to ='/user'>
                        <Icon name ='cogs' />User Settings
                        </Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to ='/login'>
                        <Icon name='user outline' />Login
                        </Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to ='/topic'>Topic </Link>
                  </Menu.Item>
               </Menu>

            </div>
         </div>
      )
   }
}

export default HeaderMain