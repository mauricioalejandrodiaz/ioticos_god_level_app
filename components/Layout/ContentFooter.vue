<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a
            href="http://tecnocasa.ga"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            Tecnocasa
          </a>
        </li>
        <li class="nav-item">
          <a
            href="http://tecnocasa.ga/about"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            About Us
          </a>
        </li>
        <li class="nav-item">
          <a
            href="http://blog.tecnocasa.ga"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            Blog
          </a>
        </li>
      </ul>
      <div class="copyright">
        &copy; {{ year }}, made with <i class="tim-icons icon-heart-2"></i> by
        
        <a
          href="https://www.creative-tim.com/?ref=pdf-vuejs"
          target="_blank"
          rel="noopener"
          >Creative Tim</a
        >        
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
