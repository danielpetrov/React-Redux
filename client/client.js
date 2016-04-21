import React from 'react';
import {render} from 'react-dom';
import App from '../components/App';

(function iife() {
    'use strict';

    render(
        React.createElement(App),
        document.getElementById('app')
    );
}());