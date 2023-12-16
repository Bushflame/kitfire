<script>
import {enhance} from '$app/forms'
import {getByTitles} from '$lib/stores/store'
export let data
// let li = data.results
//$getByTitles = 'Bufalo'
console.log('data from page',)

//let myCookie = 'my cookie'
// const db = getFirestore();

// onMount(()=>{
// })
// import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
// import { onMount } from "svelte";

// let title
// async function getFb(){
// console.log('in get fb',)
// const q = query(collection(db, "listings"), where("title_1a", "==", 'Ardvark'));
// const querySnapshot = await getDocs(q);

// querySnapshot.forEach((doc) => {
// console.log(doc.id, " => ", doc.data().title_1a);
// });
// }
    $:getByTitles 
</script>
<!-- <h1>{li[0].title_1a}</h1>
<p>{li[0].description_1a}</p> -->
<template lang="pug">

</template>
<form action="">
    <button type='submit' on:click={()=> {
        $getByTitles = 'Bufalo'
    }}>Bufalo</button>
        <button type='submit' on:click={()=> {
            $getByTitles = 'Ardvark'
        }}>Ardvark</button>
</form>
<style lang="stylus">

</style>