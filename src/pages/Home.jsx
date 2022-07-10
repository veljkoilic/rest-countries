import React from 'react'
import styled from 'styled-components'
import { SearchAndFilter } from '../components/SearchAndFilter'

export const Home = () => {
  return (
    <Container>
        <SearchAndFilter/>
    </Container>
  )
}

const Container = styled.div`
  padding: 5px 5%;

`;