<template>
	<div class="header">
		<div class="title">
			Tic-Tac-Toe
		</div>
		<div class="gear">
			<BaseGear
				@gear-clicked="onGearClick">
			</BaseGear>
			<transition name="fade">
				<BaseDropDown
					v-show="this.store.showSetting"
				/>
			</transition>
		</div>
	</div>
</template>

<script>
import BaseDropDown from './BaseDropDown.vue';
import BaseGear from './BaseGear.vue';
export default {
	components: {
		BaseDropDown,
		BaseGear
	},
	data() {
		return {
			store: this.$root.store
		}
	},
	methods: {
		onGearClick(event) {
			event.stopPropagation();
			this.store.showSetting = !this.store.showSetting;
		},
		closeDropdown() {
			this.store.showSetting = false;
		}
	},
	created() {
		window.addEventListener("click", this.closeDropdown)
	}
}
</script>

<style scoped>

	.header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 10vh;
		background: linear-gradient(var(--theme-base-header1), var(--theme-base-header2));
		color: var(--theme-base-text);
		font-size: 2em;
	}
	.gear {
		position: relative;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>