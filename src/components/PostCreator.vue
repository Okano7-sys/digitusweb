<template>
  <div class="post-creator">
    <img src="https://s3-alpha-sig.figma.com/img/b5be/481f/42255d28d196370486f5ffa17d8df641?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fh4PqbpEcpZJb-yOmfYNM09wpjlHgPnvPPaKh1LaSVSXE8LODwxTTBg8dyAZl1bAgz-F~o3MovxdVF4hqqntnr9V3rTZFzj3bNhVogD4u~3TUZuhLPn~S1oCxDOAjEzMgIz8wRm0Xc76LA0pF3gVrlDyUJG4sIXhWz4wQ7COTjZAhZEe8hhk21J8ZWZl1cIwMlFk1pQwrieVUQOGhOU9YLqUeZmo1X4i1R1UVw95CKstwyW2BNmycRLTAcbOV3Z5wJ3cfqSoCh93XpvkMvQUZA8gfdK3kjQyXPpadmKofLxG5E2fKqR5qaEix92pIt~tcx7Z8ksuMn~Y1SWgoRyY5Q__" alt="User Image" class="user-image">
    <div class="input-container">
      <input type="text" placeholder="Write something, Merve">
      <div class="post-actions">
        <button class="emoji-button">😊</button> 
        <button class="post-button">Post</button> 
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCreator',
};
</script>

<style scoped>
.post-creator {
  width: 100%;
  max-width: 650px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 25px;
  padding-right: 35px;
  padding-bottom: 0px;
  border-radius: 10px;
  margin: 10px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-image {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 60px;
  border: 2px solid rgba(0, 0, 0, 0.1); 
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.05); 
}

.input-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

input {
  width: 100%;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0; 
  margin-bottom: 10px; 
}

.post-actions {
  display: flex;
  justify-content: flex-end; 
  gap: 10px; 
  margin-bottom: 10px;
}

.emoji-button, .post-button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.2em;
}

.post-button {
  color: #007bff;
}
</style>
