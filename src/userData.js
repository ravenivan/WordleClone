import { useContext, useId } from "react";
import { AppContext } from "./App";
import { database } from "../firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

export async function logNewGame(attempt, gameOver, user) {
    if (!gameOver.gameOver) return;

    const logGame = {
        won: gameOver.isWordGuessed,
        attempts: gameOver.isWordGuessed ? attempt.row : 7,
        uid: user === null ? "Guest" : user.uid
    };

    await addDoc(collection(database, "posts"), logGame);
}

export async function fetchUserData(user) {
    if (user === null) return;

    let totalGames;
    let wins = 0;
    let winRate;
    let firstAttempt = 0;
    let secondAttempt = 0;
    let thirdAttempt = 0;
    let fourthAttempt = 0;
    let fifthAttempt = 0;
    let sixthAttempt = 0;
    let lost = 0;



    const postsByUser = query(
        collection(database, "posts"),
        where("uid", "==", user.uid)
    )

    const { docs } = await getDocs(postsByUser);
    const posts = docs.map(doc => doc.data());

    /* Check winrate */
    posts.forEach((post) => {
        if (post.won) wins++;
    })

    totalGames = posts.length; /* How many games user played */
    winRate = Math.round((wins / totalGames) * 100); /* Win rate */

    /* Check for distribution */

    posts.forEach((post) => {
        switch(post.attempts) {
            case 1:
                firstAttempt++;
                break;
            case 2: 
                secondAttempt++;
                console.log(post.attempts);
                break;
            case 3:
                thirdAttempt++;
                break;
            case 4:
                fourthAttempt++;
                break;
            case 5:
                fifthAttempt++;
                break;
            case 6:
                sixthAttempt++;
                break;
            default:
                lost++;
                break;
        }
    })

    console.log(firstAttempt);
    console.log(secondAttempt);
    console.log(thirdAttempt);
    console.log(fourthAttempt);
    console.log(fifthAttempt);
    console.log(sixthAttempt);

    console.log(wins);

    console.log(posts);

    return { 
        totalGames, 
        winRate, 
        lost,
        firstAttempt, secondAttempt, thirdAttempt, fourthAttempt, fifthAttempt, sixthAttempt
    }


}



