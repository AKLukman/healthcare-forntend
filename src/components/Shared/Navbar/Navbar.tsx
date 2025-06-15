"use client";
import { Box, Container, Stack, Typography } from "@mui/material"
import dynamic from "next/dynamic";
import Link from "next/link"



const Navbar = () => {
  const AuthButton = dynamic( () => import( '@/components/ui/AuthButton/AuthButton' ), { ssr: false } )

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>U<Box component="span" color="primary.main">K</Box> Health Care</Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultations">Consultations</Typography>
          <Typography>Health Plans</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>
        <AuthButton></AuthButton>
      </Stack>
    </Container>
  )
}

export default Navbar
