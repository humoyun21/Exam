import axios from "axios";

const GetData = {
    async getProducts() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json");
            // const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush");

            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    }

}

export default GetData