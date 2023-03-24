import React from 'react'
import { Container, Stack, Box, Button } from "./styled";
import { ReactComponent as RightIcon } from '../images/arrow-right.svg';
import ImageHome from '../images/home-image.jpg'
import styled from 'styled-components';

const CustomButton = styled(Button)`
padding-left: 0
  svg{
    margin-left: 16px 
    & > * {
      fill: #0f503d
    }
  }
`

const CustomStack = styled(Stack)`
@media screen and (max-width){
  flex-direction: column
  & > * {
    margin-left: 0
    margin-top: 25px
  }
}
`

const Hero = () => {
  return (
    <Container mt={['24px', '72px']}>
      <CustomStack spacing='118px'>
        <Stack direction='column' align='start' spacing='48px' flex='1 1 auto'>
          <Box>
            <h1>Vegetarian Food</h1>
          </Box>
          <CustomButton variant='text' size={['lg', 'xl']} rightIcon={<RightIcon />}>
            For you ❤️
          </CustomButton>
        </Stack>
        <Box width='100%' heigth='365px' position='relative' borderRadius='16px' overflow='hidden' display='flex' style={{ transform: 'translateZ(0)' }}>
          <img src={ImageHome} alt="text" style={{ position: 'absolute', width: '100%', heigth: '100%' }} />
        </Box>
      </CustomStack>
    </Container>
  )
}

export default Hero