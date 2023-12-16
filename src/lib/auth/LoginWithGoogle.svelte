<script>
	import { loginWithGoogle } from '$lib/firebase/auth.client.js';
	import { afterLogin } from '$lib/helpers/route.helper';
	import { page } from '$app/stores';
	import messagesStore from '$lib/stores/messages.store';
	/**
	 * @type {any}
	 */
	export let btnName;
	async function loginGoogle() {
		try {
			const user = await loginWithGoogle();
			await afterLogin($page.url, user.uid);
		} catch (e) {
			if (e.code === 'auth/popup-closed-by-user') {
				return;
			}
			console.log(e);
			messagesStore.showError();
		}
	}
</script>

<div class="row">
	<div class="col">
		<button on:click={loginGoogle} class="btn btn-primary w-100">{btnName}</button>
	</div>
</div>

<style lang="stylus">
button 
	background rgba(66 133 244, 1)
	color #fff
	margin auto
	width 100%
</style>
