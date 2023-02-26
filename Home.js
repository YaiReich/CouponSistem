import { useDispatch, useSelector } from "react-redux";
import { logout } from '../store/auth-slice'
import { Button } from 'reactstrap'
import Company from "./Company";
import Customer from "./Customer";

const Home = () => {

    const token = useSelector(state => state.auth.token)
    const type = useSelector(state => state.auth.type)
    const dispatch = useDispatch()
    console.log(type)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <h1>Welcome home, you're logged in!</h1>
            <p>Logout here:</p>
            <Button onClick={handleLogout} color="primary">Logout</Button>
            {type===0&&<Customer token={token} />}
            {type===1&&<Company token={token} />}
        </>
    );
}

export default Home;
