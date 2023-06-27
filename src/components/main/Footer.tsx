import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Toolbar } from '@mui/material';
import Copyright from '@/components/CopyRight/Copyright';

interface FooterProps {
  description: string;
  title: string;
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  const sections = [
    { title: 'Home', url: '/' },
    { title: 'Pameran', url: '/pameran' },
    { title: 'Blog', url: '/artikel' },
    { title: 'Tentang Kami', url: '/about' },
  ];
  
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
      <Toolbar sx={{ borderTop: 1, borderColor: 'divider',justifyContent: 'center', overflowX: 'auto'  }}>
        <Box>
          
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
        </Box>
      </Toolbar>
        <Copyright />
      </Container>
    </Box>
  );
}
