$(function () {
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function (e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');


        $('#product').html($(this).data('product'));
        $('#code').html($(this).data('code'));
    });

    var toastPopUp = document.querySelector('#toast')

    window.addEventListener('keydown', function (evt) {
        if (evt.key === "Escape") {
            toastPopUp.style.display='none'
        }
    })

    $("#seasoning").click(function () {
        $("#product").data("Chef", "Chef");
    })


    $('#toast').toast({ autohide: false }).toast('show');

});