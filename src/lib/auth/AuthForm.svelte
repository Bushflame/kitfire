<script>
	import { page } from '$app/stores';
	/**
	 * @type {any}
	 */
	export let btnName;
	export let forgotPassword = false;
	/**
	 * @type {string}
	 */
	let currPage;
	if ($page.url.pathname === '/login') {
		currPage = 'Sign in';
	} else if ($page.url.pathname === '/signup') {
		currPage = 'Register';
	} else if ($page.url.pathname === '/forgot-password') {
		currPage = 'Reset Password';
	}
</script>

<div class="authframe">
	<form on:submit|preventDefault>
		<h1>{currPage}</h1>
		<hr />
		<div class="mb-3">
			<label for="email" class="form-label">Email</label>
			<input
				type="email"
				name="email"
				class="form-control"
				id="email"
				placeholder="Email"
				required
			/>
		</div>
		{#if !forgotPassword}
			<div class="mb-3">
				<label for="password" class="form-label">Password</label>
				<input
					type="password"
					name="password"
					class="form-control"
					id="password"
					placeholder="Password"
				/>
			</div>
		{/if}
		{#if currPage === 'Sign in'}
			<a href="/forgot-password">Forgot Password?</a>
		{:else if currPage === 'Register'}
			<a href="/login">Already have an account?</a>
		{/if}
		<button type="submit" class="btn-success">{btnName}</button>
	</form>
	<div class="slot">
		<slot />
	</div>
</div>

<style lang="stylus">
.authframe
	background rgba(255,255,255,.1)
	height fit-content
	max-width 25rem
	padding 1rem
	width 100%
form 
	display flex
	flex-direction column
	gap 1rem
	width 100%
h1 
	text-align center
label 
	color #fff
	margin-bottom 1rem

input 
	background rgba(255,255,255,.2)
	border none
	margin-top .4rem
	outline none
	padding .6rem
button 
	//margin-top .4rem
	padding .6rem
.btn-success 
	background rgba(75,181,67, 1)
	color #fff
.slot 
	padding-top 1rem
a 
	font-size .9rem
	text-align right
</style>
