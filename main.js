$(document).ready(function(){
    console.log("the document is ready!");

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event){

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){
          });
    });

    
// loads pages
        $(document).on('click', '.load-page', function(){
        var href = $(this).attr("data-href");

        $.get(href,function (hdisplayed) {
            $("#content").html( hdisplayed );
   $(window).scrollTop(0);
        });
    });
    
$(window).on('resize', function() {
    if($(window).width() > 540) {
        $('#body, #body2, #body3, #body4, #body5, #body6').addClass('limit1200');
        $('#body, #body2, #body3, #body4, #body5, #body6').removeClass('limit400');
    }else{
        $('#body, #body2, #body3, #body4, #body5, #body6').addClass('limit400');
        $('#body, #body2, #body3, #body4, #body5, #body6').removeClass('limit1200');
    }
    console.log("class executed 1");   
    });

    console.log("code executed 1");
    
    //MODAL ON PRINCIPLE CLICK    
    // Get the modal
    var modal = document.getElementById('segmentation-mod');

    var modal1 = document.getElementById('content_area_space');

    // Get the button that opens the modal
    var btnl1 = document.getElementById("l1");
    var btnl2 = document.getElementById("l2");
    var btnl3 = document.getElementById("l3");
    var btnl4 = document.getElementById("l4");
    var btnl5 = document.getElementById("l5");
    var btnl6 = document.getElementById("l6");
    var btnl7 = document.getElementById("l7");
    var btnl8 = document.getElementById("l8");
    var btnl9 = document.getElementById("l9");
    var btnl10 = document.getElementById("l10");
    var btnl11 = document.getElementById("l11");
    var btnl12 = document.getElementById("l12");
    var btnl13 = document.getElementById("l13");
    var btnl14 = document.getElementById("l14");
    var btnl15 = document.getElementById("l15");
    var btnl16 = document.getElementById("l16");
    var btnl17 = document.getElementById("l17");
    var btnl18 = document.getElementById("l18");
    var btnl19 = document.getElementById("l19");
    var btnl20 = document.getElementById("l20");
    var btnl21 = document.getElementById("l21");
    var btnl22 = document.getElementById("l22");
    var btnl23 = document.getElementById("l23");
    var btnl24 = document.getElementById("l24");
    var btnl25 = document.getElementById("l25");
    var btnl26 = document.getElementById("l26");
    var btnl27 = document.getElementById("l27");
    var btnl28 = document.getElementById("l28");
    var btnl29 = document.getElementById("l29");
    var btnl30 = document.getElementById("l30");
    var btnl31 = document.getElementById("l31");
    var btnl32 = document.getElementById("l32");
    var btnl33 = document.getElementById("l33");
    var btnl34 = document.getElementById("l34");
    var btnl35 = document.getElementById("l35");
    var btnl36 = document.getElementById("l36");
    var btnl37 = document.getElementById("l37");
    var btnl38 = document.getElementById("l38");
    var btnl39 = document.getElementById("l39");
    var ll1=0;
var ll2=0;
var ll3=0;
    var ll4=0;
    var ll5=0;
    var ll6=0;
    var ll7=0;
    var ll8=0;
    var ll9=0;
    var ll10=0;
    var ll11=0;
    var ll12=0;
    var ll13=0;
    var l114=0;
    var ll15=0;
    var ll16=0;
    var ll17=0;
    var ll18=0;
    var ll19=0;
    var ll20=0;
    var ll21=0;
    var ll22=0;
    var ll23=0;
    var ll24=0;
    var ll25=0;
    var ll26=0;
    var ll27=0;
    var ll28=0;
    var ll29=0;
    var ll30=0;
    var ll31=0;
    var ll32=0;
    var ll33=0;
    var ll34=0;
    var ll35=0;
    var ll36=0;
    var ll37=0;
    var ll38=0;
    var ll39=0;
    var btnr1 = document.getElementById("r1");
var btnr2 = document.getElementById("r2");
var btnr3 = document.getElementById("r3");
var btnr4 = document.getElementById("r4");
var btnr5 = document.getElementById("r5");
var btnr6 = document.getElementById("r6");
var btnr7 = document.getElementById("r7");
var btnr8 = document.getElementById("r8");
var btnr9 = document.getElementById("r9");
var btnr10 = document.getElementById("r10");
var btnr11 = document.getElementById("r11");
var btnr12 = document.getElementById("r12");
var btnr13 = document.getElementById("r13");
var btnr14 = document.getElementById("r14");
var btnr15 = document.getElementById("r15");
var btnr16 = document.getElementById("r16");
var btnr17 = document.getElementById("r17");
var btnr18 = document.getElementById("r18");
var btnr19 = document.getElementById("r19");
var btnr20 = document.getElementById("r20");
var btnr21 = document.getElementById("r21");
var btnr22 = document.getElementById("r22");
var btnr23 = document.getElementById("r23");
var btnr24 = document.getElementById("r24");
var btnr25 = document.getElementById("r25");
var btnr26 = document.getElementById("r26");
var btnr27 = document.getElementById("r27");
var btnr28 = document.getElementById("r28");
var btnr29 = document.getElementById("r29");
var btnr30 = document.getElementById("r30");
var btnr31 = document.getElementById("r31");
var btnr32 = document.getElementById("r32");
var btnr33 = document.getElementById("r33");
var btnr34 = document.getElementById("r34");
var btnr35 = document.getElementById("r35");
var btnr36 = document.getElementById("r36");
var btnr37 = document.getElementById("r37");
var btnr38 = document.getElementById("r38");
var btnr39 = document.getElementById("r39");
var rr1=0;
var rr2=0;
var rr3=0;
var rr4=0;
var rr5=0;
var rr6=0;
var rr7=0;
var rr8=0;
var rr9=0;
var rr10=0;
var rr11=0;
var rr12=0;
var rr13=0;
var r114=0;
var rr15=0;
var rr16=0;
var rr17=0;
var rr18=0;
var rr19=0;
var rr20=0;
var rr21=0;
var rr22=0;
var rr23=0;
var rr24=0;
var rr25=0;
var rr26=0;
var rr27=0;
var rr28=0;
var rr29=0;
var rr30=0;
var rr31=0;
var rr32=0;
var rr33=0;
var rr34=0;
var rr35=0;
var rr36=0;
var rr37=0;
var rr38=0;
var rr39=0;


    var principlesSelect1 = 0;
    var principlesSelect2 = 0;
    var modal2 = document.getElementById('extraction-mod');

    // Get the button that opens the modal
    var btn1 = document.getElementById("extraction");
    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span1 = document.getElementsByClassName("close1")[0];

    // When the user clicks the button, open the modal 
    btnl1.onclick = function() {
      console.log("button clicked");
      ll1=1;
      principlesSelect1=1;
      //        modal.style.display = "block";
    }
    btnl2.onclick = function() {
        console.log("button clicked");
        ll2=1;
        principlesSelect1=2;
        //        modal.style.display = "block";
      }
      btnl3.onclick = function() {
        console.log("button clicked");
        ll3=1;
        principlesSelect1=3;
        //        modal.style.display = "block";
      }
      btnl4.onclick = function() {
        console.log("button clicked");
        ll4=1;
        principlesSelect1=4;
        //        modal.style.display = "block";
      }
      btnl5.onclick = function() {
        console.log("button clicked");
        ll5=1;
        principlesSelect1=5;
        //        modal.style.display = "block";
      }
      btnl6.onclick = function() {
        console.log("button clicked");
        ll6=1;
        principlesSelect1=6;
        //        modal.style.display = "block";
      }
      btnl7.onclick = function() {
        console.log("button clicked");
        ll7=1;
        principlesSelect1=7;
        //        modal.style.display = "block";
      }
      btnl8.onclick = function() {
        console.log("button clicked");
        ll8=1;
        principlesSelect1=8;
        //        modal.style.display = "block";
      }
      btnl9.onclick = function() {
        console.log("button clicked");
        ll9=1;
        principlesSelect1=9;
        //        modal.style.display = "block";
      }
      btnl10.onclick = function() {
        console.log("button clicked");
        ll10=1;
        principlesSelect1=10;
        //        modal.style.display = "block";
      }
      btnl11.onclick = function() {
      console.log("button clicked");
      ll11=1;
      principlesSelect1=11;
      //        modal.style.display = "block";
    }
    btnl12.onclick = function() {
        console.log("button clicked");
        ll12=1;
        principlesSelect1=12;
        //        modal.style.display = "block";
      }
      btnl13.onclick = function() {
        console.log("button clicked");
        ll13=1;
        principlesSelect1=13;
        //        modal.style.display = "block";
      }
      btnl14.onclick = function() {
      console.log("button clicked");
      ll14=1;
      principlesSelect1=14;
      //        modal.style.display = "block";
    }
    btnl15.onclick = function() {
        console.log("button clicked");
        ll15=1;
        principlesSelect1=15;
        //        modal.style.display = "block";
      }
      btnl16.onclick = function() {
        console.log("button clicked");
        ll16=1;
        principlesSelect1=16;
        //        modal.style.display = "block";
      }
      btnl17.onclick = function() {
        console.log("button clicked");
        ll17=1;
        principlesSelect1=17;
        //        modal.style.display = "block";
      }
      btnl18.onclick = function() {
        console.log("button clicked");
        ll18=1;
        principlesSelect1=18;
        //        modal.style.display = "block";
      }
      btnl19.onclick = function() {
        console.log("button clicked");
        ll19=1;
        principlesSelect1=19;
        //        modal.style.display = "block";
      }
      btnl20.onclick = function() {
        console.log("button clicked");
        ll20=1;
        principlesSelect1=20;
        //        modal.style.display = "block";
      }
      btnl21.onclick = function() {
        console.log("button clicked");
        ll21=1;
        principlesSelect1=21;
        //        modal.style.display = "block";
      }
      btnl22.onclick = function() {
        console.log("button clicked");
        ll22=1;
        principlesSelect1=22;
        //        modal.style.display = "block";
      }
      btnl23.onclick = function() {
        console.log("button clicked");
        ll23=1;
        principlesSelect1=23;
        //        modal.style.display = "block";
      }
      btnl24.onclick = function() {
        console.log("button clicked");
        ll24=1;
        principlesSelect1=24;
        //        modal.style.display = "block";
      }
      btnl25.onclick = function() {
        console.log("button clicked");
        ll25=1;
        principlesSelect1=25;
        //        modal.style.display = "block";
      }
      btnl26.onclick = function() {
        console.log("button clicked");
        ll26=1;
        principlesSelect1=26;
        //        modal.style.display = "block";
      }
      btnl27.onclick = function() {
        console.log("button clicked");
        ll27=1;
        principlesSelect1=27;
        //        modal.style.display = "block";
      }
      btnl28.onclick = function() {
        console.log("button clicked");
        ll28=1;
        principlesSelect1=28;
        //        modal.style.display = "block";
      }
      btnl29.onclick = function() {
        console.log("button clicked");
        ll29=1;
        principlesSelect1=29;
        //        modal.style.display = "block";
      }
      btnl30.onclick = function() {
        console.log("button clicked");
        ll30=1;
        principlesSelect1=30;
        //        modal.style.display = "block";
      }
      btnl31.onclick = function() {
        console.log("button clicked");
        ll31=1;
        principlesSelect1=31;
        //        modal.style.display = "block";
      }
      btnl32.onclick = function() {
        console.log("button clicked");
        ll32=1;
        principlesSelect1=32;
        //        modal.style.display = "block";
      }
      btnl33.onclick = function() {
        console.log("button clicked");
        ll33=1;
        principlesSelect1=33;
        //        modal.style.display = "block";
      }
      btnl34.onclick = function() {
        console.log("button clicked");
        ll34=1;
        principlesSelect1=34;
        //        modal.style.display = "block";
      }
      btnl35.onclick = function() {
        console.log("button clicked");
        ll35=1;
        principlesSelect1=35;
        //        modal.style.display = "block";
      }
      btnl36.onclick = function() {
        console.log("button clicked");
        ll36=1;
        principlesSelect1=36;
        //        modal.style.display = "block";
      }
      btnl37.onclick = function() {
        console.log("button clicked");
        ll37=1;
        principlesSelect1=37;
        //        modal.style.display = "block";
      }
      btnl38.onclick = function() {
        console.log("button clicked");
        ll38=1;
        principlesSelect1=38;
        //        modal.style.display = "block";
      }
      btnl39.onclick = function() {
        console.log("button clicked");
        ll39=1;
        principlesSelect1=39;
        //        modal.style.display = "block";
      }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        principlesSelect1=0;
        principlesSelect2=0;
        rr1=0;
rr2=0;
rr3=0;
rr4=0;
rr5=0;
rr6=0;
rr7=0;
rr8=0;
rr9=0;
rr10=0;
rr11=0;
rr12=0;
rr13=0;
r114=0;
rr15=0;
rr16=0;
rr17=0;
rr18=0;
rr19=0;
rr20=0;
rr21=0;
rr22=0;
rr23=0;
rr24=0;
rr25=0;
rr26=0;
rr27=0;
rr28=0;
rr29=0;
rr30=0;
rr31=0;
rr32=0;
rr33=0;
rr34=0;
rr35=0;
rr36=0;
rr37=0;
rr38=0;
rr39=0;
ll1=0;
ll2=0;
    ll3=0;
