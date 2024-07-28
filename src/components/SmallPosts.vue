<template>
<div class="small-posts">
  <SmallPost
    :authorImage="post.authorImage"
    :authorName="post.authorName"
    v-for="post in posts"
    :key="post.id"
    :image="post.image"
    :title="post.title"
    :content="post.content"
  />
</div>
</template>

<script>
import SmallPost from './SmallPost.vue';

export default {
name: 'SmallPosts',
components: {
  SmallPost
},
data() {
  return {
    posts: [
      {
        id: 1,
        authorImage:"https://s3-alpha-sig.figma.com/img/2e14/8723/79a9d971b48709a4955b84fb905016ee?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HfwJeAWA2FOIevXpEWZL9e2MEjZiMz8lvIhGVMXQQv~lTnAqpHuKo07VvGieZQe2~HRoD5EyJH5uQWkqWuk2I0CGHznCx1pdBAxlVvn1swwINIaOahLJj-vn0dyge5Rm0Q~5mEOjxoaYDUg7W4f2oj8CdDDujO1eaVnhpYO4nKEoZ~hUDj6xUXxD4iecPqDWw4z0sLVy~h5E1WEADmIxJ3twHQl8Mb6u5ktxIQEUxwM2bg3HOg0-dFhfk4I39NyQzYMAyl3Ne8Y4n3XVlSjeivLov4sYiK1ndQdP4jr4OEdjhWhbFz-Aj5WeuZJ3hwE~XaFM5o0sI1n8bkTKBMONAw__",
        authorName: 'Ayşe Palandöken',
        image: 'https://s3-alpha-sig.figma.com/img/c040/5364/ee20823bfd03eb7347b745beaaf2c641?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QfIf0pTK2d87Hhp-wgV~uf5-XNaA3hPn0hWYYSixOKsoongDc9BLxcB2x~KrHGWTJivodzPpV87enehFtA0FmnXoJI-CrhFA6A6nnB8Hf3EFmnUM639Th~AoYW5AxksFoxeB5HwVVf15ZY3b56atnuhLTdJdrKCtUgdA0-zLZ6iWXSzkJhc3q1s1LTSXC9R7OTQDtcy52s8wSwTYlINf3xSLTfUUfX7lHL52KO9waOrETe2aWKLk4aHijqLOX3bfJhOYRksAbZ8NXPV2Dtvs8pWNlcSEjgjntDXTwkpH8bSdXcNiQ-W1NHiSLLl6lBytfEAJz1MdkzTswXYRnUuA6w__',
        title: 'Hiking in mountains with my baby',
        content: '34 likes • 4 comments',
      },
      {
        id: 2,
        authorImage:"https://s3-alpha-sig.figma.com/img/2e14/8723/79a9d971b48709a4955b84fb905016ee?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HfwJeAWA2FOIevXpEWZL9e2MEjZiMz8lvIhGVMXQQv~lTnAqpHuKo07VvGieZQe2~HRoD5EyJH5uQWkqWuk2I0CGHznCx1pdBAxlVvn1swwINIaOahLJj-vn0dyge5Rm0Q~5mEOjxoaYDUg7W4f2oj8CdDDujO1eaVnhpYO4nKEoZ~hUDj6xUXxD4iecPqDWw4z0sLVy~h5E1WEADmIxJ3twHQl8Mb6u5ktxIQEUxwM2bg3HOg0-dFhfk4I39NyQzYMAyl3Ne8Y4n3XVlSjeivLov4sYiK1ndQdP4jr4OEdjhWhbFz-Aj5WeuZJ3hwE~XaFM5o0sI1n8bkTKBMONAw__",
        authorName: 'Merve Yılmaz',
        image: 'https://s3-alpha-sig.figma.com/img/7660/aec7/88f9669aa417f2c0476ca287f10790ef?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QfsPEKJvbbvxWAehGZP7FAllczsGCeahNxTDPLZOBiJBefYBOFwNEnhaYzmoeJf5~OP13-rw4KXaRF~Y503hkxn~HMIvs1zwesqCXkW0R3YN2DymJBRdBix3HIUzAL0WECvILy4FIMr-zwbs5TsoDRDvT2exHgLyBRgdeZxbn6yJzjuCS1apz93erW03VBpa~lRxlreU6AWRqwf7XfMOQvLuuNPOo9OGTi8K4GSU8JuRvXcvMDQ77znKBSGfNLq7WHyf9RqmOswyrvgv-qahOjZm2RMM9klazoNycyuaWc-nMv3ocvQa52rX-kKAB850NZ~uCoJsJ4fSjT7z6HCBcQ__',
        title: 'Yoga progress for early pregnancy',
        content: '17 likes • 2 comments',
      }
    ]
  };
}
};
</script>

<style>
.small-posts {
display: flex;
flex-direction: column;
gap: 10px;
}

.small-post {
background-color: white;
padding: 10px;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-image {
width: 100%;
height: auto;
}

.post-info {
text-align: center;
}

.author {
font-style: italic;
color: Black;
}
</style>
