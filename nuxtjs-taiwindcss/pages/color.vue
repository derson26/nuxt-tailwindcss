<template>
    <div>
        <!-- Color in Tailwind -->
        <div class="border-customcolor-100 border-4 mb-1">
            <h1 class="capitalize text-vuejs text-center">Color</h1>
        </div>

        <div class="text-center border-vuejs border-4">
            <pre class="text-left inline-block text-xs sm:text-sm lg:text-lg">
            <!-- Center tag pre -->
URL: https://tailwindcss.com/docs/customizing-colors 
<b>Using Gray</b>
                    
============= [ HTML ] =========
            <!-- <code class=" inline-block text-xs sm:text-sm lg:text-lg "> -->
            
50      100     200     300     400     500     600
#f9fafb #f3f4f6 #e5e7eb #d1d5db #9ca3af #6b7280 #4b5563
            
            
&#8826;div class="text-gray-500"&#8827;Hello &#8826;/div&#8827;
            <div class="text-gray-500 text-center">Text Gray 500</div>
    <!-- </code> -->
        </pre>
    </div>

        <div class="border-customcolor-100 border-4 my-4">
            <h1 class="capitalize text-vuejs text-center">Using custom color</h1>
        </div>


        <div class="text-center border-vuejs border-4">
<pre class="text-left inline-block text-xs sm:text-sm lg:text-lg ">
<!-- Center tag pre -->
<code >
    ======= [ tailwind.config.js ] ======

    module.exports = {  
        content: [ 
        "./ omponents/**/*.{js,vue,ts}"
        "./layouts/**/*.vue", 
        "./pages/**/*.vue", 
            "./plugins/**/*.{js,ts}", 
                "./nuxt.config.{js,ts}", 
                    "./app.vue", 
        ], 
        the e: { 
            extend: { 
                    <b>colors: { 
                    vuejs: '#26ab1d', 
                    customcolor: {
                        100: '#194d33',
                    }
                }, </b>
            }, 
        },  
        plugins: [], 
        }       
    <span>============= [ HTML ] =========</span>
    &#8826;div class="text-vuejs"&#8827;Hello &#8826;/div&#8827;
    &#8826;div class="customcolor-100"&#8827;Hello &#8826;/div&#8827;
    </code>
</pre>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped></style>