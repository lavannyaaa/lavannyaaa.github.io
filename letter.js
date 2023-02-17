var i = 0;
var txt1 = "Heluuu Lavannyaa...!  > Welcome to my world. Being an introvert I often find it difficult expressing myself. > And I got a dejavu feeling > midway talking to you > Here's my way expressing  >> Uff.. I have no cluee what are you going through nor will I ask them but... < Lavannnyaaa you have such a cuuutee smilee 😊... you see.. it is among the prettiest things i've seen. I can only wonder how much more beautiful it would be in the real life. No wonder you are born a year later than me, God sure would've taken his time in creating yaa, only that would explain your extremeee prettiness >> Also dudee, chill outtt!!! I don't understand why is it so weird to be nice to someone. !! Perks of befriending me? >> You'll be getting a kid like friend, who would sing songs for you, send you a nice breakfast when you are sick, write letters for ya, hold your hand everytime he meets you, hear you out when you have a bad day,.... basically would just exist in your life as a bestiee 😁. You can trust me on that, I've been with that idiot for 23 years now. >>  Not sure about anything else, but, I hope this makes your day a little betterr";
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {        
        if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML += '</br>'
        else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
