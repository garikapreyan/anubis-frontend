import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  MenuItem,
  Container,
  Menu,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  NestedMenuItem
} from 'mui-nested-menu';
import {
  Language as LanguageIcon,
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  LocalMall as LocalMallIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

import logo from '../../images/logo.png';
import SearchDialog from '../SearchDialog';

const pages = [
  {
    id: 1,
    name: 'Knives',
    parent_id: null,
  },
  {
    id: 10,
    name: 'Chef Knife__',
    parent_id: 1,
  },
  {
    id: 134,
    name: 'Chef Knife__++',
    parent_id: 10,
  },
  {
    id: 135,
    name: 'Chef Knife__+++',
    parent_id: 10,
  },
  {
    id: 11,
    name: 'Chef Knife___',
    parent_id: 1,
  },
  {
    id: 12,
    name: 'Chef Knife____',
    parent_id: 1,
  }, {
    id: 13,
    name: 'Chef Knife_____',
    parent_id: 1,
  }, // .......................... 1
  {
    id: 2,
    name: 'Sharpening Tools',
    parent_id: null,
  },
  {
    id: 20,
    name: 'Chef Knife+',
    parent_id: 2,
  },
  {
    id: 21,
    name: 'Chef Knife++',
    parent_id: 2,
  }, // ....................... 2
  {
    id: 3,
    name: 'Accessories',
    parent_id: null,
  },
  {
    id: 30,
    name: 'Accessories....',
    parent_id: 3,
  },
  {
    id: 31,
    name: 'Accessories---',
    parent_id: 3,
  },
  {
    id: 32,
    name: 'Accessories+++',
    parent_id: 3,
  }, // ...................................3
  {
    id: 4,
    name: 'Electronics',
    parent_id: null,
  },
  {
    id: 40,
    name: 'Chef Knife.',
    parent_id: 4,
  },
  {
    id: 41,
    name: 'Chef Knife..',
    parent_id: 4,
  },
  {
    id: 42,
    name: 'Chef Knife...',
    parent_id: 4,
  },
  {
    id: 43,
    name: 'Chef Knife....',
    parent_id: 4,
  }, // ...............  4
  {
    id: 5,
    name: 'Clothes',
    parent_id: null,
  },
  {
    id: 50,
    name: 'Chef Knife-',
    parent_id: 5,
  },
  {
    id: 51,
    name: 'Chef Knife--',
    parent_id: 5,
  }, // ...................... 5
];
const languages = ['Հայերեն', 'English', 'Русский'];

function Header() {
  const [searchDialogOpened, setSearchDialogOpened] = React.useState(false);

  const handleOpenSearchDialog = () => {
    setSearchDialogOpened(true);
  };

  const handleCloseSearchDialog = () => {
    setSearchDialogOpened(false);
  };
  const styles = (theme) => ({
    appBar: {
      backgroundColor: 'aliceblue',
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(1),
    },
    container: {
      padding: '0 !important'
    },
    link: {
      mx: theme.spacing(0.5),
      color: theme.palette.primary.main,
      fontSize: theme.spacing(2.5),
      [theme.breakpoints.up('xl')]: {
        fontSize: theme.spacing(3),
        mx: theme.spacing(1),
      },
    },
    icon: {
      p: 0,
      color: 'primary.main',
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(-0.25),
        fontSize: theme.spacing(3),
      },
      [theme.breakpoints.up('xl')]: {
        margin: theme.spacing(1),
        fontSize: theme.spacing(4),
      },
    }
  });
  const [anchorElLanguage, setAnchorElLanguage] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElSub, setAnchorElSub] = React.useState(null);
  const theme = useTheme();
  const classes = styles(theme);
  const mainMenu = pages.filter((item) => !item.parent_id);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenSubMenu = (e) => {
    setAnchorElSub(e.currentTarget);
  };

  const handleOpenLanguageMenu = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseSubMenu = (id) => {
    setAnchorElSub(null);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null);
  };

  return (
    <AppBar position="static" sx={classes.appBar}>
      <Container maxWidth="xl" sx={classes.container}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              paddingTop: theme.spacing(1.5),
              display: {
                xs: 'flex',
                lg: 'none',
              },
            }}
          >
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon sx={classes.icon} />
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
              sx={{
                display: {
                  xs: 'block',
                  lg: 'none',
                },
              }}
            >
              {pages.map((e) => (!e.parent_id
                && (
                <NestedMenuItem
                  key={e.id}
                  label={e.name}
                  parentMenuOpen={Boolean(anchorElNav)}
                >
                  {pages.map((item) => (item.parent_id === e.id
                    && (
                    <MenuItem
                      key={item.id}
                      onClick={() => handleCloseNavMenu(item.id)}
                    >
                      {item.name}
                    </MenuItem>
                    )
                  ))}
                </NestedMenuItem>
                )
              ))}
            </Menu>
          </Box>
          <Typography
            href="#/"
            sx={{
              flexGrow: 1,
              height: theme.spacing(8),
              [theme.breakpoints.down('sm')]: {
                height: theme.spacing(6),
              },
              [theme.breakpoints.up('xl')]: {
                height: theme.spacing(9)
              },
            }}
          >
            <img
              src={logo}
              alt="Anubis knife"
              style={{
                height: '100%',
              }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              paddingTop: theme.spacing(2.5),
              display: {
                xs: 'none',
                lg: 'flex',
              },
            }}
          >
            {mainMenu.map((elem) => (
              <Box key={elem.id}>
                <Button
                  onClick={handleOpenSubMenu}
                  sx={classes.link}
                  id={elem.id}
                  >
                  {elem.name}
                </Button>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElSub}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  open={!!anchorElSub && +anchorElSub.id === +elem.id}
                  onClose={handleCloseSubMenu}
                  >
                  {pages.map((item) => (item.parent_id === elem.id
                      && (
                      <MenuItem
                        key={item.id}
                        onClick={() => handleCloseSubMenu(item.id)}
                        sx={classes.link}
                      >
                        {item.name}
                      </MenuItem>
                      )
                  ))}
                </Menu>
              </Box>
            ))}
          </Box>
          {/* ......................................    right box   .................................................. */}
          <Box
            sx={{
              flexGrow: 0,
              paddingTop: theme.spacing(1.5),
            }}
          >
            <Tooltip title="Search">
              <IconButton
                onClick={handleOpenSearchDialog}
              >
                <SearchIcon sx={classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="User settings">
              <IconButton
                // onClick={handleOpenUserMenu}
              >
                <AccountCircleIcon sx={classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Your shoppings">
              <IconButton
                // onClick={handleOpenShopp}
              >
                <LocalMallIcon sx={classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Language">
              <IconButton
                onClick={handleOpenLanguageMenu}
              >
                <LanguageIcon sx={classes.icon} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElLanguage}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={!!anchorElLanguage}
              onClose={handleCloseLanguageMenu}
            >
              {languages.map((language) => (
                <MenuItem key={language} onClick={handleCloseLanguageMenu}>
                  <Typography textAlign="center">{language}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <SearchDialog
        open={!!searchDialogOpened}
        onClose={handleCloseSearchDialog}
      />
    </AppBar>
  );
}
export default Header;
