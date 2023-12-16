<script>
	import ListingForm from '$lib/components/forms/ListingForm.svelte';
	export let form;
	console.log('image', form?.title || '');
</script>

{#if form && form.success}
	<h2>Successfully submited</h2>
{:else}
	<ListingForm {form} />
{/if}
<svelte:head>
	<title>Sveltefire: create listng</title>
</svelte:head>
