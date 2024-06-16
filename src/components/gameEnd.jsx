import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import GameEndStat from './ui/gameEnd-stat';
import GameEndDistribution from './ui/gameEnd-distribution';
import { AppContext } from '../App';
import { fetchUserData } from '../userData';

const GameEnd = () => {

	const { hideEndScreen, setHideEndScreen, user, gameOver } = useContext(AppContext);
	const [userTotalGames, setUserTotalGames] = useState(0);
	const [userWinRate, setUserWinRate] = useState(0);
	const [userFirstAttempt, setUserFirstAttempt] = useState(0);
	const [userSecondAttempt, setUserSecondAttempt] = useState(0);
	const [userThirdAttempt, setUserThirdAttempt] = useState(0);
	const [userFourthAttempt, setUserFourthAttempt] = useState(0);
	const [userFifthAttempt, setUserFifthAttempt] = useState(0);
	const [userSixthAttempt, setUserSixthAttempt] = useState(0);
	const [userLost, setuserLost] = useState(0);

	// let userTotalGames;
	// let userWinRate;
	// let userFirstAttempt;
	// let userSecondAttempt;
	// let userThirdAttempt;
	// let userFourthAttempt;
	// let userFifthAttempt;
	// let userSixthAttempt;
	// let userLost;

	function endScreen() {
		const change = !hideEndScreen;
		setHideEndScreen(change);
	}

	function refreshPage() {
		window.location.reload();
	}

	// async function setUserData() {

	// }

	useEffect(() => {
		// if (!gameOver.gameOver) return;
		if (user === null) return;


		fetchUserData(user)
			.then((userData) => {
				setUserTotalGames(userData.totalGames);
				setUserWinRate(userData.winRate);
				setUserFirstAttempt(userData.firstAttempt);
				setUserSecondAttempt(userData.secondAttempt);
				setUserThirdAttempt(userData.thirdAttempt);
				setUserFourthAttempt(userData.fourthAttempt);
				setUserFifthAttempt(userData.fifthAttempt);
				setUserSixthAttempt(userData.sixthAttempt);
				setuserLost(userData.lost)

			}).catch((error) => alert(error))
	}, [user, gameOver])



	return (
		<div>
			<div className={`end-screen ${hideEndScreen && "hide"}`}>
				{user !== null ? (
					<>
						<button className="end-exit" onClick={endScreen} >
							<FontAwesomeIcon icon={faX} />
						</button>
						<div className="end-data">
							<h1 className='end-title'>Thanks for playing!</h1>

							<div className="end-statistics">
								<h4 className="end-statistics-title">
									Statistics
								</h4>
								<div className="end-statistics-stats">
									<GameEndStat num={userTotalGames} title="Played" />
									<GameEndStat num={userWinRate} title="Win %" />
								</div>
							</div>

							<div className="end-distribution">
								<h4 className="end-distribution-title">
									Distribution
								</h4>
								<div className="end-distribution-distributions">
									<GameEndDistribution attempt="First Attempt:" num={userFirstAttempt} />
									<GameEndDistribution attempt="Second Attempt:" num={userSecondAttempt} />
									<GameEndDistribution attempt="Third Attempt:" num={userThirdAttempt} />
									<GameEndDistribution attempt="Fourth Attempt:" num={userFourthAttempt} />
									<GameEndDistribution attempt="Fifth Attempt:" num={userFifthAttempt} />
									<GameEndDistribution attempt="Sixth Attempt:" num={userSixthAttempt} />
									<GameEndDistribution attempt="Failed:" num={userLost} />
								</div>
							</div>
						</div>
						<button className="end-btn" onClick={refreshPage}  >
							Play Again
						</button>
					</>
				) : (
					<>
						<h1 className='end-title'>Thanks for playing!</h1>
						<h2 className="end-notlogged" >Log in to track your stats!</h2>
						<button className="end-btn" onClick={refreshPage}  >
							Play Again
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default GameEnd;
