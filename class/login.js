/*
Robson Agapito / Locaweb / 2015
https://www.locaweb.com.br
*/

exports.login_panel = login_panel;

function login_panel(user,pass) {
  	casper.log('  >> Logando no sistema');
  	casper.waitForSelector( 'form#login-form',
  		function success() {this.fillSelectors('form#login-form', {
	    						'input[name="username"]': user,
	    						'input[name="password"]': pass
 			    					}, true);},
		function timeout() { this.test.fail( '  >> Should not see login site' ); } 
	);
	    
	// casper.waitForSelector('button#login.btn.btn-primary.btn-lg.btn-block', 
	// 	function() {  
	// 				this.click('button#login.btn.btn-primary.btn-lg.btn-block')});
	//casper.evaluate(function() { document.getElementById("login").click(); });
};