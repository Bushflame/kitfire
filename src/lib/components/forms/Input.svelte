<script>
	export let name = '';
	export let type = '';
	export let val = '';
	export let color = '';
	export let bg = '';
</script>

<!-- <div class="form-group">
	<label for={name} />
	<input {name} bind:value={val} />
</div> -->

<!-- <div class="form-group">
	<label for={name} />
	<input {name} bind:value={val} />
</div> -->
<!-- <div class="form-group">
	<label for={name} />
	<input {name} bind:value={val} />
</div> -->
<!-- <div class="form-group">
	<label for={name} />
	<input {name} bind:value={val} />
</div> -->
<!-- <div class="form-group">
	<label for={name} />
	<input {name} bind:value={val} />
</div> -->
<!-- <div class="form-group">
	<label for={name} />
	<input {name} bind:value={val} />
</div> -->
<!-- <div class="form-group">
	<label for={name} />
	<input {name} bind:value={val} />
</div> -->
<!-- <div class="form-group">
	<label for={name} />
	<input {name} bind:value={val} />
</div> -->
<template lang="pug">
form-group.flex.flex-col.gap-16 
    label(for='{name}' style='color:{color}') {name}
    input(type='{type}' name='{name}' value='{val}' style='background:{bg}' )
</template>

<style lang="stylus">

label
    color var(--label-color)
</style>
