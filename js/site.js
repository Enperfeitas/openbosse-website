(function(){
  // slideshow: previous / next buttons and a counter
  var slides=document.getElementById('slides'),dots=document.getElementById('slide-dots');
  if(slides){
    var n=slides.children.length,dotEls=[];
    var mark=function(i){dotEls.forEach(function(b,k){b.setAttribute('aria-current',k===i?'true':'false');});};
    var go=function(i){mark(i);slides.scrollTo({left:i*slides.clientWidth,behavior:'smooth'});};
    if(dots){for(var d=0;d<n;d++){(function(d){var b=document.createElement('button');b.type='button';b.className='slide-dot';b.setAttribute('aria-label','Ladda bild '+(d+1)+' av '+n);b.addEventListener('click',function(){go(d);});dots.appendChild(b);dotEls.push(b);})(d);}}
    var upd=function(){mark(Math.round(slides.scrollLeft/slides.clientWidth));};
    slides.addEventListener('scroll',upd,{passive:true});upd();
    [].forEach.call(document.querySelectorAll('.slide-btn'),function(b){
      b.addEventListener('click',function(){
        var d=+b.getAttribute('data-dir'),i=Math.round(slides.scrollLeft/slides.clientWidth)+d;
        go((i+n)%n);
      });
    });
  }
})();
(function(){
  // home page: header is transparent over the hero, solid after scrolling
  var hdr=document.querySelector('.home .site-header');
  if(hdr){
    var chk=function(){hdr.classList.toggle('scrolled',window.scrollY>10);};
    window.addEventListener('scroll',chk,{passive:true});chk();
  }
})();
(function(){
  var header=document.querySelector('.site-header'),btn=document.querySelector('.nav-toggle');
  if(!header||!btn)return;
  function set(open){header.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false');}
  btn.addEventListener('click',function(){set(!header.classList.contains('open'));});
  header.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',function(){set(false);});});
  window.addEventListener('resize',function(){if(window.innerWidth>989)set(false);});
})();
