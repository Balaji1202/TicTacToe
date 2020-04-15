<template>
	<div class="tic-tac-toe">
		<BaseHeader/>
		<IntroPage
			v-if="!this.$root.store.start"
		/>
		<BaseBoard
			:key="this.$root.store.restart"
		/>
		<WinningCard/>
		<InfoFooter/>
	</div>
</template>

<script>
import BaseBoard from './components/BaseBoard.vue';
import WinningCard from './components/WinningCard';
import IntroPage from './components/IntroPage.vue';
import BaseHeader from './components/BaseHeader.vue';
import InfoFooter from './components/InfoFooter.vue'
export default {
	components: {
		WinningCard,
		BaseBoard,
		IntroPage,
		BaseHeader,
		InfoFooter
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