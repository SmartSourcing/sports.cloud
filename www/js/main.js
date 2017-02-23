requirejs.config({
    baseUrl: 'app',
    paths: {
        ts: 'services/ts'
    },
    waitSeconds: 15
    //,urlArgs : "bust="+new Date().getTime()
});

requirejs(['ts']);