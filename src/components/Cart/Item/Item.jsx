import PropTypes from "prop-types"
const Item = ({ data }) => {
    // console.log(data)
    return (
        <div>
            <ol>
                <li>{data.title}</li>
            </ol>
        </div>
    );
};
Item.propTypes = {
    data: PropTypes.object
}
export default Item;