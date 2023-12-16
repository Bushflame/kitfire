<script>
	import { page } from '$app/stores';
	import { copy } from 'svelte-copy';

	export let data;
	//let url = `/listing/${data.thisId}`
	//let clickToGo = `https://renttogo.co.uk/view${$uidkey}`;
</script>

<div class="dash-wrap">
	<h1>Dashboard</h1>
	<h1>{data.thisId}</h1>
	<nav>
		<!-- 
<ul>
    <li>
        <a href="/dashboard">Dashboard</a>
    </li>
    <li>
        <a href={`/edit/${data.thisId}`}>Edit </a>
    </li>
    <li>
        <a href={`/private-listing/${data.thisId}`}>View</a>
    </li>
    <li>
        <a href="/create" class:active={$page.url.pathname === '/create'}>Create</a>
    </li>
</ul>
</nav> -->
	</nav>
</div>

<svelte:head>
	<title>SvelteFire: Dashboard</title>
</svelte:head>

<style lang="stylus">
.dash-wrap  
    display flex
    flex-direction column
    gap 1rem
ul 
    display flex
    gap .8rem
    list-style none
</style>
