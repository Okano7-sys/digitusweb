<template>
<div id="app">
  <Header />
  <div class="content">
    <Feed />
    <aside>
      <SmallPosts />
      <EventNavigator />
    </aside>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Feed from './components/Feed.vue';
import SmallPosts from './components/SmallPosts.vue';
import EventNavigator from './components/EventNavigator.vue';

export default {
name: 'App',
components: {
  Header,
  Feed,
  SmallPosts,
  EventNavigator
}
};
</script>

<style>
#app {
background-color: #f0f0ff;
min-height: 100vh;
display: flex;
flex-direction: column;
}

.content {
display: flex;
justify-content: center;
padding: 20px;
gap: 20px;
}

aside {
display: flex;
flex-direction: column;
align-items: center;
width: 1000px;
position: sticky;
top: 20px;
}

aside > * {
  margin-bottom: 0px;
}
</style>
