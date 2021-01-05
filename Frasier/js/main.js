document.querySelector('#convert').addEventListener('click', doSomeStuff)

function doSomeStuff(){
  const month = document.querySelector('#monthSelected').value
  const day = document.querySelector('#day').value
// Aquarius
  if (day >= 20 && day <= 31 && document.getElementById('Jan').selected || day > 0 && day <= 18 && document.getElementById('Feb').selected)  {
    document.getElementById('change').innerHTML=("You are Aquarius &#9810; <br> Your Horoscope is:<br> Don't fence me in! That's your rallying cry. You're all about freedom -- lots of it.")
  }
  //Pisces 2/19-3/20
  else if (day >= 19 && day <=29 && document.getElementById('Feb').selected || day > 0 && day <= 20 && document.getElementById('Mar').selected) {
    document.getElementById('change').innerHTML=("You are a Pisces &#9811; <br> Your Horoscope is:<br> Turn off a casual acquaintance's personal soap opera and concentrate on yourself.")
  }
    //Aries 3/21-4/19
  else if (day >= 21 && day <= 31 && document.getElementById('Mar').selected || day > 0 && day <=19 && document.getElementById('Apr').selected) {
    document.getElementById('change').innerHTML=("You are an Aries 	&#9800;<br> Your Horoscope is: <br> The stars want you to strike out in a new direction. Dare to be bold and different!")
  }
    //Taurus 4/20-5/20
else if (day >= 20 && day <= 30 && document.getElementById('Apr').selected || day > 0 && day <=20 && document.getElementById('May').selected) {
  document.getElementById('change').innerHTML=("You are a Taurus &#9801;<br> Your Horoscope is: <br> Attitude, like pepper, adds spice. But add too much, and you're sneezing like crazy.")
}
    //Gemini 5/21-6/20
else if (day >= 21 && day <= 31 && document.getElementById('May').selected || day > 0 && day <=20 && document.getElementById('Jun').selected) {
  document.getElementById('change').innerHTML=("You are a Gemini &#9802;<br> Your Horoscope is: <br> Those big ideas? It's about time you put them into action. Start making them real.")
}
    //Cancer 6/21- 7/22
else if (day >= 21 && day <= 30 && document.getElementById('Jun').selected || day > 0 && day <= 22 && document.getElementById('Jul').selected) {
  document.getElementById('change').innerHTML=("You are Cancer &#9803;<br> Your Horoscope is: <br>Spontaneity? Isn't that a kitchen cleaner? No, it's what you're all about right now.")
}
    //Leo 7/23- 8/22
else if (day >= 23 && day <= 31 && document.getElementById('Jul').selected || day > 0 && day <= 22 & document.getElementById('Aug').selected) {
  document.getElementById('change').innerHTML=("You are a Leo &#9804;<br> Your Horoscope is:<br> You shine on and on. The stars lend you some of their glow, not that you need it")
}
    //Virgo 8/23- 9/22
else if (day >= 23 && day <= 31 && document.getElementById('Aug').selected || day > 0 && day <=22 && document.getElementById('Sep').selected) {
  document.getElementById('change').innerHTML=("You are a Virgo &#9805;<br> Your Horoscope is:<br>You just can't resist organizing! Refine your own filing system, then help a friend.")
}
    //Libra 9/23- 10/22
else if (day >=23 && day <= 30 && document.getElementById('Sep').selected || day > 0 && day <=22 && document.getElementById('Oct').selected) {
  document.getElementById('change').innerHTML=("You are a Libra &#9806;<br> Your Horoscope is:<br>Try to grasp the entire picture. Tunnel vision isn't desirable in this situation.")
}
    //Scorpio 10/23- 11/21
else if (day >= 23 && day <= 31 && document.getElementById('Oct').selected || day > 0 && day <= 21 && document.getElementById('Nov').selected) {
  document.getElementById('change').innerHTML=("You are a Scropio &#9807;<br> Your Horoscope is:<br>Someone's a bit touchy. You naturally attract attention, but keep a low profile")
}
    //Sagittarius 11/22- 12/21
else if (day >= 22 && day <= 30 && document.getElementById('Nov').selected || day > 0 && day <=21 && document.getElementById('Dec').selected) {
  document.getElementById('change').innerHTML=("You are a Sagittarius &#9808;<br> Your Horoscope is:<br>Lady Luck's your new best friend right now. Whatever you do, you'll hit the jackpot.")
}
    //Capricorn 12/22- 1/19
else if (day >= 22 && day <= 31 && document.getElementById('Dec').selected || day > 0 && day <= 19 && document.getElementById('Jan').selected) {
  document.getElementById('change').innerHTML=("You are a Capricorn &#9809;<br> Your Horoscope is:<br> Some people can't stop asking for help, and others can't start. Who are you today?")
}

}
