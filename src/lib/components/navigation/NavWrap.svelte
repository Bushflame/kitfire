<script>
	import { fade, fly } from 'svelte/transition';
	let open = false;
</script>

{#if !open}
	<button on:click={() => (open = true)} class="burger" transition:fade>
		<span />
		<span />
		<span />
	</button>
{/if}
{#if open}
	<div class="navwrap" transition:fly={{ x: -300, duration: 300 }}>
		<button on:click={() => (open = false)} class="burger flex flex-col space-around">
			<span />
			<span />
			<span />
		</button>
		<nav>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<ul
				on:click={() => {
					setTimeout(() => {
						open = !open;
					}, 100);
				}}
			>
				<slot />
			</ul>
		</nav>
	</div>
{/if}

<style lang="stylus">
.navwrap
	background  var(--primary-d-2)
	border-radius 1rem
	position absolute
	height calc(var(--globalHeight)- 2px) 
	max-width var(--globalWidth)
	overflow hidden
	padding-top 4rem
	width   calc(var(--globalWidth)- 2px) 
	z-index 2
nav 
	margin-left 1rem
	width   calc(var(--globalWidth)- 2rem) 
ul 
	display flex 
	flex-direction column 
	gap 1rem
	height 100%
	list-style none
	width 100%
.burger 
	background transparent
	border 1px solid var(--light-1)
	border-radius 6px
	display flex
	flex-direction column
	justify-content space-around
	height 3rem 
	padding 3px
	position absolute
	top .8rem
	right .8rem 
	width 3rem
	z-index 2
span 
	background var(--grey-5)
	border-radius 3px
	display block
	height 4px 
	padding 3px
	width 100%
</style>
