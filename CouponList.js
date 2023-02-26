import Coupon from "./Coupon";

const CouponList = ({coupons}) => {

    return (
        <div style={{
            marginTop: '10px'
        }}>
            {coupons.map((coupon) => {
                return <Coupon id={coupon.id}
                               title={coupon.title}
                               price={coupon.price}
                               text={coupon.description}
                               imageUrl={coupon.imageUrl}
                               endDate={coupon.endDate}/>
            })}
        </div>
    );
}

export default CouponList;
