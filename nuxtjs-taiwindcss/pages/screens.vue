<template>
    <div>
        <!-- default Breakpoint  -->
        <div class="border-customcolor-100 border-4 mb-1 text-center">
            <h1 class="capitalize text-vuejs ">breakpoints</h1>
            <p>
                You define your project’s breakpoints in the theme.screens section of your <b>tailwind.config.js</b> file.
            </p>
        </div>

        <h2><b>The default breakpoints:</b></h2>
        <div class="text-center border-vuejs border-4">
            <pre class="text-left inline-block text-xs sm:text-sm lg:text-lg">
            <!-- Center tag pre -->
URL: https://tailwindcss.com/docs/screens 
File: tailwind.config.js
<code>
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}
    
    </code>
        </pre>
    </div>

    <!-- Override default  -->
    <h2 class="mt-3"><b>Overriding the defaults</b></h2>
    <div class="text-center border-vuejs border-4">
        <pre class="text-left inline-block text-xs sm:text-sm lg:text-lg">
            <!-- Center tag pre -->
URL: https://tailwindcss.com/docs/screens 
File: tailwind.config.js
<code>
module.exports = {
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  }
}
    
    </code>
        </pre>
    </div>

    <h2 class="mt-3"><b>Overriding a single screen</b></h2>
    <div class="text-center border-vuejs border-4">
        <pre class="text-left inline-block text-xs sm:text-sm lg:text-lg">
            <!-- Center tag pre -->
URL: https://tailwindcss.com/docs/screens 
File: tailwind.config.js
<code>
    module.exports = {
  theme: {
    extend: {
      screens: {
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
}
    
    </code>
        </pre>
    </div>

    <!-- Add Large Breakpoint -->
    <h2 class="mt-3"><b>Add Large Breakpoint</b></h2>
    <div class="text-center border-vuejs border-4">
        <pre class="text-left inline-block text-xs sm:text-sm lg:text-lg">
            <!-- Center tag pre -->
URL: https://tailwindcss.com/docs/screens 
File: tailwind.config.js
<code>
module.exports = {
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
    
    </code>
        </pre>
    </div>

    <!-- Adding smaller breakpoints -->
    <h2 class="mt-3"><b>Adding smaller breakpoints</b></h2>
    <div class="text-center border-vuejs border-4">
        <pre class="text-left inline-block text-xs sm:text-sm lg:text-lg">
            <!-- Center tag pre -->
URL: https://tailwindcss.com/docs/screens 
File: tailwind.config.js
<code>
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
    
    </code>
        </pre>
    </div>

     <!-- Using custom screen names -->
    <h2 class="mt-3"><b>Using custom screen names</b></h2>
    <div class="text-center border-vuejs border-4">

    <p>
        You can name your custom screens whatever you like, and are not limited to following the sm/md/lg/xl/2xl convention that Tailwind uses by default.
    </p>
        <pre class="text-left inline-block text-xs sm:text-sm lg:text-lg">
            <!-- Center tag pre -->
URL: https://tailwindcss.com/docs/screens 
File: tailwind.config.js
<code>
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}
    
    </code>
        </pre>
    </div>

     <!-- Max-width breakpoints -->
     <h2 class="mt-3"><b>Max-width breakpoints</b></h2>
    <div class="text-center border-vuejs border-4">

    <p>
        If you want to work with max-width breakpoints instead of min-width, you can specify your screens as objects with a max key:
    </p>
        <pre class="text-left inline-block text-xs sm:text-sm lg:text-lg">
            <!-- Center tag pre -->
URL: https://tailwindcss.com/docs/screens 
File: tailwind.config.js
<code>
module.exports = {
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  }
}
    
    </code>
        </pre>
    </div>

    <!-- Fixed-range breakpoints -->
    <h2 class="mt-3"><b>Fixed-range breakpoints</b></h2>
    <div class="text-center border-vuejs border-4">

    <p>
        If you want your breakpoints to specify both a min-width and a max-width, use the min and max keys together:
    </p>
        <pre class="text-left inline-block text-xs sm:text-sm lg:text-lg">
            <!-- Center tag pre -->
URL: https://tailwindcss.com/docs/screens 
File: tailwind.config.js
<code>
module.exports = {
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  }
}
    
    </code>
        </pre>
    </div>
 
</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>