<script>
	export let counter = 1;
	console.log('comp counter', counter);
</script>

<button
	class="prev counter-btn"
	on:click={() => {
		{
			counter = counter - 1;
		}
	}}>prev</button
>
<button
	class="next counter-btn"
	on:click={() => {
		counter = counter + 1;
	}}>next</button
>

<style lang="stylus">
button.counter-btn 
    background red
    height 2rem
    position absolute 
    top 50% 
    transform translate(0, -50%)
    width 2rem
    z-index 1
.prev 
    left 1rem
.next 
    right 1rem
</style>
