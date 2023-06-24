(function () {
   $('.topic').each(function(){
      if($(this).find('.topic-article').length < 5){
           $(this).find('.topic-more').hide();
      }
   });
})();
