import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda'
import Data from './data';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/Data" component={Data} />
    </Switch>
)

export default Utama;