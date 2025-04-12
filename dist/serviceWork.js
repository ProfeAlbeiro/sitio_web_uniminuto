const CACHE_NAME = 'pwaV1';

let urlCache = [
    '../',
    '../css/styles.css',
    '../js/scripts,js',
    '../img/usuario.png'
]

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlCache)
            .then(()=>{
                console.log('listo');
                self.skipWaiting();
            });
        })
        .catch(err => {
            console.error("No se ha registrado la cache");
        })
    )
});