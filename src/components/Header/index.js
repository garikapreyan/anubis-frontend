import * as React from 'react';
import {useRef} from 'react';
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

import {menuService} from '../../services';
import Loader from '../Loader';
import logo from '../../images/logo.png';
import SearchDialog from '../SearchDialog';

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
      backgroundColor: '#fff',
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(1),
      position: 'fixed',
      zIndex: '1000000',
      top: '0',
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
    },
    subMenu: {
      marginTop: '62px',
    },
  });
  const [anchorElLanguage, setAnchorElLanguage] = React.useState(null);
  const [languages, setLanguages] = React.useState([]);
  const [pages, setPages] = React.useState([]);
  const [selectedLanguage, setSelectedLanguage] = React.useState('');
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElSub, setAnchorElSub] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const isInitialMount = useRef(true);
  const theme = useTheme();
  const classes = styles(theme);
  const mainMenu = pages.filter((item) => !item.parent_id);

  const getMenu = (languageId) => {
    setIsLoading(true);
    menuService.getMenusAndSubmenus(languageId)
      .then((res) => {
        const {error, message, data} = res;
        if (error) {
          throw new Error(message);
        }

        setPages(data);
      })
      .catch((e) => {
        console.log(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const getLanguageList = () => {
    menuService.getLanguageList()
      .then((res) => {
        const {error, message, data} = res;
        if (error) {
          throw new Error(message);
        }

        const defaultLanguage = (data.length && data.find((item) => item.short_name === 'hy').id) || '';
        setLanguages(data);
        setSelectedLanguage(defaultLanguage);
        getMenu(defaultLanguage);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      getLanguageList();
    }
  });
  const handleOpenSubMenu = (id) => {
    const anchorEl = document.getElementById(id);
    setAnchorElSub(anchorEl);
  };
  const handleCloseSubMenu = () => {
    setAnchorElSub(null);
  };
  const handleOpenLanguageMenu = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null);
  };

  const handleSelectLanguage = (id) => {
    setSelectedLanguage(id);
    getMenu(id);
    handleCloseLanguageMenu();
  };
  const isLanguageSelected = (id) => id === selectedLanguage;

  return (
    <AppBar position="fixed" sx={classes.appBar}>
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
                  label={e.labels[0].label}
                  parentMenuOpen={Boolean(anchorElNav)}
                >
                  {pages.map((item) => (item.parent_id === e.id
                    && (
                    <MenuItem
                      key={item.id}
                      onClick={() => handleCloseNavMenu(item.id)}
                    >
                      {item.labels[0].label}
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
                  aria-owns={anchorElSub ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={() => handleOpenSubMenu(elem.id)}
                  onMouseOver={() => handleOpenSubMenu(elem.id)}
                  sx={classes.link}
                  id={elem.id}
                  >
                  {elem.labels[0].label}
                </Button>
                <Menu
                  sx={classes.subMenu}
                  id="menu-appbar"
                  anchorEl={anchorElSub}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  // keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={!!anchorElSub && anchorElSub.id === elem.id}
                  // open={Boolean(anchorElSub)}
                  onClose={handleCloseSubMenu}
                  MenuListProps={{
                    onMouseLeave: handleCloseSubMenu
                  }}
                  >
                  {pages.map((item) => (item.parent_id === elem.id
                      && (
                      <MenuItem
                        key={item.id}
                        onClick={() => handleCloseSubMenu(item.id)}
                        sx={classes.link}
                      >
                        {item.labels[0].label}
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
              sx={classes.subMenu}
              id="menu-appbar"
              anchorEl={anchorElLanguage}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={!!anchorElLanguage}
              onClose={handleCloseLanguageMenu}
            >
              {languages.map((language) => (
                <MenuItem
                  key={language.id}
                  onClick={() => handleSelectLanguage(language.id)}
                  selected={isLanguageSelected(language.id)}
                >
                  <Typography textAlign="center">{language.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Loader show={isLoading} />

      <SearchDialog
        open={!!searchDialogOpened}
        onClose={handleCloseSearchDialog}
      />
    </AppBar>
  );
}
export default Header;
