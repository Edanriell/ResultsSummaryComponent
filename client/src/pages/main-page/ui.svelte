<script lang="ts">
	import { css } from "@emotion/css";

	import { ResultsSummaryCard } from "@entities/results/ui";
</script>

<section class={css`
		align-self: flex-start;
		width: 100%;
		@media (width >= 768px) {
			align-self: center;
		}
	`}>
	<h1 class="visually-hidden">Results summary component</h1>
	<ResultsSummaryCard />
</section>