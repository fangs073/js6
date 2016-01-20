var app = angular.module("app", []);


angular.module('app')
	.controller('profileController', ['$scope', function($scope){

		$scope.profilePic = {
			url: './profile-picture.png',
			show: true
		}

		$scope.paragraphs = [
			{	name : 'About Me',
				content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
				show : true
			},
			{
				name : "Mission Statement",
				content : "They must be delivered safely or other star systems will suffer the same fate as Alderaan. Your destiny lies along a different path than mine. The Force will be with you...always! Boy you said it, Chewie. Where did you dig up that old fossil? Ben is a great man. Yeah, great at getting us into trouble. I didn't hear you give any ideas... Well, anything would be better than just hanging around waiting for him to pick us up... Who do you think...",
				show: true
			}
		]

		$scope.lists = [
			{
				name: 'Favorite Villains',
				listContent: [
					{value: 'Pirates', show: true},
					{value: 'Robots', show: true},
					{value: 'Zombies', show: true}
				]
			},
			{
				name: 'Favorite Movies',
				listContent: [
					{value: 'The Bird with Crystal Plumage', show: true},
					{value: 'School of the Holy Beast', show: true},
					{value: 'Cemetary Man', show: true}
				]
			},
			{
				name: 'Languages Known',
				listContent: [
					{value: 'Sumerian', show: true},
					{value: 'Linear B', show: true},
					{value: 'Cockney', show: true}
				]
			},
		]


}])