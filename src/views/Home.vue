<template>
  <div class="home">
    <Head></Head>
    <main style="width:100vw;height:70vh;">
      <Banner></Banner>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default {
  name: 'Home',
  components: {Head,Footer,Banner}
}
</script>