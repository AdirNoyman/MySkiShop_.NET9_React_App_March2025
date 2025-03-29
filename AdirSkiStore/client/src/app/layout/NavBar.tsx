import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import SwitchDarkModeButton from './SwitchDarkModeButton';
import { Badge, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';

const pages = [
  { pageName: 'Products', path: '/catalog' },
  { pageName: 'About', path: '/about' },
  { pageName: 'Contact', path: '/contact' },
];
const authPages = [
  { pageName: 'Login', path: '/login' },
  { pageName: 'Register', path: '/register' },
];

type NavBarProps = {
  changeTheme: () => void;
  isDarkMode: boolean;
};

const NavBar = ({ changeTheme, isDarkMode }: NavBarProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{flexGrow: 0, display: 'flex', alignItems: 'center'}}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            SkiStore
          </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <ListItem
                  component={NavLink}
                  key={page.pageName}
                  onClick={handleCloseNavMenu}
                  to={page.path}
                >
                  <Typography sx={{ textAlign: 'center',color: '#4096ec', '&:hover': {color: '#000000'}, '&:active': {color: '#000000'} }}>
                    {page.pageName}
                  </Typography>
                </ListItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            SkiStore
          </Typography>
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <ListItem
                component={NavLink}
                to={page.path}
                key={page.pageName}
                onClick={handleCloseNavMenu}
                sx={{ textAlign: 'center',color: '#f0f2f5', '&:hover': {color: '#ee8f13'}, '&:active': {color: '#ee8f13'} }}
              >
                {page.pageName}
              </ListItem>
            ))}
          </Box>
          <Box sx={{flexGrow: 0, display: 'flex', alignItems: 'center'}}>
          {/*  CART ICON   */}
          <IconButton size="large" sx={{ mr: 1 }} color="inherit">
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <SwitchDarkModeButton
            checked={isDarkMode}
            onClick={() => changeTheme()}
          />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Adir" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {authPages.map((authPage) => (
                <ListItem
                  component={NavLink}
                  key={authPage.pageName}
                  onClick={handleCloseUserMenu}
                  to={authPage.path}
                >
                  <Typography sx={{ textAlign: 'center' }}>
                    {authPage.pageName}
                  </Typography>
                </ListItem>
              ))}
            </Menu>
          </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
