<template>
    <div>
        <section class="hero welcome is-light is-bold is-small">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Contact
                    </h1>
                    <h2 class="subtitle">
                        Feel free to fork this project from <a href="https://github.com/albx/VueStarter.AspNetCore" target="_blank">GitHub</a> and submit your contrib
                    </h2>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <h3 class="title">Contacts (Loaded from API)</h3>
                <ul>
                    <li>
                        <span>
                            <i class="fab fa-github" aria-hidden="true"></i>
                            {{ contacts.github }}
                        </span>
                    </li>
                    <li>
                        <span>
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                            {{ contacts.twitter }}
                        </span>
                    </li>
                    <li v-for="email in contacts.emails" v-bind:key="email">
                        <span>
                            <i class="far fa-envelope" aria-hidden="true"></i>
                            {{ email }}
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'Contact',
        data() {
            return {
                contacts: {}
            }
        },
        methods: {
            loadContacts() {
                axios.get('/api/contacts')
                    .then((response) => {
                        this.contacts = response.data || {}
                    })
            }
        },
        mounted() {
            this.loadContacts()
        }
    }
</script>