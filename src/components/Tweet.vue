<template>
  <div class="flex gap-4 md:gap-4 p-3 border-gray-300 border-t-2">
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
      <img :src="profileImage" alt="profile image" class="w-16 h-16" />
    </div>

    <div class="w-full">
      <div class="flex space-x-2 items-center mb-2">
        <p class="text-lg md:text-xl font-semibold">{{ name }}</p>
        <p class="text-lg md:text-xs font-semibold text-gray-500">{{ user }}</p>
      </div>
      <p class="mb-2">
        {{ text }}
      </p>
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
          "
        >
          Expand
        </button>
        <div class="flex space-x-2 flex-wrap">
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
              class="h-3 w-3"
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
            Reply
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
              class="h-3 w-3"
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
            Retweet
          </button>

          <button
            @click="favorited = !favorited"
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
              v-if="!favorited"
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
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
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            Favorite
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
              class="h-3 w-3"
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
            More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorited: false,
    };
  },
  props: {
    profileImage: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    postImage: {
      type: String,
      required: false,
    },
  },
};
</script>
