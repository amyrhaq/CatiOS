StripeGlobal = {
    
    locked : false,
    moneyString : "",
    timeString : "",
    
    handleError : function (xhr) {
    	var obj = jQuery.parseJSON(xhr.responseText);
		$('[name=errorCardLabel]').text(obj.error.message);
	},
    
	checkConnection : function () { 
        if (navigator.network){ //mobile device
			var networkState = navigator.network.connection.type;
    		if (networkState == Connection.NONE) return false;
        }
		return true;
	},
    
    makePayment : function () { 
        if ($('[name="cardStripeForm"]').valid()){
			if (this.checkConnection()){
      			if (!this.locked){
      				this.locked = true;
					tokenDS.execute({});
      			}  
  			} else {
    			$('[name=errorCardLabel]').text('No network connection');  
    		}  
  		}
    },    
        
    initPaymentScreen : function () { 
    	$('input').addClass('corner4');
		$('[name=cardGrid]').addClass('gray-back').addClass('corner4');
		$($('a',$('[name=currencySelect]').parent())[0]).addClass('select-gray');
		$('[name=numberInput]').attr("maxlength", 19); //.attr("minlength", 16);
		$('[name=monthInput]').attr("maxlength", 2);
		$('[name=yearInput]').attr("maxlength", 2);
		$('[name=codeInput]').attr("maxlength", 3);
		$('[name="errorPanel"]').addClass('errorText').html('<ul id="messageBox"></ul>');
	},
    
    initValidation : function () { 
        $('[name="paymentContainer"]').wrap('<form name="cardStripeForm" />');
		var currentYear = (new Date()).getFullYear() - 2000;

		jQuery.validator.addMethod(
    		'regexp',
    		function(value, element, regexp) {
        		var re = new RegExp(regexp);
        		return this.optional(element) || re.test(value);
    		}
		);

		$(document).ready(function() {
  			$('[name="cardStripeForm"]').validate({
				rules: {
					monthInput: {
						required: true,
          				digits: true,
          				max: 12
					}, 
        			yearInput: {
          				required: true,
	          			digits: true,
    	      			min: currentYear
        			},
					codeInput: {
          				required: true,
                		digits: true,
	          			minlength: 3
    	    		},
					numberInput: {
						required: true,
          				minlength: 16,
          				regexp: '^([0-9 ]){16,19}$'
					},
    	  			amountInput: {
        				required: true,
          				number: true
        			}
    			},
				messages:{ 
					monthInput: {
						required: "Please enter expiration month",
          				digits: "Expiration month must be a number",
						max: "Month cannot be bigger than 12"
					}, 
        			yearInput: {
          				required: "Please enter expiration year",
          				digits: "Expiration year must be a number",
          				min: "Entered year is expired"
        			},
					codeInput: {
          				required: "Please enter CVC",
          				digits: "Entered CVC must be a number",
          				minlength: "CVC length is 3"
        			},
					numberInput: {
						required: "Please enter card number",
						minlength: "Card Number must have 16 digits",
          				regexp: "Please enter digits or space"
					},
        			amountInput: {
						required: "Please enter money amount",
          				number: "Entered money amount must be a number"
					}
      
    			},
    			errorLabelContainer: "#messageBox",
   				wrapper: "li"
    
  			}); //validate
		}); //ready
    }, // validationInit  

	clearCardError : function () { 
    	$('[name=errorCardLabel]').text('');
    },
	
	transitServices : function () { 
        $(document).ready(function() {
			$('.ui-loader').show();
  			setTimeout('paymentDS.execute({})',100);
		});
    },

	afterPayment : function () { 
    	var amount = $('[name=amountInput]').val();
		var currency = $('[name=currencySelect]').val();
		this.moneyString =  amount + " " + currency;
		var date = new Date();
		// output to USA date format
		var hours = date.getHours();
		var time;
		if (hours > 12) {
  			time =  (date.getHours()-12) + ":" + date.getMinutes() + " PM";
		} else if (hours == 0) {
  			time =  "12:" + date.getMinutes() + " PM";
		} else if (hours == 12){
  			time =  "12:" + date.getMinutes() + " AM";
		} else { 
  			time = date.getHours() + ":" + date.getMinutes() + " AM";
		}  
        this.timeString = (date.getMonth()+1) + "/" + date.getDate() + "/" + (1900 + date.getYear()) + " at " + time;
		navigateTo('StripePayment_FinalScreen', {});
    }, 

	beforeShowFinalScreen : function () {
		$('[name=firstLabel]').html('You paid <span style="font-weight:bold">' + this.moneyString + '</span>');
		$('[name=secondLabel]').html(this.timeString);
		$('[name=thirdLabel]').html('for <span style="font-weight:bold"> myCash </span> account.');
    }
}
