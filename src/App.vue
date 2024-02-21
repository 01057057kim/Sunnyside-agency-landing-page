<script setup>
import navBar from './components/Nav.vue'
import content1 from './components/Content1.vue'
import content2 from './components/Content2.vue'
import content3 from './components/Content3.vue'
import client from './components/Client.vue'
import Image from './components/Image.vue'
import end from './components/End.vue'
</script>

<template>
  <main class="m-0 p-0 box-border min-h-full w-[1920px] mx-auto ">
    <navBar />
    <content1/>
    <content2/>
    <content3/>
    <client />
    <Image />
    <end />
  </main>
</template>
