<template>
  <div class="home">
    <Nav />
    <main class="flex mt-1 gap-4 justify-center">
      <div>
        <Trends />
        <Trends />
      </div>
      <Feed />
      <div>
        <Trends />
        <About />
      </div>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue"
import Feed from "@/components/Feed.vue"
import Trends from "@/components/Trends.vue"
import About from "@/components/About.vue"

export default {
  name: 'Home',
  components: {
    Nav,
    Feed,
    Trends,
    About
  }
}
</script>
