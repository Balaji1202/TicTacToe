<template>
	<div class="intro-message">
		<p class="intro-text">Ready to play TicTacToe</p>
		<button
			@click="startGame"
		class="start-button">Start</button>
	</div>
</template>

<script>
export default {
	methods: {
		startGame() {
			this.$root.store.start = true
		}
	}
}
</script>

<style scoped>

.intro-message {	
	z-index: 3;
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	background-color: rgba(255, 255, 255, 0.9);
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
	font-size: 2rem;
	flex-direction: column;
}

.start-button {
	font-size: 3rem;
	background-color: white;
	border: 1px solid black;
	padding: .25em;
	cursor: pointer;
	border-radius: 20px;
	outline: none;
}
.start-button:active{
	background-color: black;
	color: white;
}
</style>