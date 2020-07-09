function loginCheck()
{
    if (!document.getElementById("emailLogin").value)
    {
        
        alert("Please enter your email");
    }
    else {
        var emailLogin=document.getElementById("emailLogin").value
        if (!document.getElementById("passwordLogin").value)
        {
            alert("Please enter your password");
        }
    }
}

//Owl Carousel Plugin
$(document).ready(function() {
    $("#bookdocSlider").owlCarousel({
        autoPlay : true,
        autoPlay: 1000,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        loop:true,
        nav:true,
    });
});