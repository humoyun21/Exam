import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import OrderValue from '../order/OrderValue';
import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'
import { colors } from '../../constants/colors';
import { decreaseQuantity, increaseQuantity, removeItem } from "../../slice/cartSlice";

const AddtoCard = () => {
    const dispatch = useDispatch()
    const onIncreaseQuantity = (productId: number) => {
        dispatch(increaseQuantity({id: productId}))
    }

    const onDecreaseQuantity = (productId: number) => {
        dispatch(decreaseQuantity({ id: productId }));
    };

    const onRemoveItem = (productId: number) => { 
        dispatch(removeItem({ id: productId }));
    };
    const cartItem = useSelector((state: RootState) => state.cartReducer.cart || []);
    return (
        <Container maxWidth='xl'>
            {cartItem.length == 0 ? (
                <Typography variant='h2' textAlign={"center"} m={5}>YOUR BAG IS EMPTY :(</Typography>
            ) : (
                <Grid container spacing={2} m={5}>
                    <Grid size={{ xs: 8 }} >
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
                                            {item.name} <br />
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            ${item.price} <br />
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                           Quantity:  {item.quantity}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <ButtonGroup variant='contained' sx={{ background: colors.secondary }}>
                                            <Button onClick={() => onIncreaseQuantity(item.id)}>+</Button>
                                            <Button onClick={() => onDecreaseQuantity(item.id)}>-</Button>
                                            <Button onClick={() => onRemoveItem(item.id)}>x</Button>
                                        </ButtonGroup>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid size={{ xs: 4 }}>
                        <OrderValue />
                    </Grid>
                </Grid>
            )}
        </Container>
    )
}

export default AddtoCard;
