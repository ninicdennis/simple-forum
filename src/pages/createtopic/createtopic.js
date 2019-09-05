import React, {useState} from "react";
import './createtopic.css'
import { Header, Button, Input, TextArea } from 'semantic-ui-react'
import uuid from 'uuid/v1'
import { withRouter } from 'react-router-dom';

import { useAuth0 } from "../../auth0-wrapper";

const Profile = (props) => {
   var [title] = useState();
   var [body] = useState()
   var [currentUUID] = useState()

  const { loading, user } = useAuth0();
  currentUUID = uuid()

  if (loading || !user) {
    return (<Header as = 'h1'>Please Log in!</Header>
    );
  }
  const titleChange = (event) => {
   event.preventDefault()
   title = event.target.value
   console.log(title)
}

   const bodyChange = (event) => {
   event.preventDefault()
   body = event.target.value
   console.log(body)
}

   const submitTopic = (event) => {
   event.preventDefault()
   if(title === '' || body === '') {
   }
   else {
      var threadDay = new Date()
      var year = threadDay.getFullYear()
      var day = threadDay.getDay() + 1
      var month = threadDay.getMonth() + 1
      var totalDay = month + '/' + day + '/' + year

      fetch('http://localhost:5251/postthread', {
         method: 'POST',
         headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'

         },
         body: JSON.stringify({
            body: body,
            date_created : totalDay ,
            thread_id : currentUUID,
            title: title,
            user_created: user.nickname

         })
      }).then(response => {
         console.log(response)
         if(response.status === 200) {
            console.log('Successfully Posted.')
            console.log('Moving to: ', currentUUID)
         }
         props.history.replace('/topic/'+ currentUUID)
         console.log(this.props)


      })
   }
}
return (
   <div className = 'whitespace'>
   <span className = 'topicmain'>
      <Header as = 'h1' className = 'header-margin'>
      Submit a topic:
      </Header>
      <form className = 'formadjust' onSubmit = {e => {submitTopic(e)}}>
         <Header>
            Title:
         </Header>
         <Input type = 'text' value ={title} onChange = {titleChange} required/>
         <Header>
            Body: 
         </Header>
         <TextArea name = 'body' value = {body} onChange = {bodyChange} required/>
         <Button>Submit</Button>
         
      </form>
   </span>
</div>
  );
};

export default withRouter(Profile);