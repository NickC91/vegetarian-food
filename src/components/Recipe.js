import React, { useState } from 'react'
import { Box, Stack, Button } from "./styled";
import styled from 'styled-components'
import { ReactComponent as ArrowRight } from '../images/arrow-right.svg';
import { Link } from 'react-router-dom';

const Card = styled(Box)`
&:hover {
  .card-action {
    opacity: 0.8;
    visibility: visible;
    transform: rotateX(0deg);
    height: 100% !important;
  }
}
.card-action {
  opacity: 0;
  visibility: hidden;
  transition: all 125ms linear;
  transform: rotateX(-90deg);
  height: 0px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
}
`;

const Recipe = ({ id, title, image }) => {
  const [load, setLoad] = useState(false)

  return (
    <Card maxWidth='367px' heigth='343px' width='calc(100%)' borderRadius='4px 4px 0 0' overflowX='hidden' position='relative' style={{ transform: 'translateZ(0)' }}>
      <Box width='100%' heigth='100%'>
        <img src={image} alt={title} width='100%' height='100%' onLoad={() => setLoad(true)} style={{ display: load ? "block" : "none", }} />
      </Box>
      <Box className='card-action' position='absolute' bottom='0px' width='100%' maxHeigth='72px' bg='white'>
        <Stack justify='space-between' align='center' width='100%' height='100%' px='20px' >
          <p style={{ color: 'var(--green-600)' }}>{title}</p>
          <Link to={`/${id}`}>
            <Button variant='text' rightIcon={<ArrowRight />} iconColor='green-600' />
          </Link>
        </Stack>
      </Box>
    </Card >
  )
}

export default Recipe