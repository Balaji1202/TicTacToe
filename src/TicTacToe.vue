<template>
	<div
		:key="this.$root.store.restart"
		class="tic-tac-toe">
		<BaseHeader
			@mode-change="modeChange"
		/>
		<IntroPage
			v-if="!this.$root.store.start"
		/>
		<BaseBoard/>
		<WinningCard/>
	</div>
</template>

<script>
import BaseBoard from './components/BaseBoard.vue';
import WinningCard from './components/WinningCard';
import IntroPage from './components/IntroPage.vue';
import BaseHeader from './components/BaseHeader.vue';
export default {
	components: {
		WinningCard,
		BaseBoard,
		IntroPage,
		BaseHeader
	},
	methods: {
		modeChange() {
			this.$root.store.restart = true;
		}
	}
}
</script>

<style scoped>
.tic-tac-toe{
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
}
</style>