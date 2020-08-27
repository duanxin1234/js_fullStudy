<template>
  <div class="home">
    <p>{{title}}</p>
    <user :userName="name" @titleChange="updata"></user>
  </div>
</template>

<script>
// @ is an alias to /src
import user from "@/components/user";

export default {
  name: "Home",
  data() {
    return {
      name: "jj",
      title: "",
    };
  },
  components: {
    user,
  },
  methods: {
    updata(title) {
      // console.log("okkk");
      this.title = title;
    },
  },
};
</script>
