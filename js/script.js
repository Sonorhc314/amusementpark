window.onload = function()
{
        function contact_f()
        {
            let email=prompt("Your email:");
            if(email)
            {
                alert("My apologies, the servers now are down");
            }
            else
            {
                alert("Try providing a valid email.");
            }
        }
        
        function book_f()
        {
            let loc = prompt("Select a trip: 1) econom  2) delux  3) research  4)else");
            let email=prompt("Your email:");
            if(email)
            {
                switch(loc) 
                {
                  case "1":
                    alert(`We'll email you about econom trips on ${email}!`);
                    break;
                  case "2":
                    alert(`We'll email you about delux trips on ${email}!`);
                    break;
                  case "3":
                    alert(`We'll email you about research trips on ${email}!`);
                    break;
                  case "4":
                    alert(`We'll email you about other trips on ${email}!`);
                    break;
                  default:
                    alert("Select case(1-4)");
                    break;
                }
            }
            else
            {
                alert("Try providing a valid email.");
            }
        }
        
        function gen_f()
        {
            let randint = Math.floor(Math.random() * 5);
            var place = document.querySelector("#genimg");
            switch(randint) 
                {
                  case 0:
                    place.innerHTML=(`<img src="https://64.media.tumblr.com/d0b3476194005eeeeaf116527da3bd79/7a4ebe7aeea97836-00/s1280x1920/18836d1883cfcbcea8fa6bbe277b81471f460b6b.jpg"></img>
                    <p class="text-container">
                        <strong style="font-size:25px">Wander through the corridors of flesh! And bring your friends with you</strong></br></br>
                    </p>`);
                    break;
                  case 1:
                    place.innerHTML=(`<img src="https://64.media.tumblr.com/b1ecd1287a019ccef6b68edbe740e8e9/3dd790e9a69e548d-57/s1280x1920/dcdeda72973d83bdab679522e408033f9f4b786b.jpg"></img>
                    <p class="text-container">
                        <strong style="font-size:25px">Amniotic Ballasts! Just like spa but better</strong></br></br>
                    </p>`);
                    break;
                  case 2:
                    place.innerHTML=(`<img src="https://64.media.tumblr.com/772c3c16f19ab052138b1e26049701d0/4fe01ee2cf537632-c0/s1280x1920/ce2998ff472bb7736e8d0801bec03de3f2204e07.jpg"></img>
                    <p class="text-container">
                        <strong style="font-size:25px">Lower visitor center, your gateway to an unforgettable visit!</strong></br></br>
                    </p>`);
                    break;
                  case 3:
                    place.innerHTML=(`<img src="https://64.media.tumblr.com/0cd769a1a77d87c5b5a3fe801d337866/f405d29c1a478d84-b2/s1280x1920/8e9de25b95492b1123df9f88cb598b96ebd40ec5.jpg"></img>
                    <p class="text-container">
                        <strong style="font-size:25px">Remember that one accident? Hauntingly beautiful!</strong></br></br>
                    </p>`);
                    break;
                  case 4:
                    place.innerHTML=(`<img src="https://64.media.tumblr.com/90531d607357e1bb656f6a842ed11f19/e797d567b71116be-0e/s1280x1920/802dca15b4919afa202fc61ade1db95004ff1871.png"></img>
                    <p class="text-container">
                        <strong style="font-size:25px">Well of the Abhumans! The fuse of who-knows-what that can't die!</strong></br></br>
                    </p>`);
                    break;
                }
            }
        
            var contact=document.querySelector('#contact');
            var book=document.querySelector('#book');
            var gen=document.querySelector('#gen');
            
            contact.addEventListener("click", contact_f);
            book.addEventListener("click", book_f);
            gen.addEventListener("click", gen_f);
}
        