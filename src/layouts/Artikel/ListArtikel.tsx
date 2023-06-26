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

export default function ListArtikel() {
  const { push } = useRouter();

  const redirect = (id: any) => {
    push('/artikel/' + id)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header title="Antaratma" sections={sections} />
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          {/* <Grid container spacing={5} sx={{ mt: 3 }}> */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            {/* <Typography
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Kunjungi Pameran
            </Typography>
            <Typography align="center" color="text.secondary" paragraph>
            Anda dapat mencari Pameran baik yang dilaksanakan secara online maupun offline
            </Typography>
            
            <Grid sx={{ pt: 14 }}>
              <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                  <CardContent sx={{ flex: 1, pr: 8, pt: 6 }}>
                    <Typography component="h2" variant="h4" sx={{ mb: 3 }}>
                    Pameran Offline
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                    Nikmati pengalaman langsung dalam mengunjungi pameran offline terbaru kami. Dapatkan kesempatan untuk melihat produk-produk unggulan dari para peserta pameran. Jangan lewatkan kesempatan ini!
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {sectionsOffline.map((e) => (
                      <Chip label={e.title} sx={{ mb: 1, mr: 1 }} />
                      ))}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
                    Lihat Semua...
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ width: '50%', display: { xs: 'none', sm: 'block' } }}
                    image={'https://vps.chipkoding.tech/upload/img/point-4.jpg'}
                    alt={'....'}
                  />
                </Card>
              </CardActionArea>
            </Grid>
            
            <Grid sx={{ pt: 14 }}>
              <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: '50%', display: { xs: 'none', sm: 'block' } }}
                    image={'https://vps.chipkoding.tech/upload/img/point-3.jpg'}
                    alt={'....'}
                  />
                  <CardContent sx={{ flex: 1, pl: 8, pt: 6 }}>
                    <Typography component="h2" variant="h4" 
              align="right"
              sx={{ mb: 3 }}>
                    Pameran Online
                    </Typography>
                    <Typography variant="subtitle1"
              align="right"
              paragraph>
                    Nikmati pengalaman langsung dalam mengunjungi pameran offline terbaru kami. Dapatkan kesempatan untuk melihat produk-produk unggulan dari para peserta pameran. Jangan lewatkan kesempatan ini!
                    </Typography>
                    <Typography variant="subtitle1"
              align="right"
              color="text.secondary">
                      {sectionsOffline.map((e) => (
                      <Chip label={e.title} sx={{ mb: 1, ml: 1 }} />
                      ))}
                    </Typography>
                    <Typography variant="subtitle1"
              align="right"
              color="primary" sx={{ mt: 1 }}>
                    Lihat Semua...
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid> */}

            <Box sx={{ my:12 }} >
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Artikel Antaratma
            </Typography>
            <Typography align="center" color="text.secondary" paragraph>
            Kami menyediakan artikel-artikel terbaru seputar dunia pameran. Pelajari lebih lanjut tentang bagaimana memaksimalkan pengalaman dalam mengunjungi pameran dan tips-tips lainnya seputar dunia pameran. Jangan lewatkan kesempatan untuk meningkatkan pengetahuan Anda tentang pameran!
            </Typography>
            </Box>

            <Grid container spacing={4}>
            {[1,2,3,4,5,6].map((e) => (
        <Grid item xs={12} sm={6} md={4} key={e}>
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
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the
                        content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => redirect(e)} >View</Button>
                      {/* <Button size="small">Edit</Button> */}
                    </CardActions>
                  </Card>
                </Grid>
        ))}
            </Grid>

            {/* <SwiperAutoSwitch direction={'rtl'} /> */}
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
            {/* <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          {/* </Grid> */}
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
