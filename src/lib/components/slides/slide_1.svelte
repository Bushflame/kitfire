<script>
	import { fade, fly } from 'svelte/transition';
	/**
	 * @type {any}
	 */
	export let products = [];
	/**
	 * @type {number}
	 */
	export let counter = 0;
</script>

<div class="card-wrap">
	{#if counter > 0}
		<button
			class="prev counter-btn"
			on:click={() => {
				{
					counter = counter - 1;
				}
			}}>prev</button
		>
	{/if}
	{#if counter < products.length - 1}
		<button
			class="next counter-btn"
			on:click={() => {
				counter = counter + 1;
			}}>next</button
		>
	{/if}

	<p class="show-count">Showing {counter + 1} of {products.length} results</p>
	<article class="card">
		{#each products as product, index}
			{#if index == counter}
				<div class="card-liner" transition:fly={{ x: -300, duration: 500 }}>
					<img src={product[0]} alt="" />
					<div class="card-body">
						<h1>{product[1]}</h1>
						<p>{product[2]}</p>
						<a href={`/listing/${product[3]}`}>View</a>
					</div>
				</div>
			{/if}
		{/each}
	</article>
</div>

<style lang="stylus">
.card-wrap
    height 100%
article.card 
    color #fff
    display flex 
    flex-direction column
    gap 1rem
    margin 0rem auto 0
    max-width var(--globalWidth) //  calc(var(--globalWidth) - 2rem)
    position relative
    width var(--globalWidth)
.card-liner 
    border-radius 1rem
    height  var(--globalHeight)
    position absolute
    width var(--globalWidth)
.card-body 
    display grid
    grid-template-columns 1fr
    gap 1rem
    padding 1rem
p.show-count 
    background rgba(0,0,0,.5)
    border-radius 1rem
    color #fff
    margin-left 50% 
    padding .3rem 1rem
    transform translate(-50%,0)
    position absolute
    top 2rem
    text-align center
    width fit-content //18rem
    z-index 2
img 
    height 300px
    object-fit cover
    width calc(var(--globalWidth) - 2px)
button.counter-btn 
    background rgba(0,0,0,.4)
    border-radius 50%
    color #fff
    height 2.8rem
    padding .4rem
    position absolute 
    top 30% 
    transform translate(0, -50%)
    text-align center
    width 2.8rem
    z-index 1
.prev 
    left 1rem
.next 
    right 1rem
</style>
