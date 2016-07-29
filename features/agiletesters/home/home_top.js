/*
  Require and initialise PhantomCSS module
  Paths are relative to CasperJs directory
*/

// Initializing class
var fs = require( 'fs' );
var path = fs.absolute( fs.workingDirectory + '/class/phantomcss.js' );
var phantomcss = require( path );

path = fs.absolute( fs.workingDirectory + '/class/login.js' );
var login = require( path );

path = fs.absolute( fs.workingDirectory + '/class/base.js' );
var base = require( path );

path = fs.absolute( fs.workingDirectory + '/class/home_cabec.js' );
var home_cabec = require( path );


//Testing Start
casper.test.begin( 'Build creator home page visual testing', function ( test ) {

  // Initialization
  base.init_testing();
  base.casper_on();

  // The test scenario
  casper.start('http://www.agiletesters.com.br', function() {
      home_cabec.click_login();
      login.login_panel('robsonagapito@gmail.com','BLABLABLA');
  });

  casper.on('resource.error',function (request) {
    this.echo('[res : id and url + error description] <-- ' + request.id + ' ' + request.url + ' ' + request.errorString);
  });

  casper.viewport( 1024, 768 );

  // base.hiden_element('.btMenu > a');

  base.then('#header-menu','home_page_top','Should not see top in home page top')

  // casper.then( function () {
  //  casper.waitForSelector( '#header-menu',
  //                           function success() {phantomcss.screenshot( '#header-menu', 'home_page_top' );},
  //                           function timeout() {casper.test.fail( 'Should not see top in home page top' );}
  //                        );
  // } );



  // // base.hiden_element('.btMenu > a');
  // casper.then( function () {
  //   casper.waitForSelector( '#panel',
  //                           function success() {phantomcss.screenshot( '#panel', 'panel_home_page' );},
  //                           function timeout() {casper.test.fail( 'Should not see in Panel home page');}
  //                         );
  // } );

  casper.then( function now_check_the_screenshots() {
    // compare screenshots
     phantomcss.compareAll();
    //phantomcss.compareSession();
  } );

  /*
  Casper runs tests
  */
  casper.run( function () {
    console.log( '\nTHE END.' );
    // phantomcss.getExitStatus() // pass or fail?
    casper.test.done();
  } );
} );
