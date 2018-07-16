'use strict';

export default function(message) {
    let NODE_ENV = 'development';
    if (NODE_ENV == 'development') {
        console.log(message);
    }

    alert(`Welcome ${message}`);
};