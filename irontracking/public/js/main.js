window.onload = function () {
    console.log("LIIIIIISTOOOOOOOOOOOOOOOO");

    var progress = $(".sum");
    var progressBar = $("#progressBar1");
    var total = 0;
    // var percentage = (total * 100 / progress.length) + ("%");

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
};