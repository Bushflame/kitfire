<script>
	import ListingForm from '$lib/components/forms/ListingForm.svelte';
	export let data;
	export let form;
</script>

<ListingForm form={{ ...data.listing, ...form }} />
