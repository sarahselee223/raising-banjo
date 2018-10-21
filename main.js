function dateCreate(){
    let date = Date()
    let dateInfo = date.slice(0,15)
    const location = document.getElementById("dateHere")
    location.innerText = dateInfo
}
    
