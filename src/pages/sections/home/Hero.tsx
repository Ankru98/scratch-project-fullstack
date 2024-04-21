import React from 'react';
import { Typography, Stack, Container, Grid, Button, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';

// icons
import logoGithub from '@iconify/icons-carbon/logo-github';
import GitHubIcon from '@mui/icons-material/GitHub';

// --------------------------------------------------------------------------------
// Hero section of the home page. This is the first thing that the user sees when they visit the home page.


export default function Hero() {
    return (
        <Container>
            <Grid container spacing={3} justifyContent="space-between">
                <Grid item xs={12} md={9}>
                    <Stack spacing={5} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
                        <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: "bold", fontSize: "5.5rem", textAlign: "justify" }}>
                            Data Excellence & Quantitative Finance
                        </Typography>
                        <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize: "1.5rem", fontWeight: "light", textAlign: "justify" }}>
                        Herzlich willkommen auf meinem Portfolio! Ich freue mich, dass du den Weg hierher gefunden hast, um mehr über meine beruflichen Projekte, meine akademische Forschung und meine persönlichen Interessen zu erfahren. Dieses Portfolio dient als Fenster zu meiner beruflichen und persönlichen Welt, und ich hoffe, dass es dir einen umfassenden Einblick in meine Fähigkeiten und Leidenschaften bietet.


                        </Typography>
                    </Stack>

                    <Box sx={{ height: 150 }} /> 

                    <Stack
                        direction="row" spacing={10} alignItems="center" justifyContent="" >
                        
                        <Link href="https://empa.co" passHref>
                            
                            <IconButton
                                sx={{ backgroundColor: '#161C24',  color: 'white',
                                    '&:hover': { backgroundColor: '#161C24' },
                                    width: 180, 
                                    height: 80,
                                    borderRadius: '25px',
                                }} >
                                <img src="EMPAWhiteLogo.svg" alt="EMPA Logo" style={{ width: '100px', height: 'auto' }} />
                            </IconButton>
                        </Link>

                        <Link href="https://github.com/Ankru98" passHref>
                            <IconButton
                                sx={{
                                    backgroundColor: 'purple',
                                    color: 'white',
                                    '&:hover': { backgroundColor: 'purple' },
                                    width: 180, 
                                    height: 80,
                                    borderRadius: '25px',
          }}
        >
          <GitHubIcon sx={{ fontSize: '3rem' }} /> {/* Adjust the icon size */}
        </IconButton>
      </Link>
    </Stack>
                </Grid>

                <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <img src="/Headshot_Anton.png" alt="Logo" className="logo" style={{ marginLeft: '3rem', marginTop: '1rem', marginBottom: '1rem' }} />
                </Grid>
            </Grid>
        </Container>
    );
}
