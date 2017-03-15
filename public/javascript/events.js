'use strict';

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

$(".button-collapse").sideNav();

$(document).on('click','.saveBtn', function() {
  var id = $(this).attr('data-id');
  var isSaved = $(this).attr('data-isSaved')
  // console.log(id)
  var url = '/save_article/' + id + '/' + isSaved;
  $.ajax({
    method: 'POST',
    url: url,
  }).done(function(data){console.log(id)});
});
