<template>
	<div
		v-if="this.store.freezeLayer"
		@click="closeFreezeLayer"
	class="freeze-layer"></div>
</template>

<script>
export default {
	data() {
		return {
			store: this.$root.store
		}
	},
	methods: {
		closeFreezeLayer() {
			this.store.showSetting = false;
			this.store.freezeLayer = false;
		}
	}
}
</script>
<style scoped>
	.freeze-layer {
		position: fixed;
		top:0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0);
	}
</style>