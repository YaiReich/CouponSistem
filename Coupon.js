import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {useSelector} from "react-redux";

const Coupon = ({id, title, price, text, imageUrl, onDelete,endDate}) => {

    const token = useSelector(state => state.auth.token)

    const handleDelete = () => {
        fetch(`http://localhost:8080/api/company/delete/${token}/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    onDelete(id);
                    window.location.reload(true);
                } else {
                    console.error('Failed to delete coupon');
                }
            })
            .catch(error => {
                console.error('Error deleting coupon:', error);
            });
    };



    return (<Card
            style={{
                width: '18rem',
                display: 'flex',
                textAlign: 'center',
                margin: '8px'
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
                <CardText>
                    Expiry Date: {endDate}
                </CardText>
                <button onClick={handleDelete}>Delete</button>
            </CardBody>
        </Card>
    )
}

export default Coupon;
