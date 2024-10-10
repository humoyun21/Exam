import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'
import { colors } from '../../constants/colors';
const linkOne: string[] = ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases']
const linkTwo: string[] = ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact']
const linkThree: string[] = ['Blog', 'Newsletter', 'Events', 'Help center', 'Tutorials', 'Support']

const Footer: React.FC = () => {
  return (
    <Box
      component={'footer'}
      sx={{ background: colors.primary, py: 5 }}
    >
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={2}
          mb={10}
        >
          <Grid
            size={{ xs: 12, md: 4 }}
          >
            <Box>
              <Typography variant='h3' sx={{ color: colors.purple }}>Logo</Typography>
            </Box>
            <Box>
              <IconButton>
                <InstagramIcon sx={{ color: colors.purple }} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={{ color: colors.purple }} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ color: colors.purple }} />
              </IconButton>
              <IconButton>
                <PinterestIcon sx={{ color: colors.purple }} />
              </IconButton>
              <IconButton>
                <YouTubeIcon sx={{ color: colors.purple }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 8 }}
          >
            <Grid container spacing={2} gap={20} justifyContent={'space-between'} lineHeight={5}>
              <Grid size={{ xs: 12, md: 4 }} sx={{ ml: { xs: 0, md: 10 } }}>
                <Typography variant='h5'>Links</Typography>
                {linkOne.map((item, index) => (
                  <Stack key={index} >
                    <Typography variant='body2' sx={{ color: colors.purple, mt: 2 }}>{item}</Typography>
                  </Stack>
                ))}
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant='h5'>About Us</Typography>
                {linkTwo.map((item, index) => (
                  <Stack key={index}>
                    <Typography variant='body2' sx={{ color: colors.purple, mt: 2 }}>{item}</Typography>
                  </Stack>
                ))}
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant='h5'>Help Center</Typography>
                {linkThree.map((item, index) => (
                  <Stack key={index}>
                    <Typography variant='body2' sx={{ color: colors.purple, mt: 2 }}>{item}</Typography>
                  </Stack>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <Typography variant='body1' textAlign={'center'}>MAKEUP. Beauty Without Limits.</Typography>
          <Typography variant='body1' textAlign={'center'}>&copy; MAKEUP 2021-2024</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
