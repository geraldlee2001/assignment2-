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