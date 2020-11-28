<template>
  <div>
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./views/Home";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
  },
};
</script>

<style lang="less" scoped>
</style>
