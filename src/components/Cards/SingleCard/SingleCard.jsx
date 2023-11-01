import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";
const SingleCard = ({ course, handleSelectBtn }) => {
    // console.log(course)
    const { image_link, title, description, price, credit_hours } = course
    return (
        <div className='border-2 bg-[#FFF] rounded-xl p-4 w-full md:max-w-[300px] relative '>
            <img className='mx-auto w-full' src={image_link} alt="" />
            <h2 className='font-semibold text-lg mt-4'>{title}</h2>
            <p className='font-normal text-sm text-[#1C1B1B99] mt-3'>{description}</p>
            <div className='flex justify-between items-center mt-5'>
                <button className='flex justify-between items-center gap-3'><FiDollarSign className='text-2xl'></FiDollarSign> Price : {price}</button>
                <button className='flex justify-between items-center gap-3'> <GoBook className='text-2xl'></GoBook> {credit_hours}</button>
            </div>
            {/* <div className='relative w-full'> */}
            <button onClick={() => handleSelectBtn(course)} className='bg-[#2F80ED] w-full h-10 border border-[#2F80ED] rounded-lg mt-6 text-white font-semibold text-lg'>Select</button>
            {/* </div> */}
        </div>
    );
};
SingleCard.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectBtn: PropTypes.func
}
export default SingleCard;