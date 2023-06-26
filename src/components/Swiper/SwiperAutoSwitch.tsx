// ** MUI Imports
import Box from '@mui/material/Box'
import { Button, Card, CardActions, CardContent, CardMedia, Direction, Grid, Typography } from '@mui/material'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperAutoSwitch = ({ direction }: { direction: Direction }) => {
  // ** Hook
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      rtl: direction === 'rtl',
      slides: {
        perView: 3,
        spacing: 16
      },
    },
    [
      slider => {
        let mouseOver = false
        let timeout: number | ReturnType<typeof setTimeout>
        const clearNextTimeout = () => {
          clearTimeout(timeout as number)
        }
        const nextTimeout = () => {
          clearTimeout(timeout as number)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <Box ref={ref} className='keen-slider'>
      {[1,2,3,4,5,6].map(() => (
        
      <Box className='keen-slider__slide'>
      <Grid item xs={12} sm={6} md={4}>
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
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
      </Box>
      ))}
    </Box>
  )
}

export default SwiperAutoSwitch