var app = angular.module("myApp", ['ngAnimate']);
app.controller("appController", function($scope,$timeout) {
     $scope.items = [
        [
        "What transport?",
        "Train",
        "Bus",
        "Car"
        ],
         [
        "How many days?",
        "1",
        "2",
        "3" 
         ],
         [          
        "What is your budget?",
        "500-1000",
        "1000-2000",    
        "2000-3000"
         ]
    ];
  
    $scope.allroutes = [    
        {        
        "title":"popular routes",             
       "routes" :[
        { img:"images/map-one.jpg",title: " Georgia, the Middle East", place: "dzenkusudashi" ,likes:"961",coments:"24"},
        { img:"images/map-two.jpg",title: "Italy, Europe", place: "Piterpen" ,likes:"961",coments:"24"},
        { img:"images/map-three.jpg",title: "India, South Asia", place: "induzik" ,likes:"961",coments:"24"},
        { img:"images/map-four.jpg",title: "Yemen, Middle East", place: "andrey143" ,likes:"961",coments:"24"},
        { img:"images/map-five.jpg",title: "South Africa", place: "DINOZAVRUS" ,likes:"961",coments:"24"},
        { img:"images/map-six.jpg",title: "Ireland, Europe", place: "moskalik" ,likes:"961",coments:"24"},
        { img:"images/map-seven.jpg",title: "Canada, North America", place: "piklushin" ,likes:"961",coments:"24"},   
        { img:"images/map-eight.jpg",title: "Chile, South America", place: "katuha" ,likes:"961",coments:"24"},     
    ]},
            {                             
         "title":"new routes",
        "routes" :[
       { img:"images/map-one.jpg",title: " Georgia, the Middle East", place: "dzenkusudashi" ,likes:"961",coments:"24"},
        { img:"images/map-two.jpg",title: "Italy, Europe", place: "Piterpen" ,likes:"961",coments:"24"},
        { img:"images/map-three.jpg",title: "India, South Asia", place: "induzik" ,likes:"961",coments:"24"},
        { img:"images/map-four.jpg",title: "Yemen, Middle East", place: "andrey143" ,likes:"961",coments:"24"},
        { img:"images/map-five.jpg",title: "South Africa", place: "DINOZAVRUS" ,likes:"961",coments:"24"},
        { img:"images/map-six.jpg",title: "Ireland, Europe", place: "moskalik" ,likes:"961",coments:"24"},
        { img:"images/map-seven.jpg",title: "Canada, North America", place: "piklushin" ,likes:"961",coments:"24"},   
        { img:"images/map-eight.jpg",title: "Chile, South America", place: "katuha" ,likes:"961",coments:"24"}  
    ]      
            }
    ]
    $scope.myclass="ng-hide";
    $scope.showLoader = function (){
        $scope.myclass="ng-show";
        $timeout(function () {
        $scope.myclass = "ng-hide";
    }, 2000);
    }
});
   
                    
   


    







