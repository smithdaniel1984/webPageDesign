//hover over hobbies on welcome page
$(document).ready(function () {
    $('#hobbies').hover(function () {
        $('#hobbies').text("Things I really enjoy doing");
        $('#hobbies').css('font-size', 30);
        $('#video2k1').fadeIn(3000);
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
    $('#lakersLogo').show(3000);
})
.mouseleave(function () {
    $('#sports').text('Sports');
    $('#sports').css('font-size', 25);
});

//hover over the career section
$('#career').hover(function () {
    $('#career').text("Information Technology");
    $('#career').css('font-size', 30);
    $('#testerPic').show(3000);
})
.mouseleave(function () {
    $('#career').text('Career Status');
    $('#career').css('font-size', 25);
});

//move into the label area
$(document).ready(function () {
    $('#infoPop').popover();
    $('#infoPop').css("font-size", 14);
});

//change size of photo
$('#homePagePic1').ready(function () {
    $('#homePagePic1').animate({
        width: 720,
        height: 600,
    }, { duration: 2000 })
})
.hover(function () {
    $('#homePagePic1').animate({
        width: 720,
        height: 550,
    }, { duration: 100 });
    $('#homePagePic1').fadeTo(50, .2);
   
})
.mouseleave(function () {
    $('#homePagePic1').css('width', 720);
    $('#homePagePic1').css('height', 550);
    $('#homePagePic1').fadeTo(50, 1);
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

//duke pic enlarge
$('#dukePic').hover(function () {
    $('#dukePic').css("width", 160);
    $('#dukePic').css("height", 140);
})
.mouseout(function () {
    $('#dukePic').css("width", 120);
    $('#dukePic').css("height", 100);

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

//show the text when hovering over the label or camera
$('#aboutLbl').hover(function () {
    $('#aboutPics').show();
});
$('#eduIcon').hover(function () {
    $('#aboutPics').show();
});

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
    $('#lblResume').fadeTo(3000, 1);
    $('#lblResume').css('font-size', 14);
});
$('#career').mouseleave(function () {
    $('#lblResume').fadeTo(3000, .0);
});

//hide images and video
$(document).ready(function () {
    $('#video2k1').hide();
    $('#lakersLogo').hide();
    $('#gameHeader').hide();
    $('#testerPic').hide();
});

//show and hide button on home page
$('#showBtn').click(function () {
    $('#video2k1').show(3000);
    $('#lakersLogo').show(3000);
    $('#testerPic').show(3000);
    $('#gameHeader').show(3000);
});
$('#hideBtn').click(function () {
    $('#video2k1').hide();
    $('#lakersLogo').hide();
    $('#testerPic').hide();
    $('#gameHeader').hide();
});

$(document).ready(function () {
    $('#showBtn').hide(50);
    $('#showBtn').show(4000);
});
$(document).ready(function () {
    $('#hideBtn').hide(50);
    $('#hideBtn').show(4000);
});

//display the text on the home page above the images
$('#text2k').hover(function () {
    $('#text2k').css('color', 'skyblue');
});
$('#textLA').hover(function () {
    $('#textLA').css('color', 'skyblue');
});
$('#textTesting').hover(function () {
    $('#textTesting').css('color', 'skyblue');    
});

$(document).ready(function () {
    $('#backgroundPic').css('background-image:', 'none');
});

$(document).ready(function () {
    $('#submitContact').click(function () {
        $('#outputFirstName').text() === $('#inputFirstName').text();
    });
});

//contacts page hover over the form for the comments
$('#commentsForm').hover(function () {
    $('#commentsName').animate({
        fontSize: 16
    }, 500);
    $('#commentsText').animate({
        fontSize: 16
    }, 500);
    $('#classForm').animate({
        width: "800px"
    }, 500);
})
.mouseleave(function () {
    $('#commentsName').animate({
        fontSize: 14
    }, 100);
    $('#commentsText').animate({
        fontSize: 14
    }, 100);
    $('#classForm').animate({
        width: "600px"
    }, 100);
});

//linkedin icon enlarge
$(document).ready(function () {
    $('#linkedIcon').animate({
        height: 100,
        width: 150
    }, 3000);
});

//contact page header animate
$('div').hover(function () {
    $('#phoneLeft').animate({
        left: '-150px',
        opacity: '0.0'
    }, 800);
    $('#phoneRight').animate({
        left: '150px',
        opacity: '.0'
    }, 800);
})
.mouseleave(function () {
    $('#phoneLeft').animate({
        left: '0px',
        opacity: '1'
    }, 900);
    $('#phoneRight').animate({
        left: '0px',
        opacity: '1'
    }, 900);
});

//contacts page new comment link

$('#addLink').hover(function () {
    $('#addLink').animate({
        fontSize: 19,
    }, 1000);
})
.mouseleave(function () {
    $('#addLink').animate({
        fontSize: 18,
    }, 1000);
});

//projects java image
$(document).ready(function () {
    $('#javaPic').animate({
        height: 200,
    }, 2000);
});
$('#javaPic').hover(function () {
    $('#javaPic').animate({
        height: 800,
    }, 100)
    $('#project2').hide();
});
$('#javaPic').mouseleave(function () {
    $('#javaPic').animate({
        height: 200,
    }, 100)
    $('#project2').show(100);
});

//projects page animate the icons in the jumbotron
$('div').hover(function () {
    $('#leftHome').animate({
        left: '-150px',
        opacity: '0.0'
    }, 800);
    $('#rightHome').animate({
        left: '150px',
        opacity: '.0'
    }, 800);
});
$('div').mouseleave(function () {
    $('#leftHome').animate({
        left: '0px',
        opacity: '1',
    }, 800);
})
.mouseleave(function () {
    $('#rightHome').animate({
        left: '0px',
        opacity: '1',
    }, 800);
});

//calendar button 
$(document).ready(function () {
    $('#datePicker').click(function () { 
        $('#datePicker').datepicker();
    });
 });

//Comments creation section messages
$(document).ready(function () {
    $('#createComment').click(function () {
        
        if ($('#Name').val() === null || $('#Name').val() === "")
        {
            $('#commentName').show();
        }
        else if ($('#comments').val() === null || $('#comments').val() === "")
        {
            $('#commentBox').show();
        }
    });
});

//project page text animate
$('div').ready(function () {
    $('#projectText').animate({
        fontSize: 50,
        opacity: '0'
    }, 1000);
    $('#projectText').animate({
        fontSize: 30,
        opacity: '.9'
    }, 1000);
});

//project image 2
$(document).ready(function () {
    $('#project2').hide();
    $('#project2').show(8000);
    $('#project2').animate({
        height: 200,
    }, 100);
    $('#project2').hover(function () {
        $('#project2').animate({
            height: 800,
        }, 100);
        $('#javaPic').hide();
    })
    $('#project2').mouseleave(function () {
        $('#project2').animate({
            height: 200,
        }, 100);
        $('#javaPic').show();
    })
});