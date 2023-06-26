"use client"
import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useRouter } from "next/navigation"
import useAxios from "axios-hooks"
import { setCookie } from "@/tools/helper"
import { UserContext } from "@/app/UserContext"

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function SignInSide() {
  const { push } = useRouter()
  const { user, setUser } = React.useContext(UserContext)

  // const [{ data, loading, error }, refetch] = useAxios<any>({
  //   baseURL: "https://airbnb-nodejs-simple.vercel.app/",
  //   url: "/login",
  // });

  // const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
  //   'https://reqres.in/api/users/1'
  // )

  // const [{ data: ListData, loading, error }, refetch] = useAxios<any>({
  //   baseURL: "https://airbnb-nodejs-simple.vercel.app/",
  //   url: "/login",
  // });

  // const [
  //   { data: LoginData, loading: loginLoading, error: loginError },
  //   executeLogin
  // ] = useAxios(
  //   {
  //     baseURL: "https://airbnb-nodejs-simple.vercel.app/api",
  //     url: "/login",
  //     method: 'POST'
  //   },
  //   { manual: true }
  // )

  // function updateData() {
  // }

  // useEffect(() => {
  //   // console.log(push)
  //   // push('/');
  //     // if (!isReady) return; //The query string parameters might not be loaded straight away, but isReady will be true when they are
  //     // if (!query.userId) push('/examples/login');
  //     console.log({LoginData})
  // }, [LoginData]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    })

    const response = await fetch(
      "https://airbnb-nodejs-simple.vercel.app/api/login",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
        }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    )

    if (response.ok) {
      response.json().then((userInfo) => {
        console.log({ userInfo })
        setCookie("token", userInfo.token)
        setUser(userInfo)
        console.log({ user })
        push("/")
      })
    } else {
      alert("wrong credentials")
    }

    console.log({ response })

    // executeLogin({
    //   data: { email:  data.get('email'), password: data.get('password') }
    // })
  }

  // if (loginLoading) return <p>Loading...</p>
  // if (loginError) return <p>Error!</p>

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url("/images/bg-login.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgb(30,41,59)",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    Home
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
