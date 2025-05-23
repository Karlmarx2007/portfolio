import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import Routes from './components/Routing/Routes';

import { faFileAlt, faDesktop, faObjectUngroup, faThumbsUp, faUsers, faAward, faHourglassStart, faCodeBranch, faEnvelope, faPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab,faFileAlt, faDesktop, faObjectUngroup, faThumbsUp, faUsers, faAward, faHourglassStart, faCodeBranch, faEnvelope, faPhone, faAddressCard);
ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
