<template>
    <div>
        <nuxt-link to="/admin" class="left-corner">
            admin
        </nuxt-link>
        <v-content>
            <nuxt />
        </v-content>
    </div>
</template>

<style>
    .left-corner {
        position: absolute;
        color: white;
        background-color: #333;
    }
/*html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}*/
#theatre-body {
    background-color: #47494e;
    color: white;
}
</style>
