function test() {
    "use strict"
class salesChart extends HTMLElement{
    createdCallback(){
    var shadow = this.createShadowRoot();
    shadow.innerHTML =  `
        <style type='text/css'>
        .primary {color : red}
        </style>
        <div class='primary'> OH MY Giddy Aunt</div>`;
    }    
}

document.registerElement('sales-chart', salesChart);

};

test();