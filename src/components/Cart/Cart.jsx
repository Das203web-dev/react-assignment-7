import PropTypes from "prop-types"
import Item from "./Item/Item";
const Cart = ({ cartData }) => {
    // console.log(cartData)
    return (
        <div className="mt-5 sticky top-4">
            <h2 className="font-bold text-lg text-[#2F80ED] mb-4">Credit Hour Remaining : 20hr</h2>
            <hr />
            <h2 className="my-4 font-bold text-xl">Course Name</h2>
            {
                cartData.map((data, index) => <Item key={index} data={data}></Item>)
            }
        </div>
    );
};
Cart.propTypes = {
    cartData: PropTypes.array.isRequired
}
export default Cart;