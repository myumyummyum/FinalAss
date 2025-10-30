const key = window.UNSPLASH_ACCESS_KEY;
const img = document.getElementById('seal');
const baby = document.getElementById('baby');
const refreshBtn = document.getElementById('refresh');
const statusEl = document.getElementById('status');

function url() {
  const q = baby.checked ? 'baby seal' : 'seal animal';
  const u = new URL('https://api.unsplash.com/search/photos');
  u.searchParams.set('client_id', key);
  u.searchParams.set('query', q);
  u.searchParams.set('per_page', '30');
  u.searchParams.set('orientation', 'landscape');
  return u.toString();
}

// Troubleshooter written by chatgpt below.
// Something was not workin accidentally used secret instead of public key, woops.
async function loadSeal() {
  if (!key) { statusEl.textContent = 'Missing Unsplash key'; return; }
  statusEl.textContent = 'Loading...';
  try {
    const res = await fetch(url(), { cache: 'no-store' });
    const data = await res.json();
    if (!res.ok || !data.results?.length) throw new Error('No seals found');

    const pick = data.results[Math.floor(Math.random() * data.results.length)];
    img.src = pick.urls.regular;
    img.alt = pick.alt_description || 'seal';
    statusEl.textContent = baby.checked ? 'Baby seal mode' : 'Adult seal mode';
  } catch (e) {
    statusEl.textContent = 'No seals today :(';
    img.removeAttribute('src');
    console.error(e);
  }
}

baby.addEventListener('change', loadSeal);
refreshBtn.addEventListener('click', loadSeal);
window.addEventListener('load', loadSeal);
