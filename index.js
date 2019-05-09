console.log('index.js connected')
let costs = []

function addBill(){
    // create li = name
    let li = document.createElement('li');
    li.innerText = (document.getElementById('name').value);
    document.getElementById('items').appendChild(li);
    console.log(li)
    //create li2 = `${amount}`
    let li2 = document.createElement('li');
    li2.innerText = ('$' + document.getElementById('amount').value);
    document.getElementById('items').appendChild(li2);
    console.log(li2)
    //create trash cans
    let trash_can = document.createElement('input');
    trash_can.setAttribute('type', 'image')
    trash_can.setAttribute('src', 'assets/trash_can.svg')
    document.querySelector('.trash').appendChild(trash_can);
    //add total to the top
    function budgetTotal(){
        // make array with num vs str
        costs.push(
            parseFloat(document.getElementById('amount').value));
        console.log(costs)
        // let Total = total.reduce();
        let reducer = function(accumulator, currentValue){
            return accumulator + currentValue;
        }
        let Total = costs.reduce(reducer);
        console.log(Total)
        //update top with current budget totals
        let h2 = document.createElement('h2');
        h2.innerText = `Budget Total: $${Total}`;
        document.querySelector('h2').remove();
        document.querySelector('.header-text').append(h2);
    }
    budgetTotal()
}

//Trash can functions
// document.querySelectorAll('.trash').addEventListener('click', function(){
//     //delete li[] & li2[] = 2li[]
//     document.querySelector('#item')[document.querySelectorAll('.trash')].remove();
// });
