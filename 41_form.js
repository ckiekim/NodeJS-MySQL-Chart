module.exports.dataset = function() {
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <script src="/fontawesome/all.min.js"></script>
    <script src="/jquery/jquery.min.js"></script>
    <script src="/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="jumbotron">
            <h1>Bootstrap Tutorial</h1>
            <p>Bootstrap is the most popular HTML, CSS...</p>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <h2>Anscombe's Quartet</h2>
                <form action="/chart" method="post">
                    <div class="form-group">
                        <label for="dataset">Dataset:</label>
                        <input type="text" class="form-control" name="dataset" placeholder="Dataset 번호 입력">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</body>
</html>
    `;
}