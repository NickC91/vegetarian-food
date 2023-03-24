import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { Container, Box, Stack } from '../components/styled'
import { fetchData } from '../redux/reducers/ApiReducer'
import styled from 'styled-components';

const DetailsPage = () => {

  const dispatch = useDispatch()
  const { recipes, loading, error } = useSelector((state) => state.recipes)
  const { id } = useParams()

  const fetchRecipe = useCallback(() => {
    dispatch(fetchData(`/recipes/${id}/information?includeNutrition=false`))
  }, [dispatch, id])

  useEffect(() => {
    fetchRecipe()
  }, [fetchRecipe])

  const { image, title, sourceName, instructions, summary, extendedIngredients } = recipes

  const CustomStack = styled(Stack)`
    @media screen and (max-width){
      flex-direction: column
      & > * {
        margin-left: 0
        margin-top: 25px
      }
    }
    `
  return (
    <Layout>
      <Container mt={['24px', '72px']}>
        {
          !loading && !error.status ? (
            <div key={`recipe-${id}`}>
              <h2 style={{ fontSize: '35px' }}>{title}</h2>
              <CustomStack mt='55px' spacing='118px'>
                <Box width='100%' heigth='1px' position='relative' borderRadius='16px' overflow='hidden' display='flex' style={{ transform: 'translateZ(0)' }}>
                  <img src={image} alt={sourceName} style={{ position: 'absolute', width: '100%', heigth: '100%' }} />
                </Box>
                <Stack direction='column' align='start' spacing='48px' flex='1 1 auto'>
                  <Box>
                    <h3>Ingredients:</h3>
                    {extendedIngredients &&
                      <ul>
                        {extendedIngredients.map(ingredient => (
                          <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                      </ul>}
                  </Box>
                </Stack>
              </CustomStack>
              <h3 style={{ marginTop: '35px' }}>Presentation:</h3>
              <p>{instructions}</p>
              <h3 style={{ marginTop: '35px' }}>Preparation</h3>
              <p>{summary}</p>
            </div>
          )
            : (
              <h3>Loading...</h3>
            )
        }
      </Container>
    </Layout >
  )
}

export default DetailsPage