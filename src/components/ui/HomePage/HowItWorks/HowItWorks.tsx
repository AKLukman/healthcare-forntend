"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import femaleDocImg from "@/assets/how-it-works-img.png";
import searchIcon from "@/assets/icons/search-icon.png";
import doctorIcon from "@/assets/icons/doctor-icon.png";
import appointmentIcon from "@/assets/icons/appointment-icon.png";
import charityIcon from "@/assets/icons/charity-icon.png";

const HowItWorks = () => {
    return (
        <Container>
            <Box my={10}>
                <Box>
                    <Typography
                        component="p"
                        fontSize={20}
                        fontWeight={400}
                        color="#1586FD"
                        sx={{ mb: 1.3 }}
                    >
                        How it Works
                    </Typography>
                    <Typography variant="h4" component="h1" fontWeight={600}>
                        4 Easy Steps to Get Your Solution
                    </Typography>
                    <Typography
                        component="p"
                        fontSize={18}
                        fontWeight={400}
                        sx={{ mt: 2 }}
                    >
                        Access to expert physicians and surgeons, advanced technologies
                    </Typography>
                    <Typography component="p" fontSize={18} fontWeight={400}>
                        and top-quality surgery facilities right here.
                    </Typography>
                </Box>
                <Box>
                    <Grid container sx={{ display: "flex", flexWrap: "wrap", mt: "50px" }}>
                        <Box sx={{ width: "50%" }}>
                            <Image src={femaleDocImg} alt="doctor image" />
                        </Box>

                        <Box sx={{ width: "50%" }}>
                            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                                <Box sx={{ width: "50%", p: 1 }}>
                                    <Box
                                        sx={{
                                            backgroundColor: "#fff",
                                            border: "1px solid lightgray",
                                            borderRadius: "10px",
                                            padding: "20px",
                                        }}
                                    >
                                        <Image src={searchIcon} alt="search-icon" />
                                        <Typography variant="h6" component="h2" fontWeight={500} mt={3}>
                                            Search Doctor
                                        </Typography>
                                        <Typography
                                            component="p"
                                            fontSize={14}
                                            fontWeight={400}
                                            sx={{ mt: 1 }}
                                        >
                                            Easily find trusted doctors nearby. Browse specialists that match your health needs in just a few clicks.
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ width: "50%", p: 1 }}>
                                    <Box
                                        sx={{
                                            backgroundColor: "#fff",
                                            border: "1px solid lightgray",
                                            borderRadius: "10px",
                                            padding: "20px",
                                        }}
                                    >
                                        <Image src={charityIcon} alt="search-icon" />
                                        <Typography variant="h6" component="h2" fontWeight={500} mt={3}>
                                            Get Your Solution
                                        </Typography>
                                        <Typography
                                            component="p"
                                            fontSize={14}
                                            fontWeight={400}
                                            sx={{ mt: 1 }}
                                        >
                                            Receive expert care and guidance tailored to your needs for a quick and effective recovery journey.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: "50%", p: 1 }}>
                                    <Box
                                        sx={{
                                            backgroundColor: "#fff",
                                            border: "1px solid lightgray",
                                            borderRadius: "10px",
                                            padding: "20px",
                                        }}
                                    >
                                        <Image src={doctorIcon} alt="search-icon" />
                                        <Typography variant="h6" component="h2" fontWeight={500} mt={3}>
                                            Check Doctor Profile
                                        </Typography>
                                        <Typography
                                            component="p"
                                            fontSize={14}
                                            fontWeight={400}
                                            sx={{ mt: 1 }}
                                        >
                                            View detailed doctor profiles to learn about their expertise, experience, and patient feedback.


                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ width: "50%", p: 1 }}>
                                    <Box
                                        sx={{
                                            backgroundColor: "#fff",
                                            border: "1px solid lightgray",
                                            borderRadius: "10px",
                                            padding: "20px",
                                        }}
                                    >
                                        <Image src={appointmentIcon} alt="search-icon" />
                                        <Typography variant="h6" component="h2" fontWeight={500} mt={3}>
                                            Schedule Appointment
                                        </Typography>
                                        <Typography
                                            component="p"
                                            fontSize={14}
                                            fontWeight={400}
                                            sx={{ mt: 1 }}
                                        >
                                            Book your appointment easily at your preferred time with just a few simple steps.


                                        </Typography>
                                    </Box>
                                </Box>



                            </Box>
                        </Box>
                    </Grid>

                </Box>
            </Box>
        </Container>
    );
};

export default HowItWorks;