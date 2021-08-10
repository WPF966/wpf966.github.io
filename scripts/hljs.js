if (ds.line_number === 'frontend') {
  console.log("show line number in front-end");
  var lines = texts.length - 1;
  var $numbering = $('<ul/>').addClass('pre-numbering');
  $(this).addClass('has-numbering').parent().append($numbering);
  for (i = 1; i <= lines; i++) {
    $numbering.append($('<li/>').text(i));
  }
}