export default class MarkdownFile {
    static ListMarkdownFile = [];

    constructor(title, content) {
      this.title = title;
      this.content = content;
      MarkdownFile.ListMarkdownFile.push(this);
    }

    add(file){
        MarkdownFile.ListMarkdownFile.push(file);
    }

    static getAll(){
        return this.ListMarkdownFile;
    }

}