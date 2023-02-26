import {useState} from "react";
import CouponList from "../components/CouponList";
import {Button} from 'react-bootstrap';

const Customer = ({token}) => {

    const [loading, setLoading] = useState(false)
    const [coupons, setCoupons] = useState([]);

    const fetchCoupons = (token) => {
        setLoading(true)
        fetch(`http://localhost:8080/api/customers/all/purchased/${token}`)
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

    const fetchCouponsNotPurchased = (token) => {
        setLoading(true)
        fetch(`http://localhost:8080/api/customers/all/not-purchased/${token}`)
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

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px'
        }}>
            <Button style={{margin: '7px'}} variant="info" onClick={() => {fetchCoupons(token)}}>Displaying all purchased coupons</Button>
            <Button style={{margin: '7px', background:'rosybrown'}} variant="info" onClick={() => {fetchCouponsNotPurchased(token)}}>Displaying all not-purchased coupons</Button>
            <Button style={{margin: '7px', background:'yellowgreen'}} variant="info" onClick={() => {fetchCouponsNotPurchased(token)}}>Displaying all Coupons Expired In About Seven Days</Button>

            {content}
        </div>
    )
}

export default Customer;