<template>
	<div>
		<IntroPage
			v-if="!this.$root.store.start"
		/>
		<BaseBoard
			:key="this.$root.store.restart"
		/>
		<WinningCard/>
	</div>
</template>

<script>
import BaseBoard from './components/BaseBoard.vue';
import WinningCard from './components/WinningCard';
import IntroPage from './components/IntroPage.vue'
export default {
	components: {
		BaseBoard,
		WinningCard,
		IntroPage
	}
}
</script>