var 
    img = $(".crsl_list>li>img"),
    w = img.width(),
    h_16 = w/16,
    img_w = w,
    img_h = h_16*9,
    crsl_img_size = function(){
      $(".crsl_list>li>img").css("height",img_h);
    },
    
    i = 0,
    // anim_direction = "right",
    sec = 500,
    img_col = $("img").length,
    crsl_list = $(".crsl_list"),
    list_li = $(".crsl_list>li"),
    
    fun_show = function(){
        $(this).animate({opacity:1,left:0});//конечное положение анимации
        $(this).show();},
    fun_hide = function(){
      $(this).animate({opacity:0});//конечное положение анимации
      $(this).hide();},
    
    crsl_img_size = function(){
      $(".crsl_list>li>img").css("height",img_h);
      console.log('h '+img_h+'| w '+w);
      console.log();
    },
    
    crsl_hide = function(){
      var img_col;
      crsl_img_size();
      img_col = $("img").length;
      console.log('Элементов в каруселе - '+img_col);
      $(".crsl_list>li").hide();
      $(".crsl_list>li:first-child").show();
      i++;
    },
    
    crsl_li_show_left = function(){
      
      if(i<img_col){
        console.log(i);
        list_li.eq(i).animate({opacity:0,left:100},sec,fun_show);//начальное положение анимации
        console.log("Показан - "+i+" элемент");
        list_li.eq(i-1).animate({opacity:0,left:-100},sec,fun_hide);//начальное положение анимации ухода
        console.log("Убрали - "+i+" элемент");
        i++;
      }else{
        list_li.eq(i-1).animate({opacity:0,left:-100},sec,fun_hide);
        console.log("i больше "+img_col);
        i=0;
        list_li.eq(i).animate({opacity:0,left:100},sec,fun_show);
        i++;
      }
    },

    crsl_li_show_right = function(){
      
      if(i<img_col){
        console.log(i);
        list_li.eq(i).animate({opacity:0,right:100},sec,fun_show);//начальное положение анимации
        console.log("Показан - "+i+" элемент");
        list_li.eq(i-1).animate({opacity:0,right:-100},sec,fun_hide);//начальное положение анимации ухода
        console.log("Убрали - "+i+" элемент");
        i++;
      }else{
        list_li.eq(i-1).animate({opacity:0,right:-100},sec,fun_hide);
        console.log("i больше "+img_col);
        i=0;
        list_li.eq(i).animate({opacity:0,right:100},sec,fun_show);
        i++;
      }
    };


crsl_hide();

$(".btn_left").mouseup(crsl_li_show_left);
$(".btn_right").mouseup(crsl_li_show_right);