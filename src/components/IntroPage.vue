<template>
	<div class="intro-message">
		<template
			v-if="!started">
			<p class="intro-text">Ready to play TicTacToe</p>
			<button
				@click="chooseMode"
			class="start-button">Start</button>
		</template>
		<div
			class="player-mode"
			v-if="started && !typeChoosed">
			<p>Choose mode</p>
			<button @click="atTypeChoosed" data-type="1" class="start-button">Single player(vs AI)</button>
			<p>or</p>
			<button @click="atTypeChoosed" data-type="2" class="start-button">Dual player</button>
		</div>
		<div
			v-if="started && typeChoosed"
			class="player-mode">
			<p>AI's difficulty level</p>
			<button @click="atLevelChoosen" data-level="1" class="start-button">Easy</button>
			<p>or</p>
			<button @click="atLevelChoosen" data-level="2" class="start-button">Hard</button>
		</div>
		<button @click="goBack" v-if="started" class="back-button">Go back</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			started: false,
			typeChoosed: false
		}
	},
	methods: {
		goBack() {
			this.started = false;
			this.typeChoosed = false;
		},
		chooseMode() {
			this.started = true;
		},
		atTypeChoosed(event) {
			this.$root.store.singlePlayer = event.target.getAttribute('data-type') == 1;
			if(!this.$root.store.singlePlayer) {
				this.$root.store.start = true;
			}
			else {
				this.typeChoosed = true;
			}
		},
		atLevelChoosen() {
			this.$root.store.easy = event.target.getAttribute('data-level') == 1;
			this.$root.store.start = true;
		}
	},
	created() {
		this.$root.store.restart = false;
	}
}
</script>

<style scoped>
.back-button  {
	font-size: 20px;
	position: absolute;
	bottom: 30px;
	background-color: white;
	border: 1px solid black;
	padding: .25em;
	cursor: pointer;
	border-radius: 20px;
	outline: none;
}
.player-mode {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 50px;
}
.player-mode button {
	font-size: 1.5rem;
	background-color: white;
	border: 1px solid black;
	padding: .25em;
	cursor: pointer;
	border-radius: 20px;
	outline: none;
}
.intro-text {
	text-align: center;
}
.intro-message {	
	z-index: 1;
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	background-color: var(--theme-base-body);
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--theme-base-text);
	font-size: 4rem;
	flex-direction: column;
}

.start-button {
	font-size: 2rem;
	background-color: white;
	border: 1px solid black;
	padding: .25em;
	cursor: pointer;
	border-radius: 20px;
	outline: none;
}
.start-button:hover{
	background-color: black;
	color: white;
}
.start-button:active{
	background-color: white;
	color: black;
}
.back-button:hover{
	background-color: black;
	color: white;
}
.back-button:active{
	background-color: white;
	color: black;
}
</style>