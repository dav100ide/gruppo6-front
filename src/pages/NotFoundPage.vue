<template>
  <div class="container">
    <section>
      <h1>{404 ERROR}</h1>
      <h6 class="mt-5">OPS! Qualcosa è andato storto qifsha ropt!</h6>
    </section>
    <section class="btn-404-section d-flex justify-content-center">
      <button class="btn-404 mt-5">
        <i class="fa-solid fa-gear"></i>
        <br />
        <!-- <p>HOVER THIS HERE FOR FIX</p> -->
      </button>
    </section>

    <!-- BOOSTRAP -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1,
h6 {
  margin-left: 200px;
  padding: 10px;
}

.btn-404-section {
  height: 400px;
}
.btn-404 {
  margin-top: 800px;
  height: 300px;
  width: 300px;
  padding: 40px;
  margin: 40px;
  cursor: pointer;
  background-color: #14213d;
  border-radius: 100%;
  border: none;
  color: white;
  transition: all 4s;
}

.btn-404 i {
  font-size: 72px;
  transition: transform 2s;
}

.btn-404 i:hover {
  font-size: 102px;
  transform: rotate(3.142rad);
}

.btn-404:hover {
  background-color: #fca311;
  scale: 1.4;
}
</style>
