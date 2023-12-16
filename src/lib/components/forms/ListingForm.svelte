<script>
	import { enhance } from '$app/forms';
	/**
	 * @type {{ success: boolean; title: any; error_title: any; description: any; error_description: any; error_img_1a: any; img_1a: any; }}
	 */
	export let form;
	let submitting = false;
	$: if (form && form.success === false) {
		submitting = false;
	}
	/**
	 * @param {any} e
	 */
	function submitForm(e) {
		submitting = true;
	}
	/**
	 * @type {{ title: any; error_title: any; author: any; error_author: any; short_description: any; error_short_description: any; description: any; error_description: any; main_picture: any; error_main_picture: any; small_picture: any; error_small_picture: any; }}
	 */
</script>

<div class="authframe">
	<form on:submit={submitForm} use:enhance enctype="multipart/form-data" method="POST">
		<div class="mb-3">
			<label for="title" class="form-label">Listing Title</label>
			<input
				type="text"
				name="title"
				id="title"
				class="form-control"
				value={form?.title || ''}
				class:is-invalid={form?.error_title}
				placeholder="Title"
			/>
			{#if form?.error_title}
				<div class="invalid-feedback">{form?.error_title}</div>
			{/if}
		</div>

		<div class="mb-3">
			<label class="form-label" for="description">Description</label>
			<textarea
				class="form-control"
				placeholder="Listing Description here"
				id="description"
				name="description"
				value={form?.description || ''}
				class:is-invalid={form?.error_description}
				style="height: 100px"
			/>
			{#if form?.error_description}
				<div class="invalid-feedback">{form?.error_description}</div>
			{/if}
		</div>
		<div class="mb-3">
			<label for="img_1a" class="form-label"
				>Image 1
				<input
					class="form-control form-control-lg"
					id="img_1a"
					accept="image/*"
					name="img_1a"
					class:is-invalid={form?.error_img_1a}
					type="file"
				/>
				{#if form?.error_img_1a}
					<div class="invalid-feedback">{form?.img_1a}</div>
				{/if}
			</label>
		</div>
		<button disabled={submitting} type="submit" class="btn btn-submit w-100">
			{#if submitting}
				Submitting...
			{:else}
				Submit
			{/if}
		</button>
	</form>
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

input, textarea 
	background rgba(255,255,255,.2)
	border none
	color red
	margin-top .4rem
	outline none
	padding .6rem
	width 100%
button 
	//margin-top .4rem
	padding .6rem
.btn-success 
	background rgba(75,181,67, 1)
	color #fff

a 
	font-size .9rem
	text-align right
</style>
