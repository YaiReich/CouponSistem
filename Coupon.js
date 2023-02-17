import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

const Coupon = ({title, price, text, imageUrl}) => {
    return (<Card
            style={{
                width: '18rem'
            }}
        >
            <img
                alt={title}
                src={imageUrl}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {title}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    ₪ {price}
                </CardSubtitle>
                <CardText>
                    {text}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Coupon;