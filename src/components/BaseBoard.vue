<template>
	<div class="boardComponent">
		<div v-show="this.store.currentMove === 'o' && this.store.singlePlayer">AI's turn</div>
		<div v-show="this.store.currentMove === 'x' && this.store.singlePlayer">Your turn</div>
		<div v-show="!this.store.singlePlayer">{{this.store.currentMove.toUpperCase()}}'s turn</div>
		<div
			ref="board"
			class="board"
			:class="{mobile: isMobile, [this.store.currentMove]: true}"
			>
			<div
			v-for="(item, index) in this.store.boardSize * this.store.boardSize" :key="index"
				@click.once="onPlay" :data-cell="index" class="cell"></div>
			</div>
			<BaseFreezeLayer
				v-if="this.freezeLayer"/>
		</div>
</template>

<script>
import BaseFreezeLayer from './BaseFreezeLayer.vue';
export default {
	components: {
		BaseFreezeLayer
	},
	data() {
		return {
			winAudio: document.getElementById('win-audio'),
			moveAudio: document.getElementById('move-audio'),
			cellsLeft: this.$root.store.boardSize * this.$root.store.boardSize,
			store: this.$root.store,
			freezeLayer: false,
			isMobile: false,
			availableLookup: [],
			computerPlayed: false,
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
			let result = this.checkWin();
			if(result === true) {
				if(this.store.singlePlayer && this.store.currentMove === 'o') {
					this.store.gameStatus = 'AI wins';
				}
				else if(this.store.singlePlayer && this.store.currentMove === 'x') {
					this.store.gameStatus = 'You win';
					this.winAudio.currentTime = 0;
					this.winAudio.play();
				}
				else {
					this.store.gameStatus = this.store.currentMove.toUpperCase() + ' wins'
					this.winAudio.currentTime = 0;
					this.winAudio.play();
				}
			}
			else if(this.cellsLeft === 0) {
				this.store.gameStatus = 'Match draw'
			}
		},
		checkWin() {
			return this.winningLookup.some( lookup => {
				return lookup.every(index => {
					return this.cellElements[index].classList.contains(this.store.currentMove);
				})
			})
		},
		switchPlayer() {
			this.store.currentMove = this.store.currentMove === this.store.firstPlayer ? this.store.secondPlayer: this.store.firstPlayer;
		},
		onPlay(event) {
			let cellElement = event.target.closest('.cell');
			if(cellElement.className.includes('x') || cellElement.className.includes('o')) {
				return;
			}
			this.cellsLeft--;
			let index = cellElement.getAttribute('data-cell');
			this.availableLookup = this.availableLookup.filter((a) => a != index);
			cellElement.classList.add(this.store.currentMove);
			this.checkStatus();
			this.playAudio();
			this.switchPlayer();
			if(this.store.singlePlayer && ! this.computerPlayed && this.cellsLeft && !this.store.gameStatus) {
				this.showFreezeLayer();
				setTimeout(() => {
					this.playComputer();
					this.hideFreezeLayer();
				}, 500);
			} else {
				this.computerPlayed = false;
			}
		},
		showFreezeLayer() {
			this.freezeLayer = true;
		},
		hideFreezeLayer() {
			this.freezeLayer = false;
		},
		playComputer() {
			this.computerPlayed = true;
			let index = Math.floor(Math.random() * this.availableLookup.length);
			index = this.availableLookup[index];
			let computerCell = document.querySelectorAll(`[data-cell="${index}"]`);
			computerCell[0].click();
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
		for(let i = 0; i < this.$root.store.boardSize * this.$root.store.boardSize; i++) {
			this.availableLookup.push(i);
		}
		this.cellElements = this.$refs.board.children;
	}
}
</script>

<style scoped>
	.boardComponent {
		margin-top: 100px;
		text-align: center;
		font-size: 3rem;
	}
	.board {
		width: 100vw;
		height: 60vh;
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
		background-color: var(--theme-base-text);
		width: var(--mark-size);
		height: var(--mark-size);
	}
	.mobile.board.o .cell:not(.x):not(.o)::after {
		background-color: var(--theme-base-body);
		width: calc(var(--mark-size)*.7);
		height: calc(var(--mark-size)*.7);
	}
	.mobile.board.o .cell:not(.x):not(.o)::before {
		background-color: var(--theme-base-trace);
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
		background-color: var(--theme-base-trace);
	}

/* End of Mobile specific style */

	.cell {
		width: var(--cell-size);
		height: var(--cell-size);
		border: 2px solid var(--theme-base-text);
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
		background-color: var(--theme-base-text);
		width: var(--mark-size);
		height: var(--mark-size);
	}
	.cell.o::after,
	.board.o .cell:not(.x):not(.o)::after {
		background-color: var(--theme-base-body);
		width: calc(var(--mark-size)*.7);
		height: calc(var(--mark-size)*.7);
	}
	.board.o .cell:not(.x):not(.o):hover::before {
		background-color: var(--theme-base-trace);
	}
/* End of cell o */

/* Cell x */
	.cell.x::before,
	.cell.x::after {
		background-color: var(--theme-base-text);
		border: solid var(--theme-base-body) 1px;
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
		background-color: var(--theme-base-trace);
	}
/* End of cell x */
</style>