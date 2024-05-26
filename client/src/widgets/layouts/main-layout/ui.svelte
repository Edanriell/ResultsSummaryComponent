<script>
	import { css } from "@emotion/css";
</script>

<div class="app">
	<main class={css`
		background: var(--very-light-blue);
		min-width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	`}>
		<slot />
	</main>
</div>
