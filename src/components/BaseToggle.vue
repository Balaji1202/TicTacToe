<template>
	<label class="switch">
		<input @change="toggleChanged" type="checkbox">
		<span class="slider"></span>
	</label>
</template>

<script>
export default {
	methods: {
		toggleChanged() {
			this.$emit('toggle')
		}
	}
}
</script>

<style scoped>
	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 27px;
		margin: 10px;
	}
	.switch input {
		opacity: 0;		
		width: 0;
		height: 0;
	}
	.slider {
		border-radius: 30%;
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: black;
		-webkit-transition: .4s;
		transition: .4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 18px;
		width: 18px;
		left: 3px;
		bottom: 4px;
		background-color: rgb(255, 255, 255);
		-webkit-transition: .4s;
		transition: .4s;
		border-radius: 50%;
	}

	input:checked + .slider {
  	background-color: black;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
</style>