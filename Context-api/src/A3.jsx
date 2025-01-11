import React from 'react';
import { data, data1 } from './App';

function A3() {
  return (
    <data.Consumer>
      {(name) => (
        <data1.Consumer>
          {(gender) => (
            <h1>your name is {name} and gender is {gender}</h1>
          )}
        </data1.Consumer>
      )}
    </data.Consumer>
  );
}

export default A3;