<template>
   <div class="footer-top">
      <div class="container-fluid">
         <div class="row">
            <!-- logo col -->
            <div class="col-12 col-md-6 col-lg-4">
               <img
                  src="../../pages/HomePageSections/HomePageAssets/logowhite.png"
                  alt="logo"
                  class="img-fluid"
               />
               <p>Art_hub, where you can dream and make art.</p>
            </div>
            <!-- /logo col -->
            <!-- follow us col -->
            <div class="col-12 col-md-6 col-lg-4">
               <div class="follow-us">
                  <h4 class="fw-bold text-center">I NOSTRI SOCIAL</h4>
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
}
.follow-us {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100%;
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
</style>
