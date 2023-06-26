import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'transparent',
        color: '#fff',
        mb: 4,
        backgroundSize: '700px',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        backgroundPosition: 'right 10px top 10px',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.0)',
        }}
      />
      <Grid container>
        <Grid item md={8}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 28 },
              pr: { xs: 10, md: 15},
              pl: { xs: 10, md: 15 },
            }}
          >
            <Typography component="h1" variant="h3"
              align="left"
              color="rgb(71,85,105)" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5"
              align="left"
              color="rgb(71,85,105)" paragraph>
              {post.description}
            </Typography>
            {/* <Link variant="subtitle1"
              align="center"
              href="#">
              {post.linkText}
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
