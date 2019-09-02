import React from "react";
import { useAuth0 } from '../../auth0-wrapper';
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


  return (
   <div>
     {!isAuthenticated && (
       <Button
         onClick={() =>
           loginWithRedirect({})
         }
       >
         Log in
       </Button>
     )}

     {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
   </div>
 );
};

export default NavBar;