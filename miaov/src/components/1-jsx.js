import React from 'react';
import ReactDOM from 'react-dom';

let firstName = 'Tengfei',
    lastName = 'Xi';

let comp = (
    <div style={
        {
            backgroundColor:'red',
            color: '#fff',
            width: 500,
            height:300,
        }
    }>
        <span>I'm a span</span>
        <p>{`我的名字是: ${firstName}  ${lastName}`}</p>
    </div>
);

ReactDOM.render(
    comp,
    document.getElementById('root')
);