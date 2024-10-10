import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Card, CardActions, CardContent, CardMedia, Container, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'
import { colors } from '../../constants/colors';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { CartProduct, addToCart } from '../../slice/cartSlice';
import { Article } from '../../slice/article';


const Favourites = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state: RootState) => state.favourite.favourites || []);
    console.log(cartItem);

    const onAddCart = (item: CartProduct | Article) => {
        dispatch(addToCart(item))
    }
    return (
        <Container maxWidth='xl'>
            {cartItem.length < 0 ? (<Typography variant='h2'>No FAvorite :(</Typography>) : (
                <>
                    <Grid container spacing={2} m={5}>
                        <Grid >
                            {cartItem.map((item, index) => (
                                <Grid key={index}>
                                    <Card sx={{ maxWidth: "100%", mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '225px' }}
                                            image={item.image_link}
                                            alt={item.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                ${item.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton onClick={() => onAddCart(item)}>
                                                <ShoppingBagIcon sx={{ color: colors.purple, fontSize: 25 }} />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </>)}
        </Container>
    )
}

export default Favourites;
