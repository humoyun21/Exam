import axios from "axios";

const allData = {
    async allProducts() {
        try {
            const { data } = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json");
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    }

}

export default allData