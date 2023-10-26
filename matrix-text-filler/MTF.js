// Matrix text manipulation
export default class MTM {

  blocker = false;
  deltaRemove = 250;
  deltaFill = 250;
  text = '';
  handler1 = null;

  constructor(text, o) {
    if (typeof o !== 'undefined') {
      this.deltaRemove = o.deltaRemove;
      this.deltaFill = o.deltaFill;
    }
    this.fillText(text)
  }

  fillText(text) {
    if (this.blocker == true) return;

    this.blocker = true;
    var text_memo = text;
    var localc = 0;
    this.removeText().then(() => {
      return new Promise((resolve, reject) => {
        this.handler1 = setInterval(() => {
          if(this.text.length >= text_memo.length) {
            dispatchEvent(new CustomEvent('text-filled', {detail: {}}))
            clearInterval(this.handler1)
            this.handler1 = null;
            this.blocker = false;
            resolve()
            return;
          }
          this.text += text_memo[localc];
          localc++;
          text = text.slice(0, text.length - 1);
        }, this.deltaFill)
      })
    }).then((e) => console.log('text filled', e))
  }

  removeText() {
    return new Promise((resolve, reject) => {
      this.handler1 = setInterval(() => {
        if(this.text.length == 0) {
          dispatchEvent(new CustomEvent('text-removed', {detail: {}}))
          clearInterval(this.handler1)
          this.handler1 = null;
          resolve()
          return;
        }
        var t = this.text.slice(0, this.text.length - 1);
        this.text = t;
      }, this.deltaRemove)
    })
  }

}