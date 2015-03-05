(function(QUnit) {

    /* Default width and height of your widget */
    QUnit.setWidth('850');
    QUnit.setHeight('600');

    /* Override widget's initialization */
    QUnit.prototype.init = function() {
            var displayDiv, domMockDiv;
            displayDiv = document.getElementById('qunit');
            if (!displayDiv) {
                displayDiv = document.createElement('DIV');
                displayDiv.id = 'qunit';
            }
            domMockDiv = document.getElementById('qunit');
            if (!domMockDiv) {
                domMockDiv = document.createElement('DIV');
                domMockDiv.id = 'qunit_fixture';
            }
            this.node.appendChild(displayDiv);
            this.node.appendChild(domMockDiv);
    }

});

// For more information, refer to http://doc.wakanda.org/Wakanda/help/Title/en/page3870.html