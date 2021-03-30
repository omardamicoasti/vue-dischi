/*Descrizione: Attraverso una chiamata ajax all’API di boolean 
https://flynn.boolean.careers/exercises/api/array/music avremo 
a disposizione una decina di dischi musicali. Utilizzando vue, 
stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. 
In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita.*/


var app = new Vue({
  el: "#app",

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((result) => {
        this.library = result.data.response;
        for (let i = 0; i < this.library.length; i++) {
          if (!this.genreLibrary.includes(this.library[i].genre)) {
            this.genreLibrary.push(this.library[i].genre);
          }
        }
        console.log(this.genreLibrary);
      });
  },

  data: {
    library: "",
    genreLibrary: ["All"],
    selectedGenre: "",
  },

  methods: {
    filterGenre(singleAlbum) {
      if (this.selectedGenre == "") {
          return true
      } 
      return singleAlbum.genre == this.selectedGenre;
    },
    onChange(event) {
      this.selectedGenre = event.target.value;
    },
  },
});
Vue.config.devtools = true;



