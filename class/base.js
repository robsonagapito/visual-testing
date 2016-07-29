/*
Robson Agapito / Locaweb / 2015
https://www.locaweb.com.br
*/

exports.hiden_element = hiden_element;
exports.init_testing  = init_testing;
exports.casper_on     = casper_on;
exports.then          = then;

function hiden_element(el) {
  var jQuery = window.jQuery;

  casper.evaluate(function(e) {
    jQuery( e ).css( 'visibility', 'hidden' );
  }, {e : el});
};

function init_testing(){
  casper.options.waitTimeout = 3000;
  phantomcss.init( {
    rebase: casper.cli.get( "rebase" ),
    // SlimerJS needs explicit knowledge of this Casper, and lots of absolute paths
    casper: casper,
    libraryRoot: fs.absolute( fs.workingDirectory + '' ),
    screenshotRoot: fs.absolute( fs.workingDirectory + '/screenshots' ),
    failedComparisonsRoot: fs.absolute( fs.workingDirectory + '/failures' ),
    addLabelToFailedImage: false,
    hideElements:'menu#menuPrincipal>ul>li.btMenu>a'
  } );
}

function casper_on(){
  casper.on( 'remote.message', function ( msg ) {
    this.echo( msg );
  } )

  casper.on( 'error', function ( err ) {
    this.die( "PhantomJS has errored: " + err );
  } );

  casper.on( 'resource.error', function ( err ) {
    casper.log( 'Resource load error: ' + err, 'warning' );
  } );
}

function then(elem, name_img, desc_fail){
  casper.waitForSelector( elem,
    function success() { phantomcss.screenshot( elem, name_img );},
    function timeout() { casper.test.fail( desc_fail );}
  );

}
