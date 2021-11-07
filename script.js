function ageInDays(){
    var birthYear=prompt('What year was you born?');
    var ageInDayss= (2021-birthYear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('You are '+ ageInDayss+ ' days');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1);
};

function reset (){
    document.getElementById('flex-box-result').remove();
}
