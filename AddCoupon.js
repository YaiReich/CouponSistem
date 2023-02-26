import {useRef} from "react";
import { v4 as uuidv4 } from "uuid";

const AddCoupon = ({token}) => {

    const titleRef = useRef(null)
    const descRef = useRef(null)
    const priceRef = useRef(null)
    const imageUrlRef = useRef(null)
    const amountRef = useRef(null)
    const tokenFiledRef = useRef(null)
    const startDateRef = useRef(null)
    const endDateRef = useRef(null)

    const submitHandler = (event) => {
        event.preventDefault()

        const coupon = {
            uuid: uuidv4(),
            title: titleRef.current.value,
            description: descRef.current.value,
            price: priceRef.current.value,
            imageUrl: imageUrlRef.current.value,
            amount: amountRef.current.value,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value
        }

        handelAddCoupon(coupon,tokenFiledRef.current.value)
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
            <form onSubmit={submitHandler}>
                <h5>Title:</h5>
                <input type="text" id="couponTitleId" ref={titleRef}/>
                <h5>Description:</h5>
                <textarea id="couponDescId" cols="40" rows="10" ref={descRef}></textarea>
                <h5>Price:</h5>
                <input type="range" id="couponPriceId" min="19" max="499" ref={priceRef}/>
                <h5>Amount:</h5>
                <input type="range" id="couponAmountId" min="20" max="50" ref={amountRef}/>
                <div>
                    <label for="start">Start date:</label>
                    <input type="date" id="start" name="trip-start" min="2023-02-20" max="2024-12-12" ref={startDateRef}/>
                    <label for="end">End date</label>
                    <input type="date" id="end" name="trip-end" min="2023-02-20" max="2024-12-12" ref={endDateRef}/>
                </div>
                <h5>Image URL:</h5>
                <input type="text" id="imageUrlId" ref={imageUrlRef}/>
                <hr/>
                <input type="hidden" name="tokenFiled" value={token} ref={tokenFiledRef}/>

                <input type="submit" value="Send"/>

            </form>
        </>
    );
}

export default AddCoupon;
