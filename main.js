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
