import React from 'react'
import {Route, Switch } from "react-router";
import Home from "../home/Home"
import Header from "./Header"
import Footer from "./Footer"
import {Grid, Typography} from "@material-ui/core"
import Blog from "../blog/Blog"
import Contact from "../contact/Contact"
import About from "../about/About"
function NoMatch() {
    return <Grid container style={{ height: '100%' }} justify="center" alignItems="center">
      <Typography variant="h3" style={{ color: 'green' }} component="h5">404 Not Found</Typography>
    </Grid>
  }

function componentName() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/blog"><Blog /></Route>
                <Route exact path="/contact"><Contact /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="*"><NoMatch /></Route>
                </Switch>
            <Footer />
        </div>
    )
}

export default componentName
