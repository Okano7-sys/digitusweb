<template>
<div class="friend-card">
  <img :src="image" alt="Friend Image" class="friend-image">
  <div class="friend-details">
    <p>{{ name }}</p>
    <p>{{ title }}</p>
    <p>{{ location }}</p>
    <button>Follow</button>
  </div>
</div>
</template>

<script>
export default {
name: 'FriendCard',
props: {
  image: String,
  name: String,
  title: String,
  location: String
}
};
</script>

<style>
.friend-card {
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
padding: 10px;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
margin: 10px;
width: 150px;
}

.friend-image {
height: 100px;
width: 100px;
border-radius: 50%;
margin-bottom: 10px;
}

.friend-details {
text-align: center;
}

button {
margin-top: 10px;
padding: 5px 10px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;
}

button:hover {
background-color: #0056b3;
}
</style>
