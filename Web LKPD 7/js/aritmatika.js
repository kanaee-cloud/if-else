function handleButton() {
    var ambilOperator = document.getElementById("operasi").value
    console.log(ambilOperator)
    var angka1 = parseInt(prompt("angka 1"))
    var angka2 = parseInt(prompt("angka 2"))
    if (ambilOperator == "+") {
        let hasil = angka1 + angka2
        document.getElementById("hasil").textContent = `hasil: ${hasil}`
    } else if (ambilOperator == "-") {
        let hasil = angka1 - angka2
        document.getElementById("hasil").textContent = `hasil: ${hasil}`
    } else if (ambilOperator == "*") {
        let hasil = angka1 * angka2
        document.getElementById("hasil").textContent = `hasil: ${hasil}`
    } else if (ambilOperator == "/") {
        let hasil = angka1 / angka2
        document.getElementById("hasil").textContent = `hasil: ${hasil}`
    } else if (ambilOperator == "%") {
        let hasil = angka1 % angka2
        document.getElementById("hasil").textContent = `hasil: ${hasil}`
    } else {
        alert("ga ada opertaorny!")
    }

}