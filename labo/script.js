//====================実験用====================
function randint(min, max) {
    // min（含む）から max（含む）までの整数をランダムに生成
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let random_array = new Uint8Array([...Array(1000)].map((_)=>randint(0,255)))


//====================実用====================

function convertToHexWithZeroPadding(arr,base) {
    // 配列内の数値を16進数に変換して新しい配列を作成
    return [...arr].map((num) => num.toString(base).padStart(2, '0'));
}

function insert_text(text) {
    let row = document.createElement("div");
    let binary = document.getElementById("binary")
    row.textContent = text;
    row.setAttribute('class', "row");
    binary.appendChild(row);
}

function create_header(base){
    let arr =[...Array(base)].map((_, i) => i).map((num) => num.toString(base));
    arr = ["address",...arr]
    let row = document.createElement("tr");

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
    let binary = document.getElementById("binary")
    for (const i of [count.toString(base).padStart(8,"0"),...arr]){
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
    let base = 16
    create_header(base);
    let count = 0;
    for (const i of chunked(random_array, base)) {
        insert_row(base, count, convertToHexWithZeroPadding(i, base));
        count++;
    }
}

create_table()