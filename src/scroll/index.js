class ScrollManager {
  constructor() {
    this.scrollPosition = 1
    this.display = document.getElementById('chat-display')
    this.scrollToBottom()

    this.display.addEventListener('scroll', () => {
      // get the scroll percentage of the display
      this.scrollPosition = this.display.scrollTop / (this.display.scrollHeight - this.display.clientHeight)
    })

    this.display.addEventListener('DOMNodeInserted', () => {
      if (this.scrollPosition >= 1) {
        this.scrollToBottom()
      }
    })
  }

  scrollToBottom() {
    this.display.scrollTop = this.display.scrollHeight
  }
}

export default ScrollManager