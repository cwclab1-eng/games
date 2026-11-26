/* Match3 게임이 등록을 시도하는 서비스 워커 자리 — 404를 없애기 위한 최소 파일.
   캐시를 하지 않으므로 메신저·게임 파일은 항상 서버의 최신본을 씁니다. */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { self.clients.claim(); });
