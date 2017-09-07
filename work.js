angular.module("myapp", []).controller('myctrl', function($scope){
    $scope.projects = [{
        "Title": "Distance Between Cities*",
        "website":"http://ram.thecompletewebhosting.com/Distancebetweencities/",
        "git":"https://github.com/UditRam/DistanceBetweenCities",
        "Description": "You can find the driving distance and duration between any 2 cities in the entire world. This application uses Bootstrap, jQuery and the Google Maps APIs."
    },
                       {
                           "Title": "Login System",
                           "website":"",
                           "git":"https://github.com/UditRam/Stopwatch",
                           "Description": "This is a web application where the users can register for their accounts and use them to login to the system. It also provides access control. The server-side is handled using NodeJS. It also includes passportJS for login authentication and bcryptJS for encrypting the passwords when accounts are created. Unlike regular applications the data is stored in the form of documents which are stored in MongoDB, a NoSQL Database, and uses mongoose as its ORM to establish a bridge between the database and the front-end."
                       },
                       {
                           "Title": "Video Rentals",
                           "website":"",
                           "git":"https://github.com/UditRam/Stopwatch",
                           "Description": "This is a video rental web application developed using Entity Framework in C#/.NET MVC with Microsoft Visual Studio 2017. Used Code-First migrations to automatically re-create database each time changes are made to the data model. Implemented regular as well as custom client-side form validations using ComponentModel.DataAnnotations library."
                       },
                       {
                           "Title": "Auto Dealer Website*",
                           "website":"http://run.plnkr.co/plunks/l11LoGvmj1n9NfW54xd0/#!/main",
                           "git":"https://github.com/UditRam/Auto-Dealer-Website",
                           "Description": "This is a prototype website that uses the concepts of AngularJs like 'Angular Routing' to navigate to different pages and 'Angular Http' to retrieve data from .JSON files to reduce the delay."
                       },
                       {
                           "Title": "Stopwatch*",
                           "website":"http://ram.thecompletewebhosting.com/Stopwatch/",
                           "git":"https://github.com/UditRam/Stopwatch",
                           "Description": "The Stopwatch application is built using HTML5, CSS3 and mainly using the jQuery framework."
                       },
                      {
                           "Title": "Speed Reader*",
                           "website":"http://ram.thecompletewebhosting.com/SpeedReader/",
                          "git":"https://github.com/UditRam/Speed-Reader",
                           "Description": "Speed Reader is a mobile application developed using jQuery mobile technology. This application reads the entered text at customized speed. Please do shrink the window size(to aspect ratio of mobile phone) to get the best view possible."
                       },
                        {
                           "Title": "Simple games website",
                           "website":"",
                            "git":"",
                           "Description": "It is a simple website with simple games. This is the irst website I have developed using HTML, CSS, javascript and jQuery(later. Every time i learn a new technology I try to incorporate it in this application."
                       }]
});