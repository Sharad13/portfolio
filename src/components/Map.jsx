import React from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';

class GMap extends React.Component {
  render() {
    return (
      <div >
        <Map style={{
            width: '250px',
            height: '200px',
        
            
          }}
          google={this.props.google}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDYiRfZ4FYtT0xk-xjGCt-lj43BLpR75vM')
})(GMap);