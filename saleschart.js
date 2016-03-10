"use strict"
class salesChart extends HTMLElement{
    createdCallback(){
        var shadow = this.createShadowRoot();
        shadow.innerHTML =  `
    <style>p {color: red;}</style>
    <p> My Sales data goes here</p>    
    `;
    }    
}
document.registerElement('sales-chart', salesChart);

class AppViewModel{
    constructor(){       
          
        this.chosenSector = ko.observable("martinb");
        this.monthsData = ko.observableArray();
        ko.computed(() => this.refreshData())
    }
    refreshData(){
        var sector = this.chosenSector();
        var url = `backend/sales-${sector}.json`;
        fetch(url)
        .then(response => response.json())
        .then(json => this.monthsData(json.months))        
        }
}
 
$(() => ko.applyBindings(new AppViewModel));
