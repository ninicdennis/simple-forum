import React from 'react';
import './homepage.css'

import { useAuth0 } from "../../auth0-wrapper";
import ThreadBuild from './thread';

const Homepage = () => {
   const { loading, user } = useAuth0();

  if (loading || !user) {
   return (
      <div>
         <ThreadBuild userLog = {false}/>
      </div>

   );
 }
 return (
      <div>
         <ThreadBuild userLog = {user.nickname}/>
       </div>
 )

}

export default Homepage

//
