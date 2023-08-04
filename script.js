import init,{is_png} from "./WebBinaryViewer_bg.js";
init()



const dropArea = document.getElementById('dropArea');

// ドラッグイベントのデフォルト動作を抑制する
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// ファイルをドラッグエリアに入れたときの処理
dropArea.addEventListener('dragenter', (e) => {
    e.preventDefault();
    dropArea.style.backgroundColor = 'rgba(255, 165, 0, 0.5)'; // オレンジ色に変更（アルファ値を指定してほんのりとした透明度にする）
});

// ファイルをドラッグエリアから出したときの処理
dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.style.backgroundColor = 'lightgray'; // 元の色に戻す
});

// ファイルをドロップしたときの処理
dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.style.backgroundColor = 'lightgray'; // 元の色に戻す
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        // ドロップされたファイルを処理する関数を呼び出す
        handleFile(files[0]);
    }
});

function handleFile(selectedFile) {
    // ファイルの内容を取得したり、ファイルをアップロードしたりする処理をここに記述する
    // 例：ファイルの内容をコンソールに出力する
    const reader = new FileReader();
    reader.onload = onload;
    reader.readAsArrayBuffer(selectedFile);
}


const Fileopendialog = document.getElementById("Fileopendialog");
Fileopendialog.addEventListener("click",()=>{
    const fileInput = document.createElement('input');
    fileInput.type = 'file';

    // 選択されたファイルが変更されたときのイベントリスナーを設定
    fileInput.addEventListener('change', (e) => {
        const selectedFile = e.target.files[0];

        // FileReaderオブジェクトを使用してファイルのバイナリデータを読み込む
        const reader = new FileReader();

        reader.onload=onload;

        // ファイルをバイナリデータとして読み込む
        reader.readAsArrayBuffer(selectedFile);
    });

    // ファイル選択ダイアログを開く
    fileInput.click();
})



function onload(e) {
    let arrayBuffer = e.target.result;
    console.log(arrayBuffer.slice(0, 10)) //先頭10のみ表示
    let Array_u8 = new Uint8Array(arrayBuffer);
    console.log(is_png(Array_u8));
    create_table(Array_u8);

}