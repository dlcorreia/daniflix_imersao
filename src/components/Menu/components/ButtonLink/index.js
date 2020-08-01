import React from 'react';

function Button(props) {

console.log(props);

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>

    );
}

export default Button;