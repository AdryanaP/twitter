<template>
  <div id="feed" class="w-auto bg-white border-gray-200 border lg:rounded-2xl lg:w-33 lg:max-w-33">
    <h2 class="p-3 text-lg font-bold hidden lg:block">Tweets</h2>
    <Tweet 
    v-for="tweet in tweets" :key="tweet.id"
    :tweet="tweet"
    /> 
  </div>
</template>

<script>
import Tweet from "@/components/Tweet.vue";
import { mapMutations } from "vuex"

export default {
  name: "Feed",

  components: {
    Tweet,
  },

  data() {
    return {
      name: "",
      user: "",
      text: "",
      profileImage: "",
      postImage: "",
      favorite: false,
    };
  },

  computed: {
    tweets() {
      return this.$store.state.tweets;
    }
  },

  methods: {
    ...mapMutations(["setTweet"]),
  },

  created() {
    fetch("/api/tweets")
      .then((res) => res.json())
      .then((res) => {
        this.setTweet(res.tweets);
      });
  },
};
</script>
