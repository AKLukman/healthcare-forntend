import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import facebookIcon from "@/assets/landing_page/facebook.png"
import InstagramIcon from "@/assets/landing_page/instagram.png"
import TwiterIcon from "@/assets/landing_page/twitter.png"
import LinkedInIcon from "@/assets/landing_page/linkedin.png"

const FooterPage = () => {
    const date =new Date();
  return (
   <Box bgcolor="rgb(17,26,34)">
    <Container>
        <Stack direction="row" justifyContent="center" gap={4} py={5}>
          <Typography color='#fff' component={Link} href="/consultations">Consultations</Typography>
          <Typography color='#fff'>Health Plans</Typography>
          <Typography color='#fff'>Medicine</Typography>
          <Typography color='#fff'>Diagnostics</Typography>
          <Typography color='#fff'>NGOs</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={2} py={3}>
          <Image src={facebookIcon} alt='facebook' width={30} height={30}></Image>
          <Image src={InstagramIcon} alt='facebook' width={30} height={30}></Image>
          <Image src={LinkedInIcon} alt='facebook' width={30} height={30}></Image>
          <Image src={TwiterIcon} alt='facebook' width={30} height={30}></Image>
        </Stack>
        <div className='border-b-[1px] border-dashed border-amber-50'></div>
         <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2} py={3}>
            <Typography color='#fff' component='p'>
                &copy; {date.getFullYear()} UK Healthcare. All rights reserved.
            </Typography>
            <Typography color='#fff' variant="h5" component={Link} href="/" fontWeight={600}>U<Box component="span" color="primary.main">K</Box> Health Care</Typography>

             <Typography color='#fff' component='p'>
                Privacy Policy | Terms & Conditions
            </Typography>

        </Stack>
    </Container>
   </Box>
  )
}

export default FooterPage
