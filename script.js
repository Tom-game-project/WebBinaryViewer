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

function handleFile(file) {
    // ファイルの内容を取得したり、ファイルをアップロードしたりする処理をここに記述する
    // 例：ファイルの内容をコンソールに出力する
    const reader = new FileReader();
    reader.onload = (e) => {
        console.log(e.target.result);
    };
    reader.readAsText(file); // テキストファイルの内容を取得
}
