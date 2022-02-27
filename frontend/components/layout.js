// create a react component

import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import useStyles from '../utils/styles'

export default function Layout ({children}){
    const classes = useStyles();
  return (
    <div>
        <Head>
            <title>Heatrave Store</title>
        </Head>
        <AppBar postion="static" className={classes.navbar}>
            <Toolbar>
                <Typography>Heatrave Store</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
            <Typography>
                All rights reserved. Heatrave Store
            </Typography>
        </footer>
    </div>
  )
}
