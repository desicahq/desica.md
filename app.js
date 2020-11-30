new Vue({
  router,
  el: "#editor",
  mounted: function () {
    parameters = this.$route.query;
    input = this.$route.query.name;
  },
  data: {
    input: "",
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.getvar, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
      store.commit("edit");
    }, 300),
  },
  getvar: function () {
    input: input1;
  },
});
