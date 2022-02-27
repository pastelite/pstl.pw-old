<script lang="ts">
	import Bottombar from '$lib/bottombar.svelte';
	import setNumber from '$lib/utils';
	import { fade } from 'svelte/transition';

	let title: string = 'pastelite';

	setNumber(0);
</script>

<link href="./fontawesome/css/all.min.css" rel="stylesheet" />
<div>Hi I'm</div>
<div id="pastelite">
	{title}.
	<div id="link">
		<a href="https://github.com/pastelite" class="fab fa-github" />
	</div>
</div>
<div>and welcome to my shitty personal website</div>
<a href="./about">read more i think ></a>

<style lang="scss">
	#pastelite {
		font-size: 15vw;
		color: #74b3ce;
		margin: 0;

		//overflow:hidden;
		height: 1.5em;

		position: relative;
		//margin-top: 30%;
		//color: white;
	}

	#link {
		position: absolute;
		bottom: 1vh;
		right: 0;
		display: flex;
		justify-content: flex-end;
		margin: 0;
		font-size: 0.25em;

		a {
			margin: 0 10px;
			text-decoration: none;
			color: inherit;
		}
	}
</style>
