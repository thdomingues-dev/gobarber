import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Background = (props) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
        justifyContent: 'center',
        //alignItems: '',
      }}
      colors={['#7159c1', '#ab59c1']}
    >
      {props.children}
    </LinearGradient>
  );
}

export default Background;