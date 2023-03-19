import React, { useEffect, useState } from "react";
import { Box, Button, Container, InputWrapper, Stack } from './styled'
import { ReactComponent as SearchIcon } from "../images/search-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { catchError, fetchData, saveQuery, updatePage } from "../redux/reducers/ApiReducer";
import { rowalizer } from "../utils/Helpers";
import RecipeSection from './RecipeSection'
import Paginator from "./Paginator";

const HomeBody = () => {

  const dispatch = useDispatch()

  const { recipes, error, loading, rateLimit, query: lastSearch } = useSelector((state) => state.recipes)

  const [itemForPage, setItemForPage] = useState(12)
  const [query, setQuery] = useState("")

  const searchRecipes = (page = 1) => {
    fetchRecipes("search", page)
  }

  const fetchRecipes = (type = 'latest', page = 1) => {
    let apiUrl = null

    if (type === "search") {
      if (query && query.length > 1 && query !== ' ') {
        apiUrl = `complexSearch?query=${query}&`
      } else {
        dispatch(catchError(['Ricerca senza valori']))
      }
    } else {
      apiUrl = 'complexSearch?'
    }
    dispatch(updatePage(page))
    dispatch(fetchData(`recipes/${apiUrl}tags=vegetarian&number=${itemForPage}`))
    dispatch(saveQuery({
      path: `${apiUrl}`.trim(),
      itemForPage,
      type,
      query
    }))
  }

  useEffect(() => {
    if (!lastSearch.query) {
      fetchRecipes()
    } else {
      fetchRecipes(lastSearch.type)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemForPage])

  return (
    <Container size='fullwidth'>
      <Container mt='96px'>
        <Stack justify='space-between' align='end'>
          <h4>Cerca ricette</h4>
          <p>{`Richieste: ${rateLimit.request} / ${rateLimit.used} / ${rateLimit.left}`}</p>
        </Stack>
        <Box mt='24px'>
          <Stack width='fit-content' bg='white' borderRadius='100px' border='2px solid' borderColor={'green.300'} px='18px' style={{ overFlowX: 'hidden' }}>
            <InputWrapper placeholder="Cerca ricette" border='none' borderColor={error.status ? 'Errore' : "green-600"} pl='0' value={query} onChange={(e) => {
              setQuery(e.target.value)
            }} />
            <Button onClick={() => searchRecipes()} rightIcon={<SearchIcon />} isLoading={false} disabled={false} variant='text' iconColor='white' bg='white' />
          </Stack>
        </Box>
      </Container>
      <Container mt='72px'>
        <Stack direction="column" spacing='118px'>
          {
            !loading && !error.status && (recipes.length > 0 || recipes.results.length > 0) ? (
              rowalizer(recipes.results).map((el) => {
                return <RecipeSection row={el} />
              })
            ) : !loading && error.status ? (
              <h3>
                {error?.message && error.message.length > 0
                  ? error.message.join(" ")
                  : "Nessuna ricetta trovata"}
              </h3>
            )
              : (
                <h3>Loading...</h3>
              )
          }

          <Stack justify='flex-end'>
            <p style={{ color: "var(--grey-900)", }}>
              Item per Page{" "}
              <select value={itemForPage} onChange={(e) => setItemForPage(e.target.value)}>
                {Array.from({ length: 5 }, (_, index) => {
                  return (index + 1) * 3;
                }).map((el) => {
                  return (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  )
                })}
              </select>
            </p>
          </Stack>
        </Stack>
      </Container>
      <Paginator />
    </Container >
  )
}

export default HomeBody