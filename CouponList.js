import Coupon from "./Coupon";

const CouponList = ({coupons}) => {
    return (
        <>
            {coupons.map((coupon) => {
                return <Coupon key={coupon.id}
                               title={coupon.title}
                               price={coupon.price}
                               text={coupon.description}
                               imageUrl={coupon.imageUrl}/>
            })}
        </>
    );
}

export default CouponList;
