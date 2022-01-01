<template>
  
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-dark text-muted">

  <!-- Section: Links  -->
  <section class="py-5">
    <div class="container text-center text-md-start">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <img src="@/assets/sacode-kotak.png" alt="Logo SaCode" width="100px">
            <i class="fas fa-gem me-3"></i>SaCode
          </h6>
          <p>
            Please be connected with aour community at any social media platforms.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Help Center
          </h6>
          <p>
            <a href="#!" class="text-reset">FAQ</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Term and Condition</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Privacy Policy</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Contact</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Others
          </h6>
          <p>
            <a href="#!" class="text-reset">Donation</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Patners</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Products</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Portfolios</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> Papua, Kota Jayapura.</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@sacode.web.id
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2022 Copyright:
    <a class="text-reset fw-bold" href="https://sacode.web.id">SaCode</a>. Date : {{ currentDateTime() }}
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->

</template>

<script>
export default {

  methods: {
        currentDateTime() {
            const current = new Date() // full date with GMT 
            const date = current.getDate()
            const month = current.getMonth()+1
            const year = current.getFullYear()

            const dateYear = date +' / '+ month +' / '+ year
            return dateYear
        },
  },
}
</script>

<style>

</style>