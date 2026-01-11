var $carousel = $('.carousel').flickity()
  .flickity('next')
  .flickity( 'select', 4 );

$carousel.flickity( 'select', index, isWrapped, isInstant )

/*botón previo*/
$carousel.flickity( 'previous', isWrapped, isInstant )
$('.button--previous').on( 'click', function() {
  $carousel.flickity('previous');
});

/*boton siguiente*/
$carousel.flickity( 'next', isWrapped, isInstant )