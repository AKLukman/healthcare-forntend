/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import Image from "next/image"
import logo from "../../assets/svgs/logo.svg"
import Link from "next/link"
import { Link as MuiLink } from '@mui/material';
import { useRouter } from "next/navigation"
import { loginUser } from "@/services/actions/loginUser"
import { toast } from "sonner"
import { storeUserInfo } from "@/services/auth.services"
import HCForm from "@/components/Forms/HCForm"
import { FieldValues } from "react-hook-form"
import HCInputs from "@/components/Forms/HCInputs"
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react"

const loginValidationSchema = z.object( {
  email: z
    .string()
    .email( "Please enter a valid email address!" )
    .nonempty( "Email is required!" ),

  password: z
    .string()
    .nonempty( "Password is required!" )
} )


const LoginPage = () => {
  const router = useRouter()
  const [ error, setError ] = useState( "" )

  const handleLogin = async ( values: FieldValues ) => {

    try {
      const res = await loginUser( values );
      if ( res?.data?.accessToken ) {
        await storeUserInfo( { accessToken: res?.data?.accessToken } )
        toast.success( res.message )
        router.push( "/dashboard" )
      } else {
        setError( res.message )
        console.log( res.message )
      }

    } catch ( error: any ) {
      console.log( error.message )
    }
  }
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
              <Typography variant="h6" fontWeight={600} >
                Login UK Healthcare
              </Typography>
            </Box>
          </Stack>
          {
            error && ( <Box>
              <Typography sx={{
                color: "error.main",
                backgroundColor: "#fdecea", // light red background
                border: "1px solid",
                borderColor: "error.main",
                borderRadius: 1,
                p: 1.5,
                mt: 2,
                fontSize: "0.875rem",
                textAlign: "center",
              }}>{error}</Typography>
            </Box> )
          }
          <Box>
            <HCForm onSubmit={handleLogin} resolver={zodResolver( loginValidationSchema )} defaultValues={{
              email: '',
              password: '',
            }}>
              <Grid container spacing={2} my={2}>

                <Grid size={{ md: 6 }}  >
                  <HCInputs
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  // required={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <HCInputs
                    name="password"
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth={true}
                  // required={true}

                  />
                </Grid>

              </Grid>
              <Typography textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>
              <Button type="submit" fullWidth={true} sx={{ my: 2 }}>Login</Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account? <MuiLink href="/register" component={Link} color="primary" underline="hover">
                  Create an account
                </MuiLink>
              </Typography>
            </HCForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default LoginPage
