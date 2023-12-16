<script>
	export let data;
	let listings = data.all; //.all
</script>

<ul class="card">
	{#each listings as lis}
		<li>
			<a href={`/results/${lis[1].uid}`}>{lis[0].title}</a>
		</li>
	{/each}
</ul>

<style lang="stylus">

</style>
