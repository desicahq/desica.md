      var router = new VueRouter({
        mode: "history",
        routes: []
      });
      const store = new Vuex.Store({
  state: {
    input1: ""
  },
  mutations: {
  	edit: state => state.input1
  }
})
      new Vue({
        router,
        el: "#editor",
        mounted: function () {
          parameters = this.$route.query;
          console.log(parameters);
          input = this.$route.query.name;
          console.log(input);
        },
                data: {
          input: ""
        },
        computed: {
          compiledMarkdown: function () {
            return marked(this.getvar, { sanitize: true });
          },
          input1: {
    get () {
      return this.$store.state.obj.input1
    },
    set (value) {
      this.$store.commit('edit', value)
    }
  }
        },
        methods: {
          update: _.debounce(function (e) {
            this.input = e.target.value;
            store.commit('edit')
          }, 300)
        },
        getvar: function () {
          input: input1
      }
      });
