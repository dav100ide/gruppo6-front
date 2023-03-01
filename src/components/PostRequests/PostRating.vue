<template>
   <!-- stelline -->
   <div class="stars">
      <label v-for="(rating, i) in ratings" :key="i">
         <input
            type="radio"
            name="rating"
            :value="rating.id"
            @change="$emit('change-rating')"
            v-model="store.rating_id"
            @click="activeStars = rating.id"
         />
         <div
            class="star"
            @mouseover="activeStars = rating.id"
            @mouseleave="activeStars = store.rating_id"
         >
            <i class="fa-solid fa-star" :class="{ active: rating.id <= activeStars }"></i>
         </div>
      </label>
   </div>
   <!-- /stelline -->
</template>

<script>
import axios from 'axios';
import { store } from '../../store';

export default {
   name: 'PostRating',

   data() {
      return {
         store,
         ratings: [],
         activeStars: 0,
      };
   },

   created() {
      axios.get('http://127.0.0.1:8000/api/ratings').then((res) => {
         this.ratings = res.data;
      });
   },
};
</script>

<style lang="scss" scoped>
.stars {
   font-size: 2.5rem;
   label {
      display: inline;
   }
   input[type='radio'] {
      display: none;
   }
   .star {
      display: inline-block;
      margin-inline-end: 0.5rem;
      &:hover {
         color: var(--accent-color);
      }
      .active {
         color: var(--accent-color);
      }
   }
}

:is(input, textarea):focus {
   box-shadow: 2px 2px var(--accent-color) !important;
   //important pk sovrascrivo bootstrap
}

label {
   display: none;
}

.form-control {
   padding: 1.3rem;
   border-radius: 1.5625rem;
   font-size: 1.2rem;
   color: var(--neutral-color-100);
   &::placeholder {
      color: var(--neutral-color-200);
      font-style: italic;
   }
}
</style>
