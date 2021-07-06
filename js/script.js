$(document).ready(function(){

	// dropDown
    $(".controlgroup").controlgroup();
});

// wow
new WOW().init();

// datePicker
const myDatePicker1 = MCDatepicker.create({ 
      el: '#datepicker1',
      bodyType: 'inline',
      autoClose: true,
})
const myDatePicker2 = MCDatepicker.create({ 
      el: '#datepicker2',
      bodyType: 'inline',
      autoClose: true,
})

