<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand">SaCode</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <form class="d-flex">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/course" class="nav-link">Course</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Community
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/sacodes-weekend" class="dropdown-item">SaCode's Weekend</router-link>
                <li><a class="dropdown-item" href="#">SaCode's Podcast</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Lainnya</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled"></a>
            </li>
          </ul>
        </div>
        </form>
      </div>
    </nav>
  
</template>

<script>
export default {
}
</script>

<style>

</style>