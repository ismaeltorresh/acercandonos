class arckChip  extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"});
  }
  static get observedAttributes() {
    return ['label'];
  }
  attributeChangedCallback(attr, oldval, newval) {
    if (oldval !== newval) {
      this[attr] = newval;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="chip">${this.label}</div>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      .chip {
        background: #F8CD51;
        border-radius: 9px;
        height: 18px;
        padding: 0 9px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        width: fit-content;
      }
    <style>`;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define('acrk-chip', arckChip);