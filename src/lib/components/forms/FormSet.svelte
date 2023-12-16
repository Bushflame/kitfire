<script>
	export let email = '';
</script>

<template lang="pug">
.form-items 
    .form-group 
        label(for='email') Email
        <input type="email" name='{email}' id='email'>
    .form-group 
        label(for='msg') Message
        textarea(type='text' name='msg' id='msg')

</template>

<style lang="stylus">

</style>
