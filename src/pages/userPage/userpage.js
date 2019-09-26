import React from "react";
import { useAuth0 } from "../../auth0-wrapper";
import {Header} from 'semantic-ui-react'
import UserInfo from "./userInfo";

const Userpage = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <Header as = 'h1'>Please Log in!</Header>
    );
  }
  
  return (

    <UserInfo 
    UserLogged = {user.nickname}
    UserRealName = {user.name}
    UserEmail = {user.email}
    UserPicture = {user.picture}/>
  );
};

export default Userpage;