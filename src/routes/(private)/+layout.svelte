<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import authStore from '$lib/stores/auth.store';
	import { logout } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	import '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';
	import { sendJWTToken } from '$lib/firebase/auth.client';
	import NavWrap from '$comps/navigation/NavWrap.svelte';
	// @ts-ignore
	export let data;
	let thisId = $page.data.thisId;
	console.log(' auth', $authStore.isLoggedIn);
	async function onLogout() {
		try {
			await logout();
			goto('/');
		} catch (e) {
			console.log(e);
			messagesStore.showError();
		}
	}
	/**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
	let timerId;
	async function sendServerToken() {
		try {
			await sendJWTToken();
		} catch (error) {
			clearInterval(timerId);
			messagesStore.showError();
			console.log(error);
		}
	}
	// @ts-ignore
	onMount(async () => {
		try {
			await sendServerToken();
			timerId = setInterval(async () => {
				await sendServerToken();
			}, 1000 * 10 * 60);
		} catch (e) {
			console.log(e);
			messagesStore.showError();
		}
		return () => {
			clearInterval(timerId);
		};
	});
	function closeMessage() {
		messagesStore.hide();
	}
</script>

{#if $authStore.isLoggedIn}
	<NavWrap>
		<li class="nav-li">
			<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
		</li>
		<li>
			<a href="/dashboard" class:active={$page.url.pathname === '/dashboard'}>Dashboard</a>
		</li>

		<li>
			<a href={`/edit/${thisId}`}>Edit </a>
			{#if $page.url.pathname.includes('edit') == true}
				<span class="nav-span" />
			{/if}
		</li>
		<li>
			<a href={`/private-listing/${thisId}`}>View</a>
			{#if $page.url.pathname.includes('listing') == true}
				<span class="nav-span" />
			{/if}
		</li>
		<li>
			<a href={`/create/${thisId}`}>Create</a>
			{#if $page.url.pathname.includes('create') == true}
				<span class="nav-span" />
			{/if}
		</li>
		<li>
			<span on:click={onLogout} class=" logout-btn">Logout</span>
		</li>
	</NavWrap>
{/if}

{#if $messagesStore.show}
	<div class="row mt-3">
		<div class="col">
			<div
				class:alert-danger={$messagesStore.type === 'error'}
				class:alert-success={$messagesStore.type === 'success'}
				class="alert alert-dismissible"
				role="alert"
			>
				<strong>{$messagesStore.type === 'error' ? 'Error' : 'Success'}:</strong>
				{$messagesStore.message}
				<button class="logout-btn" type="button" on:click={closeMessage} aria-label="Close"
					>X</button
				>
			</div>
		</div>
	</div>
{/if}
<div class="slot-wrap" transition:fade>
	<slot />
</div>

<style lang="stylus" global>
:root
	--primary-l-4 lighten(#242424,40%)
	--light-1  rgba(255,255,255,.2)
.active 
    border-bottom 1px solid var(--primary)
li.nav-li
	border-bottom 1px solid red var(--light-1)	
.nav-span 
    display block
    height 3px
    width 2.5rem
h3 
    color var(--primary-l-4)
.slot-wrap
    background red //rgba(255,255,255, .1)
    display flex
    flex-direction column
    gap 1rem
    height var(--globalHeight) // 600px
    max-width 400px
    overflow hidden
    //position absolute
    padding 4rem 0rem 0rem 1rem
    position relative
    width 100%

img 
    height 300px
    max-height 300px
    object-fit cover
.logout-btn
	background transparent
	border 1px solid red //transparent
    color var(--primary-l-4)
	font-size 1rem
	outline none
</style>
