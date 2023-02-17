import {useRef} from "react";

const AddCoupon = ({onAddCoupon}) => {

    const titleRef = useRef(null)
    const descRef = useRef(null)
    const priceRef = useRef(null)
    const imageUrlRef = useRef(null)
    const amountRef = useRef(null)

    const submitHandler = (event) => {
        event.preventDefault()

        const coupon = {
            title: titleRef.current.value,
            description: descRef.current.value,
            price: priceRef.current.value,
            imageUrl: imageUrlRef.current.value,
            amount: amountRef.current.value
        }

        onAddCoupon(coupon)
    }

    return (
        <>
            <h4>To Add new coupon:</h4>
            <form onSubmit={submitHandler}>
                <h5>Title:</h5>
                <input type="text" id="couponTitleId" ref={titleRef}/>
                <h5>Description:</h5>
                <textarea id="couponDescId" cols="15" rows="10" ref={descRef}></textarea>
                <h5>Price:</h5>
                <input type="range" id="couponPriceId" min="19" max="499" ref={priceRef}/>
                <h5>Amount:</h5>
                <input type="range" id="couponAmountId" min="20" max="50" ref={amountRef}/>
                <h5>Image URL:</h5>
                <input type="text" id="imageUrlId" ref={imageUrlRef}/>
                <hr/>
                <input type="submit" value="Send"/>
            </form>
        </>
    );
}

export default AddCoupon;