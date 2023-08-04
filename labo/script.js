//====================実験用====================
function randint(min, max) {
    // min（含む）から max（含む）までの整数をランダムに生成
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//====================実用====================

function convertToHexWithZeroPadding(arr,base) {
    // 配列内の数値を16進数に変換して新しい配列を作成
    return [...arr].map((num) => num.toString(base).padStart(2, '0').toUpperCase());
}

function insert_text(text) {
    let row = document.createElement("div");
    let binary = document.getElementById("binary")
    row.textContent = text;
    row.setAttribute('class', "row");
    binary.appendChild(row);
}

function create_header(base){
    let arr = [...Array(base)].map((_, i) => i).map((num) => num.toString(base).padStart(2, "0").toUpperCase());
    arr = ["address",...arr]
    let row = document.createElement("tr");
    row.setAttribute("class","tableheader");
    for (const i of arr) {
        const elem = document.createElement("th");
        elem.textContent = i;
        elem.setAttribute('class', "bd");
        row.appendChild(elem);
    }

    let binary = document.getElementById("binary")
    binary.appendChild(row);
}

function insert_row(base,count,arr) {
    let row = document.createElement("tr");
    let binary = document.getElementById("binary");
    const backnumber = document.createElement("th");
    backnumber.textContent = count.toString(base).padStart(8, "0").toUpperCase();
    backnumber.setAttribute("class","bn");
    row.appendChild(backnumber);
    for (const i of arr){
        const elem = document.createElement("td");
        elem.textContent=i;
        elem.setAttribute('class', "bd");
        row.appendChild(elem);
    }
    row.setAttribute('class', "row");
    binary.appendChild(row);
}

//chunkedプログラムはmtripg6666tdr氏より借用
const chunked = (arr, len) => [...Array(Math.ceil(arr.length / len))].map((_, i) => arr.slice(i * len, (i + 1) * len));

function create_table(){
    clear_table()
    let random_array = new Uint8Array([...Array(1000)].map((_) => randint(0, 255)))
    let base = 16
    create_header(base);
    let count = 0;
    for (const i of chunked(random_array, base)) {
        insert_row(base, count, convertToHexWithZeroPadding(i, base));
        count++;
    }
}

function clear_table(){
    const binaryparents = document.getElementById("binary");
    //削除
    while (binaryparents.firstChild) {
        binaryparents.removeChild(binaryparents.firstChild);
    }
}

let drawtable = document.getElementById("drawtable");
drawtable.addEventListener("click", create_table)