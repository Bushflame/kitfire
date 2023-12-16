<script>
	import { page } from '$app/stores';
	import authStore from '$lib/stores/auth.store';
	import { logout } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	import { goto } from '$app/navigation';
	import NavWrap from '$comps/navigation/NavWrap.svelte';
	async function onLogout() {
		try {
			await logout();
			goto('/');
		} catch (e) {
			console.log(e);
			messagesStore.showError();
		}
	}
</script>

<NavWrap>
	<li>
		<a href="/">
			<h3 class="brand">SvelteFire</h3>
		</a>
	</li>
	<li>
		<a href="/" class:active={$page.url.pathname == '/'} data-sveltekit-preload-data='off'>Home</a>
	</li>
	<!-- {#if $page.url.pathname === '/' && $authStore.isLoggedIn || $page.url.pathname === '/about' || $page.url.pathname === '/contact' || $page.url.pathname === '/start-search'} -->
	<li class="dashboard-li">
		<a href="/dashboard">Dashboard</a>
	</li>
	<!-- {/if} -->

	<li>
		<a
			href="/get-titles"
			class:active={$page.url.pathname == '/get-titles'}
			data-sveltekit-preload-data='off'>Start search</a
		>
	</li>

	<li>
		<a href="/about" class:active={$page.url.pathname === '/about'} data-sveltekit-preload-data='off'
			>About</a
		>
	</li>
	{#if !$authStore.isLoggedIn}
		<li>
			<a href="/login" class:active={$page.url.pathname == '/login'} data-sveltekit-preload-data='off'
				>Login</a
			>
		</li>
		<li>
			<a href="/signup" class:active={$page.url.pathname == '/signup'} data-sveltekit-preload-data='off'
				>Sign Up</a
			>
		</li>
	{/if}
	<li>
		<a href="/contact" class:active={$page.url.pathname === '/contact'} data-sveltekit-preload-data='off'
			>Contact</a
		>
	</li>
	<li>
		<a
			href="/results"
			class:active={$page.url.pathname == '/results'}
			data-sveltekit-preload-data="off">Results</a
		>
	</li>
	{#if $authStore.isLoggedIn}
		<li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span on:click={onLogout} class="nav-link logout-btn">Logout</span>
		</li>
	{/if}
</NavWrap>

<style lang="stylus">
// active link
.active 
	color var(--primary)

li 
	border-bottom  1px solid var(--light-1)
	padding .4rem //1rem
	white-space: nowrap
	width 100%
.dashboard-li
	padding-top -.4rem
h3 
	background transparent
	text-align center
.logout-btn
	background transparent
	border 0px solid transparent
	color var(--primary-l-4)
	font-size 1rem
	outline none
</style>
