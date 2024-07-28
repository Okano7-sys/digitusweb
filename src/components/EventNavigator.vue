<template>
  <div class="event-navigator">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 10000 }"
      pagination
    >
      <swiper-slide v-for="(event, index) in events" :key="index">
        <EventCard :event="event" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import EventCard from './EventCard.vue';

export default {
  name: 'EventNavigator',
  components: {
    EventCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      events: [
      {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLOzof36M7A-uaVXRW2biwlVy1AI2UqXtHA&s',
          title: 'Momsista Family Meeting',
          date: 'July\'19'
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLOzof36M7A-uaVXRW2biwlVy1AI2UqXtHA&s',
          title: 'Momsista Family Meeting',
          date: 'July\'20'
          
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLOzof36M7A-uaVXRW2biwlVy1AI2UqXtHA&s',
          title: 'Momsista Family Meeting',
          date: 'July\'21'
          
        }
      ]
    };
  }
};
</script>

<style scoped>
.event-navigator {
  width: 100%;
  max-width: 250px;
  margin: auto;
}
</style>
