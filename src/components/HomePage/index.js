import React from 'react';
import {
  Paper,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  useTheme,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Room as RumIcon
} from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import topBar from '../../images/narrov1.jpg';
import img from '../../images/n1.jfif';

const data = [
  {
    id: 12,
    name: 'first product',
    parent_id: 1,
    price: '15000 AM',
    description: 'Short description about the product n3.',
    img: '/image/img1.jfif',
  },
  {
    id: 100,
    name: 'second product',
    parent_id: 1,
    price: '24000 AM',
    description: 'Short description about the product n4.',
    img: '/image/img2.jfif',
  },
  {
    id: 110,
    name: 'third product',
    parent_id: 1,
    price: '19000 AM',
    description: 'Short description about the product n5.',
    img: '/image/img3.jfif',
  },
  {
    id: 120,
    name: 'fourth product',
    parent_id: 1,
    price: '16000 AM',
    description: 'Short description about the product n6.',
    img: '/image/img4.jfif',
  },
  {
    id: 10,
    name: 'fifth product',
    parent_id: 1,
    price: '25000 AM',
    description: 'Short description about the product n1.',
    img: '/image/img5.jfif',
  },
  {
    id: 11,
    name: 'sixth product',
    parent_id: 1,
    price: '18000 AM',
    description: 'Short description about the product n2.',
    img: '/image/img6.jfif',
  },
];

const xlItems = [];
const lgItems = [];
const mdItems = [];
const xsItems = [];
for (let i = 0; i < data.length - 3; i++) {
  xlItems.push(data.slice(i, i + 4));
}
for (let i = 0; i < data.length - 2; i++) {
  lgItems.push(data.slice(i, i + 3));
}
for (let i = 0; i < data.length - 1; i++) {
  mdItems.push(data.slice(i, i + 2));
}
for (let i = 0; i < data.length; i++) {
  xsItems.push(data.slice(i, i + 1));
}

function HomePage() {
  const styles = (theme) => ({
    wrapper: {
      padding: '0 !important',
      textAlign: 'center',
    },
    topBanner: {
      width: '100%',
    },
    cardsWrapper: {
      boxShadow: 'none',
    },
    card: {
      display: 'inline-block',
      margin: theme.spacing(1)
    },
    xlSlider: {
      maxWidth: 'xl',
      margin: '0 auto',
      padding: theme.spacing(4),
      display: {
        xs: 'none',
        xl: 'block',
      },
    },
    lgSlider: {
      maxWidth: 'xl',
      margin: '0 auto',
      padding: theme.spacing(4),
      display: {
        lg: 'block',
        xl: 'none',
        xs: 'none',
      },
    },
    mdSlider: {
      maxWidth: 'xl',
      margin: '0 auto',
      padding: theme.spacing(4),
      display: {
        md: 'block',
        lg: 'none',
        xs: 'none',
      },
    },
    xsSlider: {
      maxWidth: 'xl',
      margin: '0 auto',
      padding: theme.spacing(4),
      display: {
        xs: 'block',
        md: 'none',
      },
    },
    centerBord: {
      backgroundImage: `url(${'/image/col_bg.png'})`,
    },
    contentsBord: {
      maxWidth: 'xl',
      margin: '0 auto',
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(0),
    },
    bordItems: {
      display: 'inline-block',
      margin: `${theme.spacing(-24)} ${theme.spacing(10)} ${theme.spacing(0)} ${theme.spacing(10)}`,
    },
    hoverItems: {
      transform: 'rotate(90deg)',
      borderRadius: '50%',
      cursor: 'pointer',
      padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
      '&:hover': {
        background: 'radial-gradient(rgba(200,0,0,1) 10%, rgba(200,0,0,0) 65%)',
      }
    },
    foot: {
      backgroundImage: `url(${'/image/col_bg.png'})`,
      color: theme.palette.icon.main,
    },
    footContent: {
      maxWidth: 'md',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    footRightContent: {
      paddingTop: theme.spacing(7.5),
      paddingRight: theme.spacing(5),
      textAlign: 'left',
      fontSize: theme.spacing(2.5),
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
        paddingRight: 0,
        textAlign: 'center',
        position: 'relative',
        top: '-100px',
      },
    },
    footLeftContent: {
      position: 'relative',
      top: theme.spacing(-8),
    },
    iconWrapper: {
      position: 'relative',
      top: '-100px',
    },
    contactUsBtn: {
      color: theme.palette.icon.main,
      fontSize: theme.spacing(3),
    },
    infoIcons: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      position: 'relative',
      top: theme.spacing(0.5),
    },
  });
  const theme = useTheme();
  const classes = styles(theme);
  return (
    <Box sx={classes.wrapper}>
      <Box sx={classes.topBanner}>
        <img
          src={topBar}
          alt="topBar"
          style={{
            width: '100%',
          }}
        />
      </Box>
      <Carousel sx={classes.xlSlider} animation="fade" duration="500">
        {
          xlItems.map((item, index) => (
            <Paper
              key={index}
              item={item}
              sx={classes.cardsWrapper}
            >
              {
                item.map((elem) => (
                  <Card sx={classes.card} key={elem.id}>
                    <CardMedia
                      sx={{ height: 236, width: 348 }}
                      image={elem.img}
                      title="green iguana"
                    />
                    <CardContent item={item}>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{margin: '0 auto', width: '100%'}}>Shop now</Button>
                    </CardActions>
                  </Card>
                ))
              }
            </Paper>
          ))
        }
      </Carousel>
      <Carousel sx={classes.lgSlider} animation="fade" duration="500">
        {
          lgItems.map((item, index) => (
            <Paper
              key={index}
              item={item}
              sx={classes.cardsWrapper}
            >
              {
                item.map((elem) => (
                  <Card sx={classes.card} key={elem.id}>
                    <CardMedia
                      sx={{ height: 240, width: 354 }}
                      image={elem.img}
                      title="green iguana"
                    />
                    <CardContent item={item}>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{margin: '0 auto', width: '100%'}}>Shop now</Button>
                    </CardActions>
                  </Card>
                ))
              }
            </Paper>
          ))
        }
      </Carousel>
      <Carousel sx={classes.mdSlider} animation="fade" duration="500">
        {
          mdItems.map((item, index) => (
            <Paper
              key={index}
              item={item}
              sx={classes.cardsWrapper}
            >
              {
                item.map((elem) => (
                  <Card sx={classes.card} key={elem.id}>
                    <CardMedia
                      sx={{ height: 240, width: 354 }}
                      image={elem.img}
                      title="green iguana"
                    />
                    <CardContent item={item}>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{margin: '0 auto', width: '100%'}}>Shop now</Button>
                    </CardActions>
                  </Card>
                ))
              }
            </Paper>
          ))
        }
      </Carousel>
      <Carousel sx={classes.xsSlider} animation="fade" duration="500">
        {
          xsItems.map((item, index) => (
            <Paper
              key={index}
              item={item}
              sx={classes.cardsWrapper}
            >
              {
                item.map((elem) => (
                  <Card sx={classes.card} key={elem.id}>
                    <CardMedia
                      sx={{ height: 203, width: 300 }}
                      image={elem.img}
                      title="green iguana"
                    />
                    <CardContent item={item}>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{margin: '0 auto', width: '100%'}}>Shop now</Button>
                    </CardActions>
                  </Card>
                ))
              }
            </Paper>
          ))
        }
      </Carousel>
      <Box sx={classes.centerBord}>
        <Box sx={classes.contentsBord}>
          <Box sx={classes.bordItems}>
            <Box sx={classes.hoverItems}>
              <img
                src="/image/k1.webp"
                alt="knife"
                style={{
                  height: '300px',
                  display: 'block',
                }}
              />
            </Box>
            <span
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'white',
                display: 'inline-block',
                position: 'relative',
                top: '-120px',
              }}
            >
              QYUTO
            </span>
          </Box>
          <Box sx={classes.bordItems}>
            <Box sx={classes.hoverItems}>
              <img
                src="/image/k2.webp"
                alt="knife"
                style={{
                  height: '300px',
                  display: 'block',
                }}
              />
            </Box>
            <span
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'white',
                display: 'inline-block',
                position: 'relative',
                top: '-120px',
              }}
            >
              QYUTO
            </span>
          </Box>
          <Box sx={classes.bordItems}>
            <Box sx={classes.hoverItems}>
              <img
                src="/image/k3.webp"
                alt="knife"
                style={{
                  height: '300px',
                  display: 'block',
                }}
              />
            </Box>
            <span
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'white',
                display: 'inline-block',
                position: 'relative',
                top: '-120px',
              }}
            >
              QYUTO
            </span>
          </Box>
          <Box sx={classes.bordItems}>
            <Box sx={classes.hoverItems}>
              <img
                src="/image/k4.webp"
                alt="knife"
                style={{
                  height: '300px',
                  display: 'block',
                }}
              />
            </Box>
            <span
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'white',
                display: 'inline-block',
                position: 'relative',
                top: '-120px',
              }}
            >
              QYUTO
            </span>
          </Box>
        </Box>
      </Box>
      <Carousel sx={classes.xlSlider} animation="fade" duration="500">
        {
          xlItems.map((item, index) => (
            <Paper
              key={index}
              item={item}
              sx={classes.cardsWrapper}
            >
              {
                item.map((elem) => (
                  <Card sx={classes.card} key={elem.id}>
                    <CardMedia
                      sx={{ height: 236, width: 348 }}
                      image={elem.img}
                      title="green iguana"
                    />
                    <CardContent item={item}>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{margin: '0 auto', width: '100%'}}>Shop now</Button>
                    </CardActions>
                  </Card>
                ))
              }
            </Paper>
          ))
        }
      </Carousel>
      <Carousel sx={classes.lgSlider} animation="fade" duration="500">
        {
          lgItems.map((item, index) => (
            <Paper
              key={index}
              item={item}
              sx={classes.cardsWrapper}
            >
              {
                item.map((elem) => (
                  <Card sx={classes.card} key={elem.id}>
                    <CardMedia
                      sx={{ height: 240, width: 354 }}
                      image={elem.img}
                      title="green iguana"
                    />
                    <CardContent item={item}>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{margin: '0 auto', width: '100%'}}>Shop now</Button>
                    </CardActions>
                  </Card>
                ))
              }
            </Paper>
          ))
        }
      </Carousel>
      <Carousel sx={classes.mdSlider} animation="fade" duration="500">
        {
          mdItems.map((item, index) => (
            <Paper
              key={index}
              item={item}
              sx={classes.cardsWrapper}
            >
              {
                item.map((elem) => (
                  <Card sx={classes.card} key={elem.id}>
                    <CardMedia
                      sx={{ height: 240, width: 354 }}
                      image={elem.img}
                      title="green iguana"
                    />
                    <CardContent item={item}>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{margin: '0 auto', width: '100%'}}>Shop now</Button>
                    </CardActions>
                  </Card>
                ))
              }
            </Paper>
          ))
        }
      </Carousel>
      <Carousel sx={classes.xsSlider} animation="fade" duration="500">
        {
          xsItems.map((item, index) => (
            <Paper
              key={index}
              item={item}
              sx={classes.cardsWrapper}
            >
              {
                item.map((elem) => (
                  <Card sx={classes.card} key={elem.id}>
                    <CardMedia
                      sx={{ height: 203, width: 300 }}
                      image={elem.img}
                      title="green iguana"
                    />
                    <CardContent item={item}>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{margin: '0 auto', width: '100%'}}>Shop now</Button>
                    </CardActions>
                  </Card>
                ))
              }
            </Paper>
          ))
        }
      </Carousel>
      <Box sx={classes.foot}>
        <Box sx={classes.footContent}>
          <Box sx={classes.footLeftContent}>
            <img
              src="/image/Anubis.png"
              alt="knife"
              style={{
                width: '280px',
              }}
            />
            <Box sx={classes.iconWrapper}>
              <IconButton
                // onClick={handleOpenFacebook}
              >
                <FacebookIcon color="icon" sx={classes.icon} />
              </IconButton>
              <IconButton
                // onClick={handleOpenInstagram}
              >
                <InstagramIcon color="icon" sx={classes.icon} />
              </IconButton>
            </Box>
          </Box>
          <Box sx={classes.footRightContent}>
            <Box>
              <Button sx={classes.contactUsBtn}>Contact Us</Button>
              <Box>
                <RumIcon sx={classes.infoIcons} />
                <span>Armenia, Yerevan city</span>
              </Box>
              <Box>
                <EmailIcon sx={classes.infoIcons} />
                <span>knifeanubis@gmail.com</span>
              </Box>
              <Box>
                <PhoneIcon sx={classes.infoIcons} />
                <span>+374 41 647 648</span>
              </Box>
            </Box>
          </Box>
        </Box>
        <p
          style={{
            color: '#d6d6d6',
            fontSize: '18px',
            margin: 0,
            paddingBottom: '24px'
          }}
        >
          © 2023 Anubis Knife Shop
        </p>
      </Box>
    </Box>
  );
}

export default HomePage;
