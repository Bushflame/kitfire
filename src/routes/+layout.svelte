<script>
	import { page } from '$app/stores';
	import Nav from '$comps/navigation/Nav.svelte';
	import SideNav from '$comps/navigation/SideNav.svelte';
	import messagesStore from '$lib/stores/messages.store';
	import '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';
	import { sendJWTToken } from '$lib/firebase/auth.client';
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

<!-- <SideNav /> -->
<!-- <h2>Pathname: {$page.url.pathname}</h2> -->
<main>
	<div class="main-frame">
		<Nav />

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
						<button type="button" on:click={closeMessage} class="btn-close" aria-label="Close"
							>X</button
						>
					</div>
				</div>
			</div>
		{/if}

		<slot />
	</div>
</main>

<style lang="stylus" global>
.alert-danger 
    background red
.alert-success 
    background green
* 
    box-sizing border-box
    margin 0
    padding 0

// @import '/src/lib/stylus/buttons-links'


:root 
    --globalWidth 25rem
    --globalHeight 37.5rem
    --primary rgba(66 133 244, 1) //#0b74a1
    --secondary #8f274b
    // --btn-success rgba(75,181,67, 1)
    --berry #0B0D26
    --grey-5 rgba(255,255,255,.1)
    --light-1  rgba(255,255,255,.2)

    --primary rgba(66 133 244, 1)//#242424;
    --primary-l-1 lighten(#242424,1%)
    --primary-l-2 lighten(#242424,20%)
    --primary-l-3 lighten(#242424,30%)
    --primary-l-4 lighten(#242424,40%)
    --primary-l-5 lighten(#242424,50%)
    --primary-d-1 darken(#242424,10%)
    --primary-d-2 darken(#242424,20%)
    --primary-d-3 darken(#242424,30%)
    --primary-d-4 darken(#242424,40%)
    --primary-d-5 darken(#242424,50%)
body 
    background #242424 //var(--primary)
main 
    display flex 
    align-items center
    justify-content center
    min-height 100vh
.main-frame
	border 1px solid #fff
	border-radius 1rem
	height var(--globalHeight)
	max-width var(--globalWidth)
	overflow hidden
	position relative
	width 100%

.txt-primary
    color var(--primary)
.txt-primary-l1    
    color var(--primary-l-1)
.txt-primary-l2    
    color var(--primary-l-2)
.txt-primary-l3    
    color var(--primary-l-3)
.txt-primary-l4    
    color var(--primary-l-4)
h1 
    color var(--primary)
    font-size 1.6rem
    line-height 1.3
    text-align center

h2 
    color var(--primary)
    font-size 2.4rem
h3 
    color var(--primary-l-3)   
    font-size 2rem
h4 
    color var(--primary-l-4)   
    font-size 1.4rem
.primary-l-1
    color var(--primary-l-1)
.primary-l-4
    color var(--primary-l-4)
// -----COLOURS FROM VARS----------
.bg-primary
    background var(--primary)
.bg-primary-l-1 
    background var(--primary-l-1)   
.bg-primary-l-3
    background var(--primary-l-3)  
.bg-primary-l-4 
    background var(--primary-l-4) 
// -----SEMANTIC-------------------
a 
    color var(--primary-l-4)
    font-size 1.2rem
    text-decoration none
button 
    cursor pointer
.logout-btn
	background transparent
	border 0px solid transparent
    color var(--light-1)
	font-size 1rem
	outline none
img 
    max-width 100%

</style>
