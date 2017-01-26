class Footer extends React.Component{
	remainingCount() {
		if (this.props.gameState !== "recall") { return null; }
		return (
			<div className="remaining-count">
				Remain cells: {this.props.activeCellsCount - this.props.correctGuesses.length}
			</div>
		);
	}
	countScorePoints() {
		if(this.props.gameState == 'won'){
			if(this.props.checkSeconds >= 5){
				this.roundScore = (this.props.scorePointsWithoutWrong - this.props.wrongGuesses.length) * this.props.timeFactor
			} else {
				this.roundScore = (this.props.scorePointsWithoutWrong - this.props.wrongGuesses.length)
			}
		} else if(this.props.gameState == 'lost') {
			this.roundScore = 0;
		}
		if (["won", "lost"].indexOf(this.props.gameState) >= 0) {
			return(
				<div className='totalScore'>
					Total Score: {this.roundScore}
				</div>
			);
		}
	}
	playAgainButton() {
		if (["won", "lost"].indexOf(this.props.gameState) >= 0) {
			return (
				<button 
					className="play-again-button"
					onClick={this.props.playAgain}>
					Play Again
				</button>
			);
		}
	}
	render() {
		return (
			<div className='footer'>
				<div className='hint'>
					{this.props.hints[this.props.gameState]}...
				</div>
				{this.remainingCount()}
				{this.countScorePoints()}
				{this.playAgainButton()}
			</div>
		);
	}
}

Footer.defaultProps = {
	hints:{
		ready: "Get Ready",
		memorize: "Memorize",
		recall: "Recall",
		won: "Well Played",
		lost: "Game Over"
	}
}

export default Footer;