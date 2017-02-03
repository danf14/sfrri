import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class Progress extends React.Component {


  render() {
    return (
        <CircularProgress
          mode="determinate"
          
          style={{position:'absolute', top:'50%', left:'50%', color:'#fff', transform:'translate(-50%, -50%)', zIndex:'999',}}
          color={'#447ac7'}
        />
    );
  }
}

module.exports = Progress;