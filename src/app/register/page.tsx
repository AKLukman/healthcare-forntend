/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import Image from "next/image"
import logo from "../../assets/svgs/logo.svg"
import Link from "next/link"
import { Link as MuiLink } from '@mui/material';
import { FieldValues } from "react-hook-form"
import { modifyPayloads } from "@/utils/modifyPayload"
import { registerPatient } from "@/services/actions/registerPatient"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { loginUser } from "@/services/actions/loginUser"
import { storeUserInfo } from "@/services/auth.services"
import HCForm from "@/components/Forms/HCForm"
import HCInputs from "@/components/Forms/HCInputs"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

const patientValidationSchema = z.object( {
  name: z
    .string()
    .min( 1, "Name is required" ),

  email: z
    .string()
    .email( "Please enter a valid email address!" )
    .nonempty( "Email is required!" ),

  address: z
    .string()
    .min( 1, "Address is required" ),

  contactNumber: z
    .string()
    .min( 11, "Contact number must be at least 11 digits" )
    .max( 15, "Contact number is too long" )
    .regex( /^\+?[0-9\s\-]{11,15}$/, "Invalid contact number format" )
} );

const validationSchema = z.object( {
  password: z.string().min( 6, "Password must be at least 6 characters long" ),
  patient: patientValidationSchema
} )

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    address: "",
    contactNumber: ""
  }
}


const RegisterPage = () => {
  const router = useRouter()
  const [ error, setError ] = useState( "" )

  const hanldeRegistration = async ( values: FieldValues ) => {
    const data = modifyPayloads( values );
    try {
      const res = await registerPatient( data )
      if ( res.data.id ) {
        toast.success( res?.message )
        const result = await loginUser( { password: values.password, email: values.patient.email } );
        if ( result?.data?.accessToken ) {
          await storeUserInfo( { accessToken: result?.data?.accessToken } )
          router.push( "/dashboard" )
        } else {
          setError( result.message )
        }


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
              <Typography variant="h6" fontWeight={600}>
                Patient Register
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
            <HCForm onSubmit={hanldeRegistration} resolver={zodResolver( validationSchema )} defaultValues={defaultValues}>
              <Grid container spacing={2}>
                <Grid size={{ md: 12 }} my={1}>
                  <HCInputs
                    label="Name"
                    name="patient.name"
                    fullWidth={true}
                  // required={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }} >
                  <HCInputs
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth={true}
                    name="patient.email"
                  // required={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <HCInputs
                    label="Password"
                    type="password"
                    size="small"
                    name="password"
                    fullWidth={true}
                  // required={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <HCInputs
                    label="Contact Number"
                    type="tel"
                    size="small"
                    fullWidth={true}
                    name="patient.contactNumber"
                  // required={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <HCInputs
                    label="Address"
                    type="text"
                    size="small"
                    fullWidth={true}
                    name="patient.address"
                  // required={true}
                  />
                </Grid>

              </Grid>
              <Button fullWidth={true} type="submit" sx={{ my: 2 }}>Register</Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <MuiLink href="/login" component={Link} color="primary" underline="hover">
                  Login
                </MuiLink>
              </Typography>
            </HCForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default RegisterPage
