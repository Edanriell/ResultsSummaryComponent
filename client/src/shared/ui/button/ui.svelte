<script lang="ts">
	import { css } from "@emotion/css";
	import gsap from "gsap";

	let buttonElement: HTMLButtonElement;

	const handleMouseUp = () => {
		gsap.to(buttonElement, {
			duration: 0.25,
			scale: 1.05,
			ease: "power2"
		});
	}

	const handleMouseDown = () => {
		gsap.to(buttonElement, {
			duration: 0.25,
			scale: 0.95,
			ease: "power2"
		});
	}

	const handleMouseEnter  = () => {
		gsap.set(buttonElement, {
			background: "linear-gradient(180deg, #303b59 0%, #303b59 0.01%, #303b59 100%)"
		})

		gsap.to(buttonElement, {
			background: "linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%)",
			duration: 0.25,
			scale: 1.05,
			ease: "power2"
		});
	}

	const handleMouseLeave  = () => {
		gsap.to(buttonElement, {
			background: "linear-gradient(180deg, #303b59 0%, #303b59 0.01%, #303b59 100%)",
			duration: 0.25,
			scale: 1,
			ease: "power2"
		});
	}

	const handleTouchStart = () => {
		gsap.set(buttonElement, {
			background: "linear-gradient(180deg, #303b59 0%, #303b59 0.01%, #303b59 100%)"
		})

		gsap.to(buttonElement, {
			background: "linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%)",
			duration: 0.25,
			scale: 0.95,
			ease: "power2"
		});
	};

	const handleTouchEnd = () => {
		gsap.to(buttonElement, {
			background: "linear-gradient(180deg, #303b59 0%, #303b59 0.01%, #303b59 100%)",
			duration: 0.25,
			scale: 1,
			ease: "power2"
		});
	};
</script>

<button
	class={css`
		width: 100%;
		padding-top: 1.7rem;
		padding-bottom: 1.6rem;
		border-radius: 12.8rem;
		background: var(--dark-navy);
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 1.8rem;
		text-align: center;
		color: var(--white);
		cursor:pointer;
	`}
    type="button"
	bind:this={buttonElement}
	on:mouseup={handleMouseUp}
	on:mousedown={handleMouseDown}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:touchstart={handleTouchStart}
	on:touchend={handleTouchEnd}>
	<slot />
</button>