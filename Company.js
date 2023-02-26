import {useState} from "react";
import CouponList from "../components/CouponList";
import AddCoupon from "../components/AddCoupon";
import {Button} from 'react-bootstrap';

const Company = ({token}) => {

    const [loading, setLoading] = useState(false)
    const [coupons, setCoupons] = useState([]);

    const fetchCoupons = (token) => {
        setLoading(true)
        fetch(`http://localhost:8080/api/company/all/${token}`)
            .then((response) => {
                if (response.ok)
                    return response.json()

                if (response.status === 404) {
                    throw new Error("Resource not found!")
                } else if (response.status === 500) {
                    throw new Error("Something bad happened!")
                }
            })
            .then((data) => {
                setCoupons(data)
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    let content = <h1>No Content.</h1>

    if (loading) {
        content = <h1>Loading...</h1>
    } else if (coupons.length > 0) {
        content = <CouponList coupons={coupons}/>
    }

    const [currentVisibility, updateVisibility] = useState(false)

    const toggleVisibility = () => {
        updateVisibility(!currentVisibility)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px'
        }}>
            <Button variant="info" onClick={() => {fetchCoupons(token)}}>Fetch</Button>
            {content}
            <Button variant="success" onClick={toggleVisibility} style={{margin: '20px'}}>Toggle to add new coupon</Button>
            {currentVisibility && <AddCoupon token={token} style={{marginTop: '20px'}}/>}
        </div>
    )
}

export default Company;
