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

import View360, {
  CubemapProjection,
  EquirectProjection,
} from "@egjs/react-view360"
import { useMemo } from 'react';


const sections = [
  { title: 'Home', url: '#' },
  { title: 'Pameran', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Tentang Kami', url: '#' },
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

  const data: any = {
    // Scene 1
    1: [
      {
        type: "search",
        yaw: 232,
        pitch: -14,
        book: 1,
      },
      {
        type: "search",
        yaw: 133,
        pitch: -18,
        book: 2,
      },
      {
        type: "search",
        yaw: 186,
        pitch: -17,
        book: 3,
      },
      {
        type: "link",
        yaw: 94,
        pitch: -8,
        text: "Economy\nCulture",
      },
    ],
    // Scene 2
    2: [
      {
        type: "search",
        yaw: 120,
        pitch: -23,
        book: 4,
      },
      {
        type: "link",
        yaw: -100,
        pitch: -12,
        text: "Technology\nScience",
      },
    ],
  }
  const [srcNum, setSrc] = React.useState(1)

  const hotspots = data[srcNum]

  const listSrc = [
    "vps.chipkoding.tech/upload/360/1.jpg",
    "vps.chipkoding.tech/upload/360/2.jpg",
    "vps.chipkoding.tech/upload/360/3.jpg",
    "vps.chipkoding.tech/upload/360/4.jpg",
    "vps.chipkoding.tech/upload/360/5.jpg",
    "vps.chipkoding.tech/upload/360/6.jpg",
    "vps.chipkoding.tech/upload/360/7.jpg",
    "vps.chipkoding.tech/upload/360/8.jpg",
    "vps.chipkoding.tech/upload/360/9.jpg",
    "vps.chipkoding.tech/upload/360/10.jpg",
    "vps.chipkoding.tech/upload/360/11.jpg",
    "vps.chipkoding.tech/upload/360/12.jpg",
    "vps.chipkoding.tech/upload/360/13.jpg",
    "vps.chipkoding.tech/upload/360/14.jpg",
    "vps.chipkoding.tech/upload/360/15.jpg",
    "vps.chipkoding.tech/upload/360/16.jpg",
    "vps.chipkoding.tech/upload/360/18.jpg",
    "vps.chipkoding.tech/upload/360/19.jpg",
  ]

  const projection = useMemo(
    () =>
      new EquirectProjection({
        src: listSrc[srcNum],
      }),
    [srcNum]
  )
  const changeProjection = React.useCallback(() => {
    // 2 if 1 or 1 if 2
    const nextRoom = 3 - srcNum
    setSrc(nextRoom)
  }, [srcNum])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header title="Antaratma" sections={sections} />
        
        <Button variant="outlined" sx={{ my: 3 }} onClick={() => push('/pameran')}>
            Go back
        </Button>

        <Box
          sx={{
            width: "100%",
            height: 500,
          }}
        >
          <View360
            className="CLASS_A"
            canvasClass="CLASS_B"
            hotspot={{
              zoom: true,
            }}
            projection={projection}
          />
        </Box>

        <Button variant="outlined" sx={{ my: 3 }} onClick={() => changeProjection()}>
            Back
        </Button>

        <Button variant="outlined" sx={{ my: 3 }} onClick={() => changeProjection()}>
            Next
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
