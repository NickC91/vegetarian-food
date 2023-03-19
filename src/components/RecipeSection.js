import React from 'react'
import { Stack } from './styled'
import Recipe from './Recipe'

const RecipeSection = ({ row, index }) => {
  return (
    <Stack justify='flex-start' spacing='20px'>
      {
        row.map((recipes) => {
          return <Recipe key={recipes.id} {...recipes} />
        })
      }
    </Stack>
  )
}

export default RecipeSection