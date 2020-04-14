<template>
	<div
	v-if="this.store.gameStatus"
	class="winning-message">
		<div>{{this.store.gameStatus}}</div>
		<button @click="restartMatch" class="restart-button">Restart</button>
		<InfoFooter/>
	</div>
</template>

<script>
import InfoFooter from './InfoFooter.vue'
export default {
	components: {
		InfoFooter
	},
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
	text-align: center;
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
	font-size: 2rem;
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