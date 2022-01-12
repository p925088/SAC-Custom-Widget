(function() {
    let template = document.createElement("template");
    template.innerHTML = `<form id="form"><table style="width: 100%;">
<tr>
	<td>
		<div>Data:</div>
		<div>
			<textarea id="bps_data"style="min-height: 50px;width: 100%;">67</textarea>
		</div>
		<div><button id="bps_data_submit">Set Data</button></div>
	</td>
</tr>
</table><input type="submit"style="display:none;">
</form>
<style>:host{display:block;padding:1em 1em 1em 1em;}</style>`;
    class PERCBAR_Bps extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({
                mode: "open"
            });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
            this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
            this._shadowRoot.getElementById("bps_data_submit").addEventListener("click", this._formSubmit.bind(this));
        }
        _formSubmit(e) {
            e.preventDefault();
            this._shadowRoot.getElementById("form").dispatchEvent(new Event('submit'));
        }
        _submit(e) {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
                detail: {
                    properties: {                        
                        data: this.data
                    }
                }
            }));
        }
        
        set data(newVal) {
            this._shadowRoot.getElementById("bps_data").value = newVal;
        }
        get data() {
            return this._shadowRoot.getElementById("bps_data").value;
        }
    }
    customElements.define("com-gmail-cse-ari007-percentbar-bps", PERCBAR_Bps);
})();