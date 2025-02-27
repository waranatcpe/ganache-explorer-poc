import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Box, Link, Toolbar, Typography } from '@material-ui/core'

import './App.css'

export const Header: React.FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
        <Box paddingX={1}>
            <Typography variant="h4">
              <Link component={RouterLink} to="/" color="inherit">
                <b>BxScan</b>
              </Link>
            </Typography>
          </Box>
          { /* 
          <Box paddingX={1}>
          <Typography>
            <Link component={RouterLink} to="/conf" color="inherit">
              Configuration
            </Link>
          </Typography>
          </Box>
          */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
