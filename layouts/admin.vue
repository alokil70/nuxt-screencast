<template>
    <v-app>
        <v-app-bar
            app
            color="indigo"
            dark
        >
            <v-btn text to="/">
                home
            </v-btn>
            <v-btn text to="/products">
                products
            </v-btn>
            <v-btn text to="/admin">
                admin
            </v-btn>
        </v-app-bar>
        <v-content>
            <nuxt />
        </v-content>
    </v-app>
</template>

<style>
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

</style>
