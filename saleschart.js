import $ from 'bower_components/jquery/dist/jquery'
function test() {
    "use strict"
class salesChart extends HTMLElement{
    createdCallback(){
    var shadow = this.createShadowRoot();
    shadow.innerHTML =  `
        <style type='text/css'>
        .primary {color : red}
        </style>
        <div class='primary'> My Sales data</div>`;
    }    
}

document.registerElement('sales-chart', salesChart);

};

test();