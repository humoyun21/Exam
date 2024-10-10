import { Card, CardActions, CardContent, CardMedia, Container, IconButton, Typography } from '@mui/material';
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../../slice/article';
import { CartProduct, addToCart } from '../../slice/cartSlice';
import { colors } from '../../constants/colors';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { addToFavourite } from '../../slice/favourite';
import axios from 'axios';

const SingleProduct: React.FC = () => {
    const [card, SetCard] = useState<Array<CartProduct | Article>>([]);  // <-- Bo'sh array
    const dispatch = useDispatch();
    const { id } = useParams();

    const onAddCart = (item: CartProduct | Article) => {
        dispatch(addToCart(item));
    };

    const onAddFavorite = (item: any) => {
        dispatch(addToFavourite(item));
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios
                    .get(
                        `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
                    );
                SetCard([response.data]);  // <-- Ma'lumotni array sifatida o'rnatish
            } catch (error) {
                console.error('Error fetching the product', error);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <Container maxWidth='xl' sx={{ height: '100%', mb: 5 }}>
            <Grid container spacing={5} mt={10}>
                {card.length > 0 ? (   // <-- To'g'ri shart: card.length > 0
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
                    <Typography variant="h6" textAlign={'center'}>Loading... </Typography>
                )}
            </Grid>
        </Container>
    );
}

export default SingleProduct;
