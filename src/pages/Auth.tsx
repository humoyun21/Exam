import { TextField, Button, Stack } from "@mui/material"

const Auth = () => {
    return (
        <>
            <form noValidate>
                <Stack spacing={2} width={400} m={'auto'}>
                    <TextField
                        label="Email"
                        type="email"
                        variant="standard"
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="standard"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </Stack>
            </form>
        </>
    )
}

export default Auth
