/*
Robson Agapito / 2016
https://www.linkedin.com/in/robsonagapito
*/

exports.click_login = click_login;

function click_login() {
casper.log('  >> Clicando no Login do Site');
casper.log ()
  casper.waitForSelector( '.navbar-right li:nth-child(2) a span',
      function success() { casper.click('.navbar-right li:nth-child(2) a span'); },
      function timeout() { casper.test.fail( 'Should see login site' ); }
  );   
};