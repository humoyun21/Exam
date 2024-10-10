import { useEffect, useState } from 'react';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreIcon from '@mui/icons-material/MoreVert';
import { colors } from '../../constants/colors';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';

interface ProductColor {
    hex_code: string;
    colour_name: string;
}

interface Item {
    api_featured_image: string;
    brand: string;
    category: string;
    created_at: string;
    currency: string;
    description: string;
    id: number;
    image_link: string;
    name: string;
    price: string;
    price_sign: string;
    product_api_url: string;
    product_colors: ProductColor[];
    product_link: string;
    product_type: string;
    rating: number | null;
    tag_list: string[];
    updated_at: string;
    website_link: string; // Optional property
}

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate()

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const cartItem = useSelector((state: RootState) => state.cartReducer.cart || []); 
    const favoriteItem = useSelector((state: RootState) => state.favourite.favourites || []); 
    const [lll, setLll] = useState<Item[]>([]);
    
    const getQuantity = () => {
        let quantity: number = 0;
        cartItem.forEach((item) => {
            quantity += item.quantity ?? 0; 
        });
        return quantity;
    };
    const getFavorite = () => {
        return favoriteItem.length
    };
    const cartCount = getQuantity()
    const favoriteCount = getFavorite()


    useEffect(() => {
        setLll(cartItem);
    }, [cartItem]);

    console.log(lll);
    const handleOpen = () => {
        navigate('/cards')
    };
    const favouriteClick = () => {
        navigate('/favourites')
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };



    

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" sx={{ color: colors.purple }}>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" onClick={handleOpen} aria-label="show cart items" sx={{ color: colors.purple }}>
                    <Badge badgeContent={lll.length} color="error">
                        <ShoppingBagIcon />
                    </Badge>
                </IconButton>
                <IconButton size="large" onClick={favouriteClick} aria-label="show cart items" sx={{ color: colors.purple }}>
                    <Badge badgeContent={cartCount} color="error">
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    sx={{ color: colors.purple }}
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <AppBar position="static" sx={{ background: colors.primary, boxShadow: 'none', top: 0, zIndex: 1300 }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block', color: colors.purple } }}
                        >
                            Logo
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                           <SearchBar />
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" onClick={handleOpen} aria-label="show cart items" sx={{ color: colors.purple }}>
                                <Badge badgeContent={cartCount} color="error">
                                    <ShoppingBagIcon />
                                </Badge>
                            </IconButton>
                            <IconButton size="large" onClick={favouriteClick} aria-label="show cart items" sx={{ color: colors.purple }}>
                                <Badge badgeContent={favoriteCount} color="error">
                                    <FavoriteIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                sx={{ color: colors.purple }}
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {renderMobileMenu}
            {renderMenu}
        </>
    );
};

export default Header;
