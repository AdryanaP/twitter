<template>
  <div class="flex gap-4 gap-4 p-4 border-gray-200 border-t">
    <div
      class="
        w-12
        md:w-14
        h-12
        md:h-14
        flex
        justify-center
        items-center
        flex-shrink-0
      "
    >
      <img :src="tweet.profileImage" alt="profile image" class="lg:h-14 lg:w-16 h-12 object-cover rounded-full" />
    </div>

    <div class="w-full">
      <div class="flex md:space-x-2 space-x-1 items-baseline">
        <p class="md:text-base text-sm font-semibold">{{ tweet.name }}</p>
        <p class="text-xs font-semibold text-gray-500">
          {{ tweet.user }}
        </p>
      </div>
      <p class="mb-2">
        {{ tweet.text }}
      </p>
      <img
        v-if="tweet.postImage"
        :src="tweet.postImage"
        alt="post image"
        class="w-44 h-32 lg:h-60 lg:w-96 rounded-lg object-cover mb-2"
      />
      <div class="flex justify-between">
        <button
          type="button"
          class="
            text-gray-500
            hover:text-gray-800
            active:text-gray-800
            transition
            duration-100
            text-xs
            hidden
            lg:block
          "
        >
          Expand
        </button>
        <div class="flex space-x-2 flex-wrap gap-6 lg:gap-0">
          <button
            type="button"
            class="
              flex
              gap-1
              items-center
              text-gray-500
              hover:text-gray-800
              active:text-gray-800
              transition
              duration-100
              text-xs
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="lg:h-3 lg:w-3 h-4 w-4 lsg:m-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
            <span class="flex hidden lg:block">
            Reply
            </span>
          </button>

          <button
            type="button"
            class="
              flex
              gap-1
              items-center
              text-gray-500
              hover:text-gray-800
              active:text-gray-800
              transition
              duration-100
              text-xs
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="lg:h-3 lg:w-3 h-4 w-4 lg:m-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span class="flex hidden lg:block">
            Retweet
            </span>
          </button>

          <button
            @click="update"
            class="
              flex
              gap-1
              items-center
              text-gray-500
              hover:text-gray-800
              active:text-gray-800
              transition
              duration-100
              text-xs
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="lg:h-3 lg:w-3 h-4 w-4  lg:m-0"
              :class="tweet.favorite ? 'text-yellow-500' : 'text-black'"
              :fill="tweet.favorite ? 'currentColor' : 'none'"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span class="flex hidden lg:block">
            Favorite
            </span>
          </button>

          <button
            type="button"
            class="
              flex
              gap-1
              items-center
              text-gray-500
              hover:text-gray-800
              active:text-gray-800
              transition
              duration-100
              text-xs
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="lg:h-3 lg:w-3 h-4 w-4 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
            <p class="hidden lg:block">
            More
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },

  methods: {
    update() {
      this.tweet.favorite = !this.tweet.favorite;
      fetch(`/api/tweets/${this.tweet.id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...this.tweet,
        }),
      })
    },
  },
};
</script>
