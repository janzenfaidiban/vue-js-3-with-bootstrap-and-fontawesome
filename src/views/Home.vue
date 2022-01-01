<template>
    <div>

      <Header />
      <Nav />

      <div class="container">
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="@/assets/jhon-sacode-avatar.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="600" loading="lazy">
            </div>
            <div class="col-lg-6">
              <h1 class="display-1 fw-bold lh-1 mb-3 text-success">SaCode Vue.js</h1>
              <h3>Learn To Code</h3>
              <p class="lead my-4"> Vue.js with Bootstrap & Font Awesome</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-success btn-lg px-4 me-md-2"><fa icon="laptop-code" /> Our Course</button>
                <button type="button" class="btn btn-outline-success btn-lg px-4"><fa icon="users" /> Join Community</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>

</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',

components: {
  Nav,
  Footer
},

}
</script>
