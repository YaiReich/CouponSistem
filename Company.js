import {useState} from "react";
import CouponList from "../components/CouponList";
import AddCoupon from "../components/AddCoupon";
import addCoupon from "../components/AddCoupon";

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

    const handelAddCoupon = (coupon, token) => {
        fetch(`http://localhost:8080/api/company/create/${token}`,{
            method: 'POST',
            headers:{
                "Content-Type":"application/Json"
            },
            body: JSON.stringify(coupon)
        })
            .then((response)=>{
            return response.json()
        })
            .then((addCoupon) => {
                console.log(addCoupon);
            })
    }

    return (
        <>
            <button onClick={() => {
                fetchCoupons(token)
            }}>Fetch
            </button>
            {content}
            <AddCoupon onAddCoupon={handelAddCoupon}/>
        </>
    )
}

export default Company;