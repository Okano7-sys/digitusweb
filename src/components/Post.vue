<template>
  <div class="post">
    <div class="post-header">
      <img :src="authorImage" alt="Author" class="author-image">
      <div class="author-details">
        <h3>{{     authorName }}</h3>
        <p>{{ authorTitle }}</p>
      </div>
    </div>
    <img :src="postImage" alt="Post" class="post-image">
    <div class="post-actions">
      <div class="action">
        <img src="../assets/like-svgrepo-com.svg" alt="Like" class="action-icon" />
        <span>{{ likes }}</span>
      </div>
      <div class="action">
        <img src="../assets/share-svgrepo-com.svg" alt="Share" class="action-icon" />
        <span>{{ shares }}</span>
      </div>
      <div class="action">
        <img src="../assets/save-2-svgrepo-com.svg" alt="Save" class="action-icon" />
      </div>
    </div>
    <div class="post-content">
      <p>{{ content }}</p>
    </div>
    
    <div class="comment-section">
      <input type="text" placeholder="Comment This" />
      <button>Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    authorImage: String,
    authorName: String,
    authorTitle: String,
    postImage: String,
    content: String,
    likes: {
      type: Number,
      default: 777
    },
    shares: {
      type: Number,
      default: 333
    }
  }
};
</script>

<style scoped>
.post {
  width: 100%;
  max-width: 700px;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px auto;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.author-image {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.author-details {
  display: flex;
  flex-direction: column;
}

.author-details h3, .author-details p {
  margin: 0; 
}

.post-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.post-content {
  text-align: left;
  margin-bottom: 10px;
}

.post-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.action {
  display: flex;
  align-items: center;
}

.action .action-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.comment-section {
  display: flex;
  align-items: center;
  background-color: #fff; 
}

.comment-section input {
  flex-grow: 1;
  padding: 5px;
  background-color: #fff; 
  color: #000;
  margin-right: 10px;
  border: 1px solid #c2c1c1;
  border-radius: 5px;
}

.comment-section button {
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}
</style>
