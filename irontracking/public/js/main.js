
window.onload = function () {


    let percentage1 = 0
    let percentage2 = 0
    let percentage3 = 0

    let checked1 = $('.modulo1 input[type="checkbox"]:checked').length
    let checked2 = $('.modulo2 input[type="checkbox"]:checked').length
    let checked3 = $('.modulo3 input[type="checkbox"]:checked').length

    percentage1 = percentage1 + checked1;
    percentage2 = percentage2 + checked2;
    percentage3 = percentage3 + checked3;

    let progress1 = $("table.modulo1table .sum");
    let progress2 = $("table.modulo2table .sum");
    let progress3 = $("table.modulo3table .sum");

    let progressBar1 = $("#progressBar1");
    let progressBar2 = $("#progressBar2");
    let progressBar3 = $("#progressBar3");

    total1 = 0 + percentage1;
    total2 = 0 + percentage2;
    total3 = 0 + percentage3;

    //// PRIMERA


    percentage1 = (total1 * 100 / progress1.length) + ("%");
    $(progressBar1).css("width", percentage1);
    $(progressBar1).text(percentage1);
    if (percentage1 == "100%") {
        $(progressBar1).addClass("bg-success");
        $(".trofeo1").append('<i class="fas fa-trophy faa-tada animated"></i>');
    }

    $(progress1).on('click', function () {

        for (let i = 0; i < progress1.length; i++) {
            progress1[i].onchange = function () {
                if (this.checked) {
                    total1 += 1;
                    percentage1 = (total1 * 100 / progress1.length) + ("%");
                    $(progressBar1).css("width", percentage1);
                    $(progressBar1).text(percentage1);
                    if (percentage1 == "100%") {
                        $(progressBar1).addClass("bg-success");
                        $(".trofeo1").append('<i class="fas fa-trophy faa-tada animated"></i>');
                    }
                } else {
                    total1 -= 1;
                    percentage1 = (total1 * 100 / progress1.length) + ("%");
                    $(progressBar1).css("width", percentage1);
                    $(progressBar1).text(percentage1);
                    $(progressBar1).removeClass("bg-success");
                    $(".trofeo1").empty()
                }
            };
        }
    });

    // ///SEGUNDA

    percentage2 = (total2 * 100 / progress2.length) + ("%");
    $(progressBar2).css("width", percentage2);
    $(progressBar2).text(percentage2);
    if (percentage2 == "100%") {
        $(progressBar2).addClass("bg-success");
        $(".trofeo2").append('<i class="fas fa-trophy faa-tada animated"></i>');
    }

    $(progress2).on('click', function () {
        for (let i = 0; i < progress2.length; i++) {
            progress2[i].onchange = function () {
                if (this.checked) {
                    total2 += 1;
                    percentage2 = (total2 * 100 / progress2.length) + ("%");
                    $(progressBar2).css("width", percentage2);
                    $(progressBar2).text(percentage2);
                    if (percentage2 == "100%") {
                        $(progressBar2).addClass("bg-success");
                        $(".trofeo2").append('<i class="fas fa-trophy faa-tada animated"></i>')
                    }
                } else {
                    total2 -= 1;
                    percentage2 = (total2 * 100 / progress2.length) + ("%");
                    $(progressBar2).css("width", percentage2);
                    $(progressBar2).text(percentage2);
                    $(progressBar2).removeClass("bg-success");
                    $(".trofeo2").empty()
                }
            };
        }
    });


    ///TERCERA

    percentage3 = (total3 * 100 / progress3.length) + ("%");
    $(progressBar3).css("width", percentage3);
    $(progressBar3).text(percentage3);
    if (percentage3 == "100%") {
        $(progressBar3).addClass("bg-success");
        $(".trofeo3").append('<i class="fas fa-trophy faa-tada animated"></i>');
    }

    $(progress3).on('click', function () {
        for (let i = 0; i < progress3.length; i++) {
            progress3[i].onchange = function () {
                if (this.checked) {
                    total3 += 1;
                    percentage3 = (total3 * 100 / progress3.length) + ("%");
                    $(progressBar3).css("width", percentage3);
                    $(progressBar3).text(percentage3);
                    if (percentage3 == "100%") {
                        $(progressBar3).addClass("bg-success");
                        $(".trofeo3").append('<i class="fas fa-trophy faa-tada animated"></i>')
                    }
                } else {
                    total3 -= 1;
                    percentage3 = (total3 * 100 / progress3.length) + ("%");
                    $(progressBar3).css("width", percentage3);
                    $(progressBar3).text(percentage3);
                    $(progressBar3).removeClass("bg-success");
                    $(".trofeo3").empty();
                }
            };
        }
    });



    ////COMPROBAR CHECKBOXES PARA STATS

    $(".statsSecond").on('click', function () { ///click en el modulo
        let checkboxs = $(this).find(".pepo"); ///Buscar checkboxsss
        let todos = checkboxs.length === checkboxs.filter(":checked").length; ///Almacenar checkbox


    });



    /////BOTON ENVIO DE EMAIL


    $(".probando").on('click', function() {
        let myVar = setTimeout(() => {
            $(this).css('background-color', 'lightgreen');
            $(this).css('box-shadow', '0px 0px 3px 2px rgba(0, 0, 0, 0.1)')
            $(this).text('e-mail enviado');
        }, 100);
        setTimeout(() => {
            $(this).css('background-color', '#f8f9fa');  
            $(this).text('ENVIAR COMENTARIO');
            $(this).css('box-shadow', '0px 0px 3px 2px rgba(0, 0, 0, 0.1)')
        }, 2000);
    });


/////Boton crear ejercicio

    $(".newExcercise").on('click', function() {
        let myVar = setTimeout(() => {
            $(this).css('background-color', 'lightgreen');
            $(this).css('box-shadow', '0px 0px 3px 2px rgba(0, 0, 0, 0.1)')
            $(this).text('Ejercicio creado');
        }, 500);
        setTimeout(() => {
            $(this).css('background-color', '#007bff');  
            $(this).text('ENVIAR COMENTARIO');
            $(this).css('box-shadow', '0px 0px 3px 2px rgba(0, 0, 0, 0.1)')
        }, 3000);
    });

        

    //////HEPLER

    $('a.button.glyphicon').on('click', function () {
        if ($('.wrap, a.glyphicon').hasClass('active')) {
            $('.maincont').css('filter', 'none')
            $('.wrap, a.glyphicon').removeClass('active')
        } else {
            $('.wrap, a.glyphicon').addClass('active')
            setTimeout(() => {
                $('.maincont').css('filter', 'blur(20px)')
            }, 150);
        }
    });

    //cerrar helper

    $(document).mouseup(function (e) {
        var container = $(".wrap.active");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".wrap, a.glyphicon").removeClass("active");
            $('.maincont').css('filter', 'none')
        }
    });



    ///// mostrar pestañas
    $(".pestnavs").hide();
    $(".pestnavs.active").show();
    $("#modulo2").click(function () {
        $("#modulo2").addClass("active");
        $("#modulo1").removeClass("active");
        $("#modulo3").removeClass("active");
        $("#modulo2").show();
        $(".modulo2.pestnavs").show();
        $(".modulo1.pestnavs").hide();
        $(".modulo3.pestnavs").hide();
    })
    $("#modulo3").click(function () {
        $("#modulo3").addClass("active");
        $("#modulo1").removeClass("active");
        $("#modulo2").removeClass("active");
        $("#modulo3").show();
        $(".modulo3.pestnavs").show();
        $(".modulo1.pestnavs").hide();
        $(".modulo2.pestnavs").hide();
    })
    $("#modulo1").click(function () {
        $("#modulo1").addClass("active");
        $("#modulo3").removeClass("active");
        $("#modulo2").removeClass("active");
        $("#modulo1").show();
        $(".modulo1.pestnavs").show();
        $(".modulo2.pestnavs").hide();
        $(".modulo3.pestnavs").hide();
    })

};
