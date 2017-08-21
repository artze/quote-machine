var quote = new Vue({
  el: '#quote',
  data: {
    themeClasses: ['theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'theme7'],
    selectedIndex: '',
    selectedTheme: '',
    quoteObj: {
      quote: {}
    }
  },
  mounted: function() {
    this.getQuote();
  },
  methods: {
    changeColor: function() {
      var randIndex;
      do {
        randIndex = Math.floor(Math.random() * this.themeClasses.length);
      } while(this.selectedIndex === randIndex);
      this.selectedIndex = randIndex;
      this.selectedTheme = this.themeClasses[this.selectedIndex];
      document.body.classList = this.selectedTheme;
    },
    getQuote: function() {
      this.changeColor();
      this.$http.get('https://favqs.com/api/qotd')
        .then(function(res) {
          this.quoteObj = res.data;
      })
    },
    tweet: function() {
      window.open('https://twitter.com/intent/tweet' + '?' + 'hashtags=quote&' + 'text="' + encodeURI(this.quoteObj.quote.body) + '"' + encodeURI(' ' + this.quoteObj.quote.author));
    }
  }
})