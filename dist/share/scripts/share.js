$(document).ready(function() {
    var clicks = 0;
    $('button').on('click', function() {
        clicks++;
        var percent = Math.min(Math.round(clicks / 3 * 100), 100);
        $('.percent').width(percent + '%');
        $('.number').text(percent + '%');
    });


    $('.facebook').on('click', function() {
        var w = 580, h = 300,
                left = (screen.width/2)-(w/2),
                top = (screen.height/2)-(h/2);


            if ((screen.width < 480) || (screen.height < 480)) {
                window.open ('http://www.facebook.com/share.php?u=https://www.kickstarter.com/projects/updogtoys/the-odin-a-puzzle-dog-toy-with-a-modern-modular-de', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
            } else {
                window.open ('http://www.facebook.com/share.php?u=https://www.kickstarter.com/projects/updogtoys/the-odin-a-puzzle-dog-toy-with-a-modern-modular-de', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
            }
    });

    $('.twitter').on('click', function() {
        var loc = encodeURIComponent('https://www.kickstarter.com/projects/updogtoys/the-odin-a-puzzle-dog-toy-with-a-modern-modular-de'),
                title = "Puzzle Dog Toy with A Modern Modular Design @updogtoys @kickstarter — ",
                w = 580, h = 300,
                left = (screen.width/2)-(w/2),
                top = (screen.height/2)-(h/2);

            window.open('http://twitter.com/share?text=' + title + '&url=' + loc, '', 'height=' + h + ', width=' + w + ', top='+top +', left='+ left +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    });

    $('.play').on('click', function() {
        window.location.href = "https://www.kickstarter.com/projects/updogtoys/the-odin-a-puzzle-dog-toy-with-a-modern-modular-de";
    });

});
