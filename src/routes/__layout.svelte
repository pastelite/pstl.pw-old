<script lang="ts">
	import Bottombar from '$lib/bottombar.svelte';
</script>

<Bottombar />
<div class="center-container">
	<slot />
</div>

<style lang="scss" global>
	@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');

	body {
		font-family: 'Fredoka', sans-serif;
		background-color: #01172f;
		color: white;
		overflow: hidden;
	}

	.center-container {
		position: absolute;
		top: 0;
		left: 0;
		//width:min-content;
		height: 100%;
		padding-left: 5%;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;

		div,
		a,
		p {
			margin: 1em 2em;
			text-align: justify;
			font-size: max(1.5vw, 1em);
		}

		a {
			text-decoration: none;
			color: #9ee493;
		}
	}

	h1 {
		font-weight: 500;
		font-size: 10vw;
		//color: #74B3CE;
		margin: 0;

		&::after {
			content: '.';
		}
	}
</style>
