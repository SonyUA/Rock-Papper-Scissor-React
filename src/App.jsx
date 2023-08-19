import "./App.css";
import rockImg from "../public/rock.png";
import paperImg from "../public/paper.png";
import scissorsImg from "../public/scissors.png";
import { useRef, useState } from "react";

function App() {
    const [userPoint, setUserPoint] = useState(0);
    const [pcPoint, setPcPoint] = useState(0);
    const [whoWon, setWhoWon] = useState("");
    const userHandRef = useRef(null);
    const pcHandRef = useRef(null);
    const images = [rockImg, paperImg, scissorsImg];
    const goStart = async (e) => {
        const userId = +e.target.id;
        const opponentId = Math.floor(Math.random() * 3 + 1);

        // eslint-disable-next-line no-unused-vars
        const startGame = setTimeout(() => {
            pcHandRef.current.src = images[opponentId - 1];
            userHandRef.current.src = images[userId - 1];
            pcHandRef.current.style = "top: 0px";
            userHandRef.current.style = "bottom: 0px";
            if (userId === opponentId) {
                console.log("draw");
                setWhoWon("Draw");
            }

            if (userId === 1 && opponentId === 2) {
                console.log("pc win");
                setWhoWon("PC Win");
                setPcPoint((prev) => prev + 1);
            }
            if (userId === 2 && opponentId === 1) {
                console.log("you win");
                setWhoWon("You Win");
                setUserPoint((prev) => prev + 1);
            }
            if (userId === 1 && opponentId === 3) {
                console.log("you win");
                setWhoWon("You Win");
                setUserPoint((prev) => prev + 1);
            }
            if (userId === 3 && opponentId === 1) {
                console.log("pc win");
                setWhoWon("PC Win");
                setPcPoint((prev) => prev + 1);
            }
            if (userId === 2 && opponentId === 3) {
                console.log("pc win");
                setWhoWon("PC Win");
                setPcPoint((prev) => prev + 1);
            }
            if (userId === 3 && opponentId === 2) {
                console.log("you win");
                setWhoWon("You Win");
                setUserPoint((prev) => prev + 1);
            }
        }, 1000);

        pcHandRef.current.style = "top: -233px";
        userHandRef.current.style = "bottom: -220px";
    };
    return (
        <div className='wrapper'>
            <div className='rival__section'>
                <img ref={pcHandRef} className='rival__img' src={rockImg} alt='' />
            </div>
            <div className='section__score'>
                <p className='user__score'>User {userPoint}</p>
                <p className='winner__title'>{whoWon}</p>
                <p className='rival__score'>Opponent {pcPoint}</p>
            </div>
            <div className='user__section'>
                <img ref={userHandRef} className='user__img' src={paperImg} alt='' />
            </div>
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
        </div>
    );
}

export default App;
