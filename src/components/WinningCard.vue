<template>
	<div
	v-if="this.store.gameStatus"
	class="winning-message">
		<div>{{this.store.gameStatus}}</div>
		<button @click="restartMatch" class="restart-button">Restart</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			store: this.$root.store
		}
	},
	methods: {
		restartMatch() {
			this.store.restart = true;
		}
	}
}
</script>

<style scoped>
.winning-message {
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.9);
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 4rem;
	flex-direction: column;
}

.restart-button {
	font-size: 3rem;
	background-color: white;
	border: 1px solid black;
	padding: .25em;
	cursor: pointer;
	border-radius: 20px;
	outline: none;
}
.restart-button:active{
	background-color: black;
	color: white;
}
</style>