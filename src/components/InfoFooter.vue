<template>
	<div class="footer">
		<div class="footer-text">
			<p>Hi!</p>
			<h3>
				<p>Wanna say something, or grab a cup of coffee, or discuss on any projects,</p>
				<p>Connect with me on</p>
				<a href="https://www.linkedin.com/in/balaji-saravanan/" target="_blank"><img src="./../assets/linkedin.png" width="50px" height="50px" alt=""></a>
				<a href="mailto:balajilitsv@gmail.com" target="_blank"><img src="./../assets/mail.png" width="40px" height="50px" alt=""></a>
			</h3>
				<h1>
					-Balaji SV
				</h1>
		</div>
		<div class="avatar-combo">
			<div class="avatar avatar1"></div>
		</div>
	</div>
</template>

<style scoped>
	.footer {
		margin-top: 20px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		background: linear-gradient(var(--theme-base-footer1), var(--theme-base-footer2));
		opacity: 0.8;
	}
	.footer-text {
		color: var(--theme-base-text);
		flex-basis: 100%;
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		font-family: 'Courier New', Courier, monospace;
	}
	.avatar {
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: top center;
    border-radius: 70%;
	}
	.avatar1 {
    background-image: url('./../assets/goalAvatar.png');
	}
</style>