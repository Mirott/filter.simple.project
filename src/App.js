import { Button, Card, Grid, Stack, styled } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { generateRandomData } from "./database";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TopContainer = styled(Card) ({
  position: 'fixed',
  width: '100vw',
  heigth: 100,
  padding: 14, 
  boxSizing: 'border-box',
})


function App() {

  const [products, setProducts] = useState([])
  const [productsToShow, setProductsToShow] = useState([])

  const [selectedRoom, setSelectedRoom] = useState('')
  const [selectedProducent, setSelectedProducent] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('')


  useEffect(() => {
    getProducts()
  },[])


  useEffect(() => {
    checkProductsToShow(products)
  },[products, selectedRoom, selectedProducent, selectedGroup])


  const getProducts = () => {
    const newProducts = generateRandomData()
    setProducts(newProducts)
  }


  const checkProductsToShow = (products) => {

    const newProductsPack = [];


    for(const singleProduct of products) {

      let displayProduct = true;

      if(singleProduct.room !== selectedRoom && selectedRoom !== '') displayProduct = false;
      if(singleProduct.group !== selectedGroup && selectedGroup !== '') displayProduct = false;
      if(singleProduct.producent !==selectedProducent && selectedProducent !== '') displayProduct = false;

      displayProduct && newProductsPack.push(singleProduct)
    }


    setProductsToShow(newProductsPack)
  }
  

  const clearFilers = () => {
    setSelectedGroup('')
    setSelectedProducent('')
    setSelectedRoom('')
  }


  return (
    <div>
        <TopContainer style={{height: 100}}>
            <Stack direction={'row'} spacing={2}>

                <FormControl style={{width: 150}}>
                  <InputLabel id="demo-simple-select-label">Producent</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedProducent}
                    label="Producent"
                    onChange={(event) => setSelectedProducent(event.target.value)}
                  >
                    <MenuItem value={""}>brak</MenuItem>
                    <MenuItem value={"TableShop"}>TableShop</MenuItem>
                    <MenuItem value={"Mańkowscy"}>Mańkowscy</MenuItem>
                    <MenuItem value={"Drewnowo"}>Drewnowo</MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={{width: 150}}>
                  <InputLabel id="demo-simple-select-label">Grupa</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedGroup}
                    label="Grupa"
                    onChange={(event) => setSelectedGroup(event.target.value)}
                  >
                    <MenuItem value={""}>brak</MenuItem>
                    <MenuItem value={"Krzesła"}>Krzesła</MenuItem>
                    <MenuItem value={"Szafki"}>Szafki</MenuItem>
                    <MenuItem value={"Komody"}>Komody</MenuItem>
                  </Select>
                </FormControl>


                <FormControl style={{width: 200}}>
                  <InputLabel id="demo-simple-select-label">Pomieszczenie</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedRoom}
                    label="Pomieszczenia"
                    onChange={(event) => setSelectedRoom(event.target.value)}
                  >
                    <MenuItem value={""}>brak</MenuItem>
                    <MenuItem value={"Sypialnia"}>Sypialnia</MenuItem>
                    <MenuItem value={"Korytarz"}>Korytarz</MenuItem>
                    <MenuItem value={"Łazienka"}>Łazienka</MenuItem>
                  </Select>
                </FormControl>

                <Button onClick={clearFilers}>
                  Wyczyść filtry
                </Button>

            </Stack>
        </TopContainer>

        <Container style={{paddingTop: 200}}>

          <div style={{margin: 16}}>
            Wyświetlone produkty: {productsToShow.length}
          </div>


          <Grid container spacing={2}>
            {
              productsToShow.map(product => (

                <SingleProduct 
                  name={product.name}
                  producent={product.producent}
                  id={product.id}
                  group={product.group}
                  room={product.room}
                  key={product.id}
                />

              ))
            }
          </Grid>
        </Container>
    </div>
  );
}

export default App;
