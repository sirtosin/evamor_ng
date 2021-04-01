
//modal 
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      opcaity: 0.7,
      inDuration: 250,
      outDuration: 250
    });
  });

 //sidenav
 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge: 'left',
    inDuration: 250,
    outDuration: 200,
    preventScrolling: true
  });
});

//carousel

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    duration: 200,
    fullWidth: false,
    numVisible: 5,
    indicators: false,
    dist: -100,
    noWrap: false,
    shift: 0,
    padding: 0,
    autoPlay: true
  });
});

//AOS
AOS.init({
  duration: 1000,
  offset: 300
});


  let hide = document.getElementById('hide')
  hide.style.display = 'none'
  document.getElementById('read_more').addEventListener('click', () => {
      
    let hide = document.getElementById('hide')
    hide.style.display = 'block'
    console.log('more')
  })

  let hide2 = document.getElementById('hide2')
  hide2.style.display = 'none'
  document.getElementById('read_more2').addEventListener('click', () => {
      
    let hide2 = document.getElementById('hide2')
    hide2.style.display = 'block'
    console.log('more')
  })

  let hide3 = document.getElementById('hide3')
  hide3.style.display = 'none'
  document.getElementById('read_more3').addEventListener('click', () => {
      
    let hide3 = document.getElementById('hide3')
    hide3.style.display = 'block'
    console.log('more')
  })