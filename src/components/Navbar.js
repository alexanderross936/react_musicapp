import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

function Navbar(){
    return (
        <div>
          <Grid Container>
            <Grid Item>
          <AppBar>
            <ToolBar>
              <MenuItem>
              <Button color="inherit">Login</Button>
              </MenuItem>
              <MenuItem>
              <Button>About</Button>
              </MenuItem>
            </ToolBar>
          </AppBar>
          </Grid>
      </Grid>
      </div>
    )
}

export default Navbar;