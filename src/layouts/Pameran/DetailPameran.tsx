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
import FeaturedPost from '@/components/main/FeaturedPost';
import Main from '@/components/main/Main';
import Sidebar from '@/components/main/Sidebar';
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
const posts: any = [`# Sample blog post

_April 1, 2020 by [Olivier](/)_

This blog post shows a few different types of content that are supported and styled with
Material styles. Basic typography, images, and code are all supported.
You can extend these by modifying \`Markdown.js\`.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.
Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.
Aenean lacinia bibendum nulla sed consectetur.

## Heading

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

### Sub-heading 1

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

### Sub-heading 2

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
sit amet risus.

- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
- Donec id elit non mi porta gravida at eget metus.
- Nulla vitae elit libero, a pharetra augue.

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

1. Vestibulum id ligula porta felis euismod semper.
1. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
1. Maecenas sed diam eget risus varius blandit sit amet non magna.

Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
`];


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

export default function DetailPameran() {
  const { push } = useRouter();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header title="Antaratma" sections={sections} />
        
        <Button variant="outlined" sx={{ my: 3 }} onClick={() => push('/pameran')}>
            Go back
        </Button>

        <Grid container spacing={5}>
          
            <Main title="From the firehose" posts={posts} />

            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />

        </Grid>

      </Container>
      <Footer
        title="Footer"
        sections={sections}
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
