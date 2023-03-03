<template>
    <header>
        <p>Меня зовут {{ msg }}</p>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String
    }
}
</script>
<style>
    p{
        color: red;
    }
</style>