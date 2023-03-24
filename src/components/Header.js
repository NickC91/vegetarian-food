import React from "react";
import { Container, Stack, Box, Button } from "./styled";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as FacebookLogo } from "../images/facebook.svg";
import { ReactComponent as PinterestLogo } from "../images/pinterest.svg";
import { ReactComponent as TwitterLogo } from "../images/twitter.svg";
import { ReactComponent as InstagramLogo } from "../images/instagram.svg";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <Container size='fullwidth' position='fixed' background='green.300' zIndex={999}>
                <Stack direction='column' align='center'>
                    <Container>
                        <Stack justify='space-between' align='center' width='100%' height={["64px", "72px"]}>
                            <Link to='/' style={{ textDecoration: "none", }}>
                                <Logo />
                            </Link>
                            <Button variant='text'>
                                <Link to='#' style={{ textDecoration: "none", }}>
                                    <h2 style={{ color: '#ffffff' }}>Vegetarian Food</h2>
                                </Link>
                            </Button>
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
                    </Container>
                </Stack>
            </Container>
            <Box height={["64px", "72px"]} width='100%'></Box>
        </>
    );
};

export default Header;