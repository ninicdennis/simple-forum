import React from "react";
import { useAuth0 } from "../../auth0-wrapper";
import {Image, Header} from 'semantic-ui-react'

const Userpage = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <Header as = 'h1'>Please Log in!</Header>
    );
  }

  return (
    <div className = 'whitespace'>
      <Image src={user.picture} alt="Profile" size = 'small' />

      <Header as = 'h2'>Name: {user.name}</Header>
      <p>Email: {user.email}</p>
      <p>Username: {user.nickname}</p>
      <p>Posts: 0</p>
    </div>
  );
};

export default Userpage;