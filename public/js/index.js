$('.click-box').click(function(item) {
  var activeModel = item.target.getAttribute('data-model');
  $('#click-panel')[0].className = 'content flex panel ' + activeModel
})