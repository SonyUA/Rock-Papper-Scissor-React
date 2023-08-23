/* eslint-disable react/prop-types */
const ManagmentSection = (props) => {
    const { goStart } = props;
    const [rockImg, paperImg, scissorsImg] = props.images;
    return (
        <div className='management__section'>
            <div className='management__btn'>
                <img onClick={goStart} id='1' className='management__img' src={rockImg} alt='rock-image' />
                <p className='management__title'>Rock</p>
            </div>
            <div className='management__btn'>
                <img onClick={goStart} id='2' className='management__img' src={paperImg} alt='paper-image' />
                <p className='management__title'>Paper</p>
            </div>
            <div className='management__btn'>
                <img onClick={goStart} id='3' className='management__img' src={scissorsImg} alt='scissors-image' />
                <p className='management__title'>Scissors</p>
            </div>
        </div>
    );
};

export default ManagmentSection;
