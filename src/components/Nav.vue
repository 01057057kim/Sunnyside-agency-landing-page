<script setup>

</script>

<template>
    <main>
        <nav class="flex justify-between px-10 py-6 text-[18px] items-center font-barlow w-[1920px] absolute ">
            <img src="../assets/images/logo.svg" alt="logo">
            <ul class="flex gap-10 text-white items-center">
                <li><a class="text-white hover:text-opacity-[60%]" href="#">About</a></li>
                <li><a class="text-white hover:text-opacity-[60%]" href="#">Services</a></li>
                <li><a class="text-white hover:text-opacity-[60%]" href="#">Projects</a></li>
                <li
                    class="border bg-white text-black px-4 py-2 rounded-3xl uppercase -ml-1 font-semibold hover:bg-opacity-[30%] border-transparent hover:text-white">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
        <div>
            <div class="grid relative">
                <span
                    class="absolute text-white text-8xl font-extrabold uppercase tracking-widest font-fraunces top-[200px] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[1100px]  text-center mt-[100px]">We
                    are
                    creatives</span>
                <img class="absolute top-[570px] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[60px]"
                    src="../assets/images/icon-arrow-down.svg" alt="arrow-down">
            </div>
            <img class=" top-0 -z-10 min-w-full " src="../assets/images/desktop/image-header.jpg" alt="img-header">
        </div>
    </main>
</template>

