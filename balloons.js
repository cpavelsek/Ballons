$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });
});

// uncheck all checkboxes (FireFox)
$('.form-check-input').each(function () {
    $(this).prop('checked', false);
});

// event listener for check/uncheck
$('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
        $('#' + this.id + 'Img').addClass('animated bounceOutUp');
});


//select ALL Balloons
$(function () {
    $('#submitCheck').on('click', function (evt) {
        $('.form-check-input').each(function () {
            $(this).prop('checked', true);

                // make the image visible
                $('#' + this.id + 'Img').css('visibility', 'visible')
                // animate balloon in/out based on checkbox
                $(this).is(':checked') ?
                    $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
                    $('#' + this.id + 'Img').addClass('animated bounceOutUp');
 
        });

    })
})




//generate random birthday animations
$(function () {
    
    var animateArray = ['animated bounce', 'animated flash', 'animated pulse', 'animated rubberBand', 'animated shakeX',
        'animated shakeY', 'animated headShake', 'animated swing', 'animated tada', 'animated wobble', 'animated jello', 'animated heartBeat'];
    var random = animateArray[Math.floor((Math.random() * animateArray.length))];

    console.log(random);
    document.getElementById("birthdayFlash").className = random;
    
})

//display popup
$(function () {

        $('#submit').on('click', function (e) {

    
            $('#toast').toast({ autohide: false }).toast('show');


            $('#product').html($(this).data('product'));

        })
})

//hover colors for h1 - red
document.getElementById("red").addEventListener("mouseover", function () {
    document.getElementById("birthdayFlash").style.color = "red";
})
document.getElementById("red").addEventListener("mouseout", function () {
    document.getElementById("birthdayFlash").style.color = "slategray";
})
//hover colors for h1 - blue
document.getElementById("blue").addEventListener("mouseover", function () {
    document.getElementById("birthdayFlash").style.color = "blue";
})
document.getElementById("blue").addEventListener("mouseout", function () {
    document.getElementById("birthdayFlash").style.color = "slategray";
})
//hover colors for h1 - green
document.getElementById("green").addEventListener("mouseover", function () {
    document.getElementById("birthdayFlash").style.color = "green";
})
document.getElementById("green").addEventListener("mouseout", function () {
    document.getElementById("birthdayFlash").style.color = "slategray";
})

//$(function () {
//   $('#submit').on('click', function (e) {

 //       $('#submit').toast('show');
 //       $('#toast').toast({ autohide: false }).toast('show');


//        $('#product').html($(this).data('product'));
//        $('#code').html($(this).data('code'));
//    })
//})