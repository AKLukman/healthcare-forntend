import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import gridImage from "@/assets/svgs/grid.svg"
import arrowImage from "@/assets/svgs/arrow.svg"
import doctor1Image from "@/assets/images/doctor1.png"
import doctor2Image from "@/assets/images/doctor2.png"
import doctor3Image from "@/assets/images/doctor3.png"
import Stetoscope from "@/assets/images/Stetoscope.png"
const HeroSection = () => {
  return (
  <Container sx={{
    display:"flex",
    direction:"row",
    my:16
  }}>
    <Box sx={{
        flex:1,
        position:"relative"
    }}>
        <Box sx={{
            position:"absolute",
            width:"700px",
            left:"-120 px",
            top:"-90px"

        }}>
            <Image src={gridImage} alt='grid'/>
        </Box>
        <Typography variant='h3' component="h1" fontWeight={600}>Healthier Hearts</Typography>
        <Typography variant='h3' component="h1" fontWeight={600}>Come From</Typography>
        <Typography variant='h3' component="h1" color='primary.main' fontWeight={600}>Preventive Care</Typography>
        <Typography variant='h6' component="p"  fontWeight={400} sx={{  fontSize: "1.125rem", lineHeight: 1.75,my:3, color: "grey.700" }}>
            Taking small steps today can lead to a lifetime of heart health. Through regular check-ups, balanced nutrition, and early screenings, preventive care empowers you to stay ahead of potential health issues and live a fuller, healthier life.
        </Typography>
        <Box sx={{display:"flex", gap:2}}>
            <Button>Make Appointment</Button>
        <Button variant='outlined'>Contact Us</Button>
        </Box>
    </Box>
    <Box sx={{
        p:1,
        flex:1,
        display:'flex',
        justifyContent:"center",
        position:"relative",
        mt:0
    }}>
        <Box sx={{position:"absolute",left:"200px",top:"-30px"}}>
            <Image src={arrowImage} alt='arrow' width={100} height={100}></Image>
        </Box>
        <Box sx={{display:'flex', gap:2}}>
            <Box mt={4}>
                <Image src={doctor1Image} alt='doctor1' height={380} width={240}></Image>
            </Box>
            <Box>
                <Image src={doctor2Image} alt='doctor2' height={350} width={240}></Image>
            </Box>
        </Box>
        <Box sx={{position:"absolute",top:"220px",left:"150px"}}>
            <Image src={doctor3Image} alt='doctor3' height={240} width={240}></Image>
        </Box>
        <Box sx={{position:"absolute",bottom:"-50px", right:0,zIndex:-1}}>
            <Image src={Stetoscope} alt='Stetoscope' height={180} width={180}></Image>
        </Box>
    </Box>
  </Container>
  )
}

export default HeroSection
