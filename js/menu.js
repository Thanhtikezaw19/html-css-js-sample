$(document).ready(function () {
  if (window.matchMedia('(min-width: 641px)').matches) {
      $(".box").heightLine({
          fontSizeCheck: true
      });
   } else {
      $(".box").heightLine("destroy");
} 
});
$(document).ready(function () {
    if (window.matchMedia('(min-width: 641px)').matches) {
        $(".liheight-adj").heightLine({
            fontSizeCheck: true
        });
    } else {
        $(".liheight-adj").heightLine("destroy");
    }
});
  
  
$(document).ready(function () {
    if (window.matchMedia('(min-width: 641px)').matches) {
        $(".strategic-cnt").heightLine({
            fontSizeCheck: true
        });
        
    } else {
        $(".strategic-cnt").heightLine("destroy");
    }
  });

