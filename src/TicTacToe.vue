<template>
	<div>
		<BaseBoard
			:key="this.$root.store.restart"
		/>
		<WinningCard/>
	</div>
</template>

<script>
import BaseBoard from './components/BaseBoard.vue';
import WinningCard from './components/WinningCard';
export default {
	components: {
		BaseBoard,
		WinningCard
	}
}
</script>