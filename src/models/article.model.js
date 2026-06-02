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
    static getArticleById(id) {
        let file = `./contents/articles/article-${id}.txt`;
        if (fs.existsSync(file)) {
            let content = fs.readFileSync(file, 'utf8');
            let lines = content.split('\n');
            let obj = {
                id: id,
                title: lines[0].trim(),
                intro: lines[1].trim(),
                content: []
            };
            for (let i = 2; i < lines.length; i++) {
                let line = lines[i].trim();
                if (line) {
                    obj.content.push(line);
                }
            }
            return obj;
        }
        return null;
    }    
}

module.exports = ArticleModel;