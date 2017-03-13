'use strict';

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

$(".button-collapse").sideNav();

$(document).on('click','.addNote', function() {
  var id = $(this).attr('id');
});