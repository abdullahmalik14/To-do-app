
var list = document.getElementById('list');


function add(){
    
    var input = document.getElementById('input');
    var lielement = document.createElement('li');
    var litext = document.createTextNode(input.value);
    lielement.appendChild(litext);
    list.appendChild(lielement);
    input.value = "";

    var delbtn = document.createElement('button');
    var delbtntxt = document.createTextNode('Delete');
    delbtn.appendChild(delbtntxt);
    lielement.appendChild(delbtn)
    delbtn.setAttribute('onclick','del(this)');
    delbtn.setAttribute('class','delbtn')
    // console.log(lielement);

    var editbtn = document.createElement('button');
    var editbtntxt = document.createTextNode('Edit');
    editbtn.appendChild(editbtntxt);
    lielement.appendChild(editbtn);
    editbtn.setAttribute('onclick','edit(this)')
    editbtn.setAttribute('class','editbtn')
    
}

function delall(){
    list.innerHTML = ""
}

function del(e){
        e.parentNode.remove()

}

function edit(e){
    var editvalue = prompt("Enter new value",e.parentNode.firstChild.nodeValue);
     e.parentNode.firstChild.nodeValue = editvalue;

}





