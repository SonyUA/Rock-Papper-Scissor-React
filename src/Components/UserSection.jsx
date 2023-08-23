const UserSection = (props) => {
    // eslint-disable-next-line react/prop-types
    const { userHandRef, paperImg } = props;
    return (
        <div className='user__section'>
            <img ref={userHandRef} className='user__img' src={paperImg} alt={`image-${paperImg}`} />
        </div>
    );
};

export default UserSection;
