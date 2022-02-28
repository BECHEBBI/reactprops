import React from 'react';
import myImg from './img/proImg.jpg';
import ProfileComponent from './profile/ProfileComponent';
import './Style.css'
const userProfile = {
  fullName :'Baha Eddine CHEBBI',
  bio : 'hello its me Baha Eddine',
  profession : 'Front end developper',
  proimg:  myImg
  };

  const handleName = (fullName) => {alert(`The user's name is: ${fullName}.`)}
const App = () => {
  return (
    <div>
      <ProfileComponent user = {userProfile} handleName = {handleName} />
      
    </div>
  )
}

export default App
