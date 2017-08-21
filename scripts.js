function darken() {
    $(this).addClass('darkened');
}
function lighten() {
    $(this).removeClass('darkened');
}

$(document).ready(function () {
    
    var prefix = '';
    if (window.location.href.indexOf('homework') > -1)
        prefix='../';
    
    var homeworks = {
        'Python Basics': prefix+'python-basics.html',
        'Homework 0': prefix+'homework/homework_0.html',
    }
    for (var name in homeworks) {
        $('#homework-list ul').append(
            '<li><a href="' + homeworks[name] + '">' + name + '</a></li>'
        );
    }
    $('#homework-list li a').mouseover(darken);
    $('#homework-list li a').mouseout(lighten);
})
