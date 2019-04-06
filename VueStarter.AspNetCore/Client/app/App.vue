<template>
    <div>
        <nav class="navbar is-dark" role="navigation" aria-label="main-nav">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">VueStarter - ASP.NET Core</a>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <router-link to="/" v-bind:exact="true" class="navbar-item">Home</router-link>
                        <router-link to="/about" class="navbar-item">About</router-link>
                        <router-link to="/contact" class="navbar-item">Contact</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'App'
    }
</script>