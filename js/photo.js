$(document).ready(function() {
  var $smileAcounts = JSON.parse(localStorage.getItem('users'));
  console.log($smileAcounts);

  var config = {
    apiKey: 'AIzaSyAlbcybJZDOmr_rLwWDzAnarW7U23C8ZyI',
    authDomain: 'deglu-producto.firebaseapp.com',
    databaseURL: 'https://deglu-producto.firebaseio.com',
    projectId: 'deglu-producto',
    storageBucket: '',
    messagingSenderId: '926786399247'
  };
  firebase.initializeApp(config);
});