ll4=0
    ll5=0;
    ll6=0;
    ll7=0;
    ll8=0;
    ll9=0;
    ll10=0;
    ll11=0;
    ll12=0;
    ll13=0;
    l114=0;
    ll15=0;
    ll16=0;
    ll17=0;
    ll18=0;
    ll19=0;
    ll20=0;
    ll21=0;
    ll22=0;
    ll23=0;
    ll24=0;
    ll25=0;
    ll26=0;
    ll27=0;
    ll28=0;
    ll29=0;
    ll30=0;
    ll31=0;
    ll32=0;
    ll33=0;
    ll34=0;
    ll35=0;
    ll36=0;
    ll37=0;
    ll38=0;
    ll39=0;
        
    }
    span1.onclick = function() {
        modal1.style.display = "none";
        b1=0;
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            principlesSelect1=0;
            principlesSelect2=0;
            rr1=0;
rr2=0;
rr3=0;
rr4=0;
rr5=0;
rr6=0;
rr7=0;
rr8=0;
rr9=0;
rr10=0;
rr11=0;
rr12=0;
rr13=0;
r114=0;
rr15=0;
rr16=0;
rr17=0;
rr18=0;
rr19=0;
rr20=0;
rr21=0;
rr22=0;
rr23=0;
rr24=0;
rr25=0;
rr26=0;
rr27=0;
rr28=0;
rr29=0;
rr30=0;
rr31=0;
rr32=0;
rr33=0;
rr34=0;
rr35=0;
rr36=0;
rr37=0;
rr38=0;
rr39=0;
ll1=0;
ll2=0;
    ll3=0;
ll4=0;
    ll5=0;
    ll6=0;
    ll7=0;
    ll8=0;
    ll9=0;
    ll10=0;
    ll11=0;
    ll12=0;
    ll13=0;
ll14=0;
    ll15=0;
    ll16=0;
    ll17=0;
    ll18=0;
    ll19=0;
    ll20=0;
    ll21=0;
    ll22=0;
    ll23=0;
    ll24=0;
    ll25=0;
    ll26=0;
    ll27=0;
    ll28=0;
    ll29=0;
    ll30=0;
    ll31=0;
    ll32=0;
    ll33=0;
    ll34=0;
    ll35=0;
    ll36=0;
    ll37=0;
    ll38=0;
    ll39=0;
        }
        if (event.target == modal1) {
            modal1.style.display = "none";
            b1=0;
        }
    }
    btnr1.onclick = function() {
        console.log("button clicked");
        principlesSelect2=1;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
          console.log("Princ1",principlesSelect1);
          modal.style.display = "block";
            }
      }
      btnr2.onclick = function() {
        console.log("button clicked");
        principlesSelect2=2;
        console.log("ll2",ll2);
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          console.log("Princ1",principlesSelect1);
          checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
            
    }
    }
    btnr3.onclick = function() {
      console.log("button clicked");
      principlesSelect2=3;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
        console.log("Princ1",principlesSelect1);
          modal.style.display = "block";
  }
    }
    btnr4.onclick = function() {
      console.log("button clicked");
      principlesSelect2=4;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr5.onclick = function() {
      console.log("button clicked");
      principlesSelect2=5;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr6.onclick = function() {
      console.log("button clicked");
      principlesSelect2=6;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr7.onclick = function() {
      console.log("button clicked");
      principlesSelect2=7;
      if(ll7 && principlesSelect1){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }

    btnr8.onclick = function() {
      console.log("button clicked");
      principlesSelect2=8;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr9.onclick = function() {
      console.log("button clicked");
      principlesSelect2=9;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr10.onclick = function() {
      console.log("button clicked");
      principlesSelect2=10;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }

    btnr11.onclick = function() {
      console.log("button clicked");
      principlesSelect2=11
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr12.onclick = function() {
      console.log("button clicked");
      principlesSelect2=12;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr13.onclick = function() {
      console.log("button clicked");
      principlesSelect2=13;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr14.onclick = function() {
      console.log("button clicked");
      principlesSelect2=1
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr15.onclick = function() {
      console.log("button clicked");
      principlesSelect2=15;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }

    btnr16.onclick = function() {
      console.log("button clicked");
      principlesSelect2=16;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr17.onclick = function() {
      console.log("button clicked");
      principlesSelect2=17;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr18.onclick = function() {
      console.log("button clicked");
      principlesSelect2=18;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }

    btnr19.onclick = function() {
      console.log("button clicked");
      principlesSelect2=19;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr20.onclick = function() {
      console.log("button clicked");
      principlesSelect2=20;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }

    btnr21.onclick = function() {
        console.log("button clicked");
        principlesSelect2=21
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr22.onclick = function() {
        console.log("button clicked");
        principlesSelect2=22;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr23.onclick = function() {
        console.log("button clicked");
        principlesSelect2=23;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr24.onclick = function() {
        console.log("button clicked");
        principlesSelect2=24;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr25.onclick = function() {
        console.log("button clicked");
        principlesSelect2=25;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr26.onclick = function() {
        console.log("button clicked");
        principlesSelect2=26;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr27.onclick = function() {
        console.log("button clicked");
        principlesSelect2=27;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr28.onclick = function() {
        console.log("button clicked");
        principlesSelect2=28;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr29.onclick = function() {
        console.log("button clicked");
        principlesSelect2=29;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr30.onclick = function() {
        console.log("button clicked");
        principlesSelect2=30;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr31.onclick = function() {
        console.log("button clicked");
        principlesSelect2=31;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr32.onclick = function() {
        console.log("button clicked");
        principlesSelect2=32;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr33.onclick = function() {
        console.log("button clicked");
        principlesSelect2=33;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr34.onclick = function() {
        console.log("button clicked");
        principlesSelect2=34;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr35.onclick = function() {
        console.log("button clicked");
        principlesSelect2=35
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr36.onclick = function() {
        console.log("button clicked");
        principlesSelect2=36;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr37.onclick = function() {
        console.log("button clicked");
        principlesSelect2=37;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr38.onclick = function() {
        console.log("button clicked");
        principlesSelect2=38;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr39.onclick = function() {
        console.log("button clicked");
        principlesSelect2=39;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }



  
      // When the user clicks on <span> (x), close the modal    
      function checkSelect(principlesSelect1,principlesSelect2) {
    
    
        
        
          let zasady;
        
          if(principlesSelect1 == 1 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 3) { zasady = [15,8,29,34]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 5) { zasady = [29,17,38,34]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 7) { zasady = [29,2,40,28]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 9) { zasady = [2,8,15,38]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 10) { zasady = [8,10,18,37]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 11) { zasady = [10,36,37,40]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 12) { zasady = [10,14,35,40]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 13) { zasady = [1,35,19,39]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 14) { zasady = [28,27,18,40]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 15) { zasady = [5,34,31,35]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 17) { zasady = [6,29,4,38]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 18) { zasady = [19,1,32,'']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 19) { zasady = [35,12,34,31]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 21) { zasady = [12,36,18,31]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 22) { zasady = [6,2,34,19]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 23) { zasady = [5,35,3,31]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 24) { zasady = [10,24,35,'']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 25) { zasady = [10,35,20,28]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 26) { zasady = [3,26,18,31]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 27) { zasady = [3,11,1,27]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 28) { zasady = [28,27,35,26]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 29) { zasady = [28,35,26,18]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 30) { zasady = [22,21,18,27]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 31) { zasady = [22,35,31,39]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 32) { zasady = [27,28,1,36]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 33) { zasady = [35,3,2,24]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 34) { zasady = [2,27,28,11]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 35) { zasady = [29,5,15,8]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 36) { zasady = [26,30,36,34]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 37) { zasady = [28,29,26,32]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 38) { zasady = [26,35,18,19]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 39) { zasady = [35,3,24,37]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 4) { zasady = [10,1,29,35]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 6) { zasady = [35,30,13,2]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 8) { zasady = [5,35,14,2]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 10) { zasady = [8,10,19,35]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 11) { zasady = [13,29,10,18]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 12) { zasady = [13,10,29,14]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 13) { zasady = [26,39,1,40]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 14) { zasady = [28,2,10,27]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 16) { zasady = [2,27,19,6]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 17) { zasady = [28,19,32,22]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 18) { zasady = [19,32,35,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 20) { zasady = [18,19,28,1]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 21) { zasady = [15,19,18,22]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 22) { zasady = [18,19,28,15]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 23) { zasady = [5,8,13,30]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 24) { zasady = [10,15,35,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 25) { zasady = [10,20,35,26]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 26) { zasady = [19,6,18,26]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 27) { zasady = [10,28,8,3]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 28) { zasady = [18,26,28,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 29) { zasady = [10,1,35,17]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 30) { zasady = [2,19,22,37]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 31) { zasady = [35,22,1,39]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 32) { zasady = [28,1,9,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 33) { zasady = [6,13,1,32]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 34) { zasady = [2,27,28,11]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 35) { zasady = [19,15,29,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 36) { zasady = [1,10,26,39]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 37) { zasady = [25,28,17,15]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 38) { zasady = [2,26,35,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 39) { zasady = [1,28,15,35]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 1) { zasady = [8,15,29,34]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 5) { zasady = [15,17,4,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 7) { zasady = [7,17,4,35]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 9) { zasady = [13,4,8,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 10) { zasady = [17,10,4,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 11) { zasady = [1,8,35,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 12) { zasady = [1,8,10,29]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 13) { zasady = [1,8,15,34]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 14) { zasady = [8,35,29,34]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 15) { zasady = [19,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 17) { zasady = [10,15,19,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 18) { zasady = [32,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 19) { zasady = [8,35,24,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 21) { zasady = [1,35,'','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 22) { zasady = [7,2,35,39]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 23) { zasady = [4,29,23,10]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 24) { zasady = [1,24,'','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 25) { zasady = [15,2,29,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 26) { zasady = [29,35,'','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 27) { zasady = [10,14,29,40]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 28) { zasady = [28,32,4,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 29) { zasady = [10,28,29,37]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 30) { zasady = [1,15,17,24]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 31) { zasady = [17,15,'','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 32) { zasady = [1,29,17,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 33) { zasady = [15,29,35,4]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 34) { zasady = [1,28,10,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 35) { zasady = [14,15,1,16]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 36) { zasady = [1,19,26,24]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 37) { zasady = [35,1,26,24]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 38) { zasady = [17,24,26,16]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 39) { zasady = [14,4,28,29]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 2) { zasady = [35,28,40,29]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 6) { zasady = [17,7,10,40]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 8) { zasady = [35,8,2,14]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 10) { zasady = [28,10,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 11) { zasady = [1,14,35,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 12) { zasady = [13,14,15,7]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 13) { zasady = [39,37,35,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 14) { zasady = [15,14,28,26]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 16) { zasady = [1,40,35,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 17) { zasady = [3,35,38,18]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 18) { zasady = [3,25,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 21) { zasady = [12,8,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 22) { zasady = [6,28,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 23) { zasady = [10,28,24,35]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 24) { zasady = [24,26,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 25) { zasady = [30,29,14,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 26) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 27) { zasady = [15,29,28,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 28) { zasady = [32,28,3,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 29) { zasady = [2,32,10,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 30) { zasady = [1,18,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 32) { zasady = [15,17,27,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 33) { zasady = [2,25,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 34) { zasady = [3,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 35) { zasady = [1,35,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 36) { zasady = [1,26,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 37) { zasady = [26,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 38) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 39) { zasady = [30,14,7,26]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 1) { zasady = [2,17,29,4]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 3) { zasady = [14,15,18,4]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 7) { zasady = [7,14,17,4]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 9) { zasady = [29,30,4,34]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 10) { zasady = [19,30,35,2]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 11) { zasady = [10,15,36,28]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 12) { zasady = [5,34,29,4]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 13) { zasady = [11,2,13,39]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 14) { zasady = [3,15,40,14]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 15) { zasady = [6,3,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 17) { zasady = [2,15,16,'']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 18) { zasady = [15,32,19,13]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 19) { zasady = [19,32,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 21) { zasady = [19,10,32,18]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 22) { zasady = [15,17,30,26]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 23) { zasady = [10,35,2,39]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 24) { zasady = [30,26,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 25) { zasady = [26,4,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 26) { zasady = [29,30,6,13]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 27) { zasady = [29,9,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 28) { zasady = [26,28,32,3]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 29) { zasady = [2,32,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 30) { zasady = [22,33,28,1]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 31) { zasady = [17,2,18,39]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 32) { zasady = [13,1,26,24]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 33) { zasady = [15,17,13,16]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 34) { zasady = [15,13,10,1]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 35) { zasady = [15,30,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 36) { zasady = [14,1,13,'']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 37) { zasady = [2,36,26,18]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 38) { zasady = [14,30,28,23]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 39) { zasady = [10,26,34,2]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 2) { zasady = [30,2,14,18]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 4) { zasady = [26,7,9,39]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 10) { zasady = [1,18,35,36]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 11) { zasady = [10,15,36,37]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 13) { zasady = [2,38,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 14) { zasady = [40,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 16) { zasady = [2,10,19,30]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 17) { zasady = [35,39,38,'']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 21) { zasady = [17,32,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 22) { zasady = [17,7,30,'']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 23) { zasady = [10,14,18,39]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 24) { zasady = [30,16,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 25) { zasady = [10,35,4,18]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 26) { zasady = [2,18,40,4]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 27) { zasady = [32,35,40,4]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 28) { zasady = [26,28,32,3]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 29) { zasady = [2,29,18,36]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 30) { zasady = [27,2,39,35]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 31) { zasady = [22,1,40,'']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 32) { zasady = [40,16,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 33) { zasady = [16,4,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 34) { zasady = [16,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 35) { zasady = [15,16,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 36) { zasady = [1,18,36,'']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 37) { zasady = [2,35,30,18]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 38) { zasady = [23,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 39) { zasady = [10,15,17,7]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 1) { zasady = [2,26,29,40]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 3) { zasady = [1,7,4,35]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 5) { zasady = [1,7,4,17]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 9) { zasady = [29,4,38,34]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 10) { zasady = [15,35,36,37]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 11) { zasady = [6,35,36,37]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 12) { zasady = [1,15,29,4]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 13) { zasady = [28,10,1,39]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 14) { zasady = [9,14,15,7]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 15) { zasady = [6,35,4,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 17) { zasady = [34,39,10,18]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 18) { zasady = [2,13,10,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 19) { zasady = [35,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 21) { zasady = [35,6,13,18]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 22) { zasady = [7,15,13,16]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 23) { zasady = [36,39,34,10]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 24) { zasady = [2,22,'','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 25) { zasady = [2,6,34,10]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 26) { zasady = [29,30,7,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 27) { zasady = [14,1,40,11]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 28) { zasady = [25,26,28,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 29) { zasady = [25,28,2,16]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 30) { zasady = [22,21,27,35]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 31) { zasady = [17,2,40,1]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 32) { zasady = [29,1,40,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 33) { zasady = [15,13,30,12]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 34) { zasady = [10,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 35) { zasady = [15,29,'','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 36) { zasady = [26,1,'','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 37) { zasady = [29,26,4,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 38) { zasady = [35,34,16,24]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 39) { zasady = [10,6,2,34]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 2) { zasady = [35,10,19,14]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 3) { zasady = [19,14,'','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 4) { zasady = [35,8,2,14]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 10) { zasady = [2,18,37,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 11) { zasady = [24,35,'','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 12) { zasady = [7,2,35,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 13) { zasady = [34,28,35,40]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 14) { zasady = [9,14,17,15]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 16) { zasady = [35,34,38,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 17) { zasady = [35,6,4,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 21) { zasady = [30,6,'','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 22) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 23) { zasady = [10,39,35,34]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 25) { zasady = [35,16,32,18]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 26) { zasady = [35,3,'','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 27) { zasady = [2,35,16,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 28) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 29) { zasady = [35,10,25,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 30) { zasady = [34,39,19,27]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 31) { zasady = [30,18,35,4]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 32) { zasady = [35,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 33) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 34) { zasady = [1,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 36) { zasady = [1,31,'','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 37) { zasady = [2,17,26,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 38) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 39) { zasady = [35,37,10,2]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 1) { zasady = [8,28,13,38]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 3) { zasady = [13,14,8,'']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 5) { zasady = [29,30,34,'']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 7) { zasady = [7,29,34,'']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 10) { zasady = [13,28,15,19]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 11) { zasady = [6,18,38,40]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 12) { zasady = [35,15,18,34]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 13) { zasady = [28,33,1,18]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 14) { zasady = [8,3,26,14]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 15) { zasady = [3,19,35,5]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 17) { zasady = [28,30,36,2]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 18) { zasady = [10,13,19,'']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 19) { zasady = [8,15,35,38]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 21) { zasady = [19,35,38,2]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 22) { zasady = [14,20,19,35]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 23) { zasady = [10,13,28,38]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 24) { zasady = [13,26,'','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 25) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 26) { zasady = [10,19,29,38]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 27) { zasady = [11,35,27,28]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 28) { zasady = [28,32,1,24]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 29) { zasady = [10,28,32,35]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 30) { zasady = [1,28,35,23]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 31) { zasady = [2,24,35,21]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 32) { zasady = [35,13,8,1]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 33) { zasady = [32,28,13,12]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 34) { zasady = [34,2,28,27]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 35) { zasady = [15,10,26,'']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 36) { zasady = [10,28,4,34]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 37) { zasady = [3,34,27,16]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 38) { zasady = [10,18,'','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 39) { zasady = [41,'','','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 1) { zasady = [8,1,37,18]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 2) { zasady = [18,13,1,28]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 3) { zasady = [17,19,9,36]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 4) { zasady = [28,10,'','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 5) { zasady = [19,10,15,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 6) { zasady = [1,18,36,37]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 7) { zasady = [15,9,12,37]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 8) { zasady = [2,36,18,37]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 9) { zasady = [13,28,15,12]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 10) { zasady = [41,'','','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 11) { zasady = [18,21,11,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 12) { zasady = [10,35,40,34]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 13) { zasady = [35,10,21,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 14) { zasady = [35,10,14,27]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 15) { zasady = [19,2,'','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 17) { zasady = [35,10,21,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 19) { zasady = [19,17,10,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 20) { zasady = [1,16,36,37]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 21) { zasady = [19,35,18,37]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 22) { zasady = [14,15,'','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 23) { zasady = [8,35,40,5]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 25) { zasady = [10,37,36,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 26) { zasady = [14,29,18,36]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 27) { zasady = [3,35,13,21]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 28) { zasady = [35,10,23,24]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 29) { zasady = [28,29,37,36]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 30) { zasady = [1,35,40,18]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 31) { zasady = [13,3,36,24]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 32) { zasady = [15,37,18,1]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 33) { zasady = [1,28,3,25]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 34) { zasady = [15,1,11,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 35) { zasady = [15,17,18,20]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 36) { zasady = [26,35,10,18]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 37) { zasady = [36,37,10,19]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 38) { zasady = [2,35,'','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 39) { zasady = [3,28,35,37]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 1) { zasady = [10,36,37,40]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 2) { zasady = [13,29,10,18]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 3) { zasady = [35,10,36,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 4) { zasady = [35,1,14,16]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 5) { zasady = [10,15,36,28]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 6) { zasady = [10,15,36,37]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 7) { zasady = [6,35,10,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 8) { zasady = [35,24,'','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 9) { zasady = [6,35,36,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 10) { zasady = [36,35,21,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 12) { zasady = [35,4,15,10]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 13) { zasady = [35,33,2,40]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 14) { zasady = [9,18,3,40]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 15) { zasady = [19,3,27,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 17) { zasady = [35,39,19,2]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 19) { zasady = [14,24,10,37]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 21) { zasady = [10,35,14,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 22) { zasady = [2,36,25,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 23) { zasady = [10,36,3,37]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 25) { zasady = [37,36,4,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 26) { zasady = [10,14,36,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 27) { zasady = [10,13,19,35]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 28) { zasady = [6,28,25,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 29) { zasady = [3,35,'','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 30) { zasady = [22,2,37,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 31) { zasady = [2,33,27,18]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 32) { zasady = [1,35,16,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 33) { zasady = [11,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 34) { zasady = [2,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 35) { zasady = [35,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 36) { zasady = [19,1,35,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 37) { zasady = [2,36,37,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 38) { zasady = [35,24,'','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 39) { zasady = [10,14,35,37]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 1) { zasady = [8,10,29,40]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 2) { zasady = [15,10,26,3]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 3) { zasady = [29,34,5,4]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 4) { zasady = [13,14,10,7]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 5) { zasady = [5,34,4,10]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 7) { zasady = [14,4,15,22]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 8) { zasady = [7,2,35,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 9) { zasady = [35,15,34,18]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 10) { zasady = [35,10,37,40]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 11) { zasady = [34,15,10,14]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 13) { zasady = [33,1,18,4]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 14) { zasady = [30,14,10,40]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 15) { zasady = [14,26,9,25]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 17) { zasady = [22,14,19,32]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 18) { zasady = [13,15,32,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 19) { zasady = [2,6,34,14]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 21) { zasady = [4,6,2,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 22) { zasady = [14,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 23) { zasady = [35,29,3,5]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 25) { zasady = [14,10,34,17]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 26) { zasady = [36,22,'','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 27) { zasady = [10,40,16,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 28) { zasady = [28,32,1,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 29) { zasady = [32,30,40,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 30) { zasady = [22,1,2,35]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 31) { zasady = [35,1,'','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 32) { zasady = [1,32,17,28]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 33) { zasady = [32,15,26,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 34) { zasady = [2,13,1,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 35) { zasady = [1,15,29,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 36) { zasady = [16,29,1,28]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 37) { zasady = [15,13,39,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 38) { zasady = [15,1,32,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 39) { zasady = [17,26,34,10]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 1) { zasady = [21,35,2,39]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 2) { zasady = [26,39,1,40]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 3) { zasady = [13,15,1,28]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 4) { zasady = [37,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 5) { zasady = [2,11,13,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 6) { zasady = [39,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 7) { zasady = [28,10,19,39]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 8) { zasady = [34,28,35,40]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 9) { zasady = [33,15,28,18]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 10) { zasady = [10,35,21,16]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 11) { zasady = [2,35,40,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 12) { zasady = [22,1,18,4]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 13) { zasady = [41,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 14) { zasady = [17,9,15,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 15) { zasady = [13,27,10,35]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 16) { zasady = [39,3,35,23]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 17) { zasady = [35,1,32,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 18) { zasady = [32,3,27,15]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 19) { zasady = [13,19,'','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 20) { zasady = [27,4,29,18]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 21) { zasady = [32,35,27,31]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 22) { zasady = [14,2,39,6]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 23) { zasady = [2,14,30,40]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 25) { zasady = [35,27,'','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 26) { zasady = [15,32,35,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 27) { zasady = [41,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 28) { zasady = [13,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 29) { zasady = [18,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 30) { zasady = [35,24,30,18]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 31) { zasady = [35,40,27,39]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 32) { zasady = [35,19,'','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 33) { zasady = [32,35,30,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 34) { zasady = [2,35,10,16]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 35) { zasady = [35,30,34,2]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 36) { zasady = [2,35,22,26]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 37) { zasady = [35,22,39,23]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 38) { zasady = [1,8,35,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 39) { zasady = [23,35,40,3]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 1) { zasady = [1,8,40,15]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 2) { zasady = [40,26,27,1]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 3) { zasady = [1,15,8,35]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 4) { zasady = [15,14,28,26]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 5) { zasady = [3,34,40,29]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 6) { zasady = [9,40,28,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 7) { zasady = [10,15,14,7]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 8) { zasady = [9,14,17,15]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 9) { zasady = [8,13,26,14]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 10) { zasady = [10,18,3,14]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 11) { zasady = [10,3,18,40]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 12) { zasady = [10,30,35,40]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 13) { zasady = [13,17,35,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 14) { zasady = [41,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 15) { zasady = [27,3,26,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 17) { zasady = [30,10,40,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 18) { zasady = [35,19,'','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 19) { zasady = [19,35,10,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 20) { zasady = [35,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 21) { zasady = [10,26,35,28]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 22) { zasady = [35,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 23) { zasady = [35,28,31,40]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 25) { zasady = [29,3,28,10]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 26) { zasady = [29,10,27,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 27) { zasady = [11,3,'','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 28) { zasady = [3,27,16,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 29) { zasady = [3,27,'','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 30) { zasady = [18,35,37,1]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 31) { zasady = [15,35,22,2]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 32) { zasady = [11,3,10,32]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 33) { zasady = [32,40,28,2]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 34) { zasady = [27,11,3,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 35) { zasady = [15,3,32,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 36) { zasady = [2,13,28,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 37) { zasady = [27,3,15,40]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 38) { zasady = [15,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 39) { zasady = [29,35,10,14]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 1) { zasady = [19,5,34,31]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 3) { zasady = [2,19,9,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 5) { zasady = [3,17,19,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 7) { zasady = [10,2,19,30]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 9) { zasady = [3,35,5,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 10) { zasady = [19,2,16,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 11) { zasady = [19,3,27,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 12) { zasady = [14,26,28,25]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 13) { zasady = [13,3,35,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 14) { zasady = [27,3,10,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 17) { zasady = [19,35,39,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 18) { zasady = [2,19,4,35]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 19) { zasady = [28,6,35,18]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 21) { zasady = [19,10,35,38]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 22) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 23) { zasady = [28,27,3,18]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 24) { zasady = [10,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 25) { zasady = [20,10,28,18]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 26) { zasady = [3,35,10,40]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 27) { zasady = [11,2,13,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 28) { zasady = [3,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 29) { zasady = [3,27,16,40]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 30) { zasady = [22,15,33,28]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 31) { zasady = [21,39,16,22]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 32) { zasady = [27,1,4,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 33) { zasady = [12,27,'','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 34) { zasady = [29,10,27,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 35) { zasady = [1,35,13,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 36) { zasady = [10,4,29,15]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 37) { zasady = [19,29,39,35]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 38) { zasady = [6,10,'','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 39) { zasady = [35,17,14,19]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 2) { zasady = [6,27,19,16]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 4) { zasady = [1,40,35,'']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 8) { zasady = [35,34,38,'']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 10) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 13) { zasady = [39,3,35,23]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 14) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 17) { zasady = [19,18,36,40]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 21) { zasady = [16,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 22) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 23) { zasady = [27,16,18,38]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 24) { zasady = [10,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 25) { zasady = [28,20,10,16]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 26) { zasady = [3,35,31,'']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 27) { zasady = [34,27,6,40]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 28) { zasady = [10,26,24,'']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 30) { zasady = [17,1,40,33]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 31) { zasady = [22,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 32) { zasady = [35,10,'','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 33) { zasady = [1,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 34) { zasady = [1,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 35) { zasady = [2,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 36) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 37) { zasady = [25,34,6,35]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 38) { zasady = [1,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 39) { zasady = [20,10,16,38]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 1) { zasady = [36,22,6,38]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 2) { zasady = [22,35,32,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 3) { zasady = [15,19,9,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 4) { zasady = [15,19,9,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 5) { zasady = [3,35,39,18]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 6) { zasady = [35,38,'','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 7) { zasady = [34,39,40,18]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 8) { zasady = [35,6,4,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 9) { zasady = [2,28,36,30]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 10) { zasady = [35,10,3,21]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 11) { zasady = [35,39,19,2]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 12) { zasady = [14,22,19,32]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 13) { zasady = [1,35,32,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 14) { zasady = [10,30,22,40]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 15) { zasady = [19,13,39,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 16) { zasady = [19,18,36,40]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 17) { zasady = [41,'','','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 18) { zasady = [32,30,21,16]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 19) { zasady = [19,15,3,17]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 21) { zasady = [2,14,17,25]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 22) { zasady = [21,17,35,38]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 23) { zasady = [21,36,39,31]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 25) { zasady = [35,28,21,18]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 26) { zasady = [3,17,30,39]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 27) { zasady = [19,35,3,10]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 28) { zasady = [32,19,24,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 29) { zasady = [24,'','','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 30) { zasady = [22,33,35,2]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 31) { zasady = [22,35,2,24]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 32) { zasady = [26,27,'','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 33) { zasady = [26,27,'','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 34) { zasady = [4,10,16,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 35) { zasady = [2,18,27,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 36) { zasady = [2,17,16,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 37) { zasady = [3,27,35,31]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 38) { zasady = [26,2,19,16]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 39) { zasady = [15,28,35,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 1) { zasady = [19,1,32,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 2) { zasady = [2,35,32,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 3) { zasady = [19,32,16,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 5) { zasady = [19,32,26,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 7) { zasady = [2,13,10,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 9) { zasady = [10,13,19,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 10) { zasady = [26,19,6,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 12) { zasady = [32,30,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 13) { zasady = [32,3,27,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 14) { zasady = [35,19,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 15) { zasady = [2,19,6,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 17) { zasady = [32,35,19,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 19) { zasady = [32,1,19,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 20) { zasady = [32,35,1,15]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 21) { zasady = [32,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 22) { zasady = [13,16,1,6]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 23) { zasady = [13,1,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 24) { zasady = [1,6,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 25) { zasady = [19,1,26,17]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 26) { zasady = [1,19,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 27) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 28) { zasady = [11,15,32,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 29) { zasady = [3,32,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 30) { zasady = [15,19,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 31) { zasady = [35,19,32,39]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 32) { zasady = [19,35,28,26]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 33) { zasady = [28,26,19,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 34) { zasady = [15,17,13,16]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 35) { zasady = [15,1,19,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 36) { zasady = [6,32,13,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 37) { zasady = [32,15,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 38) { zasady = [2,26,10,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 39) { zasady = [2,25,16,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 1) { zasady = [12,18,28,31]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 3) { zasady = [12,28,'','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 5) { zasady = [15,19,25,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 7) { zasady = [35,13,18,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 9) { zasady = [8,15,35,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 10) { zasady = [16,26,21,2]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 11) { zasady = [23,14,25,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 12) { zasady = [12,2,29,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 13) { zasady = [19,13,17,24]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 14) { zasady = [5,19,9,35]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 15) { zasady = [28,35,6,18]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 17) { zasady = [19,24,3,14]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 18) { zasady = [2,15,19,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 21) { zasady = [6,19,37,18]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 22) { zasady = [12,22,15,24]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 23) { zasady = [35,24,18,5]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 25) { zasady = [35,38,19,18]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 26) { zasady = [34,23,16,18]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 27) { zasady = [19,21,11,27]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 28) { zasady = [3,1,32,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 30) { zasady = [1,35,6,27]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 31) { zasady = [2,35,6,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 32) { zasady = [28,26,30,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 33) { zasady = [19,35,'','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 34) { zasady = [1,15,17,28]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 35) { zasady = [15,17,13,16]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 36) { zasady = [2,29,27,28]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 37) { zasady = [35,38,'','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 38) { zasady = [32,2,'','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 39) { zasady = [12,28,35,'']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 2) { zasady = [19,9,6,27]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 10) { zasady = [36,37,'','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 13) { zasady = [27,4,29,18]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 14) { zasady = [35,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 17) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 18) { zasady = [19,2,35,32]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 21) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 22) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 23) { zasady = [28,27,18,31]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 25) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 26) { zasady = [3,35,31,'']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 27) { zasady = [10,36,23,'']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 28) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 30) { zasady = [10,2,22,37]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 31) { zasady = [19,22,18,'']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 32) { zasady = [1,4,'','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 33) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 34) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 36) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 37) { zasady = [19,35,16,25]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 38) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 39) { zasady = [1,6,'','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 1) { zasady = [8,36,38,31]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 2) { zasady = [19,26,17,27]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 3) { zasady = [1,10,35,37]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 5) { zasady = [19,38,'','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 6) { zasady = [17,32,13,38]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 7) { zasady = [35,6,38,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 8) { zasady = [30,6,25,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 9) { zasady = [15,35,2,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 10) { zasady = [26,2,36,35]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 11) { zasady = [22,10,35,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 12) { zasady = [29,14,2,40]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 13) { zasady = [35,32,15,31]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 14) { zasady = [26,10,28,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 15) { zasady = [19,35,10,38]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 16) { zasady = [16,'','','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 17) { zasady = [2,14,17,25]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 18) { zasady = [16,6,19,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 19) { zasady = [16,6,19,37]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 21) { zasady = [41,'','','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 22) { zasady = [10,35,38,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 23) { zasady = [28,27,18,38]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 24) { zasady = [10,19,'','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 25) { zasady = [35,20,10,6]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 26) { zasady = [4,34,19,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 27) { zasady = [19,24,26,31]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 28) { zasady = [32,15,2,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 29) { zasady = [32,2,'','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 30) { zasady = [19,22,31,2]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 31) { zasady = [2,35,18,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 32) { zasady = [26,10,34,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 33) { zasady = [26,35,10,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 34) { zasady = [35,2,10,34]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 35) { zasady = [19,17,34,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 36) { zasady = [20,19,30,34]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 37) { zasady = [19,35,16,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 38) { zasady = [28,2,17,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 39) { zasady = [28,35,34,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 1) { zasady = [15,6,19,28]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 2) { zasady = [19,6,18,9]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 3) { zasady = [7,2,6,13]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 4) { zasady = [6,38,7,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 5) { zasady = [15,26,17,30]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 6) { zasady = [17,7,30,18]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 7) { zasady = [7,18,23,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 8) { zasady = [7,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 9) { zasady = [16,35,38,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 10) { zasady = [36,38,'','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 13) { zasady = [14,2,39,6]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 14) { zasady = [26,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 17) { zasady = [19,38,7,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 18) { zasady = [1,13,32,15]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 21) { zasady = [3,38,'','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 22) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 23) { zasady = [35,27,2,37]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 24) { zasady = [19,10,'','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 25) { zasady = [10,18,32,7]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 26) { zasady = [7,18,25,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 27) { zasady = [11,10,35,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 28) { zasady = [32,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 30) { zasady = [21,22,35,2]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 31) { zasady = [21,35,2,22]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 32) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 33) { zasady = [35,32,1,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 34) { zasady = [2,19,'','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 36) { zasady = [7,23,'','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 37) { zasady = [35,3,15,23]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 38) { zasady = [2,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 39) { zasady = [28,10,29,35]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 1) { zasady = [35,6,23,40]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 2) { zasady = [35,6,22,32]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 3) { zasady = [14,29,10,39]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 4) { zasady = [10,28,24,'']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 5) { zasady = [35,2,10,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 6) { zasady = [10,18,39,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 7) { zasady = [1,29,30,36]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 8) { zasady = [3,39,18,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 9) { zasady = [10,13,28,38]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 10) { zasady = [14,15,18,40]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 11) { zasady = [3,36,37,10]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 12) { zasady = [29,35,3,5]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 13) { zasady = [2,14,30,40]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 14) { zasady = [35,28,31,40]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 15) { zasady = [28,27,3,18]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 16) { zasady = [27,16,18,38]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 17) { zasady = [21,36,39,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 18) { zasady = [1,6,13,'']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 19) { zasady = [35,18,24,5]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 20) { zasady = [28,27,12,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 21) { zasady = [28,27,18,38]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 22) { zasady = [35,27,2,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 23) { zasady = [41,'','','']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 25) { zasady = [15,18,35,10]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 26) { zasady = [6,3,10,24]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 27) { zasady = [10,29,39,35]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 28) { zasady = [16,34,31,28]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 29) { zasady = [35,10,24,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 30) { zasady = [33,22,30,40]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 31) { zasady = [10,1,34,29]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 32) { zasady = [15,34,33,'']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 33) { zasady = [32,28,2,24]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 34) { zasady = [2,35,34,27]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 35) { zasady = [15,10,2,'']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 36) { zasady = [35,10,28,24]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 37) { zasady = [35,18,10,13]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 38) { zasady = [35,10,18,'']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 39) { zasady = [28,35,10,23]; }
          if(principlesSelect1 == 24 && principlesSelect2 == 1) { zasady = [10,24,35,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 2) { zasady = [10,35,5,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 3) { zasady = [1,26,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 4) { zasady = [26,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 5) { zasady = [30,26,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 6) { zasady = [30,16,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 7) { zasady = [2,22,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 8) { zasady = [26,32,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 10) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 13) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 14) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 15) { zasady = [10,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 16) { zasady = [10,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 17) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 18) { zasady = [19,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 21) { zasady = [10,19,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 22) { zasady = [19,10,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 23) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 25) { zasady = [24,26,28,32]; }
          if(principlesSelect1 == 24 && principlesSelect2 == 26) { zasady = [24,28,35,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 27) { zasady = [10,28,23,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 28) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 30) { zasady = [22,10,1,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 31) { zasady = [10,21,22,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 32) { zasady = [32,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 33) { zasady = [27,22,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 34) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 36) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 37) { zasady = [35,33,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 38) { zasady = [35,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 39) { zasady = [13,23,15,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 1) { zasady = [10,20,37,35]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 2) { zasady = [10,20,26,5]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 3) { zasady = [15,2,29,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 4) { zasady = [30,24,14,5]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 5) { zasady = [26,4,5,16]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 6) { zasady = [10,35,17,4]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 7) { zasady = [2,5,34,10]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 8) { zasady = [35,16,32,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 10) { zasady = [10,37,36,5]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 11) { zasady = [37,36,4,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 12) { zasady = [4,10,34,17]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 13) { zasady = [35,3,22,5]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 14) { zasady = [29,3,28,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 15) { zasady = [20,10,28,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 16) { zasady = [28,20,10,16]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 17) { zasady = [35,29,21,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 18) { zasady = [1,19,26,17]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 19) { zasady = [35,38,19,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 20) { zasady = [1,'','','']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 21) { zasady = [35,20,10,6]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 22) { zasady = [10,5,18,32]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 23) { zasady = [35,18,10,39]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 24) { zasady = [24,26,28,32]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 25) { zasady = [41,'','','']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 26) { zasady = [35,38,18,16]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 27) { zasady = [10,30,4,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 28) { zasady = [24,34,28,32]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 29) { zasady = [24,26,28,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 30) { zasady = [35,18,34,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 31) { zasady = [35,22,18,39]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 32) { zasady = [35,28,34,4]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 33) { zasady = [4,28,10,34]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 34) { zasady = [32,1,10,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 35) { zasady = [35,28,'','']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 36) { zasady = [6,29,'','']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 37) { zasady = [18,28,32,10]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 38) { zasady = [24,28,35,30]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 39) { zasady = [41,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 1) { zasady = [35,6,18,31]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 2) { zasady = [27,26,18,35]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 3) { zasady = [29,14,35,18]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 5) { zasady = [15,14,29,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 6) { zasady = [2,18,40,4]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 7) { zasady = [15,20,29,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 9) { zasady = [35,29,34,28]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 10) { zasady = [35,14,3,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 11) { zasady = [10,36,14,3]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 12) { zasady = [35,14,'','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 13) { zasady = [15,2,17,40]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 14) { zasady = [14,35,34,10]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 15) { zasady = [3,35,10,40]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 16) { zasady = [3,35,31,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 17) { zasady = [3,17,39,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 19) { zasady = [34,29,16,18]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 20) { zasady = [3,35,31,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 21) { zasady = [35,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 22) { zasady = [7,18,25,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 23) { zasady = [6,3,10,24]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 24) { zasady = [24,28,35,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 25) { zasady = [35,38,18,16]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 26) { zasady = [41,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 27) { zasady = [18,3,28,40]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 28) { zasady = [3,2,28,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 29) { zasady = [33,30,'','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 30) { zasady = [35,33,29,31]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 31) { zasady = [3,35,40,39]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 32) { zasady = [29,1,35,27]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 33) { zasady = [35,29,25,10]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 34) { zasady = [2,32,10,25]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 35) { zasady = [15,3,29,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 36) { zasady = [3,13,27,10]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 37) { zasady = [3,27,29,18]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 38) { zasady = [8,35,'','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 39) { zasady = [13,29,3,27]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 1) { zasady = [3,8,10,40]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 2) { zasady = [3,10,8,28]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 3) { zasady = [15,9,14,4]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 4) { zasady = [15,29,28,11]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 5) { zasady = [17,10,14,16]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 6) { zasady = [32,35,40,4]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 7) { zasady = [3,10,14,24]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 8) { zasady = [2,35,24,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 9) { zasady = [21,35,11,28]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 10) { zasady = [8,28,10,3]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 11) { zasady = [10,24,35,19]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 12) { zasady = [35,1,16,11]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 13) { zasady = [41,'','','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 14) { zasady = [11,28,'','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 15) { zasady = [2,35,3,25]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 16) { zasady = [34,27,6,40]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 17) { zasady = [3,35,10,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 18) { zasady = [11,32,13,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 19) { zasady = [21,11,27,19]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 20) { zasady = [36,23,'','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 21) { zasady = [21,11,26,31]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 22) { zasady = [10,11,35,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 23) { zasady = [10,35,29,39]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 24) { zasady = [10,28,'','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 25) { zasady = [10,30,4,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 26) { zasady = [21,28,40,3]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 27) { zasady = [41,'','','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 28) { zasady = [32,3,11,23]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 29) { zasady = [11,32,1,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 30) { zasady = [27,35,2,40]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 31) { zasady = [35,2,40,26]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 32) { zasady = [41,'','','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 33) { zasady = [27,17,40,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 34) { zasady = [1,11,'','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 35) { zasady = [13,35,8,24]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 36) { zasady = [13,35,1,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 37) { zasady = [27,40,28,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 38) { zasady = [11,13,27,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 39) { zasady = [1,35,29,38]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 1) { zasady = [32,35,26,28]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 2) { zasady = [28,35,25,26]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 3) { zasady = [28,26,5,16]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 4) { zasady = [32,28,3,16]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 5) { zasady = [26,28,32,3]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 6) { zasady = [26,28,32,3]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 7) { zasady = [32,13,6,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 9) { zasady = [28,13,32,24]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 10) { zasady = [32,2,'','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 11) { zasady = [6,28,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 12) { zasady = [6,28,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 13) { zasady = [32,35,13,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 14) { zasady = [28,6,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 15) { zasady = [28,6,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 16) { zasady = [10,26,24,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 17) { zasady = [6,19,28,24]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 18) { zasady = [6,1,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 19) { zasady = [3,6,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 21) { zasady = [3,6,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 22) { zasady = [26,32,27,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 23) { zasady = [10,16,31,28]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 25) { zasady = [24,34,28,32]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 26) { zasady = [2,6,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 27) { zasady = [5,11,1,23]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 28) { zasady = [41,'','','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 30) { zasady = [28,24,22,26]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 31) { zasady = [3,33,39,10]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 32) { zasady = [6,35,25,18]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 33) { zasady = [1,13,17,34]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 34) { zasady = [1,32,13,11]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 35) { zasady = [13,35,2,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 36) { zasady = [27,35,10,34]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 37) { zasady = [26,24,32,28]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 38) { zasady = [28,2,10,34]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 39) { zasady = [10,34,28,32]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 1) { zasady = [28,32,13,18]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 2) { zasady = [28,35,27,9]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 3) { zasady = [10,28,29,37]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 4) { zasady = [2,32,10,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 5) { zasady = [28,33,29,32]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 6) { zasady = [2,29,18,36]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 7) { zasady = [32,28,2,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 8) { zasady = [25,10,35,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 9) { zasady = [10,28,32,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 10) { zasady = [28,19,34,36]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 11) { zasady = [3,35,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 12) { zasady = [32,30,40,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 13) { zasady = [30,18,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 14) { zasady = [3,27,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 15) { zasady = [3,27,40,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 17) { zasady = [19,26,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 18) { zasady = [3,32,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 19) { zasady = [32,2,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 21) { zasady = [32,2,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 22) { zasady = [13,32,2,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 23) { zasady = [35,31,10,24]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 25) { zasady = [32,26,28,18]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 26) { zasady = [32,30,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 27) { zasady = [11,32,1,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 28) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 30) { zasady = [26,28,10,36]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 31) { zasady = [4,17,34,26]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 32) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 33) { zasady = [1,32,35,23]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 34) { zasady = [25,10,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 36) { zasady = [26,2,18,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 37) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 38) { zasady = [26,28,18,23]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 39) { zasady = [10,18,32,39]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 1) { zasady = [22,21,27,39]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 2) { zasady = [2,22,13,24]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 3) { zasady = [17,1,39,4]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 4) { zasady = [1,18,'','']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 5) { zasady = [22,1,33,28]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 6) { zasady = [27,2,39,35]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 7) { zasady = [22,23,37,35]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 8) { zasady = [34,39,19,27]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 9) { zasady = [21,22,35,28]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 10) { zasady = [13,35,39,18]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 11) { zasady = [22,2,37,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 12) { zasady = [22,1,3,35]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 13) { zasady = [35,24,30,18]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 14) { zasady = [18,35,37,1]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 15) { zasady = [22,15,33,28]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 16) { zasady = [17,1,40,33]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 17) { zasady = [22,33,35,2]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 18) { zasady = [1,19,32,13]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 19) { zasady = [1,24,6,27]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 20) { zasady = [10,2,22,37]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 21) { zasady = [19,22,31,2]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 22) { zasady = [21,22,35,2]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 23) { zasady = [33,22,19,40]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 24) { zasady = [22,10,2,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 25) { zasady = [35,18,34,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 26) { zasady = [35,33,29,31]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 27) { zasady = [27,24,2,40]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 28) { zasady = [28,33,23,26]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 29) { zasady = [26,28,10,18]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 30) { zasady = [41,'','','']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 32) { zasady = [24,35,2,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 33) { zasady = [2,25,28,39]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 34) { zasady = [35,10,2,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 35) { zasady = [35,11,22,31]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 36) { zasady = [22,19,29,40]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 37) { zasady = [22,19,29,40]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 38) { zasady = [33,3,34,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 39) { zasady = [22,35,13,24]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 1) { zasady = [19,22,15,39]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 2) { zasady = [35,22,1,39]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 3) { zasady = [17,15,16,22]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 5) { zasady = [17,2,18,39]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 6) { zasady = [22,1,40,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 7) { zasady = [17,2,40,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 8) { zasady = [30,18,35,4]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 9) { zasady = [35,28,3,23]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 10) { zasady = [35,28,1,40]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 11) { zasady = [2,33,27,18]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 12) { zasady = [35,1,'','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 13) { zasady = [35,40,27,39]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 14) { zasady = [15,35,22,2]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 15) { zasady = [15,22,33,31]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 16) { zasady = [21,39,16,22]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 17) { zasady = [22,35,2,24]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 18) { zasady = [19,24,39,32]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 19) { zasady = [2,35,6,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 20) { zasady = [19,22,18,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 21) { zasady = [2,35,18,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 22) { zasady = [21,35,2,22]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 23) { zasady = [10,1,34,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 24) { zasady = [10,21,29,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 25) { zasady = [1,22,'','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 26) { zasady = [3,24,39,1]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 27) { zasady = [24,2,40,39]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 28) { zasady = [3,33,26,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 29) { zasady = [4,17,34,26]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 30) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 32) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 33) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 34) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 36) { zasady = [19,1,31,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 37) { zasady = [2,21,27,1]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 38) { zasady = [2,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 39) { zasady = [22,35,18,39]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 1) { zasady = [28,29,15,16]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 2) { zasady = [1,27,36,13]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 3) { zasady = [1,29,13,17]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 4) { zasady = [15,17,27,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 5) { zasady = [13,1,26,12]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 6) { zasady = [16,40,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 7) { zasady = [13,29,1,40]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 8) { zasady = [35,'','','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 9) { zasady = [35,13,8,1]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 10) { zasady = [35,12,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 11) { zasady = [35,19,1,37]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 12) { zasady = [1,28,13,27]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 13) { zasady = [11,13,1,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 14) { zasady = [1,3,10,32]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 15) { zasady = [27,1,4,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 16) { zasady = [35,16,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 17) { zasady = [27,26,18,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 18) { zasady = [28,24,27,1]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 19) { zasady = [28,26,27,1]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 20) { zasady = [1,4,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 21) { zasady = [27,1,12,24]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 22) { zasady = [19,35,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 23) { zasady = [15,34,33,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 24) { zasady = [32,24,18,16]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 25) { zasady = [35,28,34,4]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 26) { zasady = [35,23,1,24]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 27) { zasady = [41,'','','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 28) { zasady = [1,35,12,18]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 30) { zasady = [24,2,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 32) { zasady = [41,'','','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 33) { zasady = [2,5,13,16]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 34) { zasady = [35,1,11,9]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 35) { zasady = [2,13,15,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 36) { zasady = [27,26,1,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 37) { zasady = [6,28,11,1]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 38) { zasady = [8,28,1,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 39) { zasady = [35,1,10,28]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 1) { zasady = [25,2,13,15]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 2) { zasady = [6,13,1,25]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 3) { zasady = [1,17,13,12]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 5) { zasady = [1,17,13,16]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 6) { zasady = [18,16,15,39]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 7) { zasady = [1,16,35,15]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 8) { zasady = [4,18,39,31]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 9) { zasady = [18,13,34,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 10) { zasady = [28,13,35,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 11) { zasady = [2,32,12,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 12) { zasady = [15,34,29,28]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 13) { zasady = [32,35,30,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 14) { zasady = [32,40,3,28]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 15) { zasady = [29,3,8,25]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 16) { zasady = [1,16,25,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 17) { zasady = [26,27,13,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 18) { zasady = [13,17,1,24]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 19) { zasady = [1,13,24,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 21) { zasady = [35,34,2,10]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 22) { zasady = [2,19,13,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 23) { zasady = [28,32,2,24]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 24) { zasady = [4,10,27,22]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 25) { zasady = [4,28,10,34]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 26) { zasady = [12,35,'','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 27) { zasady = [17,27,8,40]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 28) { zasady = [25,13,2,34]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 29) { zasady = [1,32,35,23]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 30) { zasady = [2,25,28,39]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 32) { zasady = [2,5,12,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 33) { zasady = [41,'','','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 34) { zasady = [12,26,1,32]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 35) { zasady = [15,34,1,16]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 36) { zasady = [32,26,12,17]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 37) { zasady = [41,'','','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 38) { zasady = [1,34,12,3]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 39) { zasady = [15,1,28,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 1) { zasady = [2,27,35,11]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 2) { zasady = [2,27,35,11]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 3) { zasady = [1,28,10,25]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 4) { zasady = [3,18,31,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 5) { zasady = [15,13,32,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 6) { zasady = [16,25,'','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 7) { zasady = [25,2,35,11]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 8) { zasady = [1,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 9) { zasady = [34,9,'','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 10) { zasady = [1,11,10,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 11) { zasady = [13,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 12) { zasady = [1,13,2,4]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 13) { zasady = [2,35,'','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 14) { zasady = [1,11,2,9]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 15) { zasady = [11,29,28,27]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 16) { zasady = [1,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 17) { zasady = [4,10,'','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 18) { zasady = [15,1,13,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 19) { zasady = [15,1,28,16]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 21) { zasady = [15,10,32,2]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 22) { zasady = [15,1,32,19]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 23) { zasady = [2,35,34,27]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 25) { zasady = [32,1,10,25]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 26) { zasady = [2,28,10,25]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 27) { zasady = [11,10,1,16]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 28) { zasady = [10,2,13,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 29) { zasady = [25,10,'','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 30) { zasady = [35,10,2,16]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 32) { zasady = [1,35,11,10]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 33) { zasady = [1,12,26,15]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 34) { zasady = [41,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 35) { zasady = [7,1,4,16]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 36) { zasady = [35,1,13,11]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 37) { zasady = [41,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 38) { zasady = [34,35,7,13]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 39) { zasady = [1,32,10,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 1) { zasady = [1,6,15,8]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 2) { zasady = [19,15,29,16]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 3) { zasady = [35,1,29,2]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 4) { zasady = [1,35,16,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 5) { zasady = [35,30,29,7]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 6) { zasady = [15,16,'','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 7) { zasady = [15,35,29,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 9) { zasady = [35,10,14,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 10) { zasady = [15,17,20,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 11) { zasady = [35,16,'','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 12) { zasady = [15,37,1,8]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 13) { zasady = [35,30,14,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 14) { zasady = [35,3,32,6]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 15) { zasady = [13,1,35,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 16) { zasady = [2,16,'','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 17) { zasady = [27,2,3,35]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 18) { zasady = [6,22,26,1]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 19) { zasady = [19,35,29,13]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 21) { zasady = [19,1,29,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 22) { zasady = [18,15,1,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 23) { zasady = [15,10,2,13]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 25) { zasady = [35,28,'','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 26) { zasady = [3,35,15,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 27) { zasady = [35,13,8,24]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 28) { zasady = [35,5,1,10]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 30) { zasady = [35,11,32,31]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 32) { zasady = [1,13,31,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 33) { zasady = [15,34,1,16]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 34) { zasady = [1,16,7,4]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 36) { zasady = [15,29,37,28]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 37) { zasady = [1,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 38) { zasady = [27,34,35,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 39) { zasady = [35,28,6,37]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 1) { zasady = [26,30,34,36]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 2) { zasady = [2,26,35,39]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 3) { zasady = [1,19,26,24]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 4) { zasady = [26,'','','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 5) { zasady = [14,1,13,16]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 6) { zasady = [6,36,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 7) { zasady = [34,26,6,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 8) { zasady = [1,16,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 9) { zasady = [34,10,28,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 10) { zasady = [26,16,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 11) { zasady = [19,1,35,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 12) { zasady = [29,13,28,15]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 13) { zasady = [2,22,17,19]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 14) { zasady = [2,13,28,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 15) { zasady = [10,4,28,15]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 17) { zasady = [2,17,13,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 18) { zasady = [24,17,13,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 19) { zasady = [27,2,29,28]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 21) { zasady = [20,19,30,34]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 22) { zasady = [10,35,13,2]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 23) { zasady = [35,10,28,29]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 25) { zasady = [6,29,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 26) { zasady = [13,3,27,10]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 27) { zasady = [13,35,1,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 28) { zasady = [2,26,10,34]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 29) { zasady = [26,24,32,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 30) { zasady = [22,19,29,40]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 31) { zasady = [19,1,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 32) { zasady = [27,26,1,13]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 33) { zasady = [27,9,26,24]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 34) { zasady = [1,13,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 35) { zasady = [29,15,28,37]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 36) { zasady = [41,'','','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 37) { zasady = [15,10,37,28]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 38) { zasady = [15,1,24,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 39) { zasady = [12,17,28,'']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 1) { zasady = [27,26,28,13]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 2) { zasady = [6,13,28,1]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 3) { zasady = [16,17,26,24]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 4) { zasady = [26,'','','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 5) { zasady = [2,13,18,17]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 6) { zasady = [2,39,30,16]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 7) { zasady = [29,1,4,16]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 8) { zasady = [2,18,26,31]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 9) { zasady = [3,4,16,35]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 10) { zasady = [36,28,40,19]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 11) { zasady = [35,36,37,32]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 12) { zasady = [27,13,1,39]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 13) { zasady = [11,22,39,30]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 14) { zasady = [27,3,15,28]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 15) { zasady = [19,29,39,25]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 16) { zasady = [25,34,6,35]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 17) { zasady = [3,27,35,16]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 18) { zasady = [2,24,26,'']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 19) { zasady = [35,38,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 20) { zasady = [19,35,16,'']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 21) { zasady = [19,1,16,10]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 22) { zasady = [35,3,15,19]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 23) { zasady = [1,18,10,24]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 24) { zasady = [35,33,27,22]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 25) { zasady = [18,28,32,9]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 26) { zasady = [3,27,29,18]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 27) { zasady = [27,40,28,8]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 28) { zasady = [26,24,32,28]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 30) { zasady = [22,19,29,28]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 31) { zasady = [2,21,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 32) { zasady = [5,28,11,29]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 33) { zasady = [2,5,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 34) { zasady = [12,26,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 35) { zasady = [1,15,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 36) { zasady = [15,10,37,28]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 37) { zasady = [41,'','','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 38) { zasady = [34,21,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 39) { zasady = [35,18,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 1) { zasady = [28,26,18,35]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 2) { zasady = [28,26,35,10]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 3) { zasady = [14,13,17,28]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 4) { zasady = [23,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 5) { zasady = [17,14,13,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 7) { zasady = [35,13,16,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 9) { zasady = [28,10,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 10) { zasady = [2,35,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 11) { zasady = [13,35,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 12) { zasady = [15,32,1,13]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 13) { zasady = [18,1,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 14) { zasady = [25,13,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 15) { zasady = [6,9,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 17) { zasady = [26,2,19,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 18) { zasady = [8,32,19,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 19) { zasady = [2,32,13,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 21) { zasady = [28,2,27,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 22) { zasady = [23,28,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 23) { zasady = [35,10,18,5]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 24) { zasady = [35,33,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 25) { zasady = [24,28,35,30]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 26) { zasady = [35,13,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 27) { zasady = [11,27,32,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 28) { zasady = [28,26,10,34]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 29) { zasady = [28,26,18,23]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 30) { zasady = [2,33,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 31) { zasady = [2,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 32) { zasady = [1,26,13,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 33) { zasady = [1,12,34,3]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 34) { zasady = [1,35,13,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 35) { zasady = [27,4,1,35]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 36) { zasady = [15,24,10,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 37) { zasady = [34,27,25,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 38) { zasady = [41,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 39) { zasady = [5,12,35,26]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 1) { zasady = [35,26,24,37]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 2) { zasady = [28,27,15,3]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 3) { zasady = [18,4,28,38]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 4) { zasady = [30,7,14,26]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 5) { zasady = [10,26,34,31]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 6) { zasady = [10,35,17,7]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 7) { zasady = [2,6,34,10]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 8) { zasady = [35,37,10,2]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 10) { zasady = [28,15,10,36]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 11) { zasady = [10,37,14,'']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 12) { zasady = [14,10,34,40]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 13) { zasady = [35,3,22,39]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 14) { zasady = [29,28,10,18]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 15) { zasady = [35,10,2,18]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 16) { zasady = [20,10,16,38]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 17) { zasady = [35,21,28,10]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 18) { zasady = [26,17,19,1]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 19) { zasady = [35,10,38,19]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 20) { zasady = [1,'','','']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 21) { zasady = [35,20,10,'']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 22) { zasady = [28,10,29,35]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 23) { zasady = [28,10,35,23]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 24) { zasady = [13,15,23,'']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 25) { zasady = [41,'','','']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 26) { zasady = [35,38,'','']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 27) { zasady = [1,35,10,38]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 28) { zasady = [1,10,34,28]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 29) { zasady = [18,10,32,1]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 30) { zasady = [22,35,13,24]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 31) { zasady = [35,22,18,39]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 32) { zasady = [35,28,2,24]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 33) { zasady = [1,28,7,19]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 34) { zasady = [1,32,10,25]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 35) { zasady = [1,35,28,37]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 36) { zasady = [12,17,28,24]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 37) { zasady = [35,18,27,2]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 38) { zasady = [5,12,35,26]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 39) { zasady = [41,'','','']; }
        
        
        
        
        
        
          let principlesAnimation = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
          let principlesTitle = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
          let principlesText = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
          let principlesExample = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        
        
          principlesAnimation[1] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[1] = "1. Segmentation";
          principlesText[1] = "<ul type=square><li>Divide the object into independent parts.</li><li>Make the object easy to disassemble.</li><li>Increase the degree of fragmentation or segmentation of the object.</li></ul>";
          principlesExample[1] = "<ul type=square><li>Patent USA Nr. 2859791. Ogumienie k???? samochodowych, sk??adaj??ce si?? z 12 niezale??nych sekcji. Podzia?? ogumienia zrealizowano dla podniesienia niezawodno??ci. To jednak nie jedyny pow??d dla wykorzystywania tak \"silnej\" metody. Rozdrobnienie - to jedna z wiod??cych tendencji wsp????czesnej techniki.</li><li>Patent Nr 168195. czerpak jednoczerpakowej koparki z jednolit??, p????kolist?? kraw??dzi?? tn??c??, r????ni??cy si?? tym, ??e dla zapewnienia szybkiej i wygodnej wymiany nak??adki skrawaj??cej, wykonano j?? z oddzielnych, rozbieralnych sekcji.</li><li>Patent Nr 168195. czerpak jednoczerpakowej koparki z jednolit??, p????kolist?? kraw??dzi?? tn??c??, r????ni??cy si?? tym, ??e dla zapewnienia szybkiej i wygodnej wymiany nak??adki skrawaj??cej, wykonano j?? z oddzielnych, rozbieralnych sekcji.</li></ul>";
        
          principlesAnimation[2] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[2] = "2. Separation";
          principlesText[2] = "<ul type=square><li>Separate any interfering parts or properties from the object, or single out the only necessary part (or property) of the object.</li></ul>";
          principlesExample[2] = "<ul type=square><li>Patent Nr 153533.Patent Nr 153533. Patent Nr 153533. Wyposa??enie, zabezpieczaj??ce przed promieniowaniem rentgenowskim, r????ni??ce si?? tym, ??e dla ochrony przed promieniowaniem jonizuj??cym g??owy, bark??w, kr??gos??upa, rdzenia kr??gowego i gonad pacjenta, przy rentgenografii np. klatki piersiowej, sk??ada si?? z oddzielnych os??on i pionowej, odpowiadaj??cej pozycji kr??gos??upa listwy, wykonanej z materia??u nie przepuszczaj??cego promieniowania rentgenowskiego. <br>Celowo???? takiego rozwi??zania - oczywista. Wynalazek powoduje \"obci??cie\" najbardziej szkodliwej cz????ci strumienia promieniowania. Informacj?? o wynalazku opublikowano w 1962 roku, chocia?? to proste i oczywiste rozwi??zanie mog??o pojawi?? si?? znacznie wcze??niej. <br>Przywykli??my rozpatrywa?? wiele obiekt??w jak z??o??enie tradycyjnych i trwale po????czonych element??w. Do element??w obiektu \"helikopter\" - zaliczamy tak??e zbiorniki paliwa. Rzeczywi??cie, zwyk??y helikopter musi wozi?? paliwo. Jednak??e w tych przypadkach, gdy helikopter kursuje po okre??lonej trasie, paliwo mo??na zostawi?? na ziemi. W elektrycznym helikopterze spalinowy silnik zast??puje silnik elektryczny, i zbiornika paliwa w og??le nie ma. (za to s?? akumulatory! przyp. t??um.) W rozwi??zaniu patentowym Nr 257301 \"bak\" jest, ale jest oddzielony od cz??owieka (Rys. 01) <br><img src=\"principles_img/2.png\" alt=\"rys.01\"><br><b>Rys. 1</b> Zasada wyodr??bnienia: dawniej ratownik g??rniczy nosi?? plecakowy aparat ch??odz??cy, a teraz znajduje si?? on w oddzielnym przewo??nym pojemniku.<br></li><li>Zderzenia samolot??w z ptakami bywaj?? przyczyn?? ci????kich katastrof. W USA opatentowano najrozmaitsze sposoby wyp??dzania ptak??w z terenu lotnisk (mechaniczne strachy, rozpylanie naftaliny, itp.) Najlepszym okaza??o si?? g??o??ne odtwarzanie krzyku przera??onych ptak??w, nagranego na ta??mie magnetofonowej! Oddzieli?? krzyk od ptaka - rozwi??zanie niezwyk??e, ale charakterystyczne dla zasady wyodr??bnienia.</li></ul>";
        
          principlesAnimation[3] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[3] = "3. Local quality";
          principlesText[3] = "<ul type=square><li>Change the object???s structure from uniform to non-uniform, change the external environment (or external influence) from uniform to non-uniform.</li><li>Ensure that each part of the object functions in conditions most suitable for its operation.</li><li>Ensure that each part of the object fulfills a different and useful function.</li></ul>";
          principlesExample[3] = "<ul type=square><li>Patent Nr 256708 - spos??b t??umienia py??u w kopalnianych wyrobiskach, znamienny tym, ??e w celu unikni??cia rozprzestrzeniania si?? py??u po terenie wyrobiska i usuni??cia go z miejsca emisji strumieniem powietrza wentylacji, t??umienie prowadzi si?? jednocze??nie drobno kroplistym i grubo kroplistym strumieniem wody, tak, ??e wok???? sto??ka mg??y wodnej tworzy si?? sto??ek grubo kroplistej wody.</li><li>Patent Nr 280328: spos??b suszenia ziarna ry??u znamienny tym, ??e w celu ograniczenia zjawiska p??kania ziarna, ry?? przed suszeniem jest sortowany na frakcje, poddawane nast??pnie suszeniu oddzielnie, ka??da w optymalnych dla swej wielko??ci warunkach.</li></ul>";
        
          principlesAnimation[4] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[4] = "4. Asymmetry";
          principlesText[4] = "<ul type=square><li>Change the shape of the object from symmetrical to asymmetrical.</li><li>If the object is asymmetrical, increase its degree of asymmetry.</li></ul>";
          principlesExample[4] = "<ul type=square><li>Zaciski z przesuni??tymi szcz??kami. W odr????nieniu od zwyk??ych, pozwalaj?? zaciska?? i chwyta?? w po??o??eniu pionowym d??ugie kszta??towniki.</li><li>Zasada asymetrii: elektrody pieca ??ukowego przemieszczono w stron?? przeciwn?? do okna wsadowego, co stworzy??o woln?? przestrze?? dla ci??g??ego za??adunku pieca.<br><img src=\"principles_img/4.png\" alt=\"rys.4\"><br><b>Rys.2</b></li><li>Reflektory samochodu powinny pracowa?? w r????nych warunkach: prawy powinien o??wietla?? drog?? jasno i daleko, lewy tak, ??eby nie o??lepia?? kierowc??w jad??cych z na przeciw. Wymagania r????ne, a spos??b monta??u reflektor??w jednakowy. Dopiero niedawno powsta??a idea asymetrycznych ??wiate?? samochod??w: prawe o??wietla drog?? na odleg??o???? ok. 25 m, lewe znacznie dalej.</li><li>Patent USA Nr 3435875 Asymetryczna opona posiada jeden bok o podwy??szonej trwa??o??ci i odporno??ci na uderzenia o kraw????nik chodnika.</li></ul>";
        
          principlesAnimation[5] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[5] = "5. Merging";
          principlesText[5] = "<ul type=square><li>Bring closer together (or merge) identical or similar objects, assemble identical or similar parts to perform parallel operations.</li><li>Make operations contiguous or parallel; bring them together in time.</li></ul>";
          principlesExample[5] = "<ul type=square><li>Patent Nr 235547. Robocze oprzyrz??dowanie koparki wieloczerpakowej, zawieraj??cej wirnik czerpakowy, osadzony na ramieniu wysi??gowym, znamienne tym, ??e w celu zmniejszenia oporu urabiania zmarzni??tego gruntu zaopatrzone jest w instalacj?? do ogrzewania zmarzliny, posiadaj??c?? dysze zamontowane na sektorach czerpaka po obu jego stronach. Dawniej trzeba by??o zatrzymywa?? kopark??, ??eby rozgrza?? grunt, a teraz dysze podaj??ce gor??ca wod?? pozwalaj?? na ci??g????, nieprzerwan?? prac??. </br> <img src=\"principles_img/5_1.png\" alt=\"rys.5.1\"><br><b>Rys. 5.1</b></li><li>Patent Nr 134155. urz??dzenie ratunkowe, s??u????ce do wyprowadzania os??b, znajduj??cych si?? w powietrznych komorach zatopionych statk??w, z zastosowaniem masek nag??ownych, znamienne tym, ??e dla podniesienia efektywno??ci akcji ratunkowej prowadzonej przez p??etwonurk??w, wykonane jest w formie jednej lub dw??ch masek nag??ownych, zaopatrzonych w w????e z ko??c??wkami, umo??liwiaj??cymi pod????czenie ich do systemu powietrznego skafandra p??etwonurka, kt??ry reguluje dawkowanie powietrza do masek.<br><img src=\"principles_img/5_2.png\" alt=\"rys. 5.2\"><br><b>Rys. 5.2</b></li></ul>";
        
          principlesAnimation[6] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[6] = "6. Universality";
          principlesText[6] = "<ul type=square><li>Make a part of the object, or the entire object perform multiple functions; eliminate the need for other parts.</li></ul>";
          principlesExample[6] = "<ul type=square><li>W Japonii rozpatrywano projekt zainstalowania na tankowcach instalacji do przerobu ropy naftowej. Oznacza??oby to wykorzystanie czasu transportu na jednoczesny przer??b ropy.</li><li>Patent Nr 160100. Spos??b transportowania materia????w - na przyk??ad li??ci tytoniu - do suszarni z pomoc?? hydrotransportu znamienny tym, ??e dla jednoczesnej realizacji procesu mycia li??ci i zachowania ich barwy wykorzystano wod?? ogrzan?? do temperatury 80-85??C.</li></ul>";
        
          principlesAnimation[7] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[7] = "7. \???Nested doll\???";
          principlesText[7] = "<ul type=square><li>Place one object inside another; place each object, in turn, inside the other.</li><li>Pass one part through a cavity in the other.</li></ul>";
          principlesExample[7] = "<ul type=square><li>Patent Nr 186781. Ultrad??wi??kowy koncentrator spr????ystych drga?? sk??adaj??cy si?? z po????czonych ze sob?? p????falowych odcink??w, znamienny tym, ??e dla zmniejszenia jego d??ugo??ci i podniesienia trwa??o??ci p????falowe odcinki s?? wykonane w formie sto??k??w wstawionych jeden w drugi.<br><img src=\"principles_img/7_1.png\" alt=\"rys. 7.1\"><br><b>Rys. 7.1</b> Kompaktowy ultrad??wi??kowy koncentrator: 1 i 2 p????sto??ki.</li><li>Patent Nr 110596. Spos??b przechowywania i transportu r????norodnych co do lepko??ci produkt??w naftowych w ??adowniach jednostek p??ywaj??cych, znamienny tym, ??e w celu zmniejszenia strat ciep??a wysokolepkich produkt??w, przechowuje si?? je w pojemnikach zanurzonych w niskolepkich produktach wype??niaj??cych komory transportowe.</li><li>Szeroko???? ??limaka dozuj??cego zmienia si??, wkr??caj??c jedn?? sekcj?? w drug??. <br><img src=\"principles_img/7_2.png\" alt=\"rys. 7.2\"><br><b>Rys. 7.2</b></li></ul>";
        
          principlesAnimation[8] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[8] = "8. Anti-weight";
          principlesText[8] = "<ul type=square><li>To compensate for the weight of the object, merge it with other objects that provide some support.</li><li>To compensate for the weight of the object, make it interact with the environment (e.g., use aerodynamic, hydrodynamic, buoyancy, and other forces).</li></ul>";
          principlesExample[8] = "<ul type=square><li>Patent Nr 187700. Spos??b wpuszczania i wyci??gania ze szczeliny skalnej urz??dzenia do wybuchowej eksploatacji g??rotworu, znamienny tym, ??e w celu obni??enia koszt??w i uproszczenia rob??t strza??owych, opuszczanie urz??dzenia prowadzi si?? pod dzia??aniem ci????aru w??asnego, a wyci??ganie ze szczeliny - z pomoc?? silniczka rakietowego</li><li>Przy budowie turbogeneratora wysokiej mocy powsta?? problem: jak zmniejszy?? nacisk wa??u turbogeneratora na ??o??yska? Problem rozwi??zano w ten spos??b, ??e nad turbogeneratorem umieszczono silny elektromagnes, kompensuj??cy nacisk generatora na ??o??yska.</li><li>Niekiedy pojawia si?? problem odwrotny: jak skompensowa?? zbyt ma??y ci????ar. Przy budowie i eksploatacji elektrowoz??w kopalnianych powsta??a sprzeczno???? techniczna: dla zwi??kszenia si??y uci??gu trzeba powi??kszy?? ci????ar elektrowozu, za?? dla zmniejszenia jego masy trzeba zaprojektowa?? elektrow??z mo??liwie lekkim. Grupa pracownik??w Petersburskiego Instytutu G??rniczego opracowa??a i zastosowa??a proste urz??dzenie pozwalaj??ce usun???? sprzeczno????. W nap??dzanych ko??ach elektrowozu zainstalowano mocne elektromagnesy, kt??rych pole wi????e ko??a z szynami, zwi??kszaj??c p????torakrotnie si???? sprz????enia k???? z szynami, bez zwi??kszania masy elektrowozu.</li></ul>";
        
          principlesAnimation[9] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[9] = "9. Preliminary anti-action";
          principlesText[9] = "<ul type=square><li>If it is necessary to perform an action with both harmful and useful effects, a counteraction should be performed first to control the harmful effects.</li><li>Create stresses in the object in advance to oppose known undesirable working stresses later on.</li></ul>";
          principlesExample[9] = "<ul type=square><li>Patent Nr. 84355. Odkuwk?? tarczy turbiny - jeszcze gor??c?? - nak??ada si?? na wiruj??cy wa??. Normalnie, w rozgrzanej odkuwce, w miar?? och??adzania pojawiaj?? si?? napr????enia promieniowo ??ciskaj??ce. W obracaj??cej si?? odkuwce - si??y od??rodkowe (dop??ki gor??ca odkuwka nie utraci??a plastyczno??ci) wywo??uj?? napr????enia i rozci??ganie o przeciwnym zwrocie. Gdy detal ca??kowicie ostygnie, napr????enia promieniowe ??ciskaj??ce pojawiaj?? si??, ale znacznie ni??sze.</li><li>Na tej zasadzie oparta jest ca??a technologia strunobetonowych element??w budowlanych: ??eby element ??elbetowy lepiej pracowa?? na rozci??ganie, trzeba go wst??pnie ??cisn????.</li><li>Jak - przyk??adowo - zrealizowa?? wa?? o wi??kszej wytrzyma??o??ci nie powi??kszaj??c jego ??rednicy? Rozwi??zanie tego zadania pokazano na Rys. 9. Wa?? sk??ada si?? z koncentrycznie zmontowanych rur, wst??pnie skr??conych w stron?? przeciwn?? o okre??lone obliczeniowo k??ty. Inaczej m??wi??c - wa?? zostaje wst??pnie napr????ony w stron?? przeciwn?? ni?? ta, w kt??r?? odkszta??ca si?? podczas normalnej pracy. Roboczy moment skr??caj??cy powinien wi??c najpierw zlikwidow?? to wst??pne napr????enie, po czym dopiero nast??puje deformacja w \"normalnym\" kierunku. Z??o??ony wa?? jest o po??ow?? l??ejszy ni?? r??wnowa??ny mu wytrzyma??o??ciowo wa?? jednolity.<br><img src=\"principles_img/9.png\" alt=\"rys. 9\"><br><b>Rys.9</b> Zasada wst??pnego napr????enia: rury tworz??ce z??o??ony wa??, skr??cane s?? wcze??niej w stron?? przeciwn?? do roboczych odkszta??ce??.</li></ul>";
        
          principlesAnimation[10] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[10] = "10. Preliminary action";
          principlesText[10] = "<ul type=square><li>Make any changes in the object (either fully or partially) before such changes are required.</li><li>Pre-arrange objects so that they can be quickly activated without losing time delivering them.</li></ul>";
          principlesExample[10] = "<ul type=square><li>Patent Nr 61056. Sadzonki wielu upraw warzywno - jagodowych, posadzone do gruntu nie zawsze nale??ycie si?? ukorzeniaj??, z powodu zbyt ma??ego zapasu substancji od??ywczych jakie powinna zawiera?? sadzonka. Zgodnie z wynalazkiem zaleca si?? wcze??niejsze nasycenie sadzonek substancjami od??ywczymi, zanurzaj??c je w wannie z roztworem odpowiednich nawoz??w.</li><li>Patent Nr 162919. Spos??b zdejmowania opatrunk??w gipsowych z pomoc?? brzeszczotu drutowego, znamienny tym, ??e w celu unikni??cia uraz??w i u??atwienia czynno??ci zdejmowania opatrunku, brzeszczot nasmarowany odpowiednim smarem umieszcza si?? w cienkiej rurce polietylenowej i zawczasu uk??ada si?? wzd??u?? opatrywanej np. nogi. Dzi??ki temu rozcinanie gipsu prowadzi si?? w kierunku od cia??a pacjenta na zewn??trz, bez obawy o uraz.</li><li>Ciekawostk?? jest spos??b barwienia drewna jeszcze przed jego ??ci??ciem: barwniki, podane do gleby nasycaj?? drzewo, w??druj??c w g??r?? wraz z sokami pobieranymi przez korzenie i zabarwiaj?? ca???? jego obj??to????.</li></ul>";
        
          principlesAnimation[11] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[11] = "11. In-advance cushioning";
          principlesText[11] = "<ul type=square><li>Prepare an emergency equipment beforehand to compensate for any objects that are not reliable.</li></ul>";
          principlesExample[11] = "<ul type=square><li>Patent Nr 264626. Spos??b obni??enia toksycznego oddzia??ywania zwi??zk??w chemicznych z pomoc?? odpowiednich dodatk??w, znamienny tym, ??e w celu zmniejszenia niebezpiecze??stwa zatrucia zwi??zkami chemicznymi, a tak??e produktami ich przemiany w organizmie, dodatki s?? dodawane bezpo??rednio do komponent??w zwi??zk??w chemicznych, ju?? w trakcie procesu ich syntezy.</li><li>Patent Nr 297361. Spos??b zapobiegania rozprzestrzenianiu si?? po??ar??w lasu metod?? stwarzenia pas??w ochronnych z ro??lin, znamienny tym, ??e w celu podniesienia ich ognioodporno??ci, do gruntu podaje si?? tolerowane biologicznie, chemiczne ??rodki, hamuj??ce proces ich zap??onu.</li><li>Patent USA 2879821: metalowa tarcza umieszczona wewn??trz opony ko??a samochodowego, pozwalaj??ca na kontynuacj?? jazdy na uszkodzonej oponie bez obawy jej zniszczenia.</li><li>Zasad?? \"zawczasu pod??o??onej poduszki\" mo??na wykorzystywa?? nie tylko dla podniesienia niezawodno??ci. Oto charakterystyczny przyk??ad. W zwi??zku z tym, ??e w ameryka??skich bibliotekach cz??sto gin?? ksi????ki, wynalazca Emanuel Trikilis zaproponowa?? umieszczanie w grzbietach ksi????ek namagnesowanej blaszki. W momencie wydawania wypo??yczonej ksi????ki, bibliotekarz rozmagnesowuje blaszk?? w specjalnym urz??dzeniu elektrycznym. Je??li jednak kto?? zechce wynie???? niezarejstrowan?? ksi????k?? z wypo??yczalni, to zainstalowany w drzwiach detektor zareaguje na schowany w grzbiecie magnes i uruchomi alarm.</li><li>Alpejska stacja g??rskiego pogotowia ratunkowego w Szwajcarii zastosowa??a analogiczn?? metod?? dla szybkiego odnajdywania os??b przysypanych lawin?? ??nie??n??. Obecnie narciarz lub mieszkaniec wysokog??rskich teren??w zagro??onych lawinami, obowi??zkowo nosiprzy sobie niewielki magnes. W wypadku zasypania lawin??, magnes ten pozwala wykry?? ofiar?? nawet pod trzechmetrow?? warstw?? ??niegu.</li></ul>";
        
          principlesAnimation[12] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[12] = "12. Equipotentiality";
          principlesText[12] = "<ul type=square><li>In any potential field, limit position changes (e.g. change operating conditions to eliminate the need to raise or lower objects in a gravity field).</li></ul>";
          principlesExample[12] = "<ul type=square><li>Patent Nr 264769. Zaproponowano urz??dzenie do przemieszczania du??ych t??ocznik??w w rejonie pracy prasy. Urz??dzenie ma posta?? przymocowanej do sto??u prasy przystawki rolkowej.</li><li>Patent Nr 110661. Kontenerow??z, w kt??rym ??adunek nie jest podnoszony na poziom pod??ogi skrzyni ??adunkowej, a tylko unoszony podno??nikami hydraulicznymi i ustawiany na niskiej ramie. Pojazd taki mo??e obej???? si?? bez d??wigu i przewozi?? znacznie wy??sze kontenery.</li></ul>";
        
          principlesAnimation[13] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[13] = "13. The other way around";
          principlesText[13] = "<ul type=square><li>Invert the action(s) taken to solve the problem (e.g. instead of cooling the object, heat it).</li><li>Make movable parts (or the external environment) stationary, and stationary parts movable.</li><li>Turn the object (or process) ???upside down???.</li></ul>";
          principlesExample[13] = "<ul type=square><li>Patent Nr 184649. Spos??b oczyszczania odlew??w i odkuwek w z??o??u ??ciernym, znamienny tym, ??e w celu uproszczenia procesu, ruchy wibracyjne wykonuje obrabiany detal.</li><li>Patent Nr 109942. Wynalazek ten porusza wa??ny problem odlewania wielkogabarytowych cienko??ciennych element??w korpusowych. Przy odlewaniu takich detali wskazane jest, ??eby ciek??y metal wype??nia?? form?? od g??ry, a krzepni??cie nast??powa??o od do??u do g??ry. Ale wlewanie metalu metod?? \"deszczow??\" jest dopuszczalne z wysoko??ci ok. 15 cm, inaczej metal utleni si?? lub nasyci gazami. A co zrobi?? gdy forma ma 2 - 3 m wysoko??ci? Je??li podawa?? metal od do??u, to pierwsze jego porcje zakrzepn??, nie zd????ywszy podnie???? si?? do g??ry. Wynalazca rozwi??za?? ten problem prosto i b??yskotliwie: metal p??ynie rurami, si??gaj??cymi dna formy odlewniczej. W miar?? wype??niania formy opuszcza si?? j?? w d???? i w ten spos??b ka??da porcja metalu jest podawana tam, gdzie powinna zakrzepn????. (Rys.08) Zasada odwrotno??ci: w odr????nieniu od zwyk??ego sposobu zalewania porusza si?? forma, a wlewaj??cy si?? w ni?? metal pozostaje nieruchomym. Odlewanie zwykle prowadzi si?? tak, ??e porusza si?? metal, a forma pozostaje nieruchoma. Tu wszystko na odwr??t: porusza si?? forma, a wlewany w ni?? metal pozostaje nieruchomym. To pozwoli??o \"po????czy?? niepo????czalne\": ci??g??o???? nape??niania formy i krzepni??cie metalu od do??u do g??ry, tak jak przy \"deszczowej\" metodzie.<br><img src=\"principles_img/13.png\" alt=\"rys. 13\"><br><b>Rys.13</b> Zasada ruchomej formy odlewniczej.</li></ul>";
        
          principlesAnimation[14] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[14] = "14. Spheroidality ??? Curvature";
          principlesText[14] = "<ul type=square><li>Instead of using rectilinear parts, surfaces, or forms, use curvilinear ones; change from flat surfaces to spherical ones; from cube-shaped (parallelepiped) parts to ball-shaped structures.</li><li>Use rollers, balls, spirals, domes.</li><li>Go from linear to rotary motion; use centrifugal forces.</li></ul>";
          principlesExample[14] = "<ul type=square><li>Patent RFN Nr 1085073. Urz??dzenie do wspawywania rur w dno sitowe, w kt??rym rol?? elektrod pe??ni?? ruchome kulki.</li><li>Patent Nr 262045. Organ wykonawczy samobie??nego kombajnu g??rniczego, pracuj??cego metoda elektrycznego rozspajania g??rotworu, znamienny tym, ??e w celu podniesienia efektywno??ci rozspajania twardospoistych ska??, elektrody rozspajaj??ce wykonano w postaci swobodnie obracaj??cych si?? dysk??w, osadzonych na izoluj??cej elektrycznie osi.</li><li>Patent Nr 260874. Spos??b oddzielenia nici kordu od gumy, na przyk??ad w zu??ytych oponach samochodowych, metod?? zanurzania opony w cieczach naftopochodnych, z obr??bk?? wysokoci??nieniowym strumieniem p??ynu, mechanicznym rozczesywaniem nici i ich obcinaniem, znamienny tym, ??e w celu podniesienia wydajno??ci procesu obr??bk?? opony prowadzi si??, wprawiaj??c j?? w ruch obrotowy z du???? pr??dko??ci?? wywo??uj??c?? si??y od??rodkowe, os??abiaj??ce gum??.</li></ul>";
        
          principlesAnimation[15] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[15] = "15. Dynamization";
          principlesText[15] = "<ul type=square><li>Allow changes (or design such changes) in the characteristics of the object, external environment, or process that optimize the object, or that optimize the operating conditions.</li><li>Divide the object into parts capable of moving relative to each other.</li><li>If the object (or process) is rigid or inflexible, make it movable or adaptable.</li></ul>";
          principlesExample[15] = "<ul type=square><li>Patent Nr 317390. P??etwy do p??ywania znamienne tym, ??e w celu zapewnienia regulacji sztywno??ci jej roboczej cz????ci (p??etwy w??a??ciwej) koniecznej dla dostosowania jej do r????nych warunk??w p??ywania i nurkowania, posiada ona wewn??trzne komory wype??nione nie??ci??liwym p??ynem, kt??rego ci??nienie statyczne mo??na zmienia?? w zale??no??ci od potrzeb, na brzegu b??d?? pod wod??.</li><li>Patent Nr 161247 - Barka transportowa, kt??rej korpus ma cylindryczn?? posta??, znamienna tym, ??e w celu zmniejszenia niebezpiecze??stwa osiadania na mieliznach przy pe??nym obci????eniu, korpus sk??ada si?? z dw??ch przegubowo po????czonych p????cylindr??w.</li><li>Patent Nr 174748 - Samoch??d z przegubowo po????czonymi sekcjami ramy, kt??re mog?? si?? obraca?? wzgl??dem siebie z pomoc?? si??ownik??w hydraulicznych. Taki pojazd cechuje wy??sza zdolno???? pokonywania przeszk??d terenowych.</li><li>Patent Nr 162580 - Spos??b produkowania ch??odzonych przewod??w elektrycznych, z kana??ami utworzonymi przez rurki, skr??cone razem z przewodami elektrycznymi, metod?? wst??pnego wype??niania rurek substancj?? usuwan?? po wykonaniu przewod??w. ??eby upro??ci?? technologi??, w charakterze wype??niacza u??yto parafiny, kt??r?? po zako??czeniu procesu produkcji kabla wytapia si?? i w ten spos??b usuwa z rurek.</li></ul>";
        
            principlesAnimation[16] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[16] = "16. Partial or excessive actions";
            principlesText[16] = "<ul type=square><li>If 100% of an effect is hard to achieve using a given method for solving a problem, then by using ???lightly less??? or ???slightly more??? of the same method, the problem may be considerably easier to solve.</li></ul>";
            principlesExample[16] = "<ul type=square><li>Zasada nadmiernego dzia??ania: ??eby m??c podawa?? r??wnomiernie proszek z pomoc?? rury 1, sypie si?? go do leja zasypowego z naddatkiem, kt??ry zsypuje si?? do pojemnika, sk??d zabierany jest z powrotem przez podajnik, ale lej zasypowy zawsze jest wype??niony do brzeg??w.<br><img src=\"principles_img/16.png\" alt=\"rys. 16\"><br><b>Rys. 16</b></li><li>Patent Nr 181897 - Spos??b walki z gradem, oparty na krystalizacji z pomoc?? reagent??w (np. jodku srebra) chmury gradowej, znamienny tym, ze w celu znacznego zmniejszenia zu??ycia reagent??w i ??rodk??w jego podawania do chmury, realizuje si?? krystalizacje nie ca??ej chmury, a tylko jej najbardziej grubokroplist?? cz??????.</li></ul>";
        
            principlesAnimation[17] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[17] = "17. Transition to another dimension";
            principlesText[17] = "<ul type=square><li>Move the object in two- or three-dimensional space.</li><li>Use a multistory arrangement for the objects instead of a single-story arrangement.</li><li>Tilt or re-orient the object, put it on its side.</li><li>Use a different side of the given area.</li></ul>";
            principlesExample[17] = "<ul type=square><li>Patent Nr 150938 - Dioda prostuj??ca, znamienna tym, ??e w celu powi??kszenia jej mocy zastosowano w niej profilowany element przej??cia, zawieraj??cy tzw. \"dziury elektronowe\" i profilowany styk oporowy. Przej??cie od p??askiej formy kontaktu do przestrzennej, pozwala przy utrzymaniu gabaryt??w diody, uzyska?? du???? powierzchni?? czynn?? p????przewodnika i w konsekwencji du???? moc.</li><li>Patent Nr 180555 - Spos??b mechanizacji wymiany wagonik??w w poziomej, przechodniej sztolni, znamienny tym, ??e w celu unikni??cia uszkodze?? konstrukcji zadaszenia i mechanizm??w rozjazd??w, wymiana za??adowanych wagonik??w na puste prowadzona jest metod?? przenoszenia pustego wagonika z obrotem o k??t 90?? nad zestawem wagonik??w przygotowanych pod za??adunek.</li><li>Patent Nr 259449 - Urz??dzanie do grafomagnetycznej defektoskopii, znamienne tym, ??e w celu podwy??szenia czasu pracy, pier??cieniowa ta??ma magnetyczna wykonana z dwustronnym pokryciem magnetycznym, wykonana jest w postaci tzw. wst????ki M??biusa.</li><li>Patent Nr 244783 - Cieplarnia dla ca??orocznej uprawy warzyw i owoc??w znamienna tym, ??e w celu lepszego wykorzystania promieniowania s??onecznego jest zaopatrzona we wkl??s??y odbijaj??cy ekran ustawionym obrotowo po p????nocnej stronie cieplarni.</li></ul>";
        
            principlesAnimation[18] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[18] = "18. Mechanical vibration";
            principlesText[18] = "<ul type=square><li>Cause the object to oscillate or vibrate.</li><li>Increase its frequency (even up to the ultrasonic).</li><li>Use the object???s resonant frequency.</li><li>Use piezoelectric vibrators instead of mechanical ones.</li><li>Use combined ultrasonic and electromagnetic field oscillations.</li></ul>";
            principlesExample[18] = "<ul type=square><li>Patent Nr 220380 - Metoda wibro??ukowego napawania i spawania detali pod warstw?? topnika z zastosowaniem elektrody drgaj??cej z nisk?? cz??stotliwo??ci??, znamienny tym, ??e w celu podniesienia jako??ci napawanego materia??u, na drgania niskiej cz??stotliwo??ci nak??ada si?? drgania o cz??stotliwo??ci ultrad??wi??kowej rz??du 20 kHz</li><li>Patent Nr 307896 - Metoda bezodpadowego ci??cia drewna z pomoc?? narz??dzia o zmiennej geometrii ostrza, znamienny tym, ??e w celu zmniejszenia si?? skrawania, ciecie realizuje si?? drgaj??cym narz??dziem, przy czym cz??stotliwo???? drga?? bliska jest cz??stotliwo??ci drga?? w??asnych obrabianego drewna.</li><li>Patent USA Nr 3239283 - Tarcie spoczynkowe wyra??nie obni??a czu??o???? precyzyjnych przyrz??d??w pomiarowych, przeszkadza w p??ynno??ci ruchu wskaz??wek, d??wigni i innych ruchomych element??w osadzonych obrotowo w ??o??yskach. ??eby tego unikn????, ??o??yska wprawia si?? w drgania i elementy aparatu ca??y czas wykonuj?? drobne oscylacje.</li><li>Dwaj Amerykanie John Bross i Wiliam Laubendorfer opracowali konstrukcj?? ??o??yska, kt??rego tulejka wykonana jest z piezoelektrtycznego materia??u i z obu stron pokryta elektroprzewodz??c?? pow??ok??. Do tej pow??oki przylutowane s?? elektrody, kt??rymi podawany jest pr??d zmienny, powoduj??cy drgania.</li></ul>";
        
            principlesAnimation[19] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[19] = "19. Periodic action";
            principlesText[19] = "<ul type=square><li>Instead of continuous action, use periodic or pulsating actions.</li><li>If an action is already periodic, change the periodic magnitude or frequency.</li><li>Use pauses between impulses to perform a different action.</li></ul>";
            principlesExample[19] = "<ul type=square><li>Patent Nr 267772 - Znany jest spos??b obserwacji procesu spawania ??ukiem elektrycznym z wykorzystaniem dodatkowego o??wietlenia. Jednakowo?? przy dodatkowym o??wietleniu, jednocze??nie z popraw?? widoczno??ci sta??ego i p??ynnego metalu, znajduj??cego si?? w obszarze ??uku, pogarsza si?? widoczno???? plazmowo - gazowej fazy ??uku ( typowa techniczna sprzeczno????! ) Zaproponowany spos??b znamienny tym, ??e jasno???? dodatkowego o??wietlenia zmienia si?? okresowo od zera do warto??ci przewy??szaj??cej jasno???? ??uku. To pozwala pogodzi?? obserwacj?? ??uku z obserwacj?? topienia si?? elektrody i nak??adania metalu.</li><li>Patent Nr 02622. Spos??b kontroli dzia??ania termopary metod?? podgrzewania jej i kontroli warto??ci si??y elektromotorycznej, znamienny tym, ??e w celu zmniejszenia czasu kontroli termopar?? nagrzewa si?? okresowymi impulsami pr??du, a w przerwach pomi??dzy impulsami sprawdza si?? warto???? SEM.</li></ul>";
        
            principlesAnimation[20] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[20] = "20. Continuity of useful action";
            principlesText[20] = "<ul type=square><li>Carry on work continuously; make all parts of the object work at full load, all the time.</li><li>Eliminate all idle or intermittent actions or work.</li></ul>";
            principlesExample[20] = "<ul type=square><li>Patent Nr 126440 - Metoda wielowrzecionowego wiercenia otwor??w geologicznych dwoma kompletami rur wiertarskich. Przy jednoczesnym wierceniu dw??ch - trzech otwor??w stosowany jest wirnik z kilkoma wrzecionami, w????czanymi do pracy niezale??nie jeden od drugiego i dwa komplety d??ut, kolejno podnoszonych i opuszczanych w otw??r dla wymiany zu??ytych d??ut. Operacje wymiany d??ut wykonuje si?? r??wnolegle w czasie wiercenia jednego z otwor??w, bez zatrzymywania maszyny.</li><li>Patent Nr 268926 - Metoda transportu p????fabrykatu cukru na statkach, znamienna tym, ??e w celu obni??enia koszt??w transportu metod?? wykorzystania pustych przebieg??w, wykorzystuje tankowce, kt??re po roz??adowaniu produkt??w naftowych lub innych ciek??ych substancji, po oczyszczeniu i umyciu za??adowuje si?? tzw. surowym cukrem.</li></ul>";
        
            principlesAnimation[21] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[21] = "21. Skipping";
            principlesText[21] = "<ul type=square><li>Conduct a process, or certain stages of it (e.g. destructible, harmful or hazardous operations) at high speed.</li></ul>";
            principlesExample[21] = "<ul type=square><li>Patent Nr 241484 - Spos??b szybko??ciowego nagrzewania metalowych p????fabrykat??w w strumieniu gazu znamienny tym, ??e w celu podniesienia wydajno??ci i zmniejszenia strat zawarto??ci w??gla, gaz podaje si?? z szybko??ci?? nie mniejsz?? ni?? 200 m/sec, przy zachowaniu nat????enia strumienia na ca??ej d??ugo??ci kontaktu z p????fabrykatem.</li><li>Patent Nr 112889 - przy roz??adunku barki do transportu drewna, nachyla si?? j?? z pomoc?? barki z urz??dzeniem d??wigowym. ??eby do wody zrzuci?? ca??y ??adunek drewna, zachodzi potrzeba znacznego nachylenia barki transportowej, co bywa niebezpieczne. Proponowany spos??b polega na szybkim nachylaniu barki o niezbyt du??y k??t. Si??y bezw??adno??ci powoduj?? roz??adowanie barki przy zachowaniu niezbyt du??ego k??ta nachylenia.</li><li>Patent RFN Nr 1134821 - urz??dzenie do przecinania cienko??ciennych rur o du??ej ??rednicy, z tworzywa sztucznego. Szczeg??lna cech?? urz??dzenia jest tak du??a szybko???? ci??cia, ??e rura nie zd????y si?? zdeformowa??.</li></ul>";
        
            principlesAnimation[22] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[22] = "22. \???Blessing in disguise\???";
            principlesText[22] = "<ul type=square><li>Use harmful factors (particularly, effects that are detrimental to the environment or surroundings) in such a way as to achieve a positive effect.</li><li>Eliminate the primary harmful action by adding it to another harmful action to resolve the problem.</li><li>Amplify a harmful factor to such a degree that it is no longer harmful.</li></ul>";
            principlesExample[22] = "<ul type=square><li>Sama w sobie zasada jest prosta: trzeba dopu??ci?? to, co jest niedopuszczalne, niech b??dzie! Tylko, ??e tu my??l wynalazcy cz??sto natrafia na barier?? psychologiczn??.</li><li>Cz??onek - korespondent Akademii Nauk ZSRR P. Wo??ogdin, w artykule \"Droga uczonego\" (\"Leningradzki almanach\", 1953, Nr 5 ) pisa??, ??e jeszcze w dwudziestych latach pracowa?? nad zastosowaniem pr??d??w o wysokiej cz??stotliwo??ci do nagrzewania metali. Do??wiadczenia wykaza??y, ??e metale nagrzewa??y si?? tylko na powierzchni. Nie udawa??o si?? \"wp??dzi??\" pr??du o wysokiej cz??stotliwo??ci do wn??trza kszta??tki i pr??by przerwano. W nast??pstwie tego Wo??ogdin niejednokrotnie ubolewa??, ??e nie wykorzysta?? tego \"ujemnego wyniku\" do??wiadcze??: przemys?? m??g?? otrzyma?? o wiele lat wcze??niej metod?? hartowania stalowych detali z pomoc?? pr??du wysokiej cz??stotliwo??ci, ni?? sta??o si?? to w rzeczywisto??ci.</li><li>B.R.??azarenko i I.N. ??azarenko pracowali nad problemem walki z elektroerozj?? metali. Pr??d elektryczny \"zjada??\" metal w miejscu kontaktu styk??w przeka??nik??w i nie udawa??o si?? nic z tym zjawiskiem zrobi??. Pr??bowano zastosowa?? twarde i bardzo twarde stopy na styki, niestety wszystko bezskutecznie. Badacze pr??bowali umieszcza?? styki w r????nych cieczach, ale erozja zachodzi??a jeszcze intensywniej. W pewnym momencie badacze zrozumieli, ??e ten \"negatywny rezultat\" mo??na gdzie?? indziej wykorzysta?? i ca???? prac?? skierowano w \"przeciwnym kierunku\". 3 kwietnia 1943 r. wynalazcy otrzymali patent na elektroiskrow?? obr??bk?? metali.</li><li>Patent Nr 145 511 - na Rys. 22.1 A, pokazano ruchome po????czenie dw??ch cz????ci szcz??kowej rozdrabniarki. Ruchomo???? uzyskuje si?? dzi??ki kulistemu kszta??towi ??eliwnej ko??c??wki. Szyjka tej ko??c??wki jest najs??abszym ogniwem konstrukcji i tu zwykle nast??puje z??amanie. Mo??na oczywi??cie wykona?? mocniejsz?? szyjk??, A je??li zawczasu \"z??amiemy\" szyjk??? Wtedy przekszta??ci si?? ona w cylindryczn?? tulejk??, kt??rej nie spos??b z??ama??. - Rys. 22.1 B<br> <img src=\"principles_img/22_1.png\" alt=\"rys. 22.1\"><br> <b>Rys. 22.1</b></li><li>Patent Nr. 152 492 Dla ochrony kabli podziemnych przed uszkodzeniami, spowodowanymi przez tworzenie si?? w gruncie zmarzlinowych szczelin, zawczasu wykonuje si?? w??skie naci??cia \"szczeliny\" po bokach w stunku do trasy kabla. (Rys. 22.2)<br> <img src=\"principles_img/22_2.png\" alt=\"rys. 22.2\"><br> <b>Rys. 22.2</b> Sztuczne \"szczeliny\" - naci??cia, chroni?? kabel przed zmarzlinowymi p??kni??ciami.</li></ul>";
        
            principlesAnimation[23] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[23] = "23. Feedback";
            principlesText[23] = "<ul type=square><li>Introduce feedback (referring back, cross-checking) to improve a process or an action.</li><li>If feedback is already used, change it.</li></ul>";
            principlesExample[23] = "<ul type=square><li>Patent Nr 283997 - Wewn??trz ch??odni wie??owej wiatr tworzy wiruj??ce strefy, kt??re obni??aj?? g????boko???? strefy och??odzonej wody. ??eby podnie???? efektywno???? ch??odzenia, w sekcjach ch??odni zainstalowano czujniki temperatury i wg. ich wskaza?? automatycznie reguluje si?? ilo???? podawanej wody.</li><li>Patent Nr 167229. Spos??b automatycznego rozruchu przeno??nika, znamienny tym, ??e w celu zaoszcz??dzenia energii elektrycznej potrzebnej w chwili uruchamiania silnika przeno??nika, mierzy si?? moc zu??ywan?? przez silnik podczas pracy przeno??nika, ustala si?? j?? dla chwili zatrzymywania przeno??nika i otrzymany sygna??, odwrotnie proporcjonalny do ci????aru masy przenoszonej, podaje si?? na silnik w chwili za????czania przeno??nika.</li><li>Patent Nr 239245. Spos??b automatycznej regulacji procesu rektyfikacji metod?? oddzia??ywania na wydatek skroplin w kolumnie w zale??no??ci od temperatury i ci??nienia na wyj??ciu produktu, znamienny tym, ??e w celu stabilizacji zawarto??ci jednego z komponent??w w tr??jsk??adnikowej mieszaninie, dodatkowo wprowadza si?? korekt?? zale??n?? od ci????aru w??a??ciwego produktu. wyj??ciowego</li></ul>";
        
            principlesAnimation[24] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[24] = "24. Intermediary";
            principlesText[24] = "<ul type=square><li>Use an intermediary carrier article or intermediary process.</li><li>Merge one object temporarily with another (which can be easily removed).</li></ul>";
            principlesExample[24] = "<ul type=square><li>Patent Nr 177436. Spos??b doprowadzania pr??du elektrycznego do p??ynnego (roztopionego) metalu znamienny tym, ??e w celu obni??enia strat energii elektrycznej, pr??d do roztapianego metalu podaje si?? za po??rednictwem ch??odzonych elektrod poprzez po??rednicz??cy p??ynny metal, kt??rego temperatura topnienia jest ni??sza, a g??sto???? i temperatura wrzenia wy??sze od metalu przetwarzanego.</li><li>Patent Nr 178005. Spos??b nanoszenia lotnego inhibitora korozji atmosferycznej na powierzchni?? chronion??, znamienny tym, ??e dla otrzymania r??wnomiernego pokrycia wewn??trznych powierzchni z??o??onych detali, przedmuchuje si?? przez nie gor??ce powietrze, nasycone parami inhibitora.</li></ul>";
        
            principlesAnimation[25] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[25] = "25. Self-service";
            principlesText[25] = "<ul type=square><li>Make the object serve itself by performing auxiliary helpful functions.</li><li>Use waste resources, energy, or substances.</li></ul>";
            principlesExample[25] = "<ul type=square><li>Patent Nr 261207. Aparat do ??rutowania, kt??rego korpus jest wy??o??ony odpornymi na ??cierania p??ytkami, znamienny tym, ??e w celu podwy??szenia trwa??o??ci oblic??wki, p??ytki wykonane s?? jako magnesy sta??e, utrzymuj??ce na swojej powierzchni warstw?? ??rucin. Na ??ciankach aparatu powstaje dzi??ki temu ustawicznie odnawiaj??ca si??, ochronna warstwa ??rucin.</li><li>Patent Nr 307584. Spos??b wykonania kana????w irygacyjnych sk??adanych z element??w, znamienny tym, ??e w celu uproszczenia transportu element??w, po zamontowaniu pocz??tkowego odcinka kana??u, jego ko??ce zamyka si?? tymczasowymi zastawkami i gotowy odcinek kana??u zalewa si?? wod?? i nast??pne odcinki, tak??e zamkni??te zastawkami sp??awia si?? po tym odcinku kana??u.</li><li>Patent Nr 108625. Spos??b ch??odzenia prostownikowych diod p????przewodnikowych, znamienny tym, ??e w celu poprawy warunk??w wymiany ciep??a, zastosowano p????przewodnikowy termoelement, kt??rego pr??dem roboczym jest pr??d przechodz??cy przed diod?? po wyprostowaniu.</li></ul>";
        
            principlesAnimation[26] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[26] = "26. Copying";
            principlesText[26] = "<ul type=square><li>Instead of an unavailable, expensive, fragile object, use simpler, inexpensive copies.</li><li>Replace the object or process with optical copies.</li><li>If visible optical copies are already used, move to infrared or ultraviolet copies.</li></ul>";
            principlesExample[26] = "<ul type=square><li>Patent Nr 86560. Pogl??dowa pomoc szkoleniowa dla nauki geodezji wykonana w postaci mapy plastycznej (panneau), znamienna tym, ??e w celu szkoleniowego, geodezyjnego zdejmowania z panneau planu sytuacyjnego terenu, jest ono wykonane w wg danych z pomiar??w tachimetrycznych i charakterystyczne punkty terenu wyposa??ono w miniaturowe ??aty geodezyjne.</li><li>Niekiedy konieczne jest (dla cel??w pomiarowych lub kontrolnych), na??o??enie dw??ch obiekt??w, kt??rych fizycznie na??o??y?? na siebie si?? nie da. W takich przypadkach celowe jest stosowanie kopii optycznych. Tak by?? - przyk??adowo - rozwi??zany problem przestrzennej orientacji na zdj??ciach rentgenowskich. Zwyk??e rentgenowskie zdj??cie nie pozwala okre??li??, w jakiej odleg??o??ci od powierzchni cia??a znajduje si?? chore miejsce. Stereoskopowe zdj??cia daj?? og??lny obraz, ale i w tym przypadku \"pomiary\" trzeba robi?? na oko; przecie?? do wn??trza cia??a linijki wsun???? si?? nie da! Trzeba wi??c \"na??o??y?? nienak??adalne\": cia??o cz??owieka i linijk??!</li><li>Nowosymbirski wynalazca F.I.Aksenow rozwi??za?? to zadanie, metod?? zastosowania optycznego nak??adania. Wg jego sposobu stereoskopowe rentgenowskie zdj??cia klatki piersiowej nak??ada si?? na stereoskopowe zdj??cia sze??ciennej kratkowej klatki. Analizuj??c w stereoskopie na??o??one na siebie zdj??cia - lekarz widzi \"wewn??trz\" klatki piersiowej chorego sze??cian, odgrywaj??cy role przestrzennej siatki wsp????rz??dnych.</li><li>W og??le w wielu przypadkach wygodniej jest operowa?? nie obiektami, a ich optycznymi kopiami. Przyk??adowo: kanadyjska firma Cutter Pallp, wykorzystuje specjalne stanowisko fotograficzne do pomiaru kubatury pni drzewnych, przewo??onych na platformach kolejowych. Wg danych firmy fotograficzny pomiar transportu papier??wki jest o ok. 50 do 60% kr??tszy od r??cznego, a b????d okre??lenia kubatury nie przekracza 1 - 2 %</li><li>Patent Nr 180829 - nowy spos??b kontroli kszta??tu wewn??trznych powierzchni sferycznych detali. W detal wlewa si?? s??abo odbijaj??cy ??wiat??o p??yn i nast??pnie, zmieniaj??c jego poziom, prowadzi si?? fotografowanie na t?? sam?? klatk?? kolorowego filmu. Na zdj??ciu uzyskuje si?? koncentryczne kr??gi. Por??wnuj??c otrzymane w ten spos??b linie, z liniami teoretycznymi, z du???? dok??adno??ci?? okre??la si?? wielko???? odchy??ek kszta??tu detalu.</li></ul>";
        
            principlesAnimation[27] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[27] = "27. Cheap short-living objects";
            principlesText[27] = "<ul type=square><li>Replace an expensive object with a multitude of inexpensive objects that compromise certain qualities (service life, for instance).</li></ul>";
            principlesExample[27] = "<ul type=square><li>Zasady aseptyki wymagaj??, gotowania strzykawek nie kr??cej ni?? 45 minut. Tymczasem w wielu przypadkach zachodzi konieczno???? podania lekarstwa jak mo??na najszybciej. We wszechzwi??zkowym naukowo-badawczym instytucie instrument??w medycznych opracowano strzykawk??tubk?? do jednorazowego u??ytku. Jest to cienko??cienne naczynie z plastiku, na kt??rego ustniku jest osadzona sterylna ig??a, zabezpieczona ko??paczkiem. Korpus strzykawki - tubki w warunkach zak??adu nape??nia si?? lekarstwem i zamyka przez zalutowanie tworzywem. Taka strzykawka jest gotowa do u??ycia w ci??gu dw??ch sekund; wystarczy zdj???? ko??paczek os??aniaj??cy ig????. W czasie wstrzykiwania lekarstwo z tubki wyciska si??, po czym zu??yt?? strzykawk?? - tubk?? wyrzuca si??.</li><li>Patent USA Nr 3430629. Pieluszka jednorazowego u??ytku. Zawiera wk??ad, poch??aniaj??cy typu bibu??y. Istnieje du??o patent??w tego typu: na jednorazowe termometry, torby foliowe na ??mieci, szczotki do z??b??w itd.</li></ul>";
        
            principlesAnimation[28] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[28] = "28. Mechanics substitution";
            principlesText[28] = "<ul type=square><li>Replace mechanical means with sensory (optical, acoustic, taste or smell) means.</li><li>Use electric, magnetic and electromagnetic fields to interact with the object.</li><li>Change from static to movable fields, from unstructured fields to structured.</li><li>Use fields in conjunction with field-activated (e.g. ferromagnetic) particles.</li></ul>";
            principlesExample[28] = "<ul type=square><li>Patent Nr 154459. </li></ul>";
        
            principlesAnimation[29] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[29] = "29. Pneumatics and hydraulics";
            principlesText[29] = "<ul type=square><li>Use gas and liquid parts of the object instead of solid parts (e.g. inflatable, filled with liquids, air cushioned, hydrostatic, hydro-reactive).</li></ul>";
            principlesExample[29] = "<ul type=square><li>Patent Nr 243809. Celem wynalazku jest zwi??kszenie ci??gu i podniesienie wysoko??ci rozpraszania odprowadzanych gaz??w. Osi??gni??to to w ten spos??b, ??e korpus komina (Rys.29) wykonany jest w formie sto??kowej spirali 1, kt??rej rurowe zwoje wyposa??one s?? w dysze 2 i po????czone z rurowymi s??upami 3, kt??rych dolne ko??ce pod????czone s?? do kompresora 4. Przy w????czeniu kompresora 4, powietrze wznosi si?? wzd??u?? s??up??w 3, wpada do spiralnych zwoj??w korpusu i wylatuj??c z dysz 2, tworzy powietrzn?? \"??cian??\".<br> <img src=\"principles_img/29.png\" alt=\"rys. 29\"><br> <b>Rys. 29</b> Zamiast masywnego komina - a??urowa konstrukcja: spirala z rury, zaopatrzona na zwojach w dysze, przez kt??re doprowadza si?? spr????one powietrze, tworz??ce \"??ciank??\".</li><li>Patent Nr 312630. Spos??b natryskowego malowania wielkogabarytowych wyrob??w z odci??ganiem par rozpuszczalnika z mg??y lakierowej przez wentylacyjny system ss??cy, znamienny tym, ??e w celu zmniejszenia potrzebnej dla malowania przestrzeni, wok???? malowanego obiektu tworzy si?? powietrzn?? kurtyn?? si??gaj??c?? na wysoko???? przewy??szaj??c?? wysoko???? obiektu, kt??rej g??rne warstwy zawirowywuje si?? z pomoc?? pod??ogowego ss??cego systemu. Wynalazek ten pokonuje tak?? sama techniczna sprzeczno???? jak w poprzednim przyk??adzie. Dlatego te?? podobne s?? i rozwi??zania: pneumo??cianka zamiast cylindrycznej os??ony.</li><li>Patent Nr 264675. Obsada kulistego zbiornika, zawieraj??ca fundament, znamienna tym, ??e w celu obni??enia napr????e?? w pow??oce zbiornika, fundament obsady wykonano w formie wype??nionego ciecz?? basenu z wgi??t?? pokryw?? z elastycznego materia??u, przyjmuj??c?? kszta??t opieraj??cej si?? na niej pow??oki zbiornika.</li><li>Patent Nr 243177. Urz??dzenie dla przeniesienia nacisku obsady kafara na fundament, znamienne tym, ??e w celu zapewnienia r??wnomiernego przekazania nacisku na fundament, jest wykonane w formie p??askiego, zamkni??tego zbiornika, wype??nionego ciecz??.</li></ul>";
        
            principlesAnimation[30] = "Animacja<br>Dost??pne wkr??tce";
            principlesTitle[30] = "30. Flexible shells and thin films";
            principlesText[30] = "<ul type=square><li>Use flexible shells and thin films instead of three-dimensional structures.</li><li>Isolate the object from the external environment using flexible shells and thin films.</li></ul>";
            principlesExample[30] = "<ul type=square><li>??eby zmniejszy?? straty wilgoci, paruj??cej z li??ci drzew, ameryka??scy badacze opryskuj?? je polietylenowym \"deszczem\". Na li??ciach tworzy si?? cieniutka plastyczna warstwa. Ro??lina okryta plastikow?? \"ko??dr??\" rozwija si?? normalnie dzi??ki temu, ??e polietylen znacznie ??atwiej przepuszcza tlen i dwutlenek w??gla, ni?? wod??.</li><li>Patent Nr 312826. Metoda ekstrakcji w uk??adzie ciecz - ciecz, znamienna tym, ??e w celu intensyfikacji procesu wymiany masy, strug?? jednej fazy podaje si?? przez warstw?? gazu na powierzchni?? drugiej fazy, przemieszczaj??c?? si?? cienk?? warstewk?? po twardej powierzchni.</li></ul>";
        
              principlesAnimation[31] = "Animacja<br>Dost??pne wkr??tce";
              principlesTitle[31] = "31. Porous materials";
              principlesText[31] = "<ul type=square><li>Make the object porous or add porous elements (inserts, coatings, etc.).</li><li>If the object is already porous, use the pores to introduce a useful substance or function.</li></ul>";
              principlesExample[31] = "<ul type=square><li>Patent Nr 262092. Spos??b ochrony powierzchni ??cianek naczynia przed odk??adaniem si?? twardych i lepkich cz??stek ze znajduj??cego si?? wewn??trz produktu, znamienny tym, ??e w celu podniesienia efektywno??ci ochrony i obni??enia strat energii wewn??trz naczynia, wykonanego z porowatego materia??u, podaje si?? przez jego ??cianki nie tworz??cy narost??w p??yn, pod ci??nieniem wy??szym ni?? ci??nienie wewn??trz naczynia.</li><li>Patent Nr 283264. Spos??b wprowadzania dodatk??w w p??ynny metal, z pomoc?? ognioodpornych materia????w, znamienny tym, ??e w celu poprawienia warunk??w wprowadzania dodatk??w, w metal zanurza si?? porowatyy materia?? ognioodporny, uprzednio przesycony materia??em dodatku.</li><li>Patent Nr 187135. System parownikowego ch??odzenia maszyn elektrycznych, znamienny tym, ??e dla wykluczenia konieczno??ci doprowadzania czynnika ch??odz??cego do maszyny, cz????ci robocze i pojedyncze elementy konstrukcyjne s?? wykonane z materia????w porowatych, na przyk??ad z porowatych spiekanych proszk??w stali, przesyconych p??ynnym czynnikiem ch??odz??cym, kt??ry podczas pracy maszyny paruje i w ten spos??b zapewnia kr??tkotrwa??e, intensywne i r??wnomierne ch??odzenie.</li><li>Maszyny zawsze budowano z masywnych ( nieprzenikliwych ) materia????w. Inercja my??lenia prowadzi do tego, ??e zadania, ??atwo rozwi??zywalne przy wykorzystaniu materia????w porowatych, zbyt cz??sto pr??buje si?? rozwi??za?? przez wprowadzanie specjalnych urz??dze?? w system, zachowuj??c masywno???? wszystkich pozosta??ych element??w. Tymczasem wysoko zorganizowanej maszynie w??a??ciwa jest przenikalno???? - przyk??adem mog?? s??u??y?? dowolne, ??ywe organizmy, poczynaj??c od kom??rki, a ko??cz??c na cz??owieku.</li><li>Wewn??trzne przemieszczanie substancji - jedna z wa??nych funkcji wielu maszyn. \"Gruba\" maszyna realizuje t?? funkcj?? z pomoc?? rur, pomp, itp. Precyzyjna, \"delikatna\" maszyna - z pomoc?? porowatych materia????w i si?? molekularnych.</li></ul>";
        
              principlesAnimation[32] = "Animacja<br>Dost??pne wkr??tce";
              principlesTitle[32] = "32. Color changes";
              principlesText[32] = "<ul type=square><li>Change the color of the object or its external environment.</li><li>Change the transparency of the object or its external environment.</li></ul>";
              principlesExample[32] = "<ul type=square><li>W ku??niach i odlewniach, w zak??adach metalurgicznych, wsz??dzie, gdzie potrzebna jest ochrona pracownik??w przed wysok?? temperatur??, stosuje si?? wodne kurtyny. Takie kurtyny dobrze zabezpieczaj?? pracownik??w przed dzia??aniem niewidocznych (podczerwonych) promieni, jednakowo?? o??lepiaj??co jasne promieniowanie roztopionych metali, bez przeszk??d przechodzi przez cienk?? p??ynn?? warstw??. ??eby zabezpieczy?? przed nim pracownik??w, pracownicy polskiego Instytutu Ochrony Pracy zaproponowali metod?? zabarwiania wody, z kt??rej tworzy si?? kurtyna wodna, pozostaj??c prze??roczyst??, w pe??ni zatrzymuje niewidzialne promieniowanie cieplne i w odpowiednim stopniu os??abia si???? promieniowania widzialnego.</li><li>Patent Nr 165645. Do roztworu utrwalaj??cego wprowadza si?? barwnik, kt??rym odwracalnie nasyca si?? warstwa ??wiat??oczu??a i kt??ry nie zabarwia kartonu podk??adowego, ani celuloidowego. Barwnik przy kolejnym p??ukaniu w wodzie powinien zosta?? wyp??ukany z warstwy ??wiat??oczu??ej. Szybko???? wyp??ukiwania barwnika z warstwy ??wiat??oczu??ej w przybli??eniu r??wna jest szybko??ci wyp??ukiwania tiosiarczanu sodu lub jest nieco ni??sza. Zanik zabarwienia zdj??cia wywo??anego wprowadzonym barwnikiem, ??wiadczy o zako??czeniu procesu p??ukania z resztek soli, kt??rymi przeprowadza si?? utrwalanie.</li></ul>";
        
              principlesAnimation[33] = "Animacja<br>Dost??pne wkr??tce";
              principlesTitle[33] = "33. Homogeneity";
              principlesText[33] = "<ul type=square><li>Make objects interacting with any given object of the same material (or material with identical properties).</li></ul>";
              principlesExample[33] = "<ul type=square><li>Patent Nr 957599. Odlewnicze koryto do obr??bki roztopionego metalu drganiami akustycznymi lub ultrad??wi??kowymi, przy pomocy nadajnika drga??, umieszczanego w roztopionym metalu, znamienny tym, ??e znajduj??c?? si?? w kontakcie z roztopionym metalem cz?????? nadajnika wykonano z tego samego metalu co i obrabiany stop lub z jeden z jego sk??adnik??w i cz??sto roztapia si?? w p??ynnym metalu, a pozosta??a cz?????? nadajnika (falowodu ) skutkiem tego och??adza si?? i zachowuje wytrzyma??o????.</li><li>Patent Nr 234800. Spos??b smarowania ch??odzonego ??o??yska ??lizgowego znamienny tym, ??ew celu poprawienia smarowania w warunkach podwy??szonej temperatury, w charakterze ??rodka smarnego zastosowano ten sam materia??, z kt??rego wykonana jest panewka ??o??yska.</li><li>Patent Nr 180340. Spos??b oczyszczania gaz??w od py????w zawieraj??cych roztopione cz??stki, znamienny tym, ??e w celu podwy??szenia efektywno??ci procesu, gazy przepuszcza si?? przez substancj?? znajduj??ca si?? w stanie p??ynnym i identyczn?? ze sk??adem chemicznym zanieczyszcze??.</li><li>Patent Nr 259298. Spos??b spawania metali, w kt??rym spawane kraw??dzie ustawia si?? ze szczelin??, do kt??rej podaje si?? dodatkowy materia?? z nast??puj??cym po tym nagrzewem spawanych kraw??dzi, znamienny tym, ??e w celu poprawienia spawania, w charakterze materia??u dodatkowego wykorzystuje si?? lotne zwi??zki tych samych materia????w co spawane.</li></ul>";
        
              principlesAnimation[34] = "Animacja<br>Dost??pne wkr??tce";
              principlesTitle[34] = "34. Discarding and recovering";
              principlesText[34] = "<ul type=square><li>Eliminate portions of the object that have fulfilled their function (discard by dissolving, evaporating, etc.) or modify these during the operation of the object.</li><li>Conversely, restore consumable parts of the object during the operation of the object.</li></ul>";
              principlesExample[34] = "<ul type=square><li>Patent USA Nr 3174550. Przy awaryjnym l??dowaniu, do benzyny w zbiornikach samolotu jest dodawany ??rodek spieniaj??cy, przekszta??caj??cy paliwo w substancj?? niepaln??.</li><li>Patent USA Nr 3160950. ??eby przy starcie rakiety nie uszkodzi?? czu??ej aparatury naukowo - badawczej, zalewa si?? j?? pianoplastem, kt??ry wype??niwszy rol?? amortyzatora, szybko odparowuje w warunkach kosmicznych.</li><li>Nietrudno zauwa??y??, ??e ta zasada, to dalszy rozw??j zasady dynamizacji: obiekt zmienia si?? w procesie dzia??ania, ale zmienia si?? znacznie silniej. Samolot ze zmieniaj??c?? si?? w czasie lotu geometria skrzyde?? - to zasada dynamizacji. Rakieta, odrzucaj??ca wykorzystane zbiorniki paliwa - zasada odrzucania.</li><li>Patent Nr 222322. Spos??b produkcji mikrospr????yn ??rubowych, znamienny tym, ??e w celu podniesienia wydajno??ci, rdze?? do nawijania wykonuje si?? z plastiku, kt??ry usuwa si?? przez zanurzenie w rozpuszczalniku.</li><li>Patent Nr 235979. Spos??b produkcji gumowych kul - separator??w, znamienny tym, ??e celu nadania kuli odpowiednich wymiar??w, jej rdze?? formuje si?? ze zmielonej kredy z wod??, suszy i po wulkanizacji rozpuszcza si?? przez wprowadzenie cieczy z pomoc?? ig??y strzykawkowej.</li><li>Patent Nr 159783. Spos??b produkcji profili rurowych, znamienny tym, ??e w celu uzyskania r????norodnych co do kszta??tu i wielko??ci produkt??w, walcuje si?? pospawane pakiety, wype??nione materia??em ognioodpornym, na przyk??ad proszkiem magnezytowym, z nast??pnym usuni??ciem wype??niacza.</li><li>Patent Nr 182492. Spos??b kompensacji zu??ycia nieprofilowanej elektrody-narz??dzia przy elektroerozyjnej obr??bce elektroprzewodz??cych materia????w, znamienny tym, ??e w celu powi??kszenia czasu pracy elektrody-narz??dzia, na jej robocz?? powierzchni?? w procesie obr??bki nieprzerwanie nap??ywa warstwa metalu.</li><li>Patent Nr 212672. Przy hydrotransporcie kwa??nej pulpy wodno ??ciernej, ??cianki ruroci??gu szybko si?? zu??ywaj??. Ochrona ich wy??o??enia wewn??trznego jest pracoch??onna, prowadzi do zwi??kszenia ??rednicy zewn??trznej ruroci??gu. Opisany spos??b ochrony rur zak??ada utworzenie na ich wewn??trznej powierzchni warstwy ochronnej (wyprawy). W tym celu do transportowanej pulpy okresowo wprowadza si?? roztw??r wapna. W ten spos??b wewn??trzne ??cianki ruroci??gu s?? zawsze zabezpieczone przed zu??yciem, a przekr??j ruroci??gu zmniejsza si?? nieznacznie, poniewa?? wyprawa zmniejsza si?? na skutek dzia??ania ??ciernej i kwa??nej pulpy.</li></ul>";
        
              principlesAnimation[35] = "Animacja<br>Dost??pne wkr??tce";
              principlesTitle[35] = "35. Parameter changes";
              principlesText[35] = "<ul type=square><li>Change the object???s physical state (e.g. to a gas, liquid, or solid).</li><li>Change the concentration or consistency.</li><li>Change the degree of flexibility.</li><li>Change the temperature.</li></ul>";
              principlesExample[35] = "<ul type=square><li>Patent Nr 265068. Spos??b prowadzenia procesu wymiany masy w systemie gaz - lepka ciecz, znamienny tym, ??e w celu intensyfikacji procesu, lepk?? ciecz przed podaniem do aparatu wst??pnie poddaje si?? saturacji gazem.</li><li>Patent Nr 222781. Dozownik materia????w sypkich, na przyk??ad nawoz??w mineralnych i pestycyd??w, wykonany w formie ??limaka osadzonego w korpusie z otworem wylotowym, znamienny tym, ??e w celu zyskania mo??liwo??ci regulacji skoku, ??rubowa powierzchnia ??limaka jest wykonana z elastycznego materia??u ze spiralnymi spr????ynami na wewn??trznej i zewn??trznej powierzchni (Rys. 35).<br> <img src=\"principles_img/35.png\" alt=\"rys. 35\"><br> <b>Rys. 35</b> W dozowniku materia????w sypkich ??limak wykonany jest z elastycznego materia??u ze spr????ynami spiralnymi, co pozwala regulowa?? skok ??limaka.</li></ul>";
        
              principlesAnimation[36] = "Animacja<br>Dost??pne wkr??tce";
              principlesTitle[36] = "36. Phase transitions";
              principlesText[36] = "<ul type=square><li>Use phenomena occurring during phase transitions (e.g. volume changes, loss or absorption of heat, etc.).</li></ul>";
              principlesExample[36] = "<ul type=square><li>Patent Nr 225851. Spos??b ch??odzenia r????nych obiekt??w z pomoc?? cyrkuluj??cego po zamkni??tym obwodzie ciek??ego czynnika, znamienny tym, ??e w celu zmniejszenia ilo??ci cyrku</li></ul>";
        
              principlesAnimation[37] = "Animacja<br>Dost??pne wkr??tce";
              principlesTitle[37] = "37. Thermal expansion";
              principlesText[37] = "<ul type=square><li>Use thermal expansion (or contraction) of materials.</li><li>If thermal expansion is being used, use multiple materials with different thermal expansion coefficients.</li></ul>";
              principlesExample[37] = "<ul type=square><li>Patent Nr 309758. Spos??b ci??gnienia rur na ruchomym kalibratorze wn??trza, przy obni??onych temperaturach, znamienny tym, ??e w celu utworzenia luzu mi??dzy rur?? a kalibratorem po ci??gnieniu, dla wyci??gni??cia go z rury bez zacierania, w och??odzon?? rur?? przed ci??gni??ciem wprowadza si?? podgrzany na przyk??ad do 50 - 100??? kalibrator, wyci??gni??cie kt??rego po deformacji przeprowadza si?? po wyr??wnaniu temperatury rury i narz??dzia.</li><li>Patent Nr 312642. Spos??b przygotowania wt??aczania na gor??co detali, wykonanych w postaci koncentrycznie zmontowanych tulejek, wykonanych z r????nych materia????w, znamienny tym, ??e w celu otrzymania wielowarstwowych detali z napr????eniem warstw, ka??da tulejka wykonana jest z materia??u, kt??rego wsp????czynnik rozszerzalno??ci termicznej jest wy??szy od wsp????czynnika rozszerzalno??ci liniowej materia??u tulejki wewn??trznej.</li><li>Patent Nr 242127. Urz??dzenie do mikroprzemieszczania obiektu roboczego, na przyk??ad uchwytu kryszta????w w ich hodowli z roztworu, znamienne tym, ??e w celu zapewnienia maksymalnej p??ynno??ci ruchu sk??ada si?? ono z dw??ch pr??t??w elektrycznie podgrzewanych i och??adzanych wg zadanego programu, znajduj??cych si?? w zamocowanych na suportach termokomorach i kolejno przemieszczaj??cych obiekt w potrzebnym kierunku.</li></ul>";
        
              principlesAnimation[38] = "Animacja<br>Dost??pne wkr??tce";
              principlesTitle[38] = "38. Strong oxidants";
              principlesText[38] = "<ul type=square><li>Replace air with oxygen-enriched air.</li><li>Replace enriched air with pure oxygen.</li><li>Expose air or oxygen to ionizing radiation.</li><li>Use ozonized oxygen.</li><li>Replace ozonized (or ionized) oxygen with ozone.</li></ul>";
              principlesExample[38] = "<ul type=square><li>Spiekanie i opalanie dyspersyjnego materia??u z zastosowaniem intensyfikacji procesu ??arzenia drog?? przedmuchiwania powietrzem wzbogaconym w tlen, ??ukowo - plazmowe ci??cie metali, przy czym w charakterze tn??cego gazu stosuje si?? czysty tlen,</li><li>Intensyfikacja procesu aglomeracji rud drog?? jonizacji utleniacza i gazowego paliwa przed podaniem w warstw?? rudy.</li></ul>";
        
              principlesAnimation[39] = "Animacja<br>Dost??pne wkr??tce";
              principlesTitle[39] = "39. Inert atmosphere";
              principlesText[39] = "<ul type=square><li>Replace a normal environment with an inert one.</li><li>Add neutral parts, or inert additives to the object.</li></ul>";
              principlesExample[39] = "Brak przyk??ad??w";
        
              principlesAnimation[40] = "Animacja<br>Dost??pne wkr??tce";
              principlesTitle[40] = "40. Composite materials";
              principlesText[40] = "<ul type=square><li>Change from uniform to composite (multiple) materials.</li></ul>";
              principlesExample[40] = "<ul type=square><li>Patent USA Nr 3553820. Lekkie wytrzyma??e, trudnotopliwe detale, wykonane na bazie aluminium i wzmocnione w????knin?? z pokrytych tantalem w????kien w??glowych. Takie wyroby charakteryzuj?? si?? wysokim modu??em spr????ysto??ci i wykorzystuje si?? je w charakterze materia????w do budowy statk??w powietrznych i morskich.</li><li>Patent Nr 147225. Spos??b zapisu, wykorzystuj??cy atrament, zawieraj??cy drobne magnetyczne cz??steczki. W odr????nieniu od zwyk??ych, magnetyczny atrament mo??na sterowa?? polem magnetycznym.</li><li>Interesuj??cym materia??em kompozytowym jest po????czenie substancji niskotopliwej (np. stopu Wooda) z w????knami trudnotopliwej substancji (np. stali). Taki materia?? ??atwo si?? topi, a po zastygni??ciu posiada wysoka wytrzyma??o????. Stopniowo zachodzi proces dyfuzji cz??steczek lutowia i w????kien, w rezultacie czego tworzy si?? materia?? o wysokiej temperaturze topnienia.</li><li>Zawiesina cz??stek krzemienia w smarze sta??ym - zdolna krzepn???? w polu elektrycznym.</li><li>Materia??y kompozytowe to \"wynalazek\" przyrody i s?? szeroko w niej wykorzystywane. Tak np. drewno - jest kompozytem celulozy i ligniny. W????kna celulozy posiadaj?? wysok?? wytrzyma??o???? na zrywanie, ale ??atwo si?? wyginaj??. Lignina wi????e je w jedn?? ca??o???? i nadaje materia??owi sztywno????.</li><li>Materia??y porowate, o kt??rych by??a mowa w zasadzie 31, s?? kompozycj?? powietrza i cia??a sta??ego. Ani powietrze, ani cia??o sta??e nie posiadaj?? tych w??a??ciwo??ci, jakie posiada cia??o porowate.</li></ul>";

              principlesAnimation[41] = "Animacja<br>Dost??pne wkr??tce";
          principlesTitle[41] = "No solutions found for the given parameters";
          principlesText[41] = "";
          principlesExample[41] = "<ul type=square><li>Patent USA Nr 3553820. Lekkie wytrzyma??e, trudnotopliwe detale, wykonane na bazie aluminium i wzmocnione w????knin?? z pokrytych tantalem w????kien w??glowych. Takie wyroby charakteryzuj?? si?? wysokim modu??em spr????ysto??ci i wykorzystuje si?? je w charakterze materia????w do budowy statk??w powietrznych i morskich.</li><li>Patent Nr 147225. Spos??b zapisu, wykorzystuj??cy atrament, zawieraj??cy drobne magnetyczne cz??steczki. W odr????nieniu od zwyk??ych, magnetyczny atrament mo??na sterowa?? polem magnetycznym.</li><li>Interesuj??cym materia??em kompozytowym jest po????czenie substancji niskotopliwej (np. stopu Wooda) z w????knami trudnotopliwej substancji (np. stali). Taki materia?? ??atwo si?? topi, a po zastygni??ciu posiada wysoka wytrzyma??o????. Stopniowo zachodzi proces dyfuzji cz??steczek lutowia i w????kien, w rezultacie czego tworzy si?? materia?? o wysokiej temperaturze topnienia.</li><li>Zawiesina cz??stek krzemienia w smarze sta??ym - zdolna krzepn???? w polu elektrycznym.</li><li>Materia??y kompozytowe to \"wynalazek\" przyrody i s?? szeroko w niej wykorzystywane. Tak np. drewno - jest kompozytem celulozy i ligniny. W????kna celulozy posiadaj?? wysok?? wytrzyma??o???? na zrywanie, ale ??atwo si?? wyginaj??. Lignina wi????e je w jedn?? ca??o???? i nadaje materia??owi sztywno????.</li><li>Materia??y porowate, o kt??rych by??a mowa w zasadzie 31, s?? kompozycj?? powietrza i cia??a sta??ego. Ani powietrze, ani cia??o sta??e nie posiadaj?? tych w??a??ciwo??ci, jakie posiada cia??o porowate.</li></ul>";
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                if(principlesSelect1 == 0 || principlesSelect2 == 0) {
        
                  let principlesContent = document.getElementById('content_area_principles_content');
                  principlesContent.innerHTML = "<div id=content_area_info>Select two parameters</div>";
        
                } else if(principlesSelect1 != 0 && principlesSelect2 != 0 ) {
                  
                      if(zasady[0] == '')
                      {
                        let principlesContent = document.getElementById('content_area_principles_content');
                        principlesContent.innerHTML = "<div id=content_area_info>No solutions found for the given parameters</div>";
                      }
                      else
                      {
                        console.log("Code is Being Exe");
                        let contentWindow = ['', '', '', ''];
                        for(let i = 0; i < 4; i++) {
                          if(zasady[i] != '') {
                              contentWindow[i] = "<div id=content_window><div id=content_window_principles_animation>" + principlesAnimation[zasady[i]] + "</div><div id=content_window_principles_text><div id=content_window_title class=small>" + principlesTitle[zasady[i]] + "</div> <a id=content_window_text>" + principlesText[zasady[i]] + "</a></div><div id=content_window_show_more class=\"accordion\"><div id=content_window_show_more_text class=text1><span id=content_window_show_more_text>View examples</span><span id=content_window_show_more_icon></span></div><div id=content_window_show_more_text class=text2><span id=content_window_show_more_text>Hide examples</span><span id=content_window_show_more_icon></span></div></div>  </div> </div>";
                          }
                        }
                        let principlesContent = document.getElementById('content_area_principles_content');
                        principlesContent.innerHTML = contentWindow[0] + contentWindow[1] + contentWindow[2] + contentWindow[3];

                      }
                  }
        
                  /*if(checkName == 'showAll') {
        
                      document.getElementById("principlesSelect1").value = 0;
                      document.getElementById("principlesSelect2").value = 0;
        
                      let contentWindow = [''];
                      let contentAllWindows = '';
                      for(let i = 1; i < 41; i++) {
                            contentWindow[i] = "<div id=content_window><div id=content_window_principles_animation>" + principlesAnimation[i] + "</div><div id=content_window_principles_text><div id=content_window_title class=small>" + principlesTitle[i] + "</div> <a id=content_window_text>" + principlesText[i] + "</a></div><div id=content_window_show_more class=\"accordion\"><div id=content_window_show_more_text class=text1><span id=content_window_show_more_text>View examples</span><span id=content_window_show_more_icon></span></div><div id=content_window_show_more_text class=text2><span id=content_window_show_more_text>Hide examples</span><span id=content_window_show_more_icon></span></div></div> <div class='panel'> <div id=content_window_example>" + principlesExample[i] + "</div> </div> </div>";
                            contentAllWindows += contentWindow[i];
                      }
                      let principlesContent = document.getElementById('content_area_principles_content');
                      principlesContent.innerHTML = contentAllWindows;
                      accordion();
                    }*/
                    
        }   
console.log("code executed 2");

    // Funky squirly v
 
});


    



    




