WAF.define('QUnit', ['waf-core/widget'], function(widget) {
	
    var QUnit = widget.create('QUnit', {
        init: function() {
            var displayDiv, domMockDiv;
            displayDiv = document.createElement('DIV');
            domMockDiv = document.createElement('DIV');
            displayDiv.id = 'qunit';
            domMockDiv.id = 'qunit_fixture';
            this.node.appendChild(displayDiv);
            this.node.appendChild(domMockDiv);
            
            /*
            QUnit.config.urlConfig.push({
                id: "dataprovider",
                label: "Wakanda Dataprovider API",
                tooltip: "Run Wakanda Dataprovider API Promisification Unit tests"
            });
            */
        }
    });

    return QUnit;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda/help/Title/en/page3871.html */