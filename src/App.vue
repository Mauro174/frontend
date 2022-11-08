<template>
  <div id="app">
    <MyNav />

    <div class="auth-wrapper">
      <div class="auth-inner">
        <MyLogin/>
      </div>
    </div>
  </div>
</template>

<script>

  import MyNav from './components/Nav.vue'
  /*import MyHome from './components/Home.vue'*/
  import MyLogin from './components/Login.vue'

export default {
  name: 'App',
  components:{
    MyNav,
    /*MyHome,*/
    MyLogin
  }
  
  }

</script>
  
<style>

  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

  *{
    box-sizing: border-box;
  }

  body {
    background: #1C8EF9 !important;
    min-height: 100vh;
    display: free;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, label, span {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
  }

  body, html, #app, #roost, .auth-wrapper {
    width: 100%;
    height: 100%;
  }

  #app {
    text-align: center;
  }

  .navbar-light {
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  }

  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }

  .auth-inner {
    width: 550px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }

  .auth-wrapper .form-control:focus {
    border-color:#167bff;
    box-shadow: none;
  }

  .auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  #wrapper {
  display: flex;
  justify-content: center;
  }

  .custom-control-label {
    font-weight: 400;
  }

  .forgot-password,

  .forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7f7d7d;
    margin: 0;
  }

  .forgot-password a {
    color: #167bff
  }


</style>
