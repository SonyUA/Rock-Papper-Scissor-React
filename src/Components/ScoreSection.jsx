const ScoreSection = (props) => {
    // eslint-disable-next-line react/prop-types
    const { userPoint, pcPoint, whoWon } = props;
    return (
        <div className='section__score'>
            <p className='user__score'>
                User <br />
                <span>{userPoint}</span>
            </p>
            <p className='winner__title'>{whoWon}</p>
            <p className='rival__score'>
                Opponent <br /> <span>{pcPoint}</span>
            </p>
        </div>
    );
};

export default ScoreSection;
