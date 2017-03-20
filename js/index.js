var 
    img = $(".crsl_list>li>img"),
    //w = img.width(),
    w = $(".carusel").parent().width(),
    h_16 = w/16,
    img_w = w,
    img_h = h_16*9,
    crsl_img_size = function(){
      img.css("height",img_h);
    },
    
    step_id = 0,
    i = 0,
    j = 0,
    sec = 500,
    img_col = $("img").length,
    crsl_list = $(".crsl_list"),
    list_li = $(".crsl_list>li"),
    
    btn_left = $("#btn_nav.btn_left"),
    btn_numb = $("#btn_nav.btn_numb"),
    crsl_nav = $(".in"),
    
    fun_show_left = function(){
        $(this).animate({opacity:1,left:0});//конечное положение анимации
        $(this).show();},
    fun_hide_left = function(){
      $(this).animate({opacity:0});//конечное положение анимации
      $(this).hide();},
    
    fun_show_right = function(){
        $(this).animate({opacity:1,left:0});//конечное положение анимации
        $(this).show();},
    fun_hide_right = function(){
      $(this).animate({opacity:0});//конечное положение анимации
      $(this).hide();},
      
    fun_show_opacity = function(){
      $(this).animate({opacity:1});//конечное положение анимации
      $(this).show();
    },
    fun_hide_opacity = function(){
      $(this).animate({opacity:0});//конечное положение анимации
      $(this).hide();},
    
    crsl_img_size = function(){
      $(".crsl_list>li>img").css("height",img_h);
      console.log('|w:'+w+' | h:'+img_h+"|");
      console.log('-'.repeat(20));
    },
    
    crsl_li_show_left = function(){
      console.log("#".repeat(30));
      j = i + 1;
      list_li.eq(i).animate({opacity:0,left:-100},sec,fun_hide_right);
      list_li.eq(j).animate({opacity:0,left:100},sec,fun_show_left);
      console.log("Шаг: "+step_id+" - "+"Скрыть:"+i+" Показать:"+j); 
      i++;
      console.log("#".repeat(30));
      step_id++;
      if(i==img_col){
        j=0;
        console.log("#".repeat(30));
        list_li.eq(j).animate({opacity:0,left:100},sec,fun_show_left);
        list_li.eq(i).animate({opacity:0,left:-100},sec,fun_hide_right); 
        console.log("Шаг: "+step_id+" - "+"Скрыть:"+i+" Показать:"+j); 
        console.log("#".repeat(30));
        i=0;
        step_id++;
         }
    },
    
    crsl_li_show_right = function(){
      if(i==0){
        j = img_col-1;
        // console.log(list_li.eq(j));
        list_li.eq(i).animate({opacity:0,left:100},sec,fun_hide_right);
        list_li.eq(j).animate({opacity:0,left:-100},sec,fun_show_right);
        i = j;
        j--;
      }else{
        list_li.eq(i).animate({opacity:0,left:100},sec,fun_hide_right);
        j = i-1;
        list_li.eq(j).animate({opacity:0,left:-100},sec,fun_show_right);
        j--;
        i--;
      }
    },
    
    
    crsl_create_btn = function(){
      crsl_nav.after('<div id="btn_nav" class="btn_numb"></div>');
      // $(".crsl_nav").on('mouseup', '.btn_numb_1', crsl_li_show_opacity);
      
    },
    
    crsl_init = function(){
      var img_mass = new Array();
      for(a=0;a<img_col;a++){
        img_mass.push($(".crsl_list>li")[a]);
        // console.log(img_mass[a]);
        crsl_create_btn();
      };
      console.log("Массив элементов карусели");
      console.log(img_mass);
      console.log("-".repeat(20));
      console.log('Элементов в каруселе - '+img_col);
      
      crsl_img_size();
      $(".crsl_nav>.btn_numb").click(crsl_li_show_opacity);
      $(".crsl_list>li").hide();
      $(".crsl_list>li:first-child").show();
    },
    
    crsl_li_show_opacity = function(){
      if(list_li.eq(j).is(':visible')){
        console.log(j);
        list_li.eq(j).animate({opacity:1},sec,fun_hide_opacity);
        i = list_li.eq(j).index();
      }
      console.log("- "+$(this).index()+" -");
      
      list_li.eq($(this).index()-1).animate({opacity:1},sec,fun_show_opacity);
      j = list_li.eq($(this).index()-1).index();
      console.log(j);
    };


$(document).ready(crsl_init);

$(".btn_left").mouseup(crsl_li_show_left);
$(".btn_right").mouseup(crsl_li_show_right);