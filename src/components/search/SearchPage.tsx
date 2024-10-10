
import { Card, CardActions, CardContent, CardMedia, Container, IconButton, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Article } from '../../slice/article'
import { CartProduct, addToCart } from '../../slice/cartSlice'
import { colors } from '../../constants/colors'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux'
import { addToFavourite } from '../../slice/favourite'

const SearchPage: React.FC = () => {
  const [card, SetCard] = useState([])
  const dispatch = useDispatch()
  const { id } = useParams()

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${id}`)
				SetCard(res.data)
        console.log(res.data);
        
			} catch (error) {
				console.log(error)
			}
		}
    console.log(card);
    
		getData()
    console.log(card);
	}, [id])
  const onAddCart = (item: CartProduct | Article) => {
    dispatch(addToCart(item));
  };

  const onAddFavorite = (item: any) => {
    dispatch(addToFavourite(item)); 
  };


  return (
    <Container maxWidth='xl' sx={{ height: '100%', mb: 5 }}>
    <Grid container spacing={5} mt={10}>
      {card.length > 0 ? (
        card.map((item: Article | CartProduct) => (
          <Grid size={{ xs: 12, sm: 4 }} key={item.name} justifyContent={'center'}>
            <Card sx={{ maxWidth: 500, height: 440, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
              <CardMedia
                component="img"
                sx={{ width: '225px' }}
                image={item.image_link}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="body1" component="div">
                  {item.name}
                </Typography>
                <Typography variant="h5" component="div">
                  ${item.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={() => onAddCart(item)} aria-label="add to cart">
                  <ShoppingBagIcon sx={{ color: colors.purple, fontSize: 30 }} />
                </IconButton>
                <IconButton onClick={() => onAddFavorite(item)} aria-label="add to favorites">
                  <FavoriteIcon sx={{ color: colors.purple, fontSize: 30 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" textAlign={'center'}>Loading... </Typography> // Handle empty state
      )}
    </Grid>
  </Container>
  )
}

export default SearchPage
