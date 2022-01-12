! function() {
    document.createElement("template").innerHTML = "<div></div>";
    customElements.define("com-gmail-cse-ari007-percentbar-sps", class extends HTMLElement {
        constructor() {
            super(), this._shadowRoot = this.attachShadow({
                mode: "open"
            })
        }
    })
}();