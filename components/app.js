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
import { RouterWrapper } from './router-wrapper'
import { PageWrapper } from './page-wrapper'
import { Footer } from './footer'

export const App = () =>
  <Router className='router'>
    <RouterWrapper>

      <PageWrapper class='page-wrapper'>
        <BoxesMenu items={colors} />
        <h1>Boxes</h1>

        <Switch>
          <Route exact path="/red" component={titles.RedTitle} />
          <Route exact path="/green" component={titles.GreenTitle} />
          <Route exact path="/blue" component={titles.BlueTitle} />
        </Switch>

        <Switch>
          <Route exact path="/red" component={Red} />
          <Route exact path="/green" component={Green} />
          <Route exact path="/blue" component={Blue} />
        </Switch>

        <br/>

        <BikesMenu items={bikes} />
        <h1>Bikes</h1>
        <Route path="/bikes/:id" component={Bike} />

        <div className='push'></div>
      </PageWrapper>

      <Route path="/(Red|Green|Blue|!bikes)" component={Footer} />

    </RouterWrapper>
  </Router>
