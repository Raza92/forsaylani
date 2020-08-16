

function onSaveButtonClick(){
    var txtName = document.getElementById('name');
    var txtRegno = document.getElementById('regno');

    if (txtName.value != ''){
        var key = firebase.database().ref('customer').push().key;

        var custData = {
            name: txtName.value,
            regno: txtRegno.value,
            key: key
        }
        firebase.database().ref('customer').push(custData)
    }
    getServerData();
    document.getElementById('btnSaveAndGet').value = 'Save'
    document.getElementById('btnSaveAndGet').innerHTML = 'Save'

   
}

function getServerData() {
    firebase.database().ref('customer').once('value', function(data) {
        var info = data.val();
        console.log(info)
        var name = '';
        var regno = '';
        var txt = '';

        txt += "<table border='1'>"

        var idCount = 1;
        for (x in info) {
            console.log(idCount+' '+ x)
            txt += "<tr><td style='display: none'> " + info[x].key + "</td> <td>" + info[x].name + "</td>  <td>" + info[x].regno + "</td>";
            txt += " <td> <button onclick=removeRowData('"+x+"') type='button'>Delete</button> </td>  </tr>";
            idCount++;
            };
            txt += "</table>"
            document.getElementById("demo").innerHTML = txt;
            

    })
}

function removeRowData(key){
    console.log(key)
    console.log(firebase.database().ref('customer/"'+key+'"'), key)
    firebase.database().ref('customer').child(key).remove();
    getServerData();
}

