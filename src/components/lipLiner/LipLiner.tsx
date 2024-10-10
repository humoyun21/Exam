import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react";
import { Article,} from "../../slice/article";
import { Card, CardActions, CardContent, CardMedia, Typography, Container, IconButton } from "@mui/material";
import Grid from '@mui/material/Grid2'
import { RootState } from "../../store/store";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartProduct, addToCart } from "../../slice/cartSlice";
import { setItems } from "../../helpers/storage";
import { colors } from "../../constants/colors";
import categories from "../../service/categories";
import { allDataStart, lipLinerDataSuccess } from "../../slice/categories";


const LipLiner: React.FC = () => {
  const category = useSelector((state: RootState) => state.allDataReducer.cart || { article: [] }) // Ensure fallback if undefined
  const dispatch = useDispatch()

  const BlushCategory = async () => {
    dispatch(allDataStart())
    try {
      const res = await categories.lipLinerProducts()
      dispatch(lipLinerDataSuccess(res))
      setItems("blush", JSON.stringify(res))
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
  }
  const onAddCart = (item: CartProduct | Article) => {
    dispatch(addToCart(item))
  }

  useEffect(() => {
    BlushCategory()
  }, [])

  return (
    <Container maxWidth='xl' sx={{height: '100%', mb: 5}}>
      <Grid container spacing={5} mt={10}>
        {category?.length > 0 ? (
          category?.map((item: Article | CartProduct) => (
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
                <CardActions sx={{display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={() => onAddCart(item)} aria-label="add to favorites">
                    <ShoppingBagIcon sx={{ color: colors.purple, fontSize: 30 }} />
                  </IconButton>
                  <IconButton  aria-label="add to favorites">
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

export default LipLiner
