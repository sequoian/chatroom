class ScrollManager {
  constructor() {
    this.scrollPosition = 1
    this.display = document.getElementById('chat-display')
    this.msgAlert = document.getElementById('msg-alert')
    this.scrollToBottom()

    this.display.addEventListener('scroll', () => {
      const scrollPercentage = this.display.scrollTop / (this.display.scrollHeight - this.display.clientHeight)
      this.scrollPosition = scrollPercentage
      if (scrollPercentage >= 1) {
        this.msgAlert.style.visibility = 'hidden'
      }
    })

    this.display.addEventListener('DOMNodeInserted', () => {
      if (this.scrollPosition >= 1) {
        this.scrollToBottom()
      }
      else {
        this.msgAlert.style.visibility = 'visible'
      }
    })

    this.msgAlert.addEventListener('click', () => {
      this.scrollToBottom()
    })
  }

  scrollToBottom() {
    this.display.scrollTop = this.display.scrollHeight
    this.msgAlert.style.visibility = 'hidden'
  }
}

export default ScrollManager