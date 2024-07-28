<template>
<div class="friend-suggestion">
  <h2>Members You May Know</h2>
  <div class="friends-wrapper">
    <FriendCard
      v-for="friend in friends"
      :key="friend.id"
      :image="friend.image"
      :name="friend.name"
      :title="friend.title"
      :location="friend.location"
    />
  </div>
</div>
</template>

<script>
import FriendCard from './FriendCard.vue';

export default {
name: 'FriendSuggestion',
components: {
  FriendCard
},
data() {
  return {
    friends: [
      {
        id: 1,
        image: 'https://s3-alpha-sig.figma.com/img/3642/5586/04d7c5cbe0e09b62bf97a1ef37f8487f?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=and3gbRVagmRAWLtw9cgKSEUhvgfqs-aIrTQ-S8cWOvgMjueGjyKv1V74prWSey4S3rSYj1aTlPJu4z50UDBrY0eXjztvrZyq8PM8F7-plIOwVTLjI6vfL4qwomlmu~dSlXCUwlTgl4fJPFVnuz6IRl3J6FzPo7GiH-EnFB4ElMHCLKW2htF5R1-~KVbh~4lL7IS2Gb4V4Z3WJVXxm5Xx9Toa0h5Cl6L8iS3OJCOizrIttj-oQ1K50a~hiL6oXsBkScxfJGTvsM9~-lBiNetBK~A0CIR5ygxZon5Gdv5xylLH-yNPY1TzAueVDMuV3LHrhSp-PiDcNbRFlRRI4j2PQ__',
        name: 'Ahmet Yılmaz',
        title: 'Medical Doctor',
        location: 'Izmir'
      },
      {
        id: 2,
        image: 'https://s3-alpha-sig.figma.com/img/9a2e/d6c7/63eb17a29362fa788cdfd1fd037bb0c1?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y5NaRkD6dFXe~hpIfbzWQUNy3V2L85WaRtnAicVfLXO3S3CY99tmcjNZdyOxmIXQRp6TD~~PZHYf~MAMpvOY1fYL10c1CMT5xnOkZQuAHA9ezraeEJeWYxxYrjkbmFaMhrCbGllBCMBKaV0z0lE9MEAp5BteT21kJHjkcw32dNbRTGsUeXJsGas5XgfWWBbiE1O-uVlHz70RKU2~w7Ee1cdWwzPqW8~dhEzKggd56ZCdctj93ocaxU1vfvFuK1Pp2l3KPcCuS7Z84Igp6gb7yBZI~OoOWiw2q8HUnOyWPVLiRvLvX7MyuFFspLia0q~RVE6MIactxjt37Gt7U-X0Cw__',
        name: 'Melike Kadıoğlu',
        title: 'Engineer',
        location: 'Istanbul'
      },
      {
        id: 3,
        image: 'https://s3-alpha-sig.figma.com/img/eec2/c470/d2a9c28eff73bac6c32da4699f2c53ee?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gujnvk1R1hxr-gYxHAOiJ0pdfUX1nm2bDRH3YgTFIUuUSc61DyRK6EM71Es~LikDkosc1ro5jnOZPQjTFhEms29DtPXk5hR8Iwl~u3nIFWdtE4GYPtMJVFcTif5D6-IiBBBGh1Ctjvfi-i36tykBQcyO1irMe-ahXtXrCbqgFpglfGD7YV6kB3gHuWr5trXLPJmVvRKWKgQujItnlmtSjPHLUiK3z7mPoBk81MJNHrCLDF7Y2tux7IUpYkqE-Omn7w6zBa4tLei32OieGWXpCHCsuYfnfPwnaofDBoWy1RTxFWcIBCqvEpdCXiN4SGomTVJSBcm08UvszyZiw2KQ3A__',
        name: 'Ayşe Yıldırım',
        title: 'Teacher',
        location: 'Isparta'
      }
    ]
  };
}
};
</script>

<style>
.friend-suggestion {
margin: 20px 0;
}

.friends-wrapper {
display: flex;
gap: 10px;
overflow-x: auto;
padding: 10px;
}
</style>
