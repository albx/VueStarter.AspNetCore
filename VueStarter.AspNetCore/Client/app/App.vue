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
                        <a class="navbar-item">Home</a>
                        <a class="navbar-item">About</a>
                        <a class="navbar-item">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container">
            <section class="hero welcome is-light is-bold is-small">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Hello, VueJS!
                        </h1>
                        <h2 class="subtitle">
                            This is your home page
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'App'
    }
</script>