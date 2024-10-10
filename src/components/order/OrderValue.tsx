import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CartProduct } from "../../slice/cartSlice";
import { Box, Button } from "@mui/material";
import { colors } from "../../constants/colors";

const getTotal = (cartItem: CartProduct[]) => {
    let totalQuantity: number = 0;
    let totalPrice: number = 0;
    cartItem.forEach((item) => {
        totalQuantity += item.quantity!;
        totalPrice += parseFloat(item.price!) * (item.quantity || 1);
    });
    return { totalPrice, totalQuantity };
};

const OrderValue = () => {
    const cartItem = useSelector((state: RootState) => state.cartReducer.cart || []);

    const quantity = getTotal(cartItem).totalQuantity;
    const price = getTotal(cartItem).totalPrice;

    return (
        <div className="pt-5 pb-10 px-3 items-center bg-slate-500 min-h-screen h-screen">
            <h2 className="font-bold text-center  text-2xl mb-5">Order Value</h2>

            <h3 className="text-xl text-center  ">
                Total Quantity: <span className="font-bold"> {quantity}</span><br />
                Price : $<span className="font-bold"> {price}</span>
            </h3>

            <Box display={'flex'} alignItems={'center' } justifyContent={'center'} mt={5}>
                <Button variant="contained" color="inherit" className="items-center ml-11">
                    <Link to="/order/checkout" style={{ textDecoration: 'none', color: colors.purple }}>Checkout</Link>
                </Button>
            </Box>
        </div>
    );
};

export default OrderValue;
