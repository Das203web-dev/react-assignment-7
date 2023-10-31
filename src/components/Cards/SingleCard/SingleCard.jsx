import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";
const SingleCard = ({ course }) => {
    console.log(course)
    const { image_link, title, description, price, credit_hours } = course
    return (
        <div className='border-2 bg-[#FFF] rounded-xl p-4 max-w-[300px] relative '>
            <img className='mx-auto' src={image_link} alt="" />
            <h2 className='font-semibold text-lg mt-4'>{title}</h2>
            <p className='font-normal text-sm text-[#1C1B1B99] mt-3'>{description}</p>
            <div className='flex justify-between items-center mt-5'>
                <p className='flex justify-between items-center'><FiDollarSign></FiDollarSign> Price : {price}</p>
                <p className='flex justify-between items-center'> <GoBook></GoBook> {credit_hours}</p>
            </div>
            <div className='bottom-4 w-full'>
                <button className='bg-[#2F80ED] w-full h-10 border border-[#2F80ED] rounded-lg mt-6'>Select</button>
            </div>
        </div>
    );
};
SingleCard.propTypes = {
    course: PropTypes.object.isRequired
}
export default SingleCard;