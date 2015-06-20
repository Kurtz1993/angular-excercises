app.directive('plusOne', function(){
	return{
    restrict: 'E',
    scope:{},
    templateUrl: 'js/directives/plusOne.html',
    link: function(scope, elm, attr){
     scope.like = function(){
       elm.toggleClass('btn-like');
     };
    }
  };
});