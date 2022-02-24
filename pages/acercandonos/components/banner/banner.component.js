class acrkBanner  extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"});
  }
  static get observedAttributes() {
    return ['src'];
  }
  attributeChangedCallback(attr, oldval, newval) {
    if (oldval !== newval) {
      this[attr] = newval;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <figure></figure>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      :host {
        display: block;
      }
      figure {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background: url(${this.src});
        background-repeat: no-repeat;
        background-size: cover;
      }
    </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define('acrk-banner', acrkBanner);