// part1|| 1) створити інтерфейс на основі цього объекта:
// Зверніть увагу там де масиви... в них може бути багато однотипних обїектів

// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//     "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
// },
//     "links": {
//     "article_link": null,
//         "video_link": "https://youtu/J442-ti-Dhg"
// },
//     "rocket": {
//     "rocket_name": "Falcon 9",
//         "first_stage": {
//         "cores": [
//             {
//                 "flight": 7,
//                 "core": {
//                     "reuse_count": 6,
//                     "status": "unknown"
//                 }
//             }
//         ]
//     },
//     "second_stage": {
//         "payloads": [
//             {
//                 "payload_type": "Satellite",
//                 "payload_mass_kg": 15400,
//                 "payload_mass_lbs": 33951.2
//             }
//         ]
//     }
// }
// }

//*************************|Виконання Part1|***********************************

type link ={article_link:string|number,video_link:string|number};
type rocket={rocket_name:string,
    first_stage:{cores:[{
            flight: number, core:
                {
                    reuse_count: number,
                    status: string
                }
        }]},
    second_stage: {payloads:[
            {payload_type:string,
                payload_mass_kg:number,
                payload_mass_lbs:number}
        ]}
};
interface IStarship{
    mission_name: string,
    launch_date_local:string,
    launch_site: object,
    links:link
    rocket:rocket
}


/// Part2||2) протипізувати функції:
//
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
//
// function sum(a,b){
//     return a+b
// }
// function showSum(a,b){
//     console.log(a + b);
// }
//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)



//***************************|Виконання Part2|************************

const user:({name:string,age:number,gender:string}) = {
    name:"Max",
    age:18,
    gender:'male'
}

function sum(a:number,b:number):number{
    return a+b
}

function showSum(a:number,b:number):void{
    console.log(a + b);
}

function incAge(someUser:{age?:number}, inc:number):object{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)