export default class MarkdownFile {
    static ListMarkdownFile = [];

    constructor(title, content) {
      this.title = title;
      this.content = content;
      MarkdownFile.instances.push(this);
    }
}
  