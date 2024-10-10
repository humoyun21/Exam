import { useDispatch, useSelector } from "react-redux";
import GetData from "../../service/getData";
import React, { useEffect } from "react";
import { Article, getDataStart, getDataSuccess } from "../../slice/article";
import { Card, CardActions, CardContent, CardMedia, Typography, Container, IconButton } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { RootState } from "../../store/store";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartProduct, addToCart } from "../../slice/cartSlice";
import { setItems } from "../../helpers/storage";
import { colors } from "../../constants/colors";
import { addToFavourite } from "../../slice/favourite"; // Import the correct action creator
import { Link } from "react-router-dom";

const Cards: React.FC = () => {
  const getDatas = useSelector((state: RootState) => state.getData?.article || { article: [] });
  const dispatch = useDispatch();

  const Articles = async () => {
    dispatch(getDataStart());
    try {
      const res = await GetData.getProducts();
      dispatch(getDataSuccess(res));
      setItems("data", JSON.stringify(res));
      
    } catch (error) {
      console.log(error);
    }
  };

  const onAddCart = (item: CartProduct | Article) => {
    dispatch(addToCart(item));
  };

  const onAddFavorite = (item: any) => {
    dispatch(addToFavourite(item));
  };

  useEffect(() => {
    Articles();
  }, []);

  return (
    <Container maxWidth='xl' sx={{ height: '100%', mb: 5 }}>
      <Grid container spacing={5} mt={10}>
        {getDatas.length > 0 ? (
          getDatas.map((item: Article | CartProduct) => (
            <Grid size={{ xs: 12, sm: 4 }} key={item.name} justifyContent={'center'}>
              <Card sx={{ maxWidth: 500, height: 440, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
                <Link to={`nested_page/${item.id}`} style={{textDecoration: 'none', color: colors.purple}}>
                  <CardMedia
                    component="img"
                    sx={{ width: '220px' }}
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
                </Link>

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
  );
};

export default Cards;
