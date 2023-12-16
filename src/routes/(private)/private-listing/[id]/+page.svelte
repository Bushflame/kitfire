<script>
	export let data;
	let listing = data.listing;
</script>

<div class="page-wrap">
	<div class="page-item">
		<img class="img_1a" src={listing.img_1a} alt={listing.title} />
	</div>
	<div class="page-item">
		<h1>{listing.title}</h1>
	</div>
	<div class="page-item">
		<p>{listing.description}</p>
	</div>
</div>
<svelte:head>
	<title>SvelteFire - {listing.title}</title>
</svelte:head>

<style lang="stylus">
.page-wrap
	background rgba(255,255,255,.1)
	display flex
	flex-direction column
	gap 1rem
	max-width 25rem
	padding 1rem 0
	width 100%
.page-item
	padding  0 1rem 
p 
	color #fff
</style>
