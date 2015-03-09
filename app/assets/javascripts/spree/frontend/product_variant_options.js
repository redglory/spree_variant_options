var show_variant_images = function(variants_ids) {
  if (typeof(variants_ids) == 'number') {
    variants_ids = [variants_ids];
  }

  $('div.sp-thumbs a img.vtmb').parents().hide();
  $(variants_ids).each(function(index, variant_id){
    $('div.sp-thumbs a img.vtmb tmb-' + variant_id).parent().show();

    var currentThumb = $('a.sp-current > img');

    // if currently selected thumb does not belong to current variant, nor to common images,
    // hide it and select the first available thumb instead.
    if(!currentThumb.hasClass('vtmb-' + variant_id)) {
      //var thumb = $($('ul.thumbnails li:visible').eq(0));
      var thumb = $($("div.sp-thumbs a img.vtmb-" + variant_id + ":first").eq(0));
      if (thumb.length === 0) {
        thumb = $($('div.sp-thumbs a img:visible').eq(0));
      }
      var newImg = thumb.parent().attr('href');
      $('div.sp-thumbs a').removeClass('sp-current');
      thumb.parent().addClass('sp-current');
      $('.main-image .sp-large a').attr('href', newImg);
      $('.main-image .sp-large a > img').attr('src', newImg);
      $('.main-image').data('selectedThumb', newImg);
      $('.main-image').data('selectedThumbId', thumb.attr('id'));
    }
  });
};

var show_all_variant_images = function() {
  $('div.sp-thumbs a img.vtmb').show();
};