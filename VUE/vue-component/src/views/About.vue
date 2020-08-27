<template>
  <div class="about">
    <user :userName="name" @nameChange="updata"></user>
    <person :babyname="catname"></person>
  </div>
</template>
<script>
// @ is an alias to /src
import user from "@/components/user";
import person from "@/components/person";
export default {
  data() {
    return {
      name: "pp",
      catname: undefined,
    };
  },
  components: {
    user,
    person,
  },
  methods: {
    updata(catname) {
      this.catname = catname;
    },
  },
};
</script>
<style>
.about {
  color: pink;
}
</style>