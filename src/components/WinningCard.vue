<template>
	<div
	v-if="this.store.gameStatus"
	class="winning-message">
		<div>{{this.store.gameStatus}}</div>
		<button @click="restartMatch" class="restart-button">Restart</button>
		<PullDown
			@pulled-down="onPulledDown"
		/>
		<transition name="fade">
			<InfoFooter
				v-if="this.pulledDown"
			/>
		</transition>
	</div>
</template>

<script>
import InfoFooter from './InfoFooter.vue'
import PullDown from './PullDown.vue'
export default {
	components: {
		InfoFooter,
		PullDown
	},
	data() {
		return {
			store: this.$root.store,
			pulledDown: false
		}
	},
	methods: {
		onPulledDown() {
			this.pulledDown = true
		},
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
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
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
.restart-button:hover{
	background-color: black;
	color: white;
}
.restart-button:active{
	background-color: white;
	color: black;
}
.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>