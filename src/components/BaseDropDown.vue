<template>
	<ul class="dropdown">
		<li class="text">
			Switch theme
			<BaseToggle
				@toggle="switchTheme"
			/>
		</li>
		<li
			@click="changeMode"
			class="text settings">
			Change mode
		</li>
	</ul>
</template>

<script>
import BaseToggle from './BaseToggle.vue';
export default {
	components: {
		BaseToggle
	},
	data() {
		return {
			theme: 'light'
		}
	},
	methods: {
		changeMode() {
			this.$emit('mode-change');
		},
		switchHeaderTheme(root) {
			let display1 = `--${this.theme}-theme-header1`;
			let display2 = `--${this.theme}-theme-header2`;
			let theme1 = getComputedStyle(root).getPropertyValue(display1);
			let theme2 = getComputedStyle(root).getPropertyValue(display2);
			root.style.setProperty('--theme-base-header1', theme1);
			root.style.setProperty('--theme-base-header2', theme2);
		},
		switchFooterTheme(root) {
			let display1 = `--${this.theme}-theme-footer1`;
			let display2 = `--${this.theme}-theme-footer2`;
			let theme1 = getComputedStyle(root).getPropertyValue(display1);
			let theme2 = getComputedStyle(root).getPropertyValue(display2);
			root.style.setProperty('--theme-base-footer1', theme1);
			root.style.setProperty('--theme-base-footer2', theme2);
		},
		switchBodyTheme(root) {
			let display = `--${this.theme}-theme-body`;
			let theme = getComputedStyle(root).getPropertyValue(display);
			root.style.setProperty('--theme-base-body', theme);
		},
		switchTextTheme(root) {
			let display = `--${this.theme}-theme-text`;
			let theme = getComputedStyle(root).getPropertyValue(display);
			root.style.setProperty('--theme-base-text', theme);
		},
		switchTrace(root) {
			let display = `--${this.theme}-theme-trace`;
			let theme = getComputedStyle(root).getPropertyValue(display);
			root.style.setProperty('--theme-base-trace', theme);
		},
		switchTheme() {
			if(this.theme === 'light') {
				this.theme = 'dark';
			}
			else {
				this.theme = 'light';
			}
			let root = document.documentElement;
			this.switchHeaderTheme(root);
			this.switchFooterTheme(root);
			this.switchTextTheme(root);
			this.switchBodyTheme(root);
			this.switchTrace(root);
		}
	}
}
</script>

<style scoped>
.dropdown {
	background: linear-gradient(#02aab0, #00cdac);
	border-radius: 20px 5px 10px 10px;
}
.text {
	font-size: 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-basis: 100%;
	padding: 10px 0 10px 0;
}
.settings {
	cursor: pointer;
}
.settings:hover {
	color: white;
}
.dropdown {
	position: absolute;
	left: -231px;
	margin-top: 13px;
	width: 260px;
	height: 124px;
	list-style: none;
}
</style>