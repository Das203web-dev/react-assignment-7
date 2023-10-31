import PropTypes from "prop-types"
const Item = ({ data }) => {
    console.log(typeof data)
    return (
        <div >
            <ol className="text-[#1C1B1B99] font-normal text-base mb-1">
                <li className="">{data.title}</li>

            </ol>
            {/* <hr /> */}


        </div>
    );
};
Item.propTypes = {
    data: PropTypes.object
}
export default Item;