<script>
	// @ts-ignore
	import LoginWithGoogle from '$lib/auth/LoginWithGoogle.svelte';
	import AuthForm from '$lib/auth/AuthForm.svelte';
	import { loginWithEmailandPassword } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	import { afterLogin } from '$lib/helpers/route.helper';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	// @ts-ignore
	async function onLogin(e) {
		try {
			const formData = new FormData(e.target);
			const email = formData.get('email');
			const password = formData.get('password');
			// @ts-ignore
			const user = await loginWithEmailandPassword(email, password);
			await afterLogin($page.url, user.uid);
		} catch (error) {
			if (
				// @ts-ignore
				['auth/invalid-email', 'auth/user-not-found', 'auth/wrong-password'].includes(error.code)
			) {
				messagesStore.showError('Invalid email or password');
				return;
			}
			messagesStore.showError();
		}
	}
</script>

<section class="authframe">
	<AuthForm on:submit={onLogin} btnName="Sign in with email and password">
		<LoginWithGoogle btnName="Sign in with Google" />
	</AuthForm>
</section>

<svelte:head>
	<title>SvelteFire: Login</title>
</svelte:head>

<style lang="stylus">
section.authframe
	margin auto
	max-width 25rem
	width 100%

</style>
