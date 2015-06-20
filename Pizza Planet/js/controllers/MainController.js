app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
	
  $scope.mains = [
    {
      name: 'Lasagne',
      description: 'Pasta with meat covered with tomato sauce and mozzarella.',
      price: 3.5
    },
    {
      name: 'Fusilli',
      description: 'Just a little bit of pasta with more pasta and cheese.',
      price: 1.5
    },
    {
      name: 'Lettuce Salad',
      description: 'Lettuce everywhere!',
      price: 3.9
    }
  ];
  
  $scope.extras = [
    {
      name: 'Rice',
      description: 'Lice like a chinese guy.',
      price: 0.5
    },
    {
      name: 'Sushi',
      description: 'Please tell me what is sushi doing in our menu.',
      price: 4.1
    },
    {
      name: 'Pozole',
      description: 'Seriously, what is wrong with this menu!',
      price: 2.0
    }
  ];
  
}]);