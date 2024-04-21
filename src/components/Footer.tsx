import Link from 'next/link';
import React from 'react';
import { Box, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
// icons
import logoLinkedin from '@iconify/icons-carbon/logo-linkedin';
import logoGithub from '@iconify/icons-carbon/logo-github';
import logoMedium from '@iconify/icons-carbon/logo-medium';

// --------------------------------------------------------------------------------

// Footer component that displays the footer of the website.

// --------------------------------------------------------------------------------

export const Footer: React.FC = () => {
    return (
        <footer>
            <Divider />

            <Container sx={{ py: { xs: 8, md: 10 } }}>
                <Grid container spacing={2} justifyContent="flex-start">

                    <Grid item xs={12} md={2}>
                            <Stack spacing={{ xs: 1, md: 1 }}>
                                <Typography variant="h5">Links</Typography>
                                <Link href="/">
                                    <Typography>
                                        Startseite
                                    </Typography>
                                </Link> 

                                <Link href="/blog">
                                    <Typography>
                                        Blog
                                    </Typography>
                                </Link>

                                <Link href="/fun">
                                    <Typography>
                                        Fun
                                    </Typography>
                                </Link>
                                    
                            </Stack>
                    </Grid>

                    <Grid>
                        <Stack direction="row" spacing={{ xs: 1, md: 1 }}>
                            <Typography variant="h5">Social </Typography>

                            <Link href="https://www.linkedin.com/in/antonkrusefinance/" passHref>
                                <IconButton size="small">
                                    <Icon icon={logoLinkedin} width={24} height={24} />
                                </IconButton>
                            </Link>
                            
                            <Link href="https://www.linkedin.com/in/antonkrusefinance/" passHref>
                                <IconButton size="small">
                                    <img src={logoLinkedin} alt="LinkedIn" style={{ width: 24, height: 24 }} />
                                </IconButton>
                            </Link>

                            <Link href="https://medium.com/@anton.kruse" passHref>
                                <IconButton size="small">
                                    <img src={logoMedium} alt="Medium" style={{ width: 24, height: 24 }} />
                                </IconButton>
                            </Link>

                            <IconButton size="small">
                                <img src={logoGithub} alt="Github" style={{ width: 24, height: 24 }} />
                            </IconButton>

                        </Stack>
                    </Grid>
                    
                        
              
              

                </Grid>
            </Container>

            <Divider />

            <Container>
                <Stack>
                    <Typography variant="body3" component="h2" gutterBottom>
                    © {} {new Date().getFullYear()} Anton Kruse
                    </Typography>
                </Stack>
            </Container>
            

        </footer>
    );

}

export default Footer;