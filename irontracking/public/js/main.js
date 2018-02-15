window.onload = function () {
    console.log("LIIIIIISTOOOOOOOOOOOOOOOO");

    ////////PROGRESS-BAR

    var progress = $("table#modulo1 .sum");
    var progressBar = $("#progressBar1");
    var total = 0;

    $(progress).on('click', function () {
        var percentage = [];
        for (let i = 0; i < progress.length; i++) {
            progress[i].onchange = function () {
                if (this.checked) {
                    total += 1;
                    percentage = (total * 100 / progress.length) + ("%");
                    $(progressBar).css("width", percentage);
                    $(progressBar).text(percentage);
                    if (percentage == "100%") {
                        $(progressBar).addClass("bg-success");
                    }
                } else {
                    total -= 1;
                    percentage = (total * 100 / progress.length) + ("%");
                    $(progressBar).css("width", percentage);
                    $(progressBar).text(percentage);
                    $(progressBar).removeClass("bg-success");
                }
            };
        }
    });

    //////HEPLER

    $('a.button.glyphicon').on('click', function(){
        $('.wrap, a.glyphicon').toggleClass('active');
        if ($('.wrap, a.glyphicon').hasClass('active')) {
            setTimeout(() => {
                $('.maincont').css('filter', 'blur(20px)')
            }, 150);

        } else {
            $('.maincont').css('filter', 'none')
        }

        return false;
      });





    ///////EMAIL SEND

    $(function () {
        var pepe = "esto es una prueba"
        $('#emailLink').on('click', function (e) {
            e.preventDefault();
            emailjs.send("gmail","template_osWf9o7p",{name: "James", notes: "Check this out!"});
            console.log("enviado");
        });
      });
};