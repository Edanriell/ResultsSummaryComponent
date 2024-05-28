<script lang="ts">
	import { css } from "@emotion/css";
	import gsap from "gsap";

	let buttonElement: HTMLButtonElement;

	const handleMouseUp = () => {
		gsap.to(buttonElement, {
			duration: 0.25,
			scale: 1.05,
			ease: "power1"
		});
	}

	const handleMouseDown = () => {
		gsap.to(buttonElement, {
			duration: 0.25,
			scale: 0.95,
			ease: "power1"
		});
	}

	const handleMouseEnter  = () => {
		gsap.to(buttonElement, {
			backgroundColor: "linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%)",
			duration: 0.25,
			scale: 1.05,
			ease: "power1"
		});
	}

	const handleMouseLeave  = () => {
		gsap.to(buttonElement, {
			backgroundColor: "#303b59",
			duration: 0.25,
			scale: 1,
			ease: "power1"
		});
	}

	const handleTouchStart = () => {
		gsap.to(buttonElement, {
			backgroundColor: "linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%)",
			duration: 0.25,
			scale: 0.95,
			ease: "power1"
		});
	};

	const handleTouchEnd = () => {
		gsap.to(buttonElement, {
			backgroundColor: "#303b59",
			duration: 0.25,
			scale: 1,
			ease: "power1"
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
	Continue
</button>