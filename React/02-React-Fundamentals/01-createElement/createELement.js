// React.createElement( /* type */, /* props */, /* content */ );

import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('div', null, 'hello')

console.log(element)

ReactDOM.render(
    element, document.getElementById('root')
)