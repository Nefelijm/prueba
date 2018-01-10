$(document).ready(function() {
  setTimeout(function() {
    var $users = ['flor','dd'];
    localStorage.setItem('users', JSON.stringify($users));
    window.location.href = 'views/login.html';
  }, 5000);
});