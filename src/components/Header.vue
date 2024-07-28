<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/digituslogo.png" alt="Digitus Logo" />
    </div>
    <ul class="nav-links">
      <li><a href="#">Moms</a></li>
      <li><a href="#">Experts</a></li>
      <li><a href="#">Explore</a></li>
      <li><a href="#">Forum</a></li>
      <li><a href="#">MomTalk</a></li>
    </ul>
    <div class="nav-icons">
      <img src="../assets/search-alt-1-svgrepo-com.svg" class="nav-icon" alt="Search" />
      <img src="../assets/letter-unread-svgrepo-com.svg" class="nav-icon" alt="Envelope" />
      <img src="../assets/notification-bell-svgrepo-com.svg" class="nav-icon" alt="Bell" />
      <img src="https://s3-alpha-sig.figma.com/img/b5be/481f/42255d28d196370486f5ffa17d8df641?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fh4PqbpEcpZJb-yOmfYNM09wpjlHgPnvPPaKh1LaSVSXE8LODwxTTBg8dyAZl1bAgz-F~o3MovxdVF4hqqntnr9V3rTZFzj3bNhVogD4u~3TUZuhLPn~S1oCxDOAjEzMgIz8wRm0Xc76LA0pF3gVrlDyUJG4sIXhWz4wQ7COTjZAhZEe8hhk21J8ZWZl1cIwMlFk1pQwrieVUQOGhOU9YLqUeZmo1X4i1R1UVw95CKstwyW2BNmycRLTAcbOV3Z5wJ3cfqSoCh93XpvkMvQUZA8gfdK3kjQyXPpadmKofLxG5E2fKqR5qaEix92pIt~tcx7Z8ksuMn~Y1SWgoRyY5Q__" alt="User Image" class="user-image">
    </div>
  </nav>
</template>

<style scoped>
.logo img {
  height: 50px; 
  width: auto;  
  max-width: 150px; 
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
}
.nav-links {
  display: flex;
  list-style: none;
}
.nav-links li {
  margin: 0 10px;
}
.nav-links a {
  text-decoration: none;
  color: #000;
}
.nav-icons {
  display: flex;
  align-items: center;
}
.nav-icon {
  margin-left: 15px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #000;
}
.user-image {
  margin-left: 15px;
  width: 35px;
  height: 35px;
  border-radius: 50%; /* Makes the image circular */
}
</style>
