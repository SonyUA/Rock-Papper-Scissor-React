import "./App.css";
import rockImg from "./images/rock.png";
import paperImg from "./images/paper.png";
import scissorsImg from "./images/scissors.png";
import { useRef, useState } from "react";
import RivalSection from "./Components/RivalSection";
import ScoreSection from "./Components/ScoreSection";
import UserSection from "./Components/UserSection";
import ManagmentSection from "./Components/ManagmentSection";

function App() {
    const [userPoint, setUserPoint] = useState(0);
    const [pcPoint, setPcPoint] = useState(0);
    const [whoWon, setWhoWon] = useState("");
    const userHandRef = useRef(null);
    const pcHandRef = useRef(null);
    const images = [rockImg, paperImg, scissorsImg];
    const results = {
        "1-2": "PC Win",
        "2-1": "You Win",
        "1-3": "You Win",
        "3-1": "PC Win",
        "2-3": "PC Win",
        "3-2": "You Win",
    };
    const goStart = (e) => {
        const userId = +e.target.id;
        const opponentId = Math.floor(Math.random() * 3 + 1);
        const res = results[`${userId}-${opponentId}`];

        // eslint-disable-next-line no-unused-vars
        const startGame = setTimeout(() => {
            pcHandRef.current.src = images[opponentId - 1];
            userHandRef.current.src = images[userId - 1];

            pcHandRef.current.style = "top: 0px";
            userHandRef.current.style = "bottom: 0px";

            if (userId === opponentId) {
                setWhoWon("Draw");
            }
            if (res === "PC Win") {
                setWhoWon("PC Win");
                setPcPoint((prev) => prev + 1);
            } else if (res === "You Win") {
                setWhoWon("You Win");
                setUserPoint((prev) => prev + 1);
            }
        }, 600);

        pcHandRef.current.style = "top: -250px";
        userHandRef.current.style = "bottom: -250px";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return (
        <div className='wrapper'>
            <RivalSection pcHandRef={pcHandRef} rockImg={rockImg} />
            <ScoreSection userPoint={userPoint} pcPoint={pcPoint} whoWon={whoWon} />
            <UserSection userHandRef={userHandRef} paperImg={paperImg} />
            <ManagmentSection images={images} goStart={goStart} />
        </div>
    );
}

export default App;
