import { useDispatch, useSelector } from "react-redux";
import { logout } from '../store/auth-slice'
import { Button } from 'reactstrap'
import Company from "./Company";

const Home = () => {

    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <h1>Welcome home, you're logged in!</h1>
            <p>Logout here:</p>
            <Button onClick={handleLogout} color="primary">Logout</Button>
            <Company token={token} />
        </>
    );
}

export default Home;