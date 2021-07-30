// React.createElement( /* type */, /* props */, /* content */ );

import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('div',
    {
        className: 'welcome-message' //atribute
    }, 'hello')

console.log(element)

ReactDOM.render(
    element, document.getElementById('root')
)