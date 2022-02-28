import React from 'react';
import propTypes from 'prop-types';



const ProfileComponent = (props) => {
  return (
    <div onClick={() => props.handleName(props.user.fullName)} >
        <div style={{marginTop:'50px' }} >
            <img className='proimg' width={250} src={props.user.proimg} alt="hello" />
            <div style={{float:'right',marginRight:'500px',marginTop:'100px'}}>
            <h3 className='nameofpro'> FullName :</h3><h4 className='nameoftxtpro'> {props.user.fullName}</h4>
            <br />
            <h3 className='nameofpro'> Bio :</h3><h4 className='nameoftxtpro'> {props.user.bio}</h4>
            <br />
            <h3 className='nameofpro'> Profession :</h3><h4 className='nameoftxtpro'> {props.user.profession}</h4>
            </div>
        </div>
    </div>
  )
}

ProfileComponent.defaultProps ={
    user:0
};



ProfileComponent.propTypes = {
    proimg : propTypes.object,
    fullName : propTypes.string,
    bio : propTypes.string,
    profession : propTypes.string
};


export default ProfileComponent
