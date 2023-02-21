<script></script>
<template>
   <section>
      <footer class="bg-dark">
         <!-- <h4 class="bg-dark">footer_Top</h4> -->
         <ul class="d-flex justify-content-center">
            <li class="px-2 footer-nav">Artist_Page</li>
            <li class="px-2 footer-nav">Dashboard</li>
            <li class="px-2 footer-nav">sponsor</li>
         </ul>

         <!-- <h4 class="bg-dark">footer_Bottom</h4> -->
         <ul class="d-flex justify-content-center">
            <li class="px-4 footer-nav">about_us</li>
            <li class="px-4 footer-nav">contact-us</li>
            <li class="px-4 footer-nav">partnership</li>
         </ul>
         <div class="img-footer text-center">LOGO</div>
      </footer>
   </section>
</template>

<style lang="scss" scoped>
footer {
   color: white;
   background-color: black;
   height: 100vh; //davide: perchè 100vh al footer??
}
footer li:hover {
   color: white;
   background-color: greenyellow;
   cursor: pointer;
}
.footer-nav {
   list-style: none;
}

.img-footer img {
   width: 300px;
}
</style>
