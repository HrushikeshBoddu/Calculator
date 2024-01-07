let Display = document.querySelector('.total')

const AllButton = document.querySelectorAll('button')
AllButton.forEach((elements) => {
    elements.addEventListener('click' , (e) => {
        var ele = e.target
        var buttonNumber = ele.textContent  //getting values of the buttion
        let DisplayingOnHTMLDoc = Display.innerHTML += buttonNumber //adding more numbers to side on calculator
        console.log(`val = ${DisplayingOnHTMLDoc}`);
        if(buttonNumber === '='){
            //it will remove '=' from the last
            var total = DisplayingOnHTMLDoc.replace('=' ,'')
            let ans = eval(total)
            var  a = Display.innerHTML = ans
            console.log(a);  //print the output
        }
        if(buttonNumber === 'AC'){
            window.location.reload()
        }
        
       
        
    })
})





