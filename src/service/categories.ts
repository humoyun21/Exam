import axios from "axios";

const categories = {
    async allCategory() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    async blushCategory() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    async bronzerProducts() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    async eyeBrowProducts() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    async eyeLinerProducts() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    async eyeShadowProducts() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    async foundationProducts() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    async lipLinerProducts() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    async lipstickProducts() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    async mascaraProducts() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    async nailPolishCategory() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    }

}

export default categories