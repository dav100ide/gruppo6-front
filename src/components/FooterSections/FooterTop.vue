<template>
   <div class="footer-top">
      <div class="container-fluid">
         <div class="row g-5 g-lg-3">
            <!-- logo col -->
            <div class="col-12 col-md-6 col-lg-4">
               <img
                  src="../../pages/HomePageSections/HomePageAssets/logowhite.png"
                  alt="logo"
                  class="img-fluid"
               />
               <p>where you can dream and make art...</p>
            </div>
            <!-- /logo col -->
            <!-- follow us col -->
            <div class="col-12 col-md-6 col-lg-4">
               <div class="follow-us">
                  <h4 class="fw-bold text-center mb-3">I NOSTRI SOCIAL</h4>
                  <div class="follow-us__icons">
                     <a href="https://www.instagram.com/j.abanzado/">
                        <i class="fa-brands fa-facebook"></i>
                     </a>
                     <a href="https://www.instagram.com/davidoreglio/">
                        <i class="fa-brands fa-instagram"></i>
                     </a>
                     <a href="https://www.instagram.com/incenity91/">
                        <i class="fa-brands fa-twitter"></i>
                     </a>
                     <a href="https://www.linkedin.com/in/davide-oreglio-a4a448255/">
                        <i class="fa-brands fa-linkedin"></i>
                     </a>
                  </div>
               </div>
            </div>
            <!-- /follow us col -->
            <!-- privacy col -->
            <div class="col-12 col-lg-4">
               <div class="privacy">
                  <h4 class="fw-bold text-center mb-3">PRIVACY E SICUREZZA</h4>
                  <ul>
                     <li><a href="#">Privacy Policy</a></li>
                     <li><a href="#">Security Policy</a></li>
                     <li><a href="#">Sponsor Terms</a></li>
                     <li><a href="#">Legal Notes</a></li>
                  </ul>
               </div>
            </div>
            <!-- /privacy col -->
         </div>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
   margin: 0;
   font-style: italic;
   font-size: 1.15rem;
}
.follow-us {
   &__icons {
      display: flex;
      justify-content: space-evenly;
      font-size: 2.5rem;
      i {
         transition: color linear 0.2s;
         &:hover {
            color: var(--primary-color-200);
         }
      }
   }
}

.privacy {
   text-align: center;
   ul {
      @include reset-list;
      li {
         font-size: 1.18rem;
         transition: color linear 0.2s;
         &:hover {
            color: var(--primary-color-200);
            text-decoration: underline;
         }
         &:not(:last-child) {
            margin-bottom: 0.7rem;
         }
      }
   }
}
</style>
