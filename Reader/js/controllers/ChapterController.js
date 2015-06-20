app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  books.success(function(data) {
    $scope.book = data[parseInt($routeParams.bookId)];
		$scope.chapter = $scope.book.chapters[parseInt($routeParams.chapterId)];

    // If there no more chapters left, go back to the bookshelf view
    if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
      $scope.nextChapterIndex = "#";
    }
  });

  $scope.currentBookIndex = parseInt($routeParams.bookId);
  $scope.currentChapterIndex = parseInt($routeParams.chapterId);
  $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
}]);