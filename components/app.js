import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BoxesMenu } from './boxes/boxes-menu'
import * as titles from './boxes/titles'
import { colors } from './boxes/colors'
import { Red } from './boxes/red'
import { Green } from './boxes/green'
import { Blue } from './boxes/blue'
import { BikesMenu } from './bikes/bikes-menu'
import { bikes } from './bikes/bikes'
import { Bike } from './bikes/bike'

export const App = () =>
  <React.Fragment>
    <Router>
      <React.Fragment>

        <BoxesMenu items={colors} />
        <h1>Boxes</h1>

        <section>
          <Route exact path="/red" component={titles.RedTitle} />
          <Route exact path="/green" component={titles.GreenTitle} />
          <Route exact path="/blue" component={titles.BlueTitle} />
        </section>

        <Switch>
          <Route exact path="*/red" component={Red} />
          <Route exact path="*/green" component={Green} />
          <Route exact path="*/blue" component={Blue} />
        </Switch>
        </React.Fragment>
      </Router>

        <br/>

      <Router>
        <React.Fragment>
          <BikesMenu items={bikes} />
          <h1>Bikes</h1>
          <Route path="/bikes/:id" component={Bike} />
        </React.Fragment>
      </Router>


    </React.Fragment>


//NOTES: https://tylermcginnis.com/react-router-cannot-get-url-refresh/
