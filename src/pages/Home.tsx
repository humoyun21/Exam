import { Container } from "@mui/material"
import { Cards, MainInfo } from "../components"

const Home = () => {
  return (
    <Container maxWidth='xl'>
      <MainInfo />
      <Cards />
    </Container>
  )
}

export default Home
