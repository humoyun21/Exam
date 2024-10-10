import { AxiosError } from "axios";

interface ErrorResponse {
    message?: string;
}

export const axiosErrorHandler = (error: AxiosError) => {
    if (
        ["ERR_BAD_REQUEST", "ERR_NETWORK", "ERR_BAD_RESPONSE"].includes(error.code ?? "")
    ) {
        const errorData = error.response?.data as ErrorResponse | undefined;

        if (typeof errorData === "undefined" || !errorData?.message) {
            return { message: error.message };
        }
    }

    return error.response?.data || { message: "Unknown error" };
};
