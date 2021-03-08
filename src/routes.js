import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Bin2Dec from './pages/Bin2Dec';

export default function Routes(){
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/bin2dec" exact component={Bin2Dec} />
         </Switch>
      </BrowserRouter>
   );
}