console.log('index.js connected')

function addBill(){
    // create li = name
    let li = document.createElement('li');
    li.innerText = (document.getElementsByTagName('input')[2].value);
    document.getElementById('items').appendChild(li);
    console.log(li)
    //create li2 = `${amount}`
    let li2 = document.createElement('li');
    li2.innerText = ('$' + document.getElementsByTagName('input')[3].value);
    document.getElementById('items').appendChild(li2);
    console.log(li2)
    //create 2li = trash
    // let trash = document.createElement('input');
    // trash.setAttribute('image', 'src="assets/trash_can.svg"')
    // document.getElementById('trash').append(trash);
    //add total to the top
    function budgetTotal(){
        // let total = value of li2s added together
        let costs = []
        // let m = document.getElementsByTagName('input')[3].value;
        costs.push(document.getElementsByTagName('input')[3].value);
        console.log(costs)
        // let Total = total.reduce();
        
        // console.log(Total)
        //update top with current budget totals
        let h2 = document.createElement('h2');
        h2.innerText = `Budget Total: $${costs}`;
        document.querySelector('h2').remove();
        document.querySelector('.header-text').append(h2);
    }
    budgetTotal()
}
// document.querySelectorAll('.trash').addEventListener('click', function(){
//     //delete li[] & li2[] = 2li[]
//     document.querySelector('#item')[document.querySelectorAll('.trash')].remove();
// });
