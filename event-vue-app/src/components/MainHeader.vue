<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light nav-color p-0">
        <router-link class="navbar-brand ms-3" to="/home">
            <img src="../assets/logo2.jpeg"  class="align-top ms-3 mt-2" width="100" alt="">
        </router-link>
        <button class="navbar-toggler ml-auto hidden-sm-up float-xs-right text-center " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav text-center">
                <li class="nav-item">
                    <router-link class="nav-link nav-links active me-4" to="/home">HOME</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link nav-links me-4" to="/about">ABOUT</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle nav-links me-4" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">CAMPAIGNS</a>
                        <div class="dropdown-menu text-center">
                            <router-link class="dropdown-item" :to="'/events/' + 2023">2023</router-link>
                            <router-link class="dropdown-item" :to="'/events/' + 2022">2022</router-link>
                            <router-link class="dropdown-item" :to="'/events/' + 2021">2021</router-link>
                            <router-link class="dropdown-item" :to="'/events/' + 2020">2020</router-link>
                        </div>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link nav-links me-4" to="/contact">CONTACT</router-link>
                </li>
            </ul>
        </div>
    </nav>
    </div>
</template>

<script>

export default{
}
</script>


<style scoped>

.nav-color {
    /* background-color: #1862a3c2; */
    /* border-bottom: 3px solid rgb(19, 19, 74); */
}

.nav-links{
font-weight: 600;
color:rgb(9, 89, 124);
font-size: 13px;
}

.navbar-light .navbar-nav .nav-link {
    color: rgba(2, 24, 44, 0.792); 
    letter-spacing: 1px;
}


</style>