/* 神經系統概念圖 2.0.2｜獨立 PWA 快取，路徑依 GitHub Pages 專案相對網址。 */
const VERSION = 'neuron-v2-0-2-2026-11-12';
const CACHE_NAME = 'bio-' + VERSION;
const SHELL = [
  './', './index.html', './manifest.webmanifest', './favicon.ico',
  './icons/icon-32.png','./icons/icon-192.png','./icons/icon-512.png',
  './icons/icon-512-maskable.png','./icons/apple-touch-icon.png'
];
self.addEventListener('install', event => {
  // 完整下載才算安裝成功；若離線或缺檔，不以部分檔案冒充離線可用。
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)));
});
self.addEventListener('activate', event => {
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('bio-neuron-v2-') && key!==CACHE_NAME).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  const scope=new URL(self.registration.scope);
  if(!url.pathname.startsWith(scope.pathname)) return;
  const isAppPage = event.request.mode==='navigate';
  if(isAppPage){
    event.respondWith((async()=>{
      // 導覽優先取網路，失聯回退已完整快取的版本。
      try { const response=await fetch(event.request); if(response.ok)return response; } catch(e){}
      return (await caches.match('./index.html')) || Response.error();
    })());
  } else {
    event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)));
  }
});
self.addEventListener('message',event=>{
  if(event.data?.type!=='CHECK_OFFLINE'||!event.ports[0])return;
  event.waitUntil((async()=>{
    const c=await caches.open(CACHE_NAME);
    const checks=await Promise.all(SHELL.map(p=>c.match(p)));
    event.ports[0].postMessage({ready:checks.every(Boolean),version:VERSION});
  })());
});
