function loginCheck()
{
    if (!document.getElementById("emailLogin").value)
    { 
        alert("Please enter your email");
    }
    else {
        var emailLogin = document.getElementById("emailLogin").value
        if (!document.getElementById("passwordLogin").value)
        {
            alert("Please enter your password");
        }   
    }
}

function registerCheck()
{
    if (!document.getElementById("emailRegister").value)
    { 
        alert("Please enter an email");
    }
    else if (!document.getElementById("passwordRegister").value) 
    {
        var emailLogin = document.getElementById("emailRegister").value
        {
            alert("Please enter a password");
        }   
    }
}

function validatePassword()
{
    var PassRegister = document.getElementById("passwordRegister").value;
    var input = /[a-zA-Z0-9]{8,15}/;
    
    if (input.test(PassRegister))
    {
        document.getElementById("passwordPrompt").style.color="green";
        document.getElementById("passwordPrompt").innerHTML = "valid";
        return true;
    }
    else
    {
        document.getElementById("passwordPrompt").style.color="red";
        document.getElementById("passwordPrompt").innerHTML = "invalid";
        return false;
    }
}

function validatePasswordMatch()
{
    var PassRegister = document.getElementById("passwordRegister").value;
    var PassRegisterConfirm = document.getElementById("passwordConfirmedRegister").value;
    var input;
    
    if (PassRegister == PassRegisterConfirm)
    {
        document.getElementById("matchPrompt").style.color="green";
        document.getElementById("matchPrompt").innerHTML = "match";
        return true;
    }
    else
    {
        document.getElementById("matchPrompt").style.color="red";
        document.getElementById("matchPrompt").innerHTML = "unmatch";
        return false;
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

const counters = document.querySelectorAll('.counter');
const speed = 200; 

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;


		if (count < target) {
			counter.innerText =Math.round(count + inc);
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

