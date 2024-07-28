<template>
  <div class="small-post">
    <div class="post-header">
      <img :src="authorImage" alt="Author" class="author-image" />
      <p class="author">{{ authorName }}</p>
    </div>
    <img :src="image" alt="Post image" class="post-image" />
    <div class="post-info">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallPost',
  props: {
    image: String,
    title: String,
    content: String,
    authorName: String,
    authorImage: String 
  }
};
</script>

<style scoped>
.small-post {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  width: 200px; /* Daha küçük bir genişlik belirledik */
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.author-image {
  height: 30px; 
  width: 30px; 
  border-radius: 50%;
  margin-right: 10px; 
  margin-top: 0px;
  margin-bottom: 0px;
}

.author {
  font-style: italic;
  color: black;
  font-size: 14px; /* Yazı boyutunu biraz artırdık */
}

.post-image {
  width: 100%;
  height: 100px; /* Sabit bir yükseklik belirledik */
  object-fit: cover; /* Resmin konteynere sığmasını sağladık */
  border-radius: 5px;
}

.post-info {
  text-align: center;
}

.post-info h3 {
  font-size: 14px; /* Daha küçük başlık boyutu */
  margin: 5px 0;
}

.post-info p {
  font-size: 12px; /* Daha küçük metin boyutu */
  margin: 0;
}
</style>
