module.exports.home = function() {
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>Chart.js Example</title>
    <meta charset="utf-8">
</head>
<body>
    <h3>Anscombe's Quartet'</h3>
    <hr>
    <p>다음 중 보고자하는 데이터셋을 선택하세요.</p>
    <p>
        <a href="/chart/1">Dataset 1</a>&nbsp;&nbsp;&nbsp;
        <a href="/chart/2">Dataset 2</a>&nbsp;&nbsp;&nbsp;
        <a href="/chart/3">Dataset 3</a>&nbsp;&nbsp;&nbsp;
        <a href="/chart/4">Dataset 4</a>
    </p>
</body>
</html>
    `;
}