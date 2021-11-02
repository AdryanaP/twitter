<template>
  <div id="feed" class="bg-white border-gray-300 border-2 rounded-2xl min-w-28">
    <h2 class="p-3 text-gray-500 text-xl font-semibold">Tweets</h2>
    <Tweet 
    name="Adry"
    user="@dryportuga"
    text="odiooo"
    profileImage="
    https://www.joanadarcam.com.br/wp-content/uploads/2020/02/images-92.jpeg"
    />
    <Tweet 
    name="Adry"
    user="@dryportuga"
    text="odiooo"
    profileImage="https://www.joanadarcam.com.br/wp-content/uploads/2020/02/images-92.jpeg"
    />
  </div>
</template>

<script>
import Tweet from "@/components/Tweet.vue";

export default {
  name: "Feed",
  components: {
    Tweet,
  },
};
</script>
