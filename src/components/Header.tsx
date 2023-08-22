import type { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header: FC = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Live
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
