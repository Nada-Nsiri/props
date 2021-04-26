import React from 'react'
import PropTypes from 'prop-types';
function Profile({fullName, bio, profession,handleName,color,children} )  {
const stylee={ color:"red",textAlign:'center'}
   return (
      <div>

        <button onClick={handleName(fullName)}>{fullName}</button>
        <h1 style={{color:color}}>{bio}</h1>
        <h1 style={stylee}>{profession}</h1>
        {children}
    </div>
    );
}

 
Profile.defaultProps={
fullName:'anonyme',
bio:'biographie',
profession:'anonymeprofession',
handleName:() =>alert('anonyme'),
}
Profile.propTypes={
  fullName: PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string,
handleName:PropTypes.func

}


  export default Profile;
