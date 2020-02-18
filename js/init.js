// init Materialize CSS datepicker and sidenav
document.addEventListener('DOMContentLoaded', function () {
    let options = {
        autoClose: true,
        format: 'd. mmmm yyyy',
        i18n: {
            months: [
                'Jänner',
                'Februar',
                'März',
                'April',
                'Mai',
                'Juni',
                'Juli',
                'August',
                'September',
                'Oktober',
                'November',
                'Dezember'
            ]
        }
    };

    let datepicker = document.querySelectorAll('.datepicker');
    let datepickerInit = M.Datepicker.init(datepicker, options);
});