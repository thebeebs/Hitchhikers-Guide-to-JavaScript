var AppViewModel = function () {        
        var _this = this;
        this.chosenSector = ko.observable("martinb");
        this.monthsData = ko.observableArray();
        this.sum = ko.observable(0);    
        this.refreshData = function() {
            var _this2 = this;
            var sector = this.chosenSector();
            var url = "backend/sales-" + sector + ".json";            
            getData(url,_this2);      
        }   
        ko.computed(function () {
            return _this.refreshData();
        }); 
};

ko.applyBindings(new AppViewModel())  

class AppViewModelNew{
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
 
$(() => ko.applyBindings(new AppViewModelNew));