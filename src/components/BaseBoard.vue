<template>
	<div>
		<div class="command">{{this.store.currentMove.toUpperCase()}}'s turn </div>
		<div
			ref="board"
			class="board"
			:class="{mobile: isMobile, [this.store.currentMove]: true}"
			>
			<div
			v-for="(item, index) in this.store.boardSize * this.store.boardSize" :key="index"
				@click.once="onPlay" :data-cell="index" class="cell"></div>
			</div>
		</div>
</template>

<script>
export default {
	data() {
		return {
			winAudio: document.getElementById('win-audio'),
			moveAudio: document.getElementById('move-audio'),
			cellsLeft: this.$root.store.boardSize * this.$root.store.boardSize,
			store: this.$root.store,
			isMobile: false,
			statusMap: new Array((2*this.$root.store.boardSize) + 2).fill(0),
			winningLookup: [
									[0, 1, 2],
									[3, 4, 5],
									[6, 7, 8],
									[0, 3, 6],
									[1, 4, 7],
									[2, 5, 8],
									[0, 4, 8],
									[2, 4, 6]
								],
			cellElements: ''
		}
	},
	methods: {
		checkStatus() {
			if(this.cellsLeft === 0) {
				this.store.gameStatus = 'Match draw'
			}
			else {
				let result = this.checkWin();
				if(result === true) {
					this.store.gameStatus = this.store.currentMove.toUpperCase() + ' wins'
					this.winAudio.currentTime = 0;
					this.winAudio.play();
				}
			}
		},
		checkWin() {
			return this.winningLookup.some( lookup => {
				return lookup.every(index => {
					return this.cellElements[index].classList.contains(this.store.currentMove);
				})
			})
			this.statusMap[index] += updateValue;
		},
		switchPlayer() {
			this.store.currentMove = this.store.currentMove === 'x' ? 'o': 'x';
		},
		onPlay(event) {
			this.cellsLeft--;
			event.target.closest('.cell').classList.add(this.store.currentMove);
			this.checkStatus();
			this.playAudio();
			this.switchPlayer();
		},
		playAudio() {
			this.moveAudio.currentTime = 0;
			this.moveAudio.play();
		},
		checkIsMobile() {
			const toMatch = [
					/Android/i,
					/webOS/i,
					/iPhone/i,
					/iPad/i,
					/iPod/i,
					/BlackBerry/i,
					/Windows Phone/i
			];
			return toMatch.some((toMatchItem) => {
					return navigator.userAgent.match(toMatchItem);
			});
		},
		flushStore() {
			this.store.restart = false;
			this.store.gameStatus = '';
			this.store.currentMove = 'x'
		}
	},
	mounted() {
		this.flushStore();
		this.winAudio.pause();
		if(this.checkIsMobile()) {
			this.isMobile = true;
		}
		this.cellElements = this.$refs.board.children;
	}
}
</script>

<style scoped>
	.board {
		margin-top: -60px;
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: repeat(3, auto);
		justify-content: center;
		align-content: center;
		justify-items: center;
		align-items: center;
	}

/* Mobile specific style */

	.mobile.board.o .cell:not(.x):not(.o):before,
	.mobile.board.o .cell:not(.x):not(.o)::after {
		content: '';
		position: absolute;
		border-radius: 50%;
	}
	.mobile.board.o .cell:not(.x):not(.o)::before {
		background-color: black;
		width: var(--mark-size);
		height: var(--mark-size);
	}
	.mobile.board.o .cell:not(.x):not(.o)::after {
		background-color: white;
		width: calc(var(--mark-size)*.7);
		height: calc(var(--mark-size)*.7);
	}
	.mobile.board.o .cell:not(.x):not(.o)::before {
		background-color: lightgrey;
	}
	
	.mobile.board.x .cell:not(.x):not(.o)::before,
	.mobile.board.x .cell:not(.x):not(.o)::after {
		content: '';
		width: calc( var(--mark-size) * .15 );
		height: var(--mark-size);
		position: absolute;
	}

	.mobile.board.x .cell:not(.x):not(.o)::before {
		transform: rotate(45deg);
	}
	.mobile.board.x .cell:not(.x):not(.o)::after {
		transform: rotate(-45deg);
	}
	.mobile.board.x .cell:not(.x):not(.o)::before,
	.mobile.board.x .cell:not(.x):not(.o)::after{
		background-color: lightgrey;
	}

/* End of Mobile specific style */

	.command{
		display: flex;
		text-align: center;
		justify-content: center;
		align-content: center;
		font-size: 3rem;
	}

	.cell {
		width: var(--cell-size);
		height: var(--cell-size);
		border: 1px solid black;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		cursor: pointer;
	}

	.cell.o,
	.cell.x {
		cursor: not-allowed;
	}

	.cell:nth-child(1),
	.cell:nth-child(2),
	.cell:nth-child(3) {
		border-top: none;
	}
	.cell:nth-child(1),
	.cell:nth-child(4),
	.cell:nth-child(7) {
		border-left: none;
	}
	.cell:nth-child(3),
	.cell:nth-child(6),
	.cell:nth-child(9) {
		border-right: none;
	}
	.cell:nth-child(7),
	.cell:nth-child(8),
	.cell:nth-child(9) {
		border-bottom: none;
	}

/* Cell o */
	.cell.o::before,
	.cell.o::after,
	.board.o .cell:not(.x):not(.o):hover:before,
	.board.o .cell:not(.x):not(.o):hover::after {
		content: '';
		position: absolute;
		border-radius: 50%;
	}
	.cell.o::before,
	.board.o .cell:not(.x):not(.o):hover:before {
		background-color: black;
		width: var(--mark-size);
		height: var(--mark-size);
	}
	.cell.o::after,
	.board.o .cell:not(.x):not(.o)::after {
		background-color: white;
		width: calc(var(--mark-size)*.7);
		height: calc(var(--mark-size)*.7);
	}
	.board.o .cell:not(.x):not(.o):hover::before {
		background-color: lightgrey;
	}
/* End of cell o */

/* Cell x */
	.cell.x::before,
	.cell.x::after {
		background-color: black;
	}
	.cell.x::before,
	.cell.x::after,
	.board.x .cell:not(.x):not(.o):hover::before,
	.board.x .cell:not(.x):not(.o):hover::after {
		content: '';
		width: calc( var(--mark-size) * .15 );
		height: var(--mark-size);
		position: absolute;
	}
	.cell.x::before,
	.board.x .cell:not(.x):not(.o):hover::before {
		transform: rotate(45deg);
	}
	.cell.x::after,
	.board.x .cell:not(.x):not(.o):hover::after {
		transform: rotate(-45deg);
	}
	.board.x .cell:not(.x):not(.o):hover::before,
	.board.x .cell:not(.x):not(.o):hover::after{
		background-color: lightgrey;
	}
/* End of cell x */
</style>