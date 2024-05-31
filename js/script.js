document.addEventListener('DOMContentLoaded', function() {
    var linkIcon = document.querySelector('.link-icon');
    linkIcon.addEventListener('click', function() {
       
        var currentURL = window.location.href;
        
 
        var tempInput = document.createElement('input');
        tempInput.value = currentURL;
        document.body.appendChild(tempInput);
        
     
        tempInput.select();
        document.execCommand('copy');
        
      
        document.body.removeChild(tempInput);
        
   
        var icon = linkIcon.querySelector('i');
        icon.classList.remove('fa-link');
        icon.classList.add('fa-clipboard');
  
        setTimeout(function() {
            icon.classList.remove('fa-clipboard');
            icon.classList.add('fa-link');
        }, 2000); 
    });
});
