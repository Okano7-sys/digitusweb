<template>
<div class="feed">
  <PostCreator />
  <Post
    v-for="post in posts"
    :key="post.id"
    :authorImage="post.authorImage"
    :authorName="post.authorName"
    :authorTitle="post.authorTitle"
    :postImage="post.postImage"
    :content="post.content"
  />
  <FriendSuggestion />
</div>
</template>

<script>
import Post from './Post.vue';
import PostCreator from './PostCreator.vue';
import FriendSuggestion from './FriendSuggestion.vue';

export default {
name: 'Feed',
components: {
  Post,
  PostCreator,
  FriendSuggestion
},
data() {
  return {
    posts: [
      {
        id: 1,
        authorImage: 'https://s3-alpha-sig.figma.com/img/36e7/3403/ce0105fd8f488cc09caff1dacb6abcd9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Acak3wVoj~BJD7~M~WypNI~ObpCm2hMIn3t34h3bD~TghLepYe-KXz8kTlTP2kwGLV2fZm5yZXDVxOq1d4muoegxdO33tmzxjV~MITO-WKjaF19IpNMLmvLvoNxhfwVxd4TaOxAU7YK-ahnykADne46VcWnGTjb6e2HSpZbAvYMioMR4OFPlPs0AHiWFqTV2AHZgwo5jqKNoPwI8rX~kUmdcGGybnc30SZ-HyGBhIIepYkrjpMxLYbmmIJYCS2u3Hm420dtnkGEnZK3fjw2b2Sw6XA~jl4EiumuyWPLJJ8Pl8UvQIiB8j63yGvPVEDJSwoZJ8VO8D4TDUSYCamdosA__',
        authorName: 'Ahmet Yıldız Kentar',
        authorTitle: 'Medical Doctor',
        postImage: 'https://s3-alpha-sig.figma.com/img/1167/8fba/08cd40c69a19f03203fe6051e3b15a20?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PccSgPgX05Ea8WzR7CfhH1dFHGb8VAF4cSOlkqWM510oLM2fUwdIio82TZbPqjZ85jJbKirrNkI7LzrOzxA3TgI6Ua2UtaNjrs~dhWP~ekOpUyIre4ld82-4sv4zgsSOLN84l-uFD9UEjujSrG7Rp73GexX45BmMa8EqBifZ3DaeoCiKfgDplra4jQKTU2RTbAbxg6OTgPu5s-uASnmQKzB~-EYnxAwftfpBkSK4hn7m~-WSonvZ~Fz4fXU4qSZM7iEfDobsg2ZANoKPX9E18hdTRQ9ebJzXW5CAHQwavnZyVzr81JAOUJZkMDCgyqlIr5D~Ztk9y7X1zJTsOVxtsg__',
        content: 'Normal healthy 21 yr old patient came in presenting odd symptoms...'
      },
      {
        id: 2,
        authorImage: 'https://s3-alpha-sig.figma.com/img/458e/b405/50acbcb3d2d1c08fc8578ce3ef429865?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QpvuPp-iQWaNvcLseP~xaDm7zC7wbnDp70MEOu5ZeFAdFiq0je7i83CVIO7fzfa50wrAwxl33gOD7plF5LDNBk6I3sQksdz5axAWdILGNsqn34jJEiXnWTON6Ybp5ARxESFRLFj9HUw0UhJ0LMyOlHrgMw~SUbi3TVwRsEegCSsJFgHQpQYowsNyT1QpbVuWz21y3Wm2TyO67dsSkYfxnjGzeMLxZDnr8TBUtfjFycNwAsCwULlMLAW0H27f1hzDImDEe-d5j~BLx~JobsLWDR9GxzYrr9mN938JqC5Jyxj6pnW3aTD1ule2J4re814MM7uver-~KXgb54qLQ6mbLQ__',
        authorName: 'Derya Deniz',
        authorTitle: 'Mother',
        postImage: 'https://s3-alpha-sig.figma.com/img/7365/e435/e145391c23a5ee055fb3a0d59f16551a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SiuHI7TAGU1cuZoYfpOBwM9Cx1ElZsqOfvHtWPMG8MPOChZ~BsagwsPud49~UUlUxnOqwLFeqDEuC8NzNIpRllxln7YGXw5COf2LGdlLji8suyuvZQTKjjkNPikrG0Ilz5HPb4V8NwkKFB4uITBbb6u~wRJqFInUBpTYWoaw3IeEJt6swFOzn1y7v4TVSqXSrpeY2jVAkrSrTGjCrVNYlJqWFMEcwlRS4Q-3veYRltjSD4vph7PEw2BmPg0Tg3C9opMfvyHTt9~vqINiwby3zTVdEygrZzXfwhEY4w3M7BEF~4ngrmYe-faPvqLAPtN9OOJJitBejS4jMNsJp3GDLA__',
        content: 'The mom said she struggled with fertility issues and had an ectopic pregnancy...'
      }
      ]
    };
  },
  methods: {
    showFriendSuggestion(index) {
      
      return index === 1; 
    }
  }
};
</script>

<style>
.feed {
display: flex;
flex-direction: column;
align-items: center;
}
</style>
