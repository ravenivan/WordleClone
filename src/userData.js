import { useContext } from "react";
import { AppContext } from "./App";
import { database } from "../firebase";
import { addDoc, collection } from "firebase/firestore";



export async function logNewGame(attempt, gameOver, user) {
    if (user === null) return;

    const logGame = {
        won: gameOver.isWordGuessed,
        attempts: gameOver.isWordGuessed ? attempt.row : 7,
        uid: user.uid
    };

    await addDoc(collection(database, "posts"), logGame);
}

