<script lang="ts">
	import currentPage from '$lib/store/menubar';
</script>

<div id="bottombar">
	{#each $currentPage as p}
		<a href={p.link} class:current-page={p.onthis}><p>{p.page}</p></a>
	{/each}
</div>

<style lang="scss">
	#bottombar {
		position: absolute;
		top: 1em;
		right: 2em;
		//width:100%;
		//height: 20%;

		display: flex;
		justify-content: center;
		align-content: center;
		font-size: 1.5em;
		text-align: center;

		a {
			text-decoration: none;
			color: white;
			margin: 0 20px 0 20px;
			font-weight: 300;

			p {
				position: relative;
				padding: 0;

				&:after {
					position: absolute;
					bottom: -5px;
					left: 0;
					content: '';
					width: 100%;
					height: 10%;
					background-color: aqua;
					transform: translateY(10px);
					opacity: 0;
					transition: transform 0.2s, opacity 0.1s, font-weight 0.1s, color 0.5s;
				}
			}

			&:hover {
				p:after {
					transform: translateY(0);
					opacity: 1;
					transition: transform 0.2s, opacity 0.1s, font-weight 0.1s, color 0.5s;
				}
			}
		}
	}

	.current-page {
		font-weight: 700 !important;
		//color: red !important;
		transition: transform 0.2s, opacity 0.1s, font-weight 0.1s, color 0.5s;
	}
</style>
