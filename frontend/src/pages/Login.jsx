import Form from "../components/Form"

function Login() {

    return(
        <Form route={`${import.meta.env.VITE_API_URL}/api/token/`} method="login" />
    )
}
export default Login