let nhap = document.getElementById("nhap");

let menu = JSON.parse(localStorage.getItem('menu')) || ["rauxao","thitluoc","garan"];

    let userInput = prompt("ký tự crud");

// if (userInput === "C"){
//     alert("Mời người dùng nhập món ăn muốn thêm vào menu")
// }
// else if (userInput ==="R") {
//     alert("danh sách món ăn mới nhất trong menu")
// }
// else if(userInput === "U"){
//     alert("Mời người dùng nhập vào tên món ăn mới")
// }
// else if (userInput=== "D"){
//     alert("Mời người dùng nhập vào tên món muốn Delete")
// }
// localStorage.setItem()
if (userInput === "C"){
    let newfood = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
    menu.push(newfood)
    localStorage.setItem('menu', JSON.stringify(menu));
}
if (userInput=== "R"){
    localStorage.setItem('menu')
}
if (userInput === "U"){

}
if ( userInput === "D") {
    
}