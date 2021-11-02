<template>
  <div
    id="trends"
    class="flex flex-col bg-white gap-1 border-gray-300 border-2 rounded-2xl p-4 w-64 mb-4"
  >
    <h3 class="pb-3 text-gray-500 text-xl font-semibold">Trends</h3>
    <Link :title="title" v-for="(title, i) in titles" :key="i" />
  </div>
</template>

<script>
import Link from "@/components/Link";

export default {
  name: "Trends",
  data() {
    return {
      titles: [
        "#foraBolsonaro",
        "#contrateEssaDev",
        "#ILoveRockbuzz",
        "#cadeDuna2",
        "#takingTheHobbitsToIsengard",
        "#whatDidYouSay",
        "#tellMeWhereIsGandalf",
        "#theBalrogOfMorgoth",
      ],
    };
  },
  components: {
    Link,
  },
};
</script>
