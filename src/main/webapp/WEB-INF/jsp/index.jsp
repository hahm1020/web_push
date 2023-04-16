<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>web_push</title>
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/js/service-worker.js')
                    .then(function(registration) {
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    }, function(err) {
                        console.log('ServiceWorker registration failed: ', err);
                    });
            });
        }
    </script>
</head>
<body>
<h1>Hello World!</h1>
</body>
</html>