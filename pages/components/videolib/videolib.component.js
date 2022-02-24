class acrkVideolib  extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"});
  }
  static get observedAttributes() {
    return ['title', 'description', 'img', 'dateupload'];
  }
  attributeChangedCallback(attr, oldval, newval) {
    if (oldval !== newval) {
      this[attr] = newval;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    const today = new Date();
    const dateFormated = new Date(this.dateupload + 'T12:00:00');
    let Difference_In_Time = today.getTime() - dateFormated.getTime();
    Difference_In_Time = Math.trunc(Difference_In_Time / (1000 * 3600 * 24));
    this.dateupload = dateFormated.getDate() + ' / ' + (dateFormated.getMonth() + 1) + ' / ' + dateFormated.getFullYear();
    let insertChip = null;
    if (Difference_In_Time < 15) {
      insertChip = `<acrk-chip label="Nuevo"></acrk-chip>`;
    } else {
      insertChip ='';
    }
    template.innerHTML = `
    <div class="lib">
      ${insertChip}
      <acrk-banner src="${this.img}"></acrk-banner>
      <h3>${this.title}</h3>
      <p>${this.description}</p>
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
        margin: 16px;
      }
      .lib {
        position: relative;
        background: #2DCCCD;
        border-radius: 4px;
        height: 440px;
        overflow: hidden;
        margin-bottom: 24px;
        margin-left: 16px;
        cursor: pointer;
      }
      acrk-chip {
        position: absolute;
        top: 8px;
        right: 8px;
      }
      p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #121212;
        margin: 16px;
      }
      acrk-banner {
        height: 220px;
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
customElements.define('acrk-videolib', acrkVideolib);