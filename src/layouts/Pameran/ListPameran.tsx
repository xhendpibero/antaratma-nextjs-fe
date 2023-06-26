'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '@/components/main/Header';
import MainFeaturedPost from '@/components/main/MainFeaturedPost';
// import FeaturedPost from '../../components/main/FeaturedPost';
// import Main from './Main';
// import Sidebar from './Sidebar';
import Footer from '@/components/main/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CardActionArea, Card, CardContent, CardMedia, Chip, CardActions } from '@mui/material';
// import post1 from '@/blog-post.1.md';
// import post2 from '@/blog-post.2.md';
// import post3 from '@/blog-post.3.md';
import SwiperAutoSwitch from '@/components/Swiper/SwiperAutoSwitch';
import { useRouter } from 'next/navigation';
import useAxios from 'axios-hooks';
import { descTrim } from '@/tools/helper';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'Pameran', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Tentang Kami', url: '#' },
];

const sectionsOffline = [
  { title: 'The Truth Inside You', url: '#' },
  { title: 'Pameran Tetap', url: '#' },
  { title: 'ImersifA', url: '#' },
  { title: 'New Hope', url: '#' },
  { title: '2madison Chapter #2', url: '#' },
  { title: 'CHAIR: Limitless Odyssey', url: '#' },
  { title: 'Hotel for Play', url: '#' },
];

const sectionsOnline = [
  { title: 'The Truth Inside You', url: '#' },
  { title: 'Pameran Tetap', url: '#' },
  { title: 'ImersifA', url: '#' },
  { title: 'Pameran Tetap', url: '#' },
  { title: 'New Hope', url: '#' },
  { title: 'The Spirit Within', url: '#' },
];

const mainFeaturedPost = {
  title: 'Antaratma: Pameran Online dan Offline di Indonesia!',
  description:
    "Selamat datang di situs Pameran kami! Kami menyediakan informasi lengkap tentang pameran-pameran terbaru, baik yang dilaksanakan secara online maupun offline. Temukan beragam pilihan pameran yang menarik dan sesuai dengan kebutuhan Anda.",
  image: 'https://vps.chipkoding.tech/upload/img/pattern_react.png',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

// const posts = [post1, post2, post3];
// const posts = [post1];
const posts: any = [];


const sidebar = {
  title: 'antaratma',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ListPameran() {
  const { push } = useRouter();

  const [{ data: ListOfflineData = [] }] = useAxios<any>({
    baseURL: "https://airbnb-nodejs-simple.vercel.app",
    url: "/api/places",
  })

const [{ data: ListOnlineData = [] }] = useAxios<any>({
    baseURL: "https://airbnb-nodejs-simple.vercel.app",
    url: "/api/places",
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header title="Antaratma" sections={sections} />
        <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">

            <Box sx={{ mb:12 }} >
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Pameran Antaratma
            </Typography>
            <Typography align="center" color="text.secondary" paragraph>
            Kami menyediakan artikel-artikel terbaru seputar dunia pameran. Pelajari lebih lanjut tentang bagaimana memaksimalkan pengalaman dalam mengunjungi pameran dan tips-tips lainnya seputar dunia pameran. Jangan lewatkan kesempatan untuk meningkatkan pengetahuan Anda tentang pameran!
            </Typography>
            </Box>

            <Typography
              component="h4"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Pameran Offline
              </Typography>
              
            <Grid container spacing={4}>
            {ListOfflineData.map((e: any) => (
        <Grid item xs={12} sm={6} md={4} key={e._id}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {e.title}
                      </Typography>
                        <Typography>{descTrim(e.description)}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() =>  push('/pameran/' + e)} >View</Button>
                      {/* <Button size="small">Edit</Button> */}
                    </CardActions>
                  </Card>
                </Grid>
        ))}
            </Grid>

            <Typography
              component="h4"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Pameran Online
              </Typography>
              
            <Grid container spacing={4}>
            {ListOnlineData.map((e: any) => (
        <Grid item xs={12} sm={6} md={4} key={e._id}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {e.title}
                      </Typography>
                        <Typography>{descTrim(e.description)}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() =>  push('/pameran/' + e)} >View</Button>
                      {/* <Button size="small">Edit</Button> */}
                    </CardActions>
                  </Card>
                </Grid>
        ))}
            </Grid>
          </Container>
        </Box>
        </main>
      </Container>
      <Footer
        title="Footer"
        sections={sections}
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
