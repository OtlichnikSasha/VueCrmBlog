<template>
  <div class="sidebar">
    <div class="sidebar_place">
      <router-link to="/" class="logo">
        Crm Blog
      </router-link>
      <div class="link_item">
        <router-link to="/categories" class="nav-link">
          Категории
        </router-link>
      </div>
      <div class="link_item">
        <router-link class="nav-link" to="/articles">
          Статьи
        </router-link>
      </div>
      <div class="link_item">
        <router-link class="nav-link" to="/authors">
          Авторы
        </router-link>
      </div>
      <router-link class="exit_crm" to="/logout">
        Выйти
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .sidebar {
    position: fixed;
    z-index: 1000;
    background: -webkit-gradient(linear, right bottom, left top, from(#101149), color-stop(#0e0f3e), color-stop(#1b1134), color-stop(#351a38), to(#6f283d));
    background: -o-linear-gradient(right bottom, #101149, #0e0f3e, #1b1134, #351a38, #6f283d);
    background: linear-gradient(to left top, #101149, #0e0f3e, #1b1134, #351a38, #6f283d);
    left: 0;
    top: 0;
    width: 200px;
    height: 100vh;
  }

  .sidebar_place {
    width: 100%;
    height: 100%;
    padding: 20px 0;
    position: relative;
  }

  .exit_crm {
    position: absolute;
    bottom: 25px;
    left: 0;
    width: 100%;
    font-size: 24px;
    color: red;
    padding: 10px 20px;
  }

  .link_item {
    width: 100%;
    height: auto;
    padding: 10px 20px;
  }

  .sidebar .nav-link {
    font-weight: 600;
    -webkit-transition: color .3s;
    -o-transition: color .3s;
    transition: color .3s;
    font-size: 22px;
    color: #b7c0cd;
  }
  .sidebar .nav-link.router-link-active{
    color: fuchsia;
  }
  .sidebar .nav-link.router-link-active:hover{
    color: fuchsia;
    -webkit-transition: color .3s;
    -o-transition: color .3s;
    transition: color .3s;
  }

  .sidebar .nav-link .fa {
    margin-left: 5px;
  }

  .sidebar .nav-link:hover {
    -webkit-transition: color .3s;
    -o-transition: color .3s;
    transition: color .3s;
    color: #e9eaec;
  }

  .logo {
    font-size: 36px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    display: block;
    margin-bottom: 25px;
  }
</style>