import("jquery-ui/ui/widgets/datepicker");


var calendarOptions = {
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
        'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
        'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    firstDay: 1,
    dateFormat: "dd.mm.yy",
    showOn: "button",
    range: true,
    buttonImageOnly: true,
    buttonImage: "/assets/img/ArrowDown.png",
    showButtonPanel: true,
    beforeShow: function (input, inst) {
        setTimeout(function () {
            inst.dpDiv.css({
                top: 355
            })
            var buttonPane = $(input)
                .datepicker("widget")
                .find(".ui-datepicker-buttonpane");

            var btn = $('<button class="ui-datepicker-clear" type="button">Очистить</button>');
            btn.unbind("click")
                .bind("click", function () {
                    $.datepicker._clearDate(input);
                });
            btn.appendTo(buttonPane);
            var btn2 = $('<button class="ui-datepicker-apply" type="button">Применить</button>');
            btn2.unbind("click")
                .bind("click", function () {
                    $.datepicker._getDate(input);
                });
            btn2.appendTo(buttonPane);

        }, 1);

    }
};
$(function(){
    $("#arrival").datepicker(calendarOptions);
    $("#departure").datepicker(calendarOptions);

});



