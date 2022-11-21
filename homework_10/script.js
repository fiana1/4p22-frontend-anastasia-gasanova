'use strict';

    fetch('https://reqres.in/api/users?per_page=12')
        .then(response => response.json())
        .then((ObjectList) => {
            console.log(ObjectList);
        });
		
		const ObjectList = [
    {
        avatar: "https://reqres.in/img/faces/1-image.jpg",
        email: "george.bluth@reqres.in",
        first_name: "George",
        id: 1,
        last_name: "Bluth"
    },
    {
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        id: 2,
        last_name: "Weaver"
    },
    {
        avatar: "https://reqres.in/img/faces/3-image.jpg",
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        id: 3,
        last_name: "Wong"
    },
    {
        avatar: "https://reqres.in/img/faces/4-image.jpg",
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        id: 4,
        last_name: "Holt"
    },
    {
        avatar: "https://reqres.in/img/faces/5-image.jpg",
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        id: 5,
        last_name: "Morris"
    },
    {
        avatar: "https://reqres.in/img/faces/6-image.jpg",
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        id: 6,
        last_name: "Ramos"
    },
    {
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        id: 7,
        last_name: "Lawson"   
    },
    {
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        id: 8,
        last_name: "Ferguson"
    },
    {
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        id: 9,
        last_name: "Funke"
    },
    {
        avatar: "https://reqres.in/img/faces/10-image.jpg",
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        id: 10,
        last_name: "Fields"
    },
    {
        avatar: "https://reqres.in/img/faces/11-image.jpg",
        email: "george.edwards@reqres.in",
        first_name: "George",
        id: 11,
        last_name: "Edwards"   
    },
    {
        avatar: "https://reqres.in/img/faces/12-image.jpg",
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        id: 12,
        last_name: "Howell"
    }
]

for (let i = 0; i < ObjectList.length; i++) {
    console.log(`${i + 1}. ${ObjectList[i].last_name}`);
}



const filteredArray = ObjectList.filter((item) => {
    return item.last_name[0] === 'F';
});

console.log(filteredArray);



const reducedArray = ObjectList.reduce((accumulator, item, index, array) => {
    accumulator += (`${item.first_name} ${item.last_name}`);
    if (index !== array.length - 1) {
        accumulator += ',';
    } else {
        accumulator += '.';
    }
    return accumulator;
},'');

console.log(`Наша база содержит данные следующих пользователей: ${reducedArray}`);



// Object.keys(ObjectList[0]).forEach((key) => {
//     console.log(key);
// });
console.log(Object.keys(ObjectList[0]));


