var 
    img = $(".crsl_list>li>img"),
    w = $(".carusel").parent().width(),
    h = $(".carusel").parent().height(),
    h_16 = Math.round(w/16),
    img_w = w,
    img_h = h_16*9,

    old_btn = 0,
    step_id = 0,
    i = 0,
    j = 0,
    sec = 500,
    img_col = img.length,
    crsl_list = $(".crsl_list"),
    list_li = $(".crsl_list>li"),
    
    link_style = $('link'),

    btn_left = $("#btn_nav.btn_left"),
    btn_numb = $(".crsl_nav>.btn_numb"),
    crsl_nav = $(".in"),
    
    // Функции анимации
    //##########################################
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
      $(this).show();},
    fun_hide_opacity = function(){
      $(this).animate({opacity:0});//конечное положение анимации
      $(this).hide();},
    
    crsl_img_size = function(){
      $(".crsl_list>li>img").css("height",h);
      console.log('|w:'+w+' | h:'+img_h+"|");
      console.log('-'.repeat(20));},
    
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
         }},
    
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
      }},
    //##########################################
    
    // Функция создания кнопок
    //##########################################
    crsl_create_btn = function(){
      crsl_nav.after('<div id="btn_nav" class="btn_numb"></div>');},
    //##########################################
    
    // Функция инициализации карусели
    //##########################################
    crsl_init = function(){
      var img_mass = new Array(), flag_stule = false;
      //console.log(link_style); 
      for(q=0;q<link_style.length;q++){
        console.log(link_style[q].href);
        str = link_style[q].href;
        if(str.search(/carousel_main\.css/)>=0){
          console.log(q+" - "+str);
          crsl_nav.after('<div id="btn_nav" class="btn_left"></div>'+
            '<div id="btn_nav" class="btn_right"></div>');
          flag_stule = true;
        }
      }
      if(flag_stule!=true){
        console.log(flag_stule);
        for(a=0;a<img_col;a++){
            img_mass.push($(".crsl_list>li")[a]);
            crsl_create_btn();
          };
      };
      console.log("Массив элементов карусели");
      console.log(img_mass);
      console.log("-".repeat(20));
      console.log('Элементов в каруселе - '+img_col);
      crsl_img_size();
      
      
      $(".crsl_nav>.btn_numb").eq(j).css("opacity",1);
      $(".crsl_nav>.btn_numb").eq(j).css("background",$("#btn_nav").css("background"));
      
      $(".crsl_nav>.btn_numb").on('click',crsl_li_show_opacity);
      $(".crsl_list>li").hide();
      $(".crsl_list>li:first-child").show();
      $(".btn_left").mouseup(crsl_li_show_left);
      $(".btn_right").mouseup(crsl_li_show_right);
      
      $(".crsl_nav>.btn_numb").eq(j).off();
    },
    //##########################################
    
    // Функция анимации появления элементов
    //##########################################
    crsl_li_show_opacity = function(){

      if(list_li.eq(j).is(':visible')){
        console.log(j);
        list_li.eq(j).animate({opacity:0},sec,fun_hide_opacity);
        i = list_li.eq(j).index();
      }
      
      console.log("Показываем - "+$(this).index()+" элемент");
      list_li.eq($(this).index()-1).animate({opacity:0},sec,fun_show_opacity);//положение из которого начинается анимация 
      j = list_li.eq($(this).index()-1).index();
      $(".crsl_nav>.btn_numb").eq(j).off();
      $(".crsl_nav>.btn_numb").eq(j).css("opacity",1);
      $(".crsl_nav>.btn_numb").eq(j).css("background",$("#btn_nav").css("background"));
      console.log('Предыдущая кнопка - '+old_btn);
      $(".crsl_nav>.btn_numb").eq(old_btn).on('click',crsl_li_show_opacity);
      $(".crsl_nav>.btn_numb").eq(old_btn).css("background",$("#btn_nav").css("background"));
      $(".crsl_nav>.btn_numb").eq(old_btn).css("opacity",0.4);
      old_btn = j;
      console.log('j='+j);
    };
    //##########################################
    
    crsl_init_new = function(){
      var now_show = 0;
      console.info("Инициализация новой карусели");
      console.log(w,h);
      var img_mass = new Array;
      for(a=0;a<img_col;a++){
        img_mass.push($(".crsl_list>li")[a]);
        // crsl_create_btn();
      };
      
      console.log('Массив элементов \n');
      console.dir(img_mass);
      list_li.css("display","none");
      console.info("Скрытие карусели");
      
      $('.buff_left').css('width',w*0.1);
      $('.buff_left').css('display','block');
      list_li.eq(1).css("display","block");
      $('.buff_right').css('width',w*0.1);
      $('.buff_right').css('display','block');
      $('.buff_left').css({
        'background':'linear-gradient(to left, rgb(255,255,255,0), rgba(255,255,255)), url("'+img[a-1].src+'")',
        'background-size':'cover'
      });
      $('.buff_right').css({
        'background':'linear-gradient(to left, rgb(255,255,255), rgba(255,255,255,0)), url("'+img[now_show+1].src+'")',
        'background-size':'cover'
      });
      
    };

$(document).ready(crsl_init_new);