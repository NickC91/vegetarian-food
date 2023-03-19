import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { Container } from '../components/styled'
import { fetchData } from '../redux/reducers/ApiReducer'

const DetailsPage = () => {

  const dispatch = useDispatch()
  const { recipes } = useSelector((state) => state.recipes)
  const { id } = useParams()

  const fetchRecipe = () => {
    dispatch(fetchData(`/recipes/${id}/information?includeNutrition=false`))
  }

  useEffect(() => {
    fetchRecipe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Layout>
      <Container size='fullwidth'>
        <div>
          <h2>{recipes.title}</h2>
          <img src={recipes.image} alt={recipes.sourceName}></img>
          <p>{recipes.instructions}</p>
          {recipes.dishTypes &&
            <ul>
              {recipes.dishTypes.map(dish => (
                <li>{dish}</li>
              ))}
            </ul>
          }
          <p>{recipes.summary}</p>
          {recipes.extendedIngredients &&
            <ul>
              {recipes.extendedIngredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          }
        </div>
      </Container>
    </Layout>
  )
}

export default DetailsPage
/*
.map(ingredient => (
  <li key={ingredient.id}>{ingredient.name}</li>
))}
*/