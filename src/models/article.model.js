const fs = require('fs');

class ArticleModel {
    static getArticles() {
      let articles = [];
      let a = 1;
      let file = `./contents/articles/article-${a}.txt`;
      while (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let lines = content.split('\n');
        let obj = {
            id: a,
            title: lines[0].trim(),
            intro: lines[1].trim()
        };
        articles.push(obj);

        a++;
        file = `./contents/articles/article-${a}.txt`;
      }
      return articles;
    }
}

module.exports = ArticleModel;