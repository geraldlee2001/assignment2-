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

function marketNonMemberRedirect()
{
    window.open("https://sites.bookdoc.com/contact-us/","_blank");
}

function marketMemberRedirect()
{
    window.open("https://shop.bookdoc.com/","_blank");
}