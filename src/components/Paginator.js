import React from 'react'
import { Button, Container, Stack } from './styled'
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from '../images/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../images/arrow-left.svg';
import { useSelector } from 'react-redux';

const Paginator = () => {
  return (
    <Container size='fullwidth' mt='118px'>
      <Container>
        <Stack justify='space-between' align='center' width='100%'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button size='md' variant='outlined' leftIcon={<ArrowLeft />} iconColor='white' >Previus</Button>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button size='md' variant='outlined' rightIcon={<ArrowRight />} iconColor='white' >Next</Button>
          </Link>
        </Stack>
      </Container>
    </Container>
  )
}

export default Paginator