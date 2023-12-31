import PropTypes from "prop-types"
import Item from "./Item/Item";
const Cart = ({ cartData, creditHour, remainingHour, totalPrice }) => {
    // console.log(cartData)
    return (
        <div className="mt-5 sticky top-4 bg-[#FFF] border-2 p-4 rounded-xl">
            <h2 className="font-bold text-lg text-[#2F80ED] mb-4">Credit Hour Remaining : {remainingHour}</h2>
            <hr />
            <h2 className="my-4 font-bold text-xl">Course Name</h2>
            <div className="mb-4">
                {
                    cartData.map((data, index) => <Item key={index} data={data}></Item>)

                }
            </div>
            <hr />
            <h2 className="text-base font-medium my-4">Total Credit Hour : {creditHour} </h2>
            <hr />
            <h2 className="text-base font-bold my-4">Total Price : {totalPrice}</h2>

        </div>
    );
};
Cart.propTypes = {
    cartData: PropTypes.array.isRequired,
    creditHour: PropTypes.number,
    remainingHour: PropTypes.number,
    totalPrice: PropTypes.number
}
export default Cart;