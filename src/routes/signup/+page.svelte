<script>
	import { goto } from '$app/navigation';
	import AuthForm from '$lib/auth/AuthForm.svelte';
	import LoginWithGoogle from '$lib/auth/LoginWithGoogle.svelte';
	import { registerWithEmailandPassword } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	import { page } from '$app/stores';
	import { afterLogin } from '$lib/helpers/route.helper';
	/**
	 * @param {{ target: HTMLFormElement | undefined; }} e
	 */
	async function register(e) {
		try {
			const formData = new FormData(e.target);
			const email = formData.get('email');
			const password = formData.get('password');
			if (!email || !password) {
				messagesStore.showError('Please enter a valid email and password.');
				return;
			}
			// @ts-ignore
			if (password.length < 6) {
				messagesStore.showError('Password must be 6 characters or more.');
				return;
			}
			// @ts-ignore
			const user = await registerWithEmailandPassword(email, password);
			// init create process to create listing using user.uid
			// on submit - goto create then dashboard
			// add function - call at end of this one - pass on user.uid ???
			// create form as per...
			// 1 form per slide???
			//  on edit: using enhance, can submit after each slide
			// can empty strings be added instead of placeholder strings???
			// array of pages??? - create as per - then try in array - eg arr.title
			// arrays of each type: [title_1, title_2 etc]

			// @ts-ignore
			afterLogin($page.url, user.uid);
		} catch (e) {
			// @ts-ignore
			if (e.code === 'auth/email-already-in-use') {
				messagesStore.showError('You have already registered, please log in.');
				await goto('/login');
				return;
			}
			console.log(e);
			messagesStore.showError();
		}
	}
</script>

<AuthForm on:submit={register} btnName="Register with email and password">
	<LoginWithGoogle btnName="Register with Google" />
</AuthForm>

<svelte:head>
	<title>Sveltefire: Sign Up</title>
</svelte:head>

<style lang="stylus">

</style>
