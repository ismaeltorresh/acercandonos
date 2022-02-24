class acrkChanel  extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"});
  }
  static get observedAttributes() {
    return ['title', 'img', 'dateupload'];
  }
  attributeChangedCallback(attr, oldval, newval) {
    if (oldval !== newval) {
      this[attr] = newval;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="channel">
      <acrk-banner src="${this.img}"></acrk-banner>
      <div>
        <h3>${this.title}</h3>
      </div>
    </div>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
        margin: 34px 8px 34px 16px;
      }
      .channel {
        position: relative;
        background: #2DCCCD;
        border-radius: 4px;
        display: flex;
        height: 144px;
        overflow: hidden;
        margin: 24px 0;
        cursor: pointer;
      }
      acrk-banner {
        width: 144px;
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
customElements.define('acrk-chanel', acrkChanel);