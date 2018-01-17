import 'whatwg-fetch';
import { polyfill as promisePolyfill } from 'es6-promise';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import '../scss/index.scss';

import App from './App';

const api = axios.create({baseURL: "http://192.168.1.83:3001",
                          timeout: 2000
                        })

promisePolyfill();

const element = document.getElementById('content');
ReactDOM.render(<App />, element);

document.body.classList.remove('loading');
