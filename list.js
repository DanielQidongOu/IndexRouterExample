function clearList() {
    let el = document.getElementById('user_list');
        while(el.hasChildNodes()) {
            el.removeChild(el.lastChild)
        }
}

function getList() {
    console.log('call getList');
    const url = 'http://127.0.0.1:8080/api/users'
    axios.get(url).then((res)=>{
        const users = res.data.data;
        console.log('users', users);

        clearList();

        users.forEach((user)=>{
            const li = document.createElement('li');
            li.innerHTML = user.name + '' + user.age;
            document.getElementById('user_list').appendChild(li);
        })
    });
}

function postUser() {
    console.log('call postUser');
    const url = 'http://127.0.0.1:8080/api/user';

    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    const ageInput = document.getElementById('age');
    const ageValue = ageInput.value;

    if(!nameValue || !ageValue) return;

    const body = {
        name: nameValue,
        age: ageValue,
    }
    console.log('body', body)

    
    axios.post(url, body).then ((res)=>{
        const updateUsers = res.data.data;
        console.log('updateUsers', updateUsers);
        
        clearList();
        updateUsers.forEach((user)=>{
            const li = document.createElement('li');
            li.innerHTML = user.name + ' ' + user.age;
            document.getElementById("user_list").appendChild(li);
        });
        
        nameInput.value = "";
        ageInput.value = "";
    });
}


function deleteList() {
    console.log('delete list');
    const url = 'http://127.0.0.1:8080/api/delete';

    axios.delete(url).then((res)=>{
        const users = res.data.data;
        const msg = res.data.msg;
        console.log('users', users);
        if(users.length === 0) {
            clearList();
            const li = document.createElement('li');
            li.innerHTML = msg;
            document.getElementById('user_list').appendChild(li);
        }
    })
}