"use client";

import { Box, Container, Typography } from "@mui/material";

const Stats = () => {
    const stats = [
        { value: "180+", label: "Expert Doctors" },
        { value: "26+", label: "Expert Services" },
        { value: "10K+", label: "Happy Patients" },
        { value: "150+", label: "Best Award Winners" },
    ];

    return (
        <Container>
            <Box
                sx={{
                    backgroundImage: "linear-gradient(45deg, blue, cyan)",
                    borderRadius: "20px",
                    margin: "50px auto",
                    padding: 5,
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    textAlign: "center",
                    gap: 2,
                }}
            >
                {stats.map( ( { value, label }, index ) => (
                    <Box
                        key={index}
                        sx={{
                            flex: "1 1 20%",
                            minWidth: 150,
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h3" component="h1" fontWeight={500}>
                            {value}
                        </Typography>
                        <Typography variant="h6" component="h2" fontWeight={500}>
                            {label}
                        </Typography>
                    </Box>
                ) )}
            </Box>
        </Container>
    );
};

export default Stats;
