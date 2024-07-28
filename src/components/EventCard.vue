<template>
  <div class="event-card">

    <div class="event-details">
      <h3>{{ event.title }}</h3>
      <p>{{ event.date }}</p><img :src="event.image" alt="Event Image" class="event-image" />
      <button class="join-button">Join</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.event-card {
  width: 100%;
  max-width: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.event-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.event-details h3 {
  margin: 0;
  font-size: 1.2em;
}

.event-details p {
  margin: 5px 0;
  color: gray;
}

.join-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
