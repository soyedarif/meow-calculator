 const buttons=document.getElementsByClassName('calculator-button');
for(const button of buttons){
    button.addEventListener('click',function(event){
        const value=event.target.innerText;
            const displayNumber=document.getElementById('display-input');
            const lastNumbers=displayNumber.value;
            const newNumber=lastNumbers+value;
            if(value==='C'){
                displayNumber.value='';
            }else if(value === '='){
                const equation=displayNumber.value;
                const result=eval(equation);
                displayNumber.value=result;
            }else if(value==='DEL'){
                const digits=lastNumbers.split('');
                digits.pop()
                const remaining=digits.join('');
                displayNumber.value=remaining;
            }
                else{
                displayNumber.value=newNumber;
            }
    })
} 