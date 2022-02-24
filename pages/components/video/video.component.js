class acrkVideo  extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"});
  }
  static get observedAttributes() {
    return ['title', 'src'];
  }
  attributeChangedCallback(attr, oldval, newval) {
    if (oldval !== newval) {
      this[attr] = newval;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <iframe id="video" src="${this.src}" frameborder="0" allowfullscreen allow="autoplay"></iframe>
    <h3>${this.title}</h3>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
    iframe {
      width: 100%;
      height: calc(100% - 60px);
    }
    h3{
      color: #666;
    }
    </style>`;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define('acrk-video', acrkVideo);