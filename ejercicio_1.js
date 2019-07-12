var modulo = angular.module("ModuloEjercicio1",[]);
modulo.controller("CtrlEjercicio1", function($scope){
  $scope.num = 0;
  $scope.lista = [{
    num : 10,
    nombre : "John",
    edad : 25
  },
  {
    num : 20,
    nombre : "Jessie",
    edad : 30
  },
  {
    num : 3,
    nombre : "Johanna",
    edad : 28
  },
  {
    num : 4,
    nombre : "Joy",
    edad : 15
  },
  {
    num : 5,
    nombre : "Mary",
    edad : 28
  },
  {
    num : 6,
    nombre : "Peter",
    edad : 25
  },
  {
    num : 7,
    nombre : "Sebastian",
    edad : 50
  },
  {
    num : 8,
    nombre : "Erika",
    edad : 27
  },
  {
    num : 9,
    nombre : "Patrick",
    edad : 40
  },
  {
    num : 10,
    nombre : "Samantha",
    edad : 60
  }]
});
