<script>
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	//toggle nav burger var
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
	<div
		class="navwrap flex flex-col width-100 bg-base-l-1 p-16 pb-32"
		transition:fly={{ y: -300, duration: 500, delay: 500 }}
	>
		<button on:click={() => (open = false)} class="burger flex flex-col space-around">
			<span />
			<span />
			<span />
		</button>
		<nav class="flex flex-col auto width-100">
			<h3 class="brand">Brand</h3>
			<ul class="flex flex-col gap-16" on:click={() => (open = false)}>
				<li>
					<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
				</li>
				<li>
					<a class:active={$page.url.pathname === '/dashboard'} href="/dashboard">Dshboard</a>
				</li>
				<li>
					<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
				</li>
				<li>
					<a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
				</li>
				<div class="spacer" />
			</ul>
		</nav>
	</div>
{/if}

<style lang="stylus">
.active 
	color salmon

.navwrap 
	height 500px
	margin auto
	max-width 25rem
	position absolute
	left 50%
	transform translate(-50%,0)
ul 
	list-style none
li 
	border-bottom 1px solid var(--base-l-2)
	padding-bottom 4px
.burger 
	background transparent
	border 1px solid red //var(--base-l-4)
	border-radius 6px
	height 3rem 
	padding 3px
	position absolute
	top .8rem
	right .8rem 
	width 3rem
span 
	background red //var(--base-l-4)
	border-radius 3px
	display block
	height 4px 
	padding 3px
	width 100%
.spacer 
	flex-grow 1
</style>
