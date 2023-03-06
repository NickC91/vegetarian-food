import React from 'react'
import { Container, Stack, Box } from "./styled";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as FacebookLogo } from "../images/facebook.svg";
import { ReactComponent as PinterestLogo } from "../images/pinterest.svg";
import { ReactComponent as TwitterLogo } from "../images/twitter.svg";
import { ReactComponent as InstagramLogo } from "../images/instagram.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container size='fullwidth' mt={['36px', '96px']} pb='72px'>
            <Container>
                <Stack width='100%' justify='flex-start'>
                    <Stack align='start' spacing='20px'>
                        <Box>
                            <Logo />
                        </Box>
                        <Stack direction='column' align='start' height='100%' spacing='20px'>
                            <Box>
                                <Link to='#' style={{ textDecoration: "none", }}>
                                    <FacebookLogo />
                                </Link>
                                <Link to='#' style={{ textDecoration: "none", }}>
                                    <TwitterLogo />
                                </Link>
                                <Link to='#' style={{ textDecoration: "none", }}>
                                    <InstagramLogo />
                                </Link>
                                <Link to='#' style={{ textDecoration: "none", }}>
                                    <PinterestLogo />
                                </Link>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Container>
    )
}

export default Footer