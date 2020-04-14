<template>
	<div class="svgs">
	<transition name="fade">
		<svg
			v-if="this.$root.store.showSetting"
			version="1.1" class="arrow-down"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			width="255px" height="255px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
			<g id="arrow-drop-down">
				<polygon points="0,63.75 127.5,191.25 255,63.75"/>
			</g>
		</svg>
	</transition>
	<svg @click="rotateGear" class="gear" ref="gear" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m499.953125 197.703125-39.351563-8.554687c-3.421874-10.476563-7.660156-20.695313-12.664062-30.539063l21.785156-33.886719c3.890625-6.054687 3.035156-14.003906-2.050781-19.089844l-61.304687-61.304687c-5.085938-5.085937-13.035157-5.941406-19.089844-2.050781l-33.886719 21.785156c-9.84375-5.003906-20.0625-9.242188-30.539063-12.664062l-8.554687-39.351563c-1.527344-7.03125-7.753906-12.046875-14.949219-12.046875h-86.695312c-7.195313 0-13.421875 5.015625-14.949219 12.046875l-8.554687 39.351563c-10.476563 3.421874-20.695313 7.660156-30.539063 12.664062l-33.886719-21.785156c-6.054687-3.890625-14.003906-3.035156-19.089844 2.050781l-61.304687 61.304687c-5.085937 5.085938-5.941406 13.035157-2.050781 19.089844l21.785156 33.886719c-5.003906 9.84375-9.242188 20.0625-12.664062 30.539063l-39.351563 8.554687c-7.03125 1.53125-12.046875 7.753906-12.046875 14.949219v86.695312c0 7.195313 5.015625 13.417969 12.046875 14.949219l39.351563 8.554687c3.421874 10.476563 7.660156 20.695313 12.664062 30.539063l-21.785156 33.886719c-3.890625 6.054687-3.035156 14.003906 2.050781 19.089844l61.304687 61.304687c5.085938 5.085937 13.035157 5.941406 19.089844 2.050781l33.886719-21.785156c9.84375 5.003906 20.0625 9.242188 30.539063 12.664062l8.554687 39.351563c1.527344 7.03125 7.753906 12.046875 14.949219 12.046875h86.695312c7.195313 0 13.421875-5.015625 14.949219-12.046875l8.554687-39.351563c10.476563-3.421874 20.695313-7.660156 30.539063-12.664062l33.886719 21.785156c6.054687 3.890625 14.003906 3.039063 19.089844-2.050781l61.304687-61.304687c5.085937-5.085938 5.941406-13.035157 2.050781-19.089844l-21.785156-33.886719c5.003906-9.84375 9.242188-20.0625 12.664062-30.539063l39.351563-8.554687c7.03125-1.53125 12.046875-7.753906 12.046875-14.949219v-86.695312c0-7.195313-5.015625-13.417969-12.046875-14.949219zm-152.160156 58.296875c0 50.613281-41.179688 91.792969-91.792969 91.792969s-91.792969-41.179688-91.792969-91.792969 41.179688-91.792969 91.792969-91.792969 91.792969 41.179688 91.792969 91.792969zm0 0"/></svg>
</div>
</template>

<script>
export default {
	methods: {
		rotateGear(event) {
			this.$emit('gear-clicked', event);
			let gear = this.$refs.gear;
			if(gear.getAttribute('id') === 'rotate-gear') {
				this.$refs.gear.setAttribute('id', 'rotate-gear-rev');
			}
			else {
				this.$refs.gear.setAttribute('id', 'rotate-gear');
			}
		}
	}
}
</script>

<style scoped>
	.svgs {
		display: flex;
		flex-direction: column;
		flex-flow: wrap-reverse;
		position: relative;
	}
	.arrow-down {
		position: absolute;
		top: 28px;
		left: 5.8px;
		width: 20px;
		height: 20px;
		transform: rotate(180deg);
		padding: 0px;
		fill: #02aab0;
	}
	.gear{
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
	#rotate-gear {
		-webkit-animation: rotate linear;
		animation: rotate linear;
		transform-origin: center;
		transform-box: fill-box;
		animation-duration: .5s;
	}
	#rotate-gear-rev {
		-webkit-animation: rev-rotate linear;
		animation: rev-rotate linear;
		transform-origin: center;
		transform-box: fill-box;
		animation-duration: .5s;
	}
	@keyframes rotate {
		from {
			transform: rotateZ(0deg);
		}
		to {
			transform: rotateZ(45deg);
		}
	}
	@keyframes rev-rotate {
		from {
			transform: rotateZ(45deg);
		}
		to {
			transform: rotateZ(0deg);
		}
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>