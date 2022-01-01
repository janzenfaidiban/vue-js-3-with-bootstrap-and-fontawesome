<template>
  <div>
    
    <Header />
    <Nav />

    <div class="container py-5">
      <div class="course">
        <div class="card">
          <div class="card-header">
            <h1>Course</h1>
          </div>
          <div class="card-body">

            <div class="row">
              <div class="col-lg-4">
                <img src="@/assets/jhon-sacode-avatar.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="100%" loading="lazy">
              </div>
              <div class="col-lg-8">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quas architecto, repellendus aliquam in expedita atque ipsa pariatur excepturi ipsum vitae ea veritatis sapiente repudiandae voluptatum quasi, ullam optio odio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quas architecto, repellendus aliquam in expedita atque ipsa pariatur excepturi ipsum vitae ea veritatis sapiente repudiandae voluptatum quasi, ullam optio odio.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quas architecto, repellendus aliquam in expedita atque ipsa pariatur excepturi ipsum vitae ea veritatis sapiente repudiandae voluptatum quasi, ullam optio odio.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quas architecto, repellendus aliquam in expedita atque ipsa pariatur excepturi ipsum vitae ea veritatis sapiente repudiandae voluptatum quasi, ullam optio odio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quas architecto, repellendus aliquam in expedita atque ipsa pariatur excepturi ipsum vitae ea veritatis sapiente repudiandae voluptatum quasi, ullam optio odio.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quas architecto, repellendus aliquam in expedita atque ipsa pariatur excepturi ipsum vitae ea veritatis sapiente repudiandae voluptatum quasi, ullam optio odio.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quas architecto, repellendus aliquam in expedita atque ipsa pariatur excepturi ipsum vitae ea veritatis sapiente repudiandae voluptatum quasi, ullam optio odio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quas architecto, repellendus aliquam in expedita atque ipsa pariatur excepturi ipsum vitae ea veritatis sapiente repudiandae voluptatum quasi, ullam optio odio.</p>
              </div>
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
  name: 'Course',

components: {
  Nav,
  Footer
},

}
</script>
