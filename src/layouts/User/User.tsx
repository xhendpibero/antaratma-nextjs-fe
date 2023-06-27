"use client"

import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Header from "@/components/main/Header"
import Footer from "@/components/main/Footer"
import Button from "@mui/material/Button"
import { useRouter } from "next/navigation"
import {
  Card,
  CardContent,
  Typography,
  Box,
  Icon,
  Divider,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  DialogActions,
  LinearProgress,
  styled,
  CardMedia,
} from "@mui/material"
import CustomAvatar from "@/components/mui/avatar"
import IconifyIcon from "@/components/icon"
import { getInitials } from "@/tools/get-initials"

interface ColorsType {
  [key: string]: any
}

const data: any = {
  id: 1,
  role: "admin",
  status: "active",
  username: "Daisy Patterson",
  avatarColor: "primary",
  country: "El Salvador",
  company: "Yotz PVT LTD",
  contact: "(479) 232-9151",
  currentPlan: "enterprise",
  fullName: "Daisy Patterson",
  email: "gslixby0@abc.net.au",
  avatar: "/images/avatars/4.png",
}

const sections = [
  { title: "Home", url: "#" },
  { title: "Pameran", url: "#" },
  { title: "Blog", url: "#" },
  { title: "Tentang Kami", url: "#" },
]

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function DetailPameran() {
  const { push } = useRouter()

  // ** States
  const [openEdit, setOpenEdit] = React.useState<boolean>(false)

  // Handle Edit dialog
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  if (data) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Header title="Antaratma" sections={sections} />

          <Button
            variant="outlined"
            sx={{ my: 3 }}
            onClick={() => push("/")}
          >
            Go back
          </Button>

          <Grid container spacing={6}>
            <Grid item xs={12} md={5} lg={4}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Card>
                    <CardContent
                      sx={{
                        pt: 15,
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      {data.avatar ? (
                        <CustomAvatar
                          src={data.avatar}
                          variant="rounded"
                          alt={data.fullName}
                          sx={{
                            width: 120,
                            height: 120,
                            fontWeight: 600,
                            mb: 4,
                          }}
                        />
                      ) : (
                        <CustomAvatar
                          skin="light"
                          variant="rounded"
                          color={data.avatarColor as any}
                          sx={{
                            width: 120,
                            height: 120,
                            fontWeight: 600,
                            mb: 4,
                            fontSize: "3rem",
                          }}
                        >
                          {getInitials(data.fullName)}
                        </CustomAvatar>
                      )}
                      <Typography variant="h6" sx={{ mb: 2 }}>
                        {data.fullName}
                      </Typography>
                    </CardContent>

                    <CardContent>
                      <Typography variant="h6">Details</Typography>
                      <Divider
                        sx={{ mt: (theme) => `${theme.spacing(4)} !important` }}
                      />
                      <Box sx={{ pt: 2, pb: 1 }}>
                        <Box sx={{ display: "flex", mb: 2.7 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{ mr: 2, color: "text.primary" }}
                          >
                            Username:
                          </Typography>
                          <Typography variant="body2">
                            @{data.username}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", mb: 2.7 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{ mr: 2, color: "text.primary" }}
                          >
                            Billing Email:
                          </Typography>
                          <Typography variant="body2">{data.email}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", mb: 2.7 }}>
                          <Typography
                            sx={{
                              mr: 2,
                              fontWeight: 500,
                              fontSize: "0.875rem",
                            }}
                          >
                            Contact:
                          </Typography>
                          <Typography variant="body2">
                            +62 {data.contact}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", mb: 2.7 }}>
                          <Typography
                            sx={{
                              mr: 2,
                              fontWeight: 500,
                              fontSize: "0.875rem",
                            }}
                          >
                            Role:
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ textTransform: "capitalize" }}
                          >
                            {data.role}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>

                    <CardActions
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        variant="contained"
                        sx={{ mr: 2 }}
                        onClick={handleEditClickOpen}
                      >
                        Edit
                      </Button>
                    </CardActions>

                    <Dialog
                      open={openEdit}
                      onClose={handleEditClose}
                      aria-labelledby="user-view-edit"
                      aria-describedby="user-view-edit-description"
                      sx={{
                        "& .MuiPaper-root": { width: "100%", maxWidth: 900 },
                      }}
                    >
                      <DialogTitle
                        id="user-view-edit"
                        sx={{
                          textAlign: "center",
                          fontSize: "1.5rem !important",
                          px: (theme) => [
                            `${theme.spacing(5)} !important`,
                            `${theme.spacing(15)} !important`,
                          ],
                          pt: (theme) => [
                            `${theme.spacing(8)} !important`,
                            `${theme.spacing(12.5)} !important`,
                          ],
                        }}
                      >
                        Edit User Information
                      </DialogTitle>
                      <DialogContent
                        sx={{
                          pb: (theme) => `${theme.spacing(8)} !important`,
                          px: (theme) => [
                            `${theme.spacing(5)} !important`,
                            `${theme.spacing(15)} !important`,
                          ],
                        }}
                      >
                        <DialogContentText
                          variant="body2"
                          id="user-view-edit-description"
                          sx={{ textAlign: "center", mb: 7 }}
                        >
                          Updating user details will receive a privacy audit.
                        </DialogContentText>
                        <form>
                          <Grid container spacing={6}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                fullWidth
                                label="Full Name"
                                defaultValue={data.fullName}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                fullWidth
                                label="Username"
                                defaultValue={data.username}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      @
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                fullWidth
                                type="email"
                                label="Email"
                                defaultValue={data.email}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                fullWidth
                                label="Contact"
                                defaultValue={`+62 ${data.contact}`}
                              />
                            </Grid>
                          </Grid>
                        </form>
                      </DialogContent>
                      <DialogActions
                        sx={{
                          justifyContent: "center",
                          px: (theme) => [
                            `${theme.spacing(5)} !important`,
                            `${theme.spacing(15)} !important`,
                          ],
                          pb: (theme) => [
                            `${theme.spacing(8)} !important`,
                            `${theme.spacing(12.5)} !important`,
                          ],
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{ mr: 2 }}
                          onClick={handleEditClose}
                        >
                          Submit
                        </Button>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={handleEditClose}
                        >
                          Cancel
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h3"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Booking List
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {[1, 2, 3, 4, 5, 6].map((e) => (
                  <Grid item xs={12} sm={6} md={4} key={e}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          // 16:9
                          pt: "56.25%",
                        }}
                        image="https://source.unsplash.com/random?wallpapers"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to
                          describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={() => console.log('123')}>
                          View
                        </Button>
                        {/* <Button size="small">Edit</Button> */}
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Footer
          title="Footer"
          sections={sections}
          description="Something here to give the footer a purpose!"
        />
      </ThemeProvider>
    )
  } else {
    return null
  }
}
