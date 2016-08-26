//hover over hobbies on welcome page
$(document).ready(function () {
    $('#hobbies').hover(function () {
        $('#hobbies').text("Things I really enjoy doing")
        $('#hobbies').css('font-size', 30);
    })
    .mouseleave(function () {
        $('#hobbies').text('Hobbies');
        $('#hobbies').css('font-size', 25);
    })
});

//hover over the sports text
$('#sports').hover(function () {
    $('#sports').text("Favorite Teams");
    $('#sports').css('font-size', 30);
})
.mouseleave(function(){
    $('#sports').text('Sports');
    $('#sports').css('font-size', 25);
});

//hover over the career section
$('#career').hover(function () {
    $('#career').text("IT field");
    $('#career').css('font-size', 30);
})
.mouseleave(function () {
    $('#career').text('Career Status');
    $('#career').css('font-size', 25);
});

//move into the label area
$(function () {
    $('#infoPop').popover();
    $('#infoPop').css("font-size", 14);
});

//change size of photo
$('#homePagePic1').ready(function () {
    $('#homePagePic1').css('width', 720);
    $('#homePagePic1').css('height', 600);
})
    .mouseenter(function () {
        $('#homePagePic1').css('width', 720);
        $('#homePagePic1').css('height', 550);
    })
.mouseleave(function () {
    $('#homePagePic1').fadeTo('slow', .8);
    $('#homePagePic1').css('width', 720);
    $('#homePagePic1').css('height', 550);
});

//fade the home page pic
$(document).ready(function () {
    $("#homePagePic1").fadeTo('slow', 0.3);
});

//ecsu icon enlarge
$('#ecsuPic').hover(function () {
    $('#ecsuPic').css("width", 160);
    $('#ecsuPic').css("height", 140);
})
.mouseout(function () {
    $('#ecsuPic').css("width", 120);
    $('#ecsuPic').css("height", 100);
   
});

//my cc pic enlarge
$('#myccPic').hover(function () {
    $('#myccPic').css("width", 160);
    $('#myccPic').css("height", 140);
})
.mouseout(function () {
    $('#myccPic').css("width", 120);
    $('#myccPic').css("height", 100);
   
});

//resume hover grow
$(document).ready(function () {
    $('#resume').mouseover(function () {
        $('#resume').css("font-size", 18);
    });
})
.mouseout(function () {
    $('#resume').css("font-size", 16);
    $('#resume').css('padding-top', 45);
});

//make the text larger on the edu page
$('#aboutPics').mouseover(function () {
    $('#aboutPics').css('font-size', 18);
});
$('#aboutPicsHead').mouseout(function () {
    $('#aboutPics').css('font-size', 16);
});

//hide the information for the pictures on the school page
$(document).ready(function () {
    $('#aboutPics').hide();
});

//show the text when hovering over the label
$('#aboutLbl').hover(function () {
    $('#aboutPics').show();
})

//hide the cert links
$(document).ready(function () {
    $('#certLinks').hide();
});
//show the links
$('#certLbl').hover(function () {
    $('#certLinks').show()
});

//move the hands out/back in
$('div').hover(function () {
    $('#rightHand').animate({
        left: '-100px',
        opacity: '0'
    }, 'slow');
    $('#rightHand').animate({
        left: '1px',
        opacity: '.9'
    }, 'slow');
});

$('div').hover(function () {
    $('#leftHand').animate({
        left: '100px',
        opacity: '0'
    }, 'slow');
    $('#leftHand').animate({
        left: '-5px',
        opacity: '.9'
    }, 'slow');
});

//School information page hands animation
//move the hands out/back in
$('div').hover(function () {
    $('#rightInfoHand').animate({
        left: '-100px',
        opacity: '0'
    }, 'slow');
    $('#rightInfoHand').animate({
        left: '1px',
        opacity: '.9'
    }, 'slow');
});

$('div').hover(function () {
    $('#leftInfoHand').animate({
        left: '100px',
        opacity: '0'
    }, 'slow');
    $('#leftInfoHand').animate({
        left: '-5px',
        opacity: '.9'
    }, 'slow');
});

//animate the headers
//welcome page
$('div').ready(function () {
    $('#welcomeText').animate({
        fontSize: '40px',
        opacity: '0'
    }, 'slow');
    $('#welcomeText').animate({
        fontSize: '35px',
        opacity: '.9'
    }, 'slow');
});

$('div').ready(function () {
    $('#aboutHeader').animate({
        fontSize: '45px',
        opacity: '0'
    }, 'slow');
    $('#aboutHeader').animate({
        fontSize: '28px',
        opacity: '.9'
    }, 'slow');
});

//hide the label and reveal
$(document).ready(function () {
    $('#lblResume').hide();
});
$('#career').hover(function () {
    $('#lblResume').show();
});
$('#career').mouseleave(function () {
    $('#lblResume').hide();
});