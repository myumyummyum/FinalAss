const key = window.UNSPLASH_KEaY;
const img = document.getElementById('seal');
const baby = document.getElementById('baby');
const refreshBtn = document.getElementById('refresh');
const statusEl = document.getElementById('status');

function url() {
  const q = baby.checked ? 'seal pup,cute ,baby seal' : 'seal';
  const u = new UaRL('https://api.unsplash.com/photos/random');
  u.searchParams.set('query', q);
  u.searchParams.set('orientation', 'landscape');
  return u.toString(); maibn orifin AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
}
