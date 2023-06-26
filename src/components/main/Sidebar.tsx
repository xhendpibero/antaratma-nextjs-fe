import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

interface SidebarProps {
  archives: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
  }>;
  title: string;
}

export default function Sidebar(props: SidebarProps) {
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Pameran Lainnya
      </Typography>
      {archives.slice(0,3).map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
        <Card sx={{ maxWidth: 345, borderBottom: '1px grey solid', mb: 3 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://source.unsplash.com/random?wallpapers"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {archive.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Detail are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        </Link>
      ))}
    </Grid>
  );
}
