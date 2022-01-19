<template>
  <div id="app">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar'
export default {
  name: 'App',
  components: {
    Sidebar
  }
}
// Проксировал так: npm config set registry http://127.0.0.1:5000/
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  text-align: left;
}
body{
  margin: 0 5% 0 20%;
  overflow-x: hidden;
  font-size: 16px;
  color: #222;
}

input:focus, select:focus, textarea:focus {
  outline: none;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
textarea{
  resize: vertical;
}
/* Скролл страницы справа */
::-webkit-scrollbar {
  width: 8px;
  background: #706f6f;
}

::-webkit-scrollbar-thumb:vertical {
  background: #3a7afa;
  border-radius: 10px;
}

a {
  text-decoration: none;
  color: black;
}

ul, ol, li {
  list-style-type: none;
}

img {
  vertical-align: top;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0 0 20px 0;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 20px 0;
}

button:focus {
  outline: none;
}
.send_btn {
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: #3a7afa;
  color: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
}
.container {
  width: 100%;
  display: block;
  margin: 0 auto;
  max-width: 1200px;
}
</style>
