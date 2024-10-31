// CHARACTER COUNTER


//Declare the variables
const text = document.getElementById('text')
const word = document.getElementById('word')
const char = document.getElementById('char')

text.addEventListener('input', function() {
    //count characters
    let content = this.value;
    char.textContent = content.length;

    //remove empty spaces from start and end
   content.trim();
//    console.log(content);

})
