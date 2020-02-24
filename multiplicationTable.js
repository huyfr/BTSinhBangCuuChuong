function multiplicationTable() {

    let multiplicationTable;

    multiplicationTable = "<table border='1' border-collapse='collapse' width='100%'";

    for (let rows = 1; rows < 10; rows++) {
        multiplicationTable = multiplicationTable + "<tr>";
        for (let column = 1; column < 10; column++) {
            multiplicationTable = multiplicationTable + "<td>" + column + "x" + rows + "=" + rows * column + "</td>" ;
        }
        multiplicationTable = multiplicationTable + "</tr>";
    }

    multiplicationTable = multiplicationTable + "</table>";

    document.getElementById("result").innerHTML = multiplicationTable;
}