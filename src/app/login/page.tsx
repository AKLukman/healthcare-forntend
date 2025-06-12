"use client"
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material"
import Image from "next/image"
import logo from "../../assets/svgs/logo.svg"
import Link from "next/link"
import { Link as MuiLink } from '@mui/material';

const LoginPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login UK Healthcare
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form>
              <Grid container spacing={2} my={2}>

                <Grid size={{ md: 6 }}  >
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>

              </Grid>
              <Typography textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>
              <Button fullWidth={true} sx={{ my: 2 }}>Login</Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account? <MuiLink href="/register" component={Link} color="primary" underline="hover">
                  Create an account
                </MuiLink>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default LoginPage
