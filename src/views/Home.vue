<template>
  <div class="home">
    <Nav />
    <main class="lg:flex lg:mt-6 lg:gap-4 lg:justify-center grid">
      <div class="hidden lg:block">
        <Perfil />
        <Trends />
      </div>
      <Feed/>
      <div class="hidden lg:block">
        <WhoToFollow/>
        <About />
      </div>
      <AddTweet />
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue"
import Feed from "@/components/Feed.vue"
import Trends from "@/components/Trends.vue"
import About from "@/components/About.vue"
import Perfil from "@/components/Perfil.vue"
import WhoToFollow from "@/components/WhoToFollow.vue"
import AddTweet from "@/components/AddTweet.vue"

export default {
  name: 'Home',
  components: {
    Nav,
    Feed,
    Trends,
    About,
    Perfil,
    WhoToFollow,
    AddTweet
  }
}
</script>
