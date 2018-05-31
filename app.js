var vm = new Vue({
  el: '#app',
  data: {
    results: [
      {title: "the very first post", abstract: "lorem ipsum some test dimpsum"},
      {title: "and then there was the second", abstract: "lorem ipsum some test dimsum"},
      {title: "third time's a charm", abstract: "lorem ipsum some test dimsum"},
      {title: "four the last time", abstract: "lorem ipsum some test dimsum"}
    ]
  },
  mounted: function() {
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=my-key")
    .then(response => {this.results = response.data.results}) 
  },
  methods: {

  }
})