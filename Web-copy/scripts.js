window.addEventListener('load', function() {
    var heading = document.querySelector('h1');
    heading.addEventListener('click', function() {
      heading.style.color = 'red';
    });
  });
  
  alert('Hello, World!');