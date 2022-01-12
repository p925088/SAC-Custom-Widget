//PercentBar SAC custom widget Version 1.0.0. Copyright 2020 Arijit Das.
(function() {
    let template = document.createElement("template");
    template.innerHTML = `<div id = "container"></div>
    <style type="text/css">	
	.rootTable{
		height: 50px;
		width: 250px;
		border-spacing: 0px;
	}
	.valueCell{
		width: 50px;
		padding: 0px;
		vertical-align: middle;
		text-align: center;
		line-height: 50px;
		font-weight: bold;
		font-family: sans-serif;
		font-size: 1.2vw;
	}
	.dotsTableContainerCell{
		padding: 0px;
	}
	.dotsTable{
		height: 50px;
		width: 200px;
		border-spacing: 2px;
	}
	.dots{
		background-color: lightgrey;
	}
	.dotsFilled{
		background-color: steelblue;
	}	
	</style>`;
    class PERCBAR extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({
                mode: "open"
            });
            shadowRoot.appendChild(template.content.cloneNode(true));
            this._props = this.percentBarDefaultSettings();
            this._init = true;
            this._firstUpdate = true;
            this._firstResize = true;
            this._selectionEvent = false;
        }
        onCustomWidgetBeforeUpdate(changedProperties) {}
        onCustomWidgetAfterUpdate(changedProperties) {
            var shadow = this.shadowRoot;
            /*
            if ("startColor" in changedProperties) {
                this._props.startColor = changedProperties["startColor"];
                this._selectionEvent = false;
            }
            if ("endColor" in changedProperties) {
                this._props.endColor = changedProperties["endColor"];
                this._selectionEvent = false;
            }
            if ("title" in changedProperties) {
                this._props.title = changedProperties["title"];
                this._selectionEvent = false;
            }
            if ("showTitle" in changedProperties) {
                this._props.showTitle = changedProperties["showTitle"];
                this._selectionEvent = false;
            }
            if ("showAvg" in changedProperties) {
                this._props.showAvg = changedProperties["showAvg"];
                this._selectionEvent = false;
            }
            if ("valDecimal" in changedProperties) {
                this._props.valDecimal = changedProperties["valDecimal"];
                this._selectionEvent = false;
            }
            if ("sizeDecimal" in changedProperties) {
                this._props.sizeDecimal = changedProperties["sizeDecimal"];
                this._selectionEvent = false;
            }
            if ("colorDecimal" in changedProperties) {
                this._props.colorDecimal = changedProperties["colorDecimal"];
                this._selectionEvent = false;
            }
            if ("xAxisLabel" in changedProperties) {
                this._props.xAxisLabel = changedProperties["xAxisLabel"];
                this._selectionEvent = false;
            }
            if ("sizeLabel" in changedProperties) {
                this._props.sizeLabel = changedProperties["sizeLabel"];
                this._selectionEvent = false;
            }
            if ("colorLabel" in changedProperties) {
                this._props.colorLabel = changedProperties["colorLabel"];
                this._selectionEvent = false;
            }
            if ("selectedLabel" in changedProperties) {
                if (changedProperties["selectedLabel"] == '') {
                    this._props.selectedLabel = undefined;
                } else {
                    this._props.selectedLabel = changedProperties["selectedLabel"];
                }
                this._selectionEvent = true;
            }
            if ("selectedXValue" in changedProperties) {
                this._props.selectedXValue = changedProperties["selectedXValue"];
                this._selectionEvent = true;
            }
            if ("selectedSizeValue" in changedProperties) {
                this._props.selectedSizeValue = changedProperties["selectedSizeValue"];
                this._selectionEvent = true;
            }
            if ("selectedColorValue" in changedProperties) {
                this._props.selectedColorValue = changedProperties["selectedColorValue"];
                this._selectionEvent = true;
            }
            */
            if ("data" in changedProperties) {
                this.$data = changedProperties["data"];
                this._selectionEvent = false;
            }
            let LoadLibsAfterUpdate = async function(host, data, props) {
                try {
                    await host.loadScript("https://d3js.org/d3.v4.min.js", shadow);
                } catch (e) {
                    console.log(JSON.stringify(e));
                } finally {
                    host.drawChart(data, props);
                }
            };
            if (!(this._init || this._selectionEvent)) {
                if (this._firstUpdate) {
                    LoadLibsAfterUpdate(this, this.$data, this._props);
                    this._firstUpdate = false;
                } else {
                    this.drawChart(this.$data, this._props);
                }
            }
        }
        onCustomWidgetResize(width, height) {
            var shadow = this.shadowRoot;
            this.$width = width + 'px';
            this.$height = height + 'px';
            let LoadLibsAfterResize = async function(host, data, props) {
                try {
                    await host.loadScript("https://d3js.org/d3.v4.min.js", shadow);
                } catch (e) {
                    console.log(JSON.stringify(e));
                } finally {
                    host.drawChart(data, props);
                }
            };
            if (this._firstResize) {
                LoadLibsAfterResize(this, this.$data, this._props);
                this._firstResize = false;
            } else {
                this.drawChart(this.$data, this._props);
            }
        }
        connectedCallback() {
            var shadow = this.shadowRoot;
            var custelem = shadow.host;
            this.$width = custelem.parentNode.parentNode.parentNode.style.width;
            this.$height = custelem.parentNode.parentNode.parentNode.style.height;
            let LoadLibs = async function(host, data, props) {
                try {
                    await host.loadScript("https://d3js.org/d3.v4.min.js", shadow);
                } catch (e) {
                    console.log(JSON.stringify(e));
                } finally {
                    host.drawChart(data, props);
                }
            };
            LoadLibs(this, this.$data, this._props);
            this._init = false;
        }
        disconnectedCallback() {}
        
        drawChart(value, config) {
            config.valDecimal = config.valDecimal + "";
            var r = this.shadowRoot;
            var _div = r.querySelector('div');
            _div.style.width = this.$width - 10;
            _div.style.height = this.$height;
            _div.innerHTML = '';
            var pbchart = this.drawPercentBar(value, config, this.shadowRoot, this);
        }
        loadScript(src, shadowRoot) {
            return new Promise(function(resolve, reject) {
                let script = document.createElement('script');
                script.src = src;
                script.onload = () => {
                    console.log("Load: " + src);
                    resolve(script);
                };
                script.onerror = () => reject(new Error(`Script load error for ${src}`));
                shadowRoot.appendChild(script);
            });
        }
        percentBarDefaultSettings() {
            return {
                leftMargin: 10, // Left margin for the chart.
                topMargin: 10, // Top margin for the chart.
                rightMargin: 10, // Right margin for the chart.
                bottomMargin: 10, // Bottom margin for the chart.
                height: 5, // Max Bar height
                data: 67
            };
        }
        drawPercentBar(data, config, root, eventDispatcher) {
            var vis = d3.select(root.querySelector('#container'));
            if (config == null) config = percentBarDefaultSettings();
            if(data == undefined){
            	data = 0;
            }
            var _data = Math.round(data);
        	if(_data < 0){
        		_data = 0;
        	} else if(_data > 100){
        		_data = 100;
        	}
        	
        	// Draw initial structure
        	var rootTable = vis.append("table").attr('class', 'rootTable');	
        	rootTable.append("tr").attr("id","row");
        	var valCell = d3.select(root.querySelector("#row")).append("td").attr("class","valueCell");
        	var dotsTable = d3.select(root.querySelector("#row")).append("td").attr('class','dotsTableContainerCell').append('table').attr("class","dotsTable");		
        	d3.select(root.querySelector(".valueCell")).append('div').append("span").text(_data + '%');
        	for(var i=0; i<5; i++){
        		var r = dotsTable.append('tr');
        		for(var j=0; j<20; j++){
        			r.append('td').attr('id','cell_'+((i+1)+5*j)).attr('class','dots');
        		}
        	}	

        	for(var x=1; x<=_data; x++){
        		d3.select(root.querySelector("#cell_"+x)).attr('class','dotsFilled');
        	}
            return this;
        }
    }
    customElements.define("com-gmail-cse-ari007-percentbar", PERCBAR);
})();