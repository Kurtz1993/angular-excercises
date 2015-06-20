app.controller('MainController', ['$scope', function($scope) {
  $scope.program = {
  series: "Sherlock",
  series_img: "img/sherlock.jpg",
  genre: "Crime drama",
  season: 3,
  episode: "The Empty Hearse",
  description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
  datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
};
  
  $scope.anotherProgram = {
  series: "How I Met Your Mother",
  series_img: "http://ibutajir.com/wp-content/uploads/2013/12/how-i-met-your-mother-poster-bca998.jpg",
  genre: "Comedy",
  season: 1,
  episode: "The Empty Hearse",
  description: "How I Met Your Mother (often abbreviated to HIMYM) is an American sitcom that originally ran on CBS from September 19, 2005, to March 31, 2014. The series follows the main character, Ted Mosby, and his group of friends in Manhattan. As a framing device, Ted, in the year 2030, recounts to his son and daughter the events that led him to meeting their mother.",
  datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
}
  
}]);