<script lang="ts">
	import Skeleton from "svelte-skeleton/Skeleton.svelte";
	import { css } from "@emotion/css";
	import { onMount } from "svelte";

	import { getResultQuery } from "@entities/results/api";
	import {
		type Result,
		updateResultComponentContent,
		calculateAverageScore
	} from "@entities/results/model";
	import { Button } from "@shared/ui/button";
	import { Icon } from "@shared/ui/icon";

	let summaryResult: Result;
	let averageScore: number;
	let resultComponentBackgroundColor: string;
	let resultComponentResultMessage: string;
	let resultComponentScoreResultMessage: string;
	let resultComponentTextColorMain: string;
	let resultComponentTextColorAccent: string;

	onMount(async () => {
		const { result } = await getResultQuery();
		summaryResult = result;
		averageScore = calculateAverageScore(summaryResult);
		const {
			componentBackgroundColor,
			componentResultMessage,
			componentScoreResultMessage,
			componentTextColorMain,
			componentTextColorAccent
		} = updateResultComponentContent(averageScore);

		resultComponentBackgroundColor = componentBackgroundColor;
		resultComponentResultMessage = componentResultMessage;
		resultComponentScoreResultMessage = componentScoreResultMessage;
		resultComponentTextColorMain = componentTextColorMain;
		resultComponentTextColorAccent = componentTextColorAccent;
	})


</script>

<article class={css`
		width: 100%;
		@media (width >= 768px) {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}
	`}>
	<div style="background: {resultComponentBackgroundColor}" class={css`
			padding: 2.4rem 3rem 4rem;
			border-radius: 0 0 3.2rem 3.2rem;
			box-shadow: 0 30px 60px 0 rgba(61, 108, 236, 0.15);
			// background: linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%);
			display: flex;
			flex-direction: column;
			align-items: center;
			z-index: 2;
			position: relative;
			@media (width >= 768px) {
				padding: 3.8rem 6.1rem 5.5rem;
				border-radius: 3.2rem;
				box-shadow: unset;
				flex: 0 0;
			}
		`}>
		<h2 style="color: {resultComponentTextColorAccent}" class={css`
			font-family: var(--font-family), sans-serif;
			font-weight: 700;
			font-size: 1.8rem;
			text-align: center;
			// color: var(--light-blue);
			margin-bottom: 2.4rem;
			@media (width >= 768px) {
				font-size: 2.4rem;
				margin-bottom: 3.5rem;
			}
		`}>Your Result</h2>
		<div class={css`
			width: 14rem;
			height: 14rem;
			border-radius: 100%;
			position: relative;
			margin-bottom: 2.4rem;
			@media (width >= 768px) {
				width: 20rem;
				height: 20rem;
				margin-bottom: 2.8rem;
			}
		`}>
			{#if averageScore <= 20}
				<svg
					class={css`
				    position: absolute;
				    top: 0;
				    left: 0;
				    z-index: 1;
				    @media (width >= 768px) {
				        display: none;
				    }
				`}
					width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="70" cy="70" r="70" fill="url(#paint0_linear_54_23)" />
					<defs>
						<linearGradient id="paint0_linear_54_23" x1="70" y1="0" x2="70" y2="140" gradientUnits="userSpaceOnUse">
							<stop stop-color="#ff7f7f" />
							<stop offset="1" stop-color="#e93f3f" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
				<svg
					class={css`
					    position: absolute;
					    top: 0;
					    left: 0;
					    z-index: 1;
					    display: none;
					    @media (width >= 768px) {
					        display: block;
					    }
                    `}
						width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="100" cy="100" r="100" fill="url(#paint0_linear_14_43)" />
					<defs>
						<linearGradient id="paint0_linear_14_43" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
							<stop stop-color="#ff7f7f" />
							<stop offset="1" stop-color="#e93f3f" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
				{:else if averageScore > 20 && averageScore <= 40 }
				<svg
					class={css`
				        position: absolute;
				        top: 0;
				        left: 0;
				        z-index: 1;
				        @media (width >= 768px) {
				            display: none;
				        }
			    `}
					width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="70" cy="70" r="70" fill="url(#paint0_linear_54_23)" />
					<defs>
						<linearGradient id="paint0_linear_54_23" x1="70" y1="0" x2="70" y2="140" gradientUnits="userSpaceOnUse">
							<stop stop-color="#ffaf7f" />
							<stop offset="1" stop-color="#e96f3f" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
				<svg
				class={css`
				    position: absolute;
				    top: 0;
				    left: 0;
				    z-index: 1;
				    display: none;
				    @media (width >= 768px) {
				        display: block;
				    }
    			`}
					width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="100" cy="100" r="100" fill="url(#paint0_linear_14_43)" />
					<defs>
						<linearGradient id="paint0_linear_14_43" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
							<stop stop-color="#ffaf7f" />
							<stop offset="1" stop-color="#e96f3f" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
				{:else if averageScore > 41 && averageScore <= 60}
				<svg
				class={css`
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
					@media (width >= 768px) {
					    display: none;
					}
				`}
					width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="70" cy="70" r="70" fill="url(#paint0_linear_54_23)" />
					<defs>
						<linearGradient id="paint0_linear_54_23" x1="70" y1="0" x2="70" y2="140" gradientUnits="userSpaceOnUse">
							<stop stop-color="#fff75f" />
							<stop offset="1" stop-color="#e9b93f" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
				<svg
				class={css`
				    position: absolute;
				    top: 0;
				    left: 0;
				    z-index: 1;
				    display: none;
				    @media (width >= 768px) {
				        display: block;
				    }
    			`}
					width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="100" cy="100" r="100" fill="url(#paint0_linear_14_43)" />
					<defs>
						<linearGradient id="paint0_linear_14_43" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
							<stop stop-color="#fff75f" />
							<stop offset="1" stop-color="#e9b93f" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
				{:else if averageScore > 60 && averageScore <= 80}
				<svg
				class={css`
			        position: absolute;
			        top: 0;
			        left: 0;
			        z-index: 1;
			        @media (width >= 768px) {
			            display: none;
			        }
			    `}
					width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="70" cy="70" r="70" fill="url(#paint0_linear_54_23)" />
					<defs>
						<linearGradient id="paint0_linear_54_23" x1="70" y1="0" x2="70" y2="140" gradientUnits="userSpaceOnUse">
							<stop stop-color="#75f" />
							<stop offset="1" stop-color="#2f2ce9" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
				<svg
				class={css`
			        position: absolute;
			        top: 0;
			        left: 0;
			        z-index: 1;
			        display: none;
			        @media (width >= 768px) {
			            display: block;
			        }
   				 `}
					width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="100" cy="100" r="100" fill="url(#paint0_linear_14_43)" />
					<defs>
						<linearGradient id="paint0_linear_14_43" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
							<stop stop-color="#75f" />
							<stop offset="1" stop-color="#2f2ce9" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
				{:else if averageScore > 80 && averageScore <= 100}
				<svg
				class={css`
			        position: absolute;
			        top: 0;
			        left: 0;
			        z-index: 1;
			        @media (width >= 768px) {
			            display: none;
			        }
			    `}
					width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="70" cy="70" r="70" fill="url(#paint0_linear_54_23)" />
					<defs>
						<linearGradient id="paint0_linear_54_23" x1="70" y1="0" x2="70" y2="140" gradientUnits="userSpaceOnUse">
							<stop stop-color="#7fffaf" />
							<stop offset="1" stop-color="#3fe96f" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
				<svg
				class={css`
				    position: absolute;
				    top: 0;
				    left: 0;
				    z-index: 1;
				    display: none;
				    @media (width >= 768px) {
				        display: block;
				    }
   				 `}
					width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="100" cy="100" r="100" fill="url(#paint0_linear_14_43)" />
					<defs>
						<linearGradient id="paint0_linear_14_43" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
							<stop stop-color="#7fffaf" />
							<stop offset="1" stop-color="#3fe96f" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
			{/if}
			<svg
				class={css`
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
					@media (width >= 768px) {
						display: none;
					}
				`}
				width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="70" cy="70" r="70" fill="url(#paint0_linear_54_23)" />
				<defs>
					<linearGradient id="paint0_linear_54_23" x1="70" y1="0" x2="70" y2="140" gradientUnits="userSpaceOnUse">
						<stop stop-color="#4D21C9" />
						<stop offset="1" stop-color="#2521C9" stop-opacity="0" />
						<stop offset="1" stop-color="#2521C9" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
			<svg
				class={css`
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
					display: none;
					@media (width >= 768px) {
						display: block;
					}
				`}
				width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="100" cy="100" r="100" fill="url(#paint0_linear_14_43)" />
				<defs>
					<linearGradient id="paint0_linear_14_43" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
						<stop stop-color="#4D21C9" />
						<stop offset="1" stop-color="#2521C9" stop-opacity="0" />
						<stop offset="1" stop-color="#2521C9" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
			<div class={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				position: relative;
				height: 100%;
				z-index: 2;
			`}>
				<p style="color: {resultComponentTextColorMain}" class={css`
					font-family: var(--font-family), sans-serif;
					font-weight: 800;
					font-size: 56px;
					line-height: 129%;
					text-align: center;
					color: var(--white);
					@media (width >= 768px) {
						font-size: 7.2rem;
						line-height: 100%;
					}
				`}>{averageScore}</p>
				<p style="color: {resultComponentTextColorAccent}" class={css`
					font-family: var(--font-family), sans-serif;
					font-weight: 700;
					font-size: 16px;
					// color: var(--light-blue);
					opacity: 0.52;
					@media (width >= 768px) {
						font-size: 1.8rem;
					}
				`}>of 100</p>
			</div>
		</div>
		<p style="color: {resultComponentTextColorMain}" class={css`
			font-family: var(--font-family), sans-serif;
			font-weight: 700;
			font-size: 24px;
			text-align: center;
			color: var(--white);
			margin-bottom: 0.8rem;
			@media (width >= 768px) {
				font-size: 3.2rem;
				margin-bottom: 1.4rem;
			}
		`}>{resultComponentScoreResultMessage}</p>
		<p style="color: {resultComponentTextColorAccent}" class={css`
			font-family: var(--font-family), sans-serif;
			font-weight: 500;
			font-size: 16px;
			text-align: center;
			// color: var(--light-blue);
			@media (width >= 768px) {
				font-size: 1.8rem;
				min-width: 26rem;
			}
		`}>{resultComponentResultMessage}</p>
	</div>
	<div class={css`
		background: var(--white);
		padding: 5.6rem 3rem 3rem;
		margin-top: -3.2rem;
		z-index: 1;
		position: relative;
		@media (width >= 768px) {
			padding: 3.8rem 4rem 4.6rem 7.2rem;
			margin-top: unset;
			margin-left: -3.2rem;
			box-shadow: 0 30px 60px 0 rgba(61, 108, 236, 0.15);
			border-radius: 0 3.2rem 3.2rem 0;
			flex: 0 0;
		}
	`}>
		{#if summaryResult}
			<p class={css`
			font-family: var(--font-family), sans-serif;
			font-weight: 700;
			font-size: 18px;
			color: var(--dark-navy);
			margin-bottom: 2.4rem;
			text-align: left;
			@media (width >= 768px) {
				font-size: 2.4rem;
				margin-bottom: 2.8rem;
			}
		`}>Summary</p>
		{:else}
			<div class={css`
				margin-bottom: 2.4rem;
				border-radius: 1.2rem;
				width: 100%;
				height: 2.7rem;
				overflow: hidden;
				@media (width >= 768px) {
					margin-bottom: 2.8rem;
					width: 28.799rem;
					height: 3.6rem;
				}
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
		{/if}
		<dl class={css`
			display: flex;
			flex-direction: column;
			row-gap: 1.6rem;
			margin-bottom: 2.4rem;
			@media (width >= 768px) {
				min-width: 28.8rem;
				margin-bottom: 4.1rem;
			}
		`}>
			{#if summaryResult}
				<div class={css`
				border-radius: 1.2rem;
				background: var(--red-95-percent-white);
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding: 1.6rem 1.7rem 1.8rem;
				flex-wrap: wrap;
				@media (width >= 768px) {
					padding: 1.6rem 1.6rem 1.6rem 1.6rem;
				}
			`}>
					<dt class={css`
					display: flex;
					flex-direction: row;
					align-items: center;
					column-gap: 1.2rem;
				`}>
						<Icon iconType="flash" />
						<p class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 500;
						font-size: 1.6rem;
						color: var(--red);
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>Reaction</p>
					</dt>
					<dd class={css`
					display: flex;
					flex-direction: row;
					align-items: center;
					column-gap: 0.8rem;
				`}>
						<p class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 700;
						font-size: 1.6rem;
						text-align: right;
						color: var(--dark-navy);
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>{summaryResult.reactionScore}
						</p>
						<p class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 700;
						font-size: 1.6rem;
						text-align: right;
						color: var(--dark-navy);
						opacity: 0.5;
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>/ 100</p>
					</dd>
				</div>
			{:else}
				<div class={css`
					border-radius: 1.2rem;
					overflow: hidden;
					width: 100%;
					height: 5.798rem;
					@media (width >= 768px) {
						width: 28.799rem;
						height: 5.898rem;
					}
				`}>
					<Skeleton width="100%" height="100%" >
						<rect width="100%" height="100%"/>
					</Skeleton>
				</div>
			{/if}
			{#if summaryResult}
				<div class={css`
				border-radius: 1.2rem;
				background: var(--yellow-95-percent-white);
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding: 1.6rem 1.7rem 1.8rem;
				flex-wrap: wrap;
				@media (width >= 768px) {
					padding: 1.6rem 1.6rem 1.6rem 1.6rem;
				}
			`}>
					<dt class={css`
					display: flex;
					flex-direction: row;
					align-items: center;
					column-gap: 1.2rem;
				`}>
						<Icon iconType="brain" />
						<p class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 500;
						font-size: 1.6rem;
						color: var(--yellow);
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>Memory</p>
					</dt>
					<dd class={css`
					display: flex;
					flex-direction: row;
					align-items: center;
					column-gap: 0.8rem;
				`}>
						<p class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 700;
						font-size: 1.6rem;
						text-align: right;
						color: var(--dark-navy);
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>{summaryResult.memoryScore}
						</p>
						<p class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 700;
						font-size: 1.6rem;
						text-align: right;
						color: var(--dark-navy);
						opacity: 0.5;
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>/ 100</p>
					</dd>
				</div>
			{:else}
				<div class={css`
					border-radius: 1.2rem;
					overflow: hidden;
					width: 100%;
					height: 5.798rem;
					@media (width >= 768px) {
						width: 28.799rem;
						height: 5.898rem;
					}
				`}>
					<Skeleton width="100%" height="100%" >
						<rect width="100%" height="100%"/>
					</Skeleton>
				</div>
			{/if}
			{#if summaryResult}
				<div class={css`
				border-radius: 1.2rem;
				background: var(--green-95-percent-white);
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding: 1.6rem 1.7rem 1.8rem;
				flex-wrap: wrap;
				@media (width >= 768px) {
					padding: 1.6rem 1.6rem 1.6rem 1.6rem;
				}
			`}>
					<dt class={css`
					display: flex;
					flex-direction: row;
					align-items: center;
					column-gap: 1.2rem;
				`}>
						<Icon iconType="chat" />
						<p  class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 500;
						font-size: 1.6rem;
						color: var(--green);
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>Verbal</p>
					</dt>
					<dd class={css`
					display: flex;
					flex-direction: row;
					align-items: center;
					column-gap: 0.8rem;
				`}>
						<p class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 700;
						font-size: 1.6rem;
						text-align: right;
						color: var(--dark-navy);
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>{summaryResult.verbalScore}
						</p>
						<p class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 700;
						font-size: 1.6rem;
						text-align: right;
						color: var(--dark-navy);
						opacity: 0.5;
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>/ 100</p>
					</dd>
				</div>
			{:else}
				<div class={css`
					border-radius: 1.2rem;
					overflow: hidden;
					width: 100%;
					height: 5.798rem;
					@media (width >= 768px) {
						width: 28.799rem;
						height: 5.898rem;
					}
				`}>
					<Skeleton width="100%" height="100%" >
						<rect width="100%" height="100%"/>
					</Skeleton>
				</div>
			{/if}
			{#if summaryResult}
				<div class={css`
				border-radius: 1.2rem;
				background: var(--blue-95-percent-white);
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding: 1.6rem 1.7rem 1.8rem;
				flex-wrap: wrap;
				@media (width >= 768px) {
					padding: 1.6rem 1.6rem 1.6rem 1.6rem;
				}
			`}>
					<dt class={css`
					display: flex;
					flex-direction: row;
					align-items: center;
					column-gap: 1.2rem;
				`}>
						<Icon iconType="eye" />
						<p  class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 500;
						font-size: 1.6rem;
						color: var(--blue);
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>Visual</p>
					</dt>
					<dd class={css`
					display: flex;
					flex-direction: row;
					align-items: center;
					column-gap: 0.8rem;
				`}>
						<p class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 700;
						font-size: 1.6rem;
						text-align: right;
						color: var(--dark-navy);
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>{summaryResult.visualScore}
						</p>
						<p class={css`
						font-family: var(--font-family), sans-serif;
						font-weight: 700;
						font-size: 1.6rem;
						text-align: right;
						color: var(--dark-navy);
						opacity: 0.5;
						@media (width >= 768px) {
							font-size: 1.8rem;
						}
					`}>/ 100</p>
					</dd>
				</div>
			{:else}
				<div class={css`
					border-radius: 1.2rem;
					overflow: hidden;
					width: 100%;
					height: 5.798rem;
					@media (width >= 768px) {
						width: 28.799rem;
						height: 5.898rem;
					}
				`}>
					<Skeleton width="100%" height="100%" >
						<rect width="100%" height="100%"/>
					</Skeleton>
				</div>
			{/if}
		</dl>
		{#if summaryResult}
			<Button>Continue</Button>
		{:else}
			<div class={css`
				border-radius: 12.8rem;
				overflow: hidden;
				width: 100%;
				height: 6.18rem;
				@media (width >= 768px) {
					width: 28.799rem;
					height: 6.18rem;
				}
			`}>
				<Skeleton width="100%" height="100%">
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
		{/if}
	</div>
</article>