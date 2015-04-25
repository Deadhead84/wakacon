var app = angular.module("wakaconApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/home/home.html',
		// controller: 'views/home/js/homeController'

	})
})