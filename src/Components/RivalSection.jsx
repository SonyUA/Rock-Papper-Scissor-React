const RivalSection = (props) => {
    // eslint-disable-next-line react/prop-types
    const { pcHandRef, rockImg } = props;
    return (
        <div className='rival__section'>
            <img ref={pcHandRef} className='rival__img' src={rockImg} alt={`image-${rockImg}`} />
        </div>
    );
};

export default RivalSection;
