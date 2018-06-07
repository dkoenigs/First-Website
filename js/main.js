// Smooth Scroll Effect
$('#viewProjects').on('click', function() {
    const projects = $('#projects').position().top;
  
    $('html, body').animate(
      {
        scrollTop: projects
      },
      900
    );
  });