
<template>
    <header class="w-full border-4 h-16 border-green-300 ">
        <nav class="flex items-center px-4">
            <a href="https://tailwindcss.com/" class="cursor-pointer">TailwindCSS v3.3.2</a>
            <span class="flex-1"></span>
            <ul class="list-none capitalize flex justify-center gap-2 items-center p-4">
                <li class="cursor-pointer"><NuxtLink to="/">customization</NuxtLink></li>
                <li class="cursor-pointer"><NuxtLink to="/screens">screens</NuxtLink></li>
                <li class="cursor-pointer"><NuxtLink to="/color">color</NuxtLink></li>
            </ul>
        </nav>
    </header>
        
        <main class="w-4/5 mx-auto p-4 box-border">
            <slot />
        </main>
    <footer class="h-16 border-4 border-green-300 flex justify-center items-center">
        <h1 class="capitalize border-4 border-red-400">Derson Ussuale</h1>
    </footer>
    
</template>

<script setup lang="ts">

</script>

<style scoped>
    main {
        min-height: calc(100vh - (4rem * 2));
    }
</style>