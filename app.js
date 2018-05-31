const baseUrl = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=";
const myKey = "";

var vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let url = baseUrl + myKey;
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch( error => { console.log(error); });
      }
  },
  computed: {
    processedPosts() {
      let posts = this.results;

      // Add image_url attribute
      posts.map(post => {
        let imgObj = post.multimedia.find(media => media.format === "superJumbo");
        post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
      });

      // Put Array into Chunks
      let i, j, chunkedArray = [], chunk = 4;
      for (i=0, j=0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i,i+chunk);
      }
      return chunkedArray;
    }
  }
})