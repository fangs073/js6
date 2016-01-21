var app = angular.module("app", []);


angular.module('app')
	.controller('profileController', ['$scope', '$timeout',function($scope, $timeout){

		$scope.userName = "John Wayne"

		$scope.form = {
			show: false,
			content: ["Show Form", "Hide Form"],
		}

		$scope.profilePic = {
			url: './profile-picture.png',
			show: true
		}

		$scope.formValues = {
			userName : $scope.userName,
		}

		$scope.blankFormValues = function() {
			$scope.formValues = {
				userName : '',
				profilePic : {},
				paragraphs : {},
				lists : []
			}
		}

		$scope.setFormValues = function() {
			$scope.formValues = {
				userName : $scope.userName,
				profilePic : Object.assign({}, $scope.profilePic),
				paragraphs : Object.assign({}, $scope.paragraphs),
				lists : angular.copy($scope.lists),
			}
		}

		$scope.saveFormValues = function() {
			$scope.userName = $scope.formValues.userName;
			$scope.profilePic = $scope.formValues.profilePic;
			$scope.paragraphs = Object.assign({}, $scope.formValues.paragraphs);
			$scope.lists = angular.copy($scope.formValues.lists);
		}

		$scope.paragraphs = {
			name : 'About Me',
			content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
				show : true
		}

		$scope.lists = [
			{
				name: 'Favorite Books',
				listContent: [
					{value: 'Pirates', show: true},
					{value: 'Robots', show: true},
					{value: 'Zombies', show: true}
				]
			},
			{
				name: 'Favorite JS Libraries',
				listContent: [
					{value: 'The Bird with Crystal Plumage', show: true},
					{value: 'School of the Holy Beast', show: true},
					{value: 'Cemetary Man', show: true}
				]
			},
		]

		// var saveData;

		// $scope.keyPressHandler = function() {
		// 	$timeout.cancel(saveData)
		// 	saveData = function() {
		// 		console.log('!!!!!');	
		// },
		// 1000);
			
		// }

		

}])