import React, { useEffect, useState } from "react";
import { Box, Button, Container, InputWrapper, Stack } from './styled'
import { ReactComponent as SearchIcon } from "../images/search-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/reducers/ApiReducer";

const HomeBody = () => {
  const { data, loading } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData(''))
  }, [dispatch])

  const [itemForPage, setItemForPage] = useState(12)

  return (
    <Container size='fullwidth'>
      <Container mt='96px'>
        <Stack justify='space-between' align='end'>
          <h4>Cerca ricette</h4>
          <p>50/50</p>
        </Stack>
        <Box mt='24px'>
          <Stack width='fit-content' bg='white' borderRadius='100px' border='2px solid' borderColor={'green.300'} px='18px' style={{ overFlowX: 'hidden' }}>
            <InputWrapper placeholder="Cerca ricette" border='none' pl='0' value='react' onChange={() => {
              return
            }} />
            <Button rightIcon={<SearchIcon />} isLoading={false} disabled={false} variant='text' iconColor='white' bg='white' />
          </Stack>
        </Box>
      </Container>
      <Container mt='72px'>
        <Stack direction="column" spacing='118px'>
          {
            !loading && !data.status && data.length > 0 ? 'data' : !loading && data.status ? data.message && data.message.length > 0 ? data.message.join(' ') : 'Error' : <h3>Loading...</h3>
          }

          <Stack justify='flex-end'>
            <p style={{ color: "var(--grey-900)", }}>
              Item per Page{" "}
              <select value={itemForPage} onChange={(e) => setItemForPage(e)}>
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
    </Container >
  )
}

export default HomeBody