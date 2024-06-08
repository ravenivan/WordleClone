import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import GameEndStat from './ui/gameEnd-stat';
import GameEndDistribution from './ui/gameEnd-distribution';
import { AppContext } from '../App';

const GameEnd = () => {

	const { hideEndScreen, setHideEndScreen } = useContext(AppContext);

	function endScreen() {
		const change = !hideEndScreen;
		setHideEndScreen(change);
}

	return (
		<div>
			<div className={`end-screen ${hideEndScreen && "hide"}`}>
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
							<GameEndStat num="6" title="Played" />
							<GameEndStat num="50" title="Win %" />
							<GameEndStat num="0" title="Win Streak" />
							<GameEndStat num="1" title="Max Streak" />
						</div>
					</div>

					<div className="end-distribution">
						<h4 className="end-distribution-title">
							Distribution
						</h4>
						<div className="end-distribution-distributions">
							<GameEndDistribution attempt="First Attempt:" num="2" />
							<GameEndDistribution attempt="Second Attempt:" num="2" />
							<GameEndDistribution attempt="Third Attempt:" num="2" />
							<GameEndDistribution attempt="Fourth Attempt:" num="2" />
							<GameEndDistribution attempt="Fifth Attempt:" num="2" />
							<GameEndDistribution attempt="Sixth Attempt:" num="2" />
						</div>
					</div>
				</div>

				<button className="end-btn">
					Play Again
				</button>
			</div>
		</div>
	);
}

export default GameEnd;
