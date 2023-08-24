import type { FC } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header: FC = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Live
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
