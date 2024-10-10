export const setItems = (key: string, item: any) => {
    try {
        localStorage.setItem(key, item)
    } catch (error) {
        console.error(error);
    }
}


export const getItem = (key: string) => {
    try {
       return localStorage.getItem(key)
    } catch (error) {
        console.error(error);
    }
}
export const removeItem = (key: string) => {
    try {
       return localStorage.removeItem(key)
    } catch (error) {
        console.error(error);
    }
}