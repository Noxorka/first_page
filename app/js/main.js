 function Bpopup() {
   el = document.getElementById("addProgect");
   el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
 }

 /*Валидация*/
 (function() {
  
	var app = {
		
		initialize : function () {			
			this.modules();
			this.setUpListeners();
		},
 
		modules: function () {
 
		},
 
		setUpListeners: function () {
			$('form').on('submit', app.submitForm);
		},
 
		submitForm: function (e) {
			e.preventDefault();

			var form = $(this);

			if( app.validateForm(form) === false ) return false;

			console.log('go in ajax');
		},

		validateForm: function (form) {
			var inputs = form.find('input'),
				valid = true;

			inputs.tooltip('destroy');

			$.each(inputs, function(index, val) {
				var input = $(val),
					val = input.val(),
					formGroup = input.parents ('.dz4-form-group'),
					label = formGroup.find('label').text().toLowerCase(),
					textError = 'Введите ' + label; 

				if(val.length === 0){
					formGroup.addClass('dz4-form-control_error');
					input.tooltip({
						trigger: 'manual',
						placement: 'right',
						title: textError
					}).tooltip('show');		
					valid = false;			
				}else {
					formGrout.removeClass('has-error').addClass('has-success');
				}				
			});
			return valid;
		}		
	}
 
	app.initialize();
 
}());