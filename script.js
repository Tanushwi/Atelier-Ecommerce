const PRODUCTS = [
  { id:1,  name:'Meridian Automatic', cat:'watches', price:12499, mrp:15999, tag:'Bestseller', hue:28, img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80' },
  { id:2,  name:'Chrono Slim 38',     cat:'watches', price:9799,  mrp:12500, tag:'', hue:220, img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80' },
  { id:3,  name:'Field Standard',     cat:'watches', price:7499,  mrp:9499,  tag:'', hue:140, img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80' },
  { id:4,  name:'Diver 200M',         cat:'watches', price:15499, mrp:18999, tag:'New', hue:200, img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80' },
  { id:5,  name:'Pilot GMT',          cat:'watches', price:13999, mrp:17499, tag:'', hue:30, img:'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80' },
  { id:6,  name:'Dress Square',       cat:'watches', price:11499, mrp:14499, tag:'Limited', hue:340, img:'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=800&q=80' },
  { id:7,  name:'Studio Over-Ear',    cat:'audio', price:8999,  mrp:11999, tag:'New', hue:200, img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' },
  { id:8,  name:'Earbuds Pro',        cat:'audio', price:4299,  mrp:5999,  tag:'New', hue:260, img:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80' },
  { id:9,  name:'Bookshelf Speaker',  cat:'audio', price:11999, mrp:14999, tag:'', hue:20, img:'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80' },
  { id:10, name:'Turntable One',      cat:'audio', price:18499, mrp:22999, tag:'Limited', hue:40, img:'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80' },
  { id:11, name:'Open-Back Reference',cat:'audio', price:21499, mrp:25999, tag:'', hue:210, img:'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80' },
  { id:12, name:'Portable Mono',      cat:'audio', price:5499,  mrp:6999,  tag:'', hue:150, img:'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80' },
  { id:13, name:'Fold Daypack 22L',   cat:'bags', price:5499,  mrp:6999,  tag:'Limited', hue:150, img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80' },
  { id:14, name:'Drift Tote',         cat:'bags', price:3899,  mrp:4999,  tag:'', hue:12, img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80' },
  { id:15, name:'Weekender Canvas',   cat:'bags', price:7999,  mrp:9999,  tag:'', hue:100, img:'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80' },
  { id:16, name:'Sling Mini',         cat:'bags', price:2799,  mrp:3499,  tag:'', hue:320, img:'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80' },
  { id:17, name:'Roll-Top Commuter',  cat:'bags', price:6499,  mrp:8299,  tag:'Bestseller', hue:200, img:'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=800&q=80' },
  { id:18, name:'Field Satchel',      cat:'bags', price:6999,  mrp:8999,  tag:'', hue:35, img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80' },
  { id:19, name:'Halo Acetate',       cat:'eyewear', price:3299, mrp:4499, tag:'', hue:42, img:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80' },
  { id:20, name:'Ridge Metal',        cat:'eyewear', price:3899, mrp:4799, tag:'New', hue:200, img:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80' },
  { id:21, name:'Sun Reader',         cat:'eyewear', price:2499, mrp:3499, tag:'', hue:30, img:'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80' },
  { id:22, name:'Round Wire',         cat:'eyewear', price:2999, mrp:3999, tag:'', hue:45, img:'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80' },
  { id:23, name:'Sport Shield',       cat:'eyewear', price:4599, mrp:5999, tag:'Limited', hue:265, img:'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80' },
  { id:24, name:'Form Runner',        cat:'footwear', price:6499, mrp:8499, tag:'', hue:8, img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
  { id:25, name:'Court Low',          cat:'footwear', price:5299, mrp:6999, tag:'', hue:200, img:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80' },
  { id:26, name:'Trail Boot',         cat:'footwear', price:8999, mrp:11499, tag:'Limited', hue:30, img:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80' },
  { id:27, name:'Slip-On Canvas',     cat:'footwear', price:3499, mrp:4499, tag:'', hue:120, img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80' },
  { id:28, name:'Chelsea Suede',      cat:'footwear', price:9499, mrp:11999, tag:'Bestseller', hue:25, img:'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80' },
  { id:29, name:'Boxy Heavy Tee',     cat:'apparel', price:1899, mrp:2499, tag:'', hue:0, img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
  { id:30, name:'Field Jacket',       cat:'apparel', price:7499, mrp:9499, tag:'Bestseller', hue:30, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80' },
  { id:31, name:'Merino Crew',        cat:'apparel', price:3499, mrp:4499, tag:'', hue:220, img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80' },
  { id:32, name:'Linen Shirt',        cat:'apparel', price:2899, mrp:3799, tag:'New', hue:45, img:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80' },
  { id:33, name:'Overshirt Wool',     cat:'apparel', price:5799, mrp:7299, tag:'', hue:15, img:'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80' },
  { id:34, name:'Wide Trouser',       cat:'apparel', price:4299, mrp:5499, tag:'', hue:210, img:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80' },
  { id:35, name:'Pour-Over Set',      cat:'home', price:3299, mrp:4299, tag:'', hue:25, img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
  { id:36, name:'Ceramic Vase',       cat:'home', price:1999, mrp:2699, tag:'', hue:350, img:'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80' },
  { id:37, name:'Desk Lamp',          cat:'home', price:4599, mrp:5999, tag:'New', hue:40, img:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80' },
  { id:38, name:'Stoneware Mug',      cat:'home', price:899,  mrp:1299, tag:'', hue:190, img:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80' },
  { id:39, name:'Linen Throw',        cat:'home', price:3999, mrp:5199, tag:'Limited', hue:60, img:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80' },
  { id:40, name:'Brass Keyring',      cat:'accessories', price:899,  mrp:1299, tag:'', hue:35, img:'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80' },
  { id:41, name:'Leather Wallet',     cat:'accessories', price:2299, mrp:2999, tag:'Bestseller', hue:20, img:'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80' },
  { id:42, name:'Wool Scarf',         cat:'accessories', price:1799, mrp:2399, tag:'', hue:15, img:'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80' },
  { id:43, name:'Field Cap',          cat:'accessories', price:1299, mrp:1799, tag:'', hue:210, img:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80' },
  { id:44, name:'Card Holder',        cat:'accessories', price:1599, mrp:2199, tag:'New', hue:280, img:'https://images.unsplash.com/photo-1601592996763-f05c9c80a7f4?auto=format&fit=crop&w=800&q=80' },
  { id:45, name:'Ruled Journal',      cat:'stationery', price:1299, mrp:1799, tag:'', hue:40, img:'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80' },
  { id:46, name:'Fountain Pen',       cat:'stationery', price:2499, mrp:3299, tag:'Limited', hue:230, img:'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80' },
  { id:47, name:'Notebook Set',       cat:'stationery', price:999,  mrp:1399, tag:'', hue:150, img:'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80' },
  { id:48, name:'Desk Planner',       cat:'stationery', price:1499, mrp:1999, tag:'New', hue:10, img:'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=800&q=80' }
];

const SLIDES = [
  { kicker:'Autumn Edit — 01', lines:['Objects made','to be <em>kept.</em>'], sub:'A small collection of everyday things, built with uncommon care and meant to outlive trends.', label:'Autumn Edit', img:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=80', thumb:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=200&q=70' },
  { kicker:'Sound — 02', lines:['Sound,','<em>refined.</em>'], sub:'Studio-grade acoustics wrapped in hand-finished aluminium. Silence the noise, keep the detail.', label:'Audio', img:'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1800&q=80', thumb:'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=200&q=70' },
  { kicker:'Carry — 03', lines:['Carry less.','Carry <em>better.</em>'], sub:'Waxed canvas, solid brass hardware, and a lifetime repair promise. Made for the long walk home.', label:'Bags', img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1800&q=80', thumb:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=200&q=70' },
  { kicker:'Time — 04', lines:['Time, <em>well</em>','spent.'], sub:'Mechanical movements, sapphire glass, and cases finished by hand. Built to be inherited.', label:'Watches', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=80', thumb:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=70' },
  { kicker:'The Workshop — 05', lines:['Made by','<em>hand.</em>'], sub:'Four family-run workshops. Every piece assembled by hand, inspected twice, shipped plastic-free.', label:'Workshop', img:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80', thumb:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=70' }
];

const SHIPPING_FREE_ABOVE = 2499;
const SHIPPING_FEE = 99;
const COD_FEE = 49;
const inr = n => '₹' + n.toLocaleString('en-IN');

const state = { cart: [], wishlist: [], filter: 'all' };
let currentUser = null;

const toastWrap = document.getElementById('toasts');
function toast(msg){
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<svg viewBox="0 0 24 24"><path d="m5 13 4 4L19 7"/></svg><span>${msg}</span>`;
  toastWrap.appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 500); }, 2800);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
function observeReveals(){ document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObserver.observe(el)); }

const authScreen = document.getElementById('authScreen');
const authTabs = document.getElementById('authTabs');
const accountMenu = document.getElementById('accountMenu');

function switchAuthTab(tab){
  authTabs.dataset.active = tab;
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('is-active', t.dataset.tab === tab));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.toggle('is-active', f.dataset.form === tab));
}
authTabs.addEventListener('click', (e) => {
  const tab = e.target.closest('.auth-tab');
  if (tab) switchAuthTab(tab.dataset.tab);
});
document.querySelectorAll('[data-pass-toggle]').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.passToggle);
    input.type = input.type === 'password' ? 'text' : 'password';
  });
});
document.querySelectorAll('[data-social]').forEach(btn => {
  btn.addEventListener('click', () => {
    const provider = btn.dataset.social;
    loginAs({ name: provider + ' User', email: 'user@' + provider.toLowerCase() + '.com' });
  });
});

function loginAs(user){
  currentUser = user;
  document.body.classList.add('logged-in');
  document.getElementById('amName').textContent = user.name;
  document.getElementById('amEmail').textContent = user.email;
  const initials = user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'A';
  document.getElementById('avatar').textContent = initials;
  document.getElementById('amAvatar').textContent = initials;
  updateMobileAccountLabel();
  authScreen.classList.add('is-hidden');
  document.body.classList.remove('auth-locked');
  toast('Welcome, ' + user.name.split(' ')[0] + '!');
}
function showAuth(){
  authScreen.classList.remove('is-hidden');
  document.body.classList.add('auth-locked');
  accountMenu.classList.remove('is-open');
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('li-email');
  const pass = document.getElementById('li-pass');
  let ok = true;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  email.classList.toggle('is-invalid', !emailOk); if (!emailOk) ok = false;
  const passOk = pass.value.length >= 6;
  pass.classList.toggle('is-invalid', !passOk); if (!passOk) ok = false;
  if (!ok){ toast('Please check your email and password'); return; }
  const name = email.value.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  loginAs({ name, email: email.value.trim() });
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('su-name');
  const email = document.getElementById('su-email');
  const pass = document.getElementById('su-pass');
  const confirm = document.getElementById('su-confirm');
  const terms = document.getElementById('su-terms');
  const termsLabel = document.getElementById('termsCheck');
  let ok = true;
  const setValid = (el, valid) => { el.classList.toggle('is-invalid', !valid); if (!valid) ok = false; };
  setValid(name, name.value.trim().length > 1);
  setValid(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
  setValid(pass, pass.value.length >= 6);
  setValid(confirm, confirm.value === pass.value && confirm.value.length > 0);
  if (!terms.checked){ termsLabel.classList.add('is-invalid'); ok = false; } else termsLabel.classList.remove('is-invalid');
  if (!ok){ toast('Please fix the highlighted fields'); return; }
  loginAs({ name: name.value.trim(), email: email.value.trim() });
});

document.getElementById('guestBtn').addEventListener('click', () => loginAs({ name: 'Guest', email: 'guest@atelier' }));
document.getElementById('accountBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  if (!currentUser){ showAuth(); return; }
  accountMenu.classList.toggle('is-open');
});
document.addEventListener('click', (e) => { if (!e.target.closest('.account-wrap')) accountMenu.classList.remove('is-open'); });
accountMenu.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-menu]');
  if (!btn) return;
  if (btn.dataset.menu === 'signout'){
    currentUser = null;
    document.body.classList.remove('logged-in');
    accountMenu.classList.remove('is-open');
    updateMobileAccountLabel();
    showAuth(); switchAuthTab('login'); toast('Signed out');
  } else if (btn.dataset.menu === 'orders'){
    toast('No orders yet — go shop something!');
    accountMenu.classList.remove('is-open');
  } else if (btn.dataset.menu === 'wishlist'){
    accountMenu.classList.remove('is-open');
    openWishlist();
  }
});

const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchContent = document.getElementById('searchContent');
const searchBtn = document.getElementById('searchBtn');
const searchClose = document.getElementById('searchClose');

const POPULAR = ['Watches','Headphones','Canvas bag','Sneakers','Eyewear','Journal','Wallet','Lamp'];

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function openSearch(){
  closeDrawer(); closeWishlist(); closeMobileNav();
  searchOverlay.classList.add('is-open');
  document.body.classList.add('no-scroll');
  setTimeout(() => searchInput.focus(), 250);
  renderSearch('');
}
function closeSearch(){
  searchOverlay.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  searchInput.value = '';
}

function searchProducts(q){
  const query = q.trim().toLowerCase();
  if (!query) return [];
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.cat.toLowerCase().includes(query)
  );
}

function renderSearch(q){
  const query = q.trim();

  if (!query){
    searchContent.innerHTML = `
      <div class="search-suggest">
        <h5>Popular searches</h5>
        <div class="suggest-chips">
          ${POPULAR.map(t => `<button class="suggest-chip" data-suggest="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join('')}
        </div>
      </div>
      <div class="search-meta">
        <h4>Browse all <em>48 goods</em></h4>
        <span>${PRODUCTS.length} items</span>
      </div>
      <div class="search-results">
        ${PRODUCTS.slice(0, 12).map((p, i) => searchCard(p, i)).join('')}
      </div>
    `;
    return;
  }

  const results = searchProducts(query);
  if (results.length === 0){
    searchContent.innerHTML = `
      <div class="search-empty">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <h4>No matches for "${escapeHtml(query)}"</h4>
        <p>Try a different keyword, or browse popular searches below.</p>
        <div class="suggest-chips" style="justify-content:center;">
          ${POPULAR.map(t => `<button class="suggest-chip" data-suggest="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join('')}
        </div>
      </div>
    `;
    return;
  }

  searchContent.innerHTML = `
    <div class="search-meta">
      <h4>Results for <em>"${escapeHtml(query)}"</em></h4>
      <span>${results.length} item${results.length === 1 ? '' : 's'}</span>
    </div>
    <div class="search-results">
      ${results.map((p, i) => searchCard(p, i)).join('')}
    </div>
  `;
  syncWishUI();
}

function searchCard(p, i){
  return `
    <div class="sr-card" style="animation-delay:${Math.min(i * 40, 300)}ms">
      <div class="sr-media" style="--hue:${p.hue}">
        <img src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.style.display='none'">
      </div>
      <div class="sr-info">
        <span class="sr-cat">${escapeHtml(p.cat)}</span>
        <div class="sr-name">${escapeHtml(p.name)}</div>
        <div class="sr-price">${inr(p.price)}</div>
        <div class="sr-actions">
          <button class="sr-act" data-search-add="${p.id}" title="Add to cart" aria-label="Add to cart">
            <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          </button>
          <button class="sr-act ${isWished(p.id) ? 'is-wished' : ''}" data-wish="${p.id}" title="Add to wishlist" aria-label="Add to wishlist">
            <svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
          </button>
        </div>
      </div>
    </div>`;
}

searchBtn.addEventListener('click', openSearch);
searchClose.addEventListener('click', closeSearch);
searchInput.addEventListener('input', (e) => renderSearch(e.target.value));

searchContent.addEventListener('click', (e) => {
  const sug = e.target.closest('[data-suggest]');
  if (sug){
    searchInput.value = sug.dataset.suggest;
    renderSearch(sug.dataset.suggest);
    searchInput.focus();
    return;
  }
  const addBtn = e.target.closest('[data-search-add]');
  if (addBtn){
    addToCart(+addBtn.dataset.searchAdd);
    return;
  }
  const wishBtn = e.target.closest('[data-wish]');
  if (wishBtn){
    toggleWish(+wishBtn.dataset.wish);
    wishBtn.classList.toggle('is-wished', isWished(+wishBtn.dataset.wish));
    return;
  }
});

searchOverlay.addEventListener('click', (e) => {
  if (e.target === searchOverlay) closeSearch();
});

const heroStage = document.getElementById('heroStage');
const heroRail = document.getElementById('heroRail');
const heroTitle = document.getElementById('heroTitle');
const heroKicker = document.getElementById('heroKicker');
const heroSub = document.getElementById('heroSub');
const heroIdxNum = document.getElementById('heroIdxNum');
const heroIdxTotal = document.getElementById('heroIdxTotal');
const heroIdxLabel = document.getElementById('heroIdxLabel');
const heroProg = document.getElementById('heroProg');

let heroIndex = 0;
let heroTimer = null;
const HERO_INTERVAL = 6500;

heroStage.innerHTML = SLIDES.map((s, i) => `
  <div class="hero-slide ${i === 0 ? 'is-active' : ''}" data-slide="${i}">
    <div class="hero-media" style="--img:url('${s.img}')"></div>
  </div>`).join('');
const heroSlides = [...heroStage.querySelectorAll('.hero-slide')];

heroRail.innerHTML = SLIDES.map((s, i) => `
  <button class="hero-thumb ${i === 0 ? 'is-active' : ''}" data-thumb="${i}" aria-label="Go to slide ${i + 1}">
    <i>${String(i + 1).padStart(2, '0')}</i>
    <img src="${s.thumb}" alt="" onerror="this.style.display='none'">
  </button>`).join('');
const heroThumbs = [...heroRail.querySelectorAll('.hero-thumb')];

heroIdxTotal.textContent = '/ ' + String(SLIDES.length).padStart(2, '0');

function animateHeroText(el, html){
  el.innerHTML = html;
  el.classList.remove('anim');
  void el.offsetWidth;
  el.classList.add('anim');
}
function startHeroProgress(){
  heroProg.style.transition = 'none';
  heroProg.style.width = '0%';
  void heroProg.offsetWidth;
  heroProg.style.transition = 'width ' + (HERO_INTERVAL / 1000) + 's linear';
  heroProg.style.width = '100%';
}
function goToHero(i){
  const next = (i + SLIDES.length) % SLIDES.length;
  if (next === heroIndex) return;
  const old = heroSlides[heroIndex];
  const cur = heroSlides[next];
  old.classList.remove('is-active');
  old.classList.add('is-out');
  cur.classList.add('is-active');
  cur.classList.remove('is-out');
  heroThumbs.forEach((t, idx) => t.classList.toggle('is-active', idx === next));
  const slide = SLIDES[next];
  animateHeroText(heroKicker, slide.kicker);
  heroTitle.classList.remove('in');
  heroTitle.innerHTML = slide.lines.map(l => `<span class="hero-line"><span>${l}</span></span>`).join('');
  void heroTitle.offsetWidth;
  heroTitle.classList.add('in');
  animateHeroText(heroSub, slide.sub);
  heroIdxNum.textContent = String(next + 1).padStart(2, '0');
  animateHeroText(heroIdxLabel, slide.label);
  heroIndex = next;
  startHeroProgress();
  restartHeroTimer();
  setTimeout(() => { heroSlides.forEach(s => { if (!s.classList.contains('is-active')) s.classList.remove('is-out'); }); }, 1300);
}
function restartHeroTimer(){
  clearInterval(heroTimer);
  heroTimer = setInterval(() => goToHero(heroIndex + 1), HERO_INTERVAL);
}
document.getElementById('heroNext').addEventListener('click', () => goToHero(heroIndex + 1));
document.getElementById('heroPrev').addEventListener('click', () => goToHero(heroIndex - 1));
heroRail.addEventListener('click', (e) => {
  const t = e.target.closest('[data-thumb]');
  if (t) goToHero(+t.dataset.thumb);
});
document.getElementById('heroBadge').addEventListener('click', () => {
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) clearInterval(heroTimer);
  else restartHeroTimer();
});
startHeroProgress();
restartHeroTimer();

function getProduct(id){ return PRODUCTS.find(p => p.id === id); }

const wishlistDrawer = document.getElementById('wishlistDrawer');
const wishlistItemsEl = document.getElementById('wishlistItems');
const wishBadge = document.getElementById('wishBadge');
const wishCount = document.getElementById('wishCount');

function isWished(id){ return state.wishlist.indexOf(id) > -1; }

function toggleWish(id, silent){
  const idx = state.wishlist.indexOf(id);
  if (idx > -1){ state.wishlist.splice(idx, 1); if (!silent) toast('Removed from wishlist'); }
  else { state.wishlist.push(id); if (!silent) toast('Saved to wishlist'); }
  syncWishUI();
  renderWishlist();
}

function syncWishUI(){
  document.querySelectorAll('.product-card [data-wish]').forEach(btn => {
    const id = +btn.dataset.wish;
    btn.classList.toggle('is-on', isWished(id));
    btn.setAttribute('aria-pressed', isWished(id) ? 'true' : 'false');
  });
  document.querySelectorAll('.sr-card [data-wish]').forEach(btn => {
    const id = +btn.dataset.wish;
    btn.classList.toggle('is-wished', isWished(id));
  });
  const n = state.wishlist.length;
  wishBadge.textContent = n;
  wishBadge.classList.toggle('show', n > 0);
  if (n > 0){ wishBadge.classList.add('pop'); setTimeout(() => wishBadge.classList.remove('pop'), 460); }
  wishCount.textContent = n + ' item' + (n === 1 ? '' : 's');
}

function renderWishlist(){
  if (state.wishlist.length === 0){
    wishlistItemsEl.innerHTML = `
      <div class="empty-cart">
        <svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        <p style="margin:0 0 .4rem;font-weight:600;color:var(--ink);">Nothing saved yet</p>
        <p style="margin:0;font-size:.85rem;">Tap the heart on any product to save it here.</p>
      </div>`;
    return;
  }
  wishlistItemsEl.innerHTML = state.wishlist.map((id, idx) => {
    const p = getProduct(id);
    if (!p) return '';
    return `
    <div class="cart-item" style="animation-delay:${idx * 50}ms">
      <div class="ci-thumb" style="--hue:${p.hue}"><img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'"></div>
      <div>
        <p class="ci-name">${p.name}</p>
        <div class="ci-cat">${p.cat}</div>
        <button class="btn btn-sm wish-move-btn" data-wish-add="${p.id}">Move to cart</button>
      </div>
      <div class="ci-right">
        <span class="ci-price">${inr(p.price)}</span>
        <button class="ci-remove" data-wish-remove="${p.id}">Remove</button>
      </div>
    </div>`;
  }).join('');
}

wishlistItemsEl.addEventListener('click', (e) => {
  const addBtn = e.target.closest('[data-wish-add]');
  if (addBtn){
    const id = +addBtn.dataset.wishAdd;
    addToCart(id);
    toggleWish(id, true);
    return;
  }
  const remBtn = e.target.closest('[data-wish-remove]');
  if (remBtn) toggleWish(+remBtn.dataset.wishRemove);
});

function openWishlist(){
  closeDrawer(); closeSearch(); closeMobileNav();
  wishlistDrawer.classList.add('is-open');
  overlay.classList.add('is-open');
  document.body.classList.add('no-scroll');
}
function closeWishlist(){
  wishlistDrawer.classList.remove('is-open');
  if (!cartDrawer.classList.contains('is-open') && !checkoutModal.classList.contains('is-open')){
    overlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
}
document.getElementById('wishlistBtn').addEventListener('click', openWishlist);
document.getElementById('closeWishlist').addEventListener('click', closeWishlist);

const grid = document.getElementById('productGrid');

function renderProducts(){
  const list = state.filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === state.filter);
  grid.innerHTML = list.map((p, i) => {
    const off = Math.round((1 - p.price / p.mrp) * 100);
    return `
    <article class="product-card reveal" style="--d:${(i % 8) * 45}ms" data-cat="${p.cat}">
      <div class="product-media" style="--hue:${p.hue}">
        ${p.tag ? `<span class="tag ${p.tag === 'Limited' ? 'sale' : ''}">${p.tag}</span>` : ''}
        <button class="wish" data-wish="${p.id}" aria-label="Add to wishlist" aria-pressed="false">
          <svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        </button>
        <img src="${p.img}" alt="${p.name}" loading="lazy" onload="this.classList.add('loaded')" onerror="this.style.display='none'">
        <div class="product-actions">
          <button class="btn btn-sm" data-add="${p.id}">Add to cart — ${inr(p.price)}</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.cat}</div>
        <h3>${p.name}</h3>
        <div class="price-row">
          <span class="price">${inr(p.price)}</span>
          <span class="mrp">${inr(p.mrp)}</span>
          <span class="off">${off}% off</span>
        </div>
      </div>
    </article>`;
  }).join('');
  observeReveals();
  syncWishUI();
}

grid.addEventListener('click', (e) => {
  const wishBtn = e.target.closest('[data-wish]');
  if (wishBtn){ toggleWish(+wishBtn.dataset.wish); return; }
});

document.getElementById('filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  state.filter = btn.dataset.filter;
  renderProducts();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function ribbonCard(p){
  return `
  <button class="rb-card" data-add="${p.id}" style="--hue:${p.hue}">
    <span class="rb-media"><img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'"></span>
    <span class="rb-info">
      <span class="rb-cat">${p.cat}</span>
      <span class="rb-name">${p.name}</span>
      <span class="rb-price">${inr(p.price)}</span>
    </span>
  </button>`;
}
function buildRibbon(){
  const idsA = [1,7,13,19,24,29,35,40,45,3,9,15,21,27,32,38,43,47,5,11];
  const idsB = [2,8,14,20,25,30,36,41,46,4,10,16,22,28,33,39,44,48,6,12];
  const htmlA = idsA.map(id => ribbonCard(getProduct(id))).join('');
  const htmlB = idsB.map(id => ribbonCard(getProduct(id))).join('');
  document.getElementById('ribbonRowA').innerHTML = htmlA + htmlA;
  document.getElementById('ribbonRowB').innerHTML = htmlB + htmlB;
}

const cartDrawer = document.getElementById('cartDrawer');
const cartItemsEl = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const overlay = document.getElementById('overlay');

const cartCount = () => state.cart.reduce((s, i) => s + i.qty, 0);
const cartSubtotal = () => state.cart.reduce((s, i) => s + getProduct(i.id).price * i.qty, 0);

function addToCart(id){
  const found = state.cart.find(i => i.id === id);
  if (found) found.qty++;
  else state.cart.push({ id, qty: 1 });
  renderCart();
  cartBadge.classList.add('pop');
  setTimeout(() => cartBadge.classList.remove('pop'), 460);
  toast(`${getProduct(id).name} added to cart`);
}
function changeQty(id, delta){
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(i => i.id !== id);
  renderCart();
}
function removeItem(id){
  state.cart = state.cart.filter(i => i.id !== id);
  renderCart();
  toast('Item removed');
}

function renderCart(){
  const count = cartCount();
  cartBadge.textContent = count;
  cartBadge.classList.toggle('show', count > 0);
  document.getElementById('cartCount').textContent = `${count} item${count === 1 ? '' : 's'}`;

  if (state.cart.length === 0){
    cartItemsEl.innerHTML = `
      <div class="empty-cart">
        <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p style="margin:0 0 .4rem;font-weight:600;color:var(--ink);">Your cart is empty</p>
        <p style="margin:0;font-size:.85rem;">Add something you'll actually keep.</p>
      </div>`;
  } else {
    cartItemsEl.innerHTML = state.cart.map((item, idx) => {
      const p = getProduct(item.id);
      return `
      <div class="cart-item" style="animation-delay:${idx * 50}ms">
        <div class="ci-thumb" style="--hue:${p.hue}"><img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'"></div>
        <div>
          <p class="ci-name">${p.name}</p>
          <div class="ci-cat">${p.cat}</div>
          <div class="qty">
            <button data-qty="${p.id}" data-delta="-1" aria-label="Decrease">−</button>
            <span>${item.qty}</span>
            <button data-qty="${p.id}" data-delta="1" aria-label="Increase">+</button>
          </div>
        </div>
        <div class="ci-right">
          <span class="ci-price">${inr(p.price * item.qty)}</span>
          <button class="ci-remove" data-remove="${p.id}">Remove</button>
        </div>
      </div>`;
    }).join('');
  }

  const sub = cartSubtotal();
  const shipping = sub === 0 ? 0 : (sub >= SHIPPING_FREE_ABOVE ? 0 : SHIPPING_FEE);
  document.getElementById('subtotal').textContent = inr(sub);
  document.getElementById('shipping').textContent = sub === 0 ? '—' : (shipping === 0 ? 'Free' : inr(shipping));
  document.getElementById('total').textContent = inr(sub + shipping);

  const note = document.getElementById('shipNote');
  if (sub > 0 && sub < SHIPPING_FREE_ABOVE){
    note.innerHTML = `Add <b>${inr(SHIPPING_FREE_ABOVE - sub)}</b> more for free shipping`;
  } else if (sub >= SHIPPING_FREE_ABOVE){
    note.innerHTML = `<b>You've unlocked free shipping ✦</b>`;
  } else {
    note.textContent = '';
  }
  updateCheckoutSummary();
}

cartItemsEl.addEventListener('click', (e) => {
  const q = e.target.closest('[data-qty]');
  if (q){ changeQty(+q.dataset.qty, +q.dataset.delta); return; }
  const r = e.target.closest('[data-remove]');
  if (r) removeItem(+r.dataset.remove);
});

document.addEventListener('click', (e) => {
  const add = e.target.closest('[data-add]');
  if (add){ addToCart(+add.dataset.add); }
});

function openDrawer(){
  closeWishlist(); closeSearch(); closeMobileNav();
  cartDrawer.classList.add('is-open');
  overlay.classList.add('is-open');
  document.body.classList.add('no-scroll');
}
function closeDrawer(){
  cartDrawer.classList.remove('is-open');
  if (!wishlistDrawer.classList.contains('is-open') && !checkoutModal.classList.contains('is-open')){
    overlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
}
document.getElementById('cartBtn').addEventListener('click', openDrawer);
document.getElementById('closeCart').addEventListener('click', closeDrawer);

const mobileNav = document.getElementById('mobileNav');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMobileNavBtn = document.getElementById('closeMobileNav');

function openMobileNav(){
  closeDrawer(); closeWishlist(); closeSearch();
  mobileNav.classList.add('is-open');
  overlay.classList.add('is-open');
  document.body.classList.add('no-scroll');
}
function closeMobileNav(){
  mobileNav.classList.remove('is-open');
  if (!cartDrawer.classList.contains('is-open') &&
      !wishlistDrawer.classList.contains('is-open') &&
      !checkoutModal.classList.contains('is-open') &&
      !searchOverlay.classList.contains('is-open')){
    overlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
}

function updateMobileAccountLabel(){
  const label = document.getElementById('mobAccountLabel');
  if (label) label.textContent = currentUser ? 'Sign out' : 'Sign in';
}

mobileMenuBtn.addEventListener('click', openMobileNav);
closeMobileNavBtn.addEventListener('click', closeMobileNav);

mobileNav.addEventListener('click', (e) => {
  if (e.target.closest('[data-mobile-close]')) closeMobileNav();
});

document.getElementById('mobSearchBtn').addEventListener('click', () => {
  closeMobileNav();
  setTimeout(openSearch, 220);
});

document.getElementById('mobAccountBtn').addEventListener('click', () => {
  closeMobileNav();
  if (!currentUser){ showAuth(); return; }
  currentUser = null;
  document.body.classList.remove('logged-in');
  updateMobileAccountLabel();
  showAuth();
  switchAuthTab('login');
  toast('Signed out');
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-stuck', window.scrollY > 20);
}, { passive: true });

const checkoutModal = document.getElementById('checkoutModal');
const stepper = document.getElementById('stepper');
let currentStepValue = 1;

function currentStep(){ return currentStepValue; }

function showStep(n){
  currentStepValue = n;
  document.querySelectorAll('.co-step').forEach(p => p.classList.toggle('is-active', +p.dataset.panel === n));
  document.querySelectorAll('.step-dot').forEach(d => {
    const s = +d.dataset.step;
    d.classList.toggle('is-active', s === n);
    d.classList.toggle('is-done', s < n);
  });
  document.getElementById('modalTitle').textContent = n === 3 ? 'Order placed' : 'Checkout';
  checkoutModal.querySelector('.modal-card').scrollTop = 0;
}

function openCheckout(){
  if (state.cart.length === 0){ toast('Your cart is empty'); return; }
  closeDrawer(); closeWishlist(); closeSearch(); closeMobileNav();
  checkoutModal.classList.add('is-open');
  overlay.classList.add('is-open');
  document.body.classList.add('no-scroll');
  showStep(1);
  updateCheckoutSummary();
}
function closeCheckout(){
  checkoutModal.classList.remove('is-open');
  overlay.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
document.getElementById('closeCheckout').addEventListener('click', closeCheckout);
overlay.addEventListener('click', () => { closeDrawer(); closeWishlist(); closeCheckout(); closeMobileNav(); });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){
    if (searchOverlay.classList.contains('is-open')) closeSearch();
    else { closeDrawer(); closeWishlist(); closeCheckout(); closeMobileNav(); }
  }
  if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !searchOverlay.classList.contains('is-open') && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))){
    e.preventDefault();
    openSearch();
  }
});

stepper.addEventListener('click', (e) => {
  const dot = e.target.closest('.step-dot');
  if (!dot) return;
  const s = +dot.dataset.step;
  if (s < currentStep()) showStep(s);
});

checkoutModal.addEventListener('click', (e) => {
  const next = e.target.closest('[data-next]');
  if (next){ if (validateShipping()) showStep(+next.dataset.next); return; }
  const back = e.target.closest('[data-back]');
  if (back) showStep(+back.dataset.back);
});

function validateShipping(){
  const fields = ['co-name', 'co-email', 'co-addr', 'co-city', 'co-pin'];
  let ok = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    const valid = el.value.trim().length > 0;
    el.classList.toggle('is-invalid', !valid);
    if (!valid) ok = false;
  });
  const email = document.getElementById('co-email');
  if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){ email.classList.add('is-invalid'); ok = false; }
  const pin = document.getElementById('co-pin');
  if (pin.value.trim() && !/^\d{6}$/.test(pin.value.trim())){ pin.classList.add('is-invalid'); ok = false; }
  if (!ok) toast('Please check the highlighted fields');
  return ok;
}

function validatePayment(){
  const method = document.querySelector('input[name="pay"]:checked').value;
  if (method === 'card'){
    const num = document.getElementById('card-num').value.replace(/\s/g, '');
    const exp = document.getElementById('card-exp').value.trim();
    const cvv = document.getElementById('card-cvv').value.trim();
    const name = document.getElementById('card-name').value.trim();
    if (num.length < 15 || !/^\d+$/.test(num)){ toast('Enter a valid card number'); return false; }
    if (!/^\d{2}\/\d{2}$/.test(exp)){ toast('Enter expiry as MM/YY'); return false; }
    if (!/^\d{3,4}$/.test(cvv)){ toast('Enter a valid CVV'); return false; }
    if (!name){ toast('Enter the name on card'); return false; }
  }
  if (method === 'upi'){
    const upi = document.getElementById('upi-id').value.trim();
    if (!/^[\w.\-]{2,}@[\w]{2,}$/.test(upi)){ toast('Enter a valid UPI ID'); return false; }
  }
  return true;
}

document.querySelectorAll('input[name="pay"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.pay-panel').forEach(p => p.classList.toggle('is-active', p.dataset.paypanel === radio.value));
    updateCheckoutSummary();
  });
});

const cardNumEl = document.getElementById('card-num');
cardNumEl.addEventListener('input', () => {
  let v = cardNumEl.value.replace(/\D/g, '').slice(0, 16);
  cardNumEl.value = v.replace(/(.{4})/g, '$1 ').trim();
});
const cardExpEl = document.getElementById('card-exp');
cardExpEl.addEventListener('input', () => {
  let v = cardExpEl.value.replace(/\D/g, '').slice(0, 4);
  if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
  cardExpEl.value = v;
});
['co-pin', 'card-cvv'].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener('input', () => { el.value = el.value.replace(/\D/g, ''); });
});

function updateCheckoutSummary(){
  const sub = cartSubtotal();
  const shipping = sub === 0 ? 0 : (sub >= SHIPPING_FREE_ABOVE ? 0 : SHIPPING_FEE);
  const method = document.querySelector('input[name="pay"]:checked');
  const cod = method && method.value === 'cod' && sub > 0 ? COD_FEE : 0;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('coSubtotal', inr(sub));
  set('coShipping', sub === 0 ? '—' : (shipping === 0 ? 'Free' : inr(shipping)));
  set('coCod', cod ? inr(cod) : '₹0');
  set('coTotal', inr(sub + shipping + cod));
}

document.getElementById('placeOrder').addEventListener('click', () => {
  if (!validatePayment()) return;
  const btn = document.getElementById('placeOrder');
  const original = btn.textContent;
  btn.textContent = 'Processing…';
  btn.disabled = true;
  setTimeout(() => {
    const orderId = 'ATL-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('orderId').textContent = orderId;
    state.cart = [];
    renderCart();
    showStep(3);
    btn.textContent = original;
    btn.disabled = false;
    toast('Payment successful 🎉');
  }, 1500);
});

document.getElementById('doneBtn').addEventListener('click', () => {
  closeCheckout();
  setTimeout(() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' }), 200);
});

document.getElementById('nlForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (!input.value.trim()) return;
  toast('Subscribed! Check your inbox for ATELIER10');
  input.value = '';
});

renderProducts();
renderCart();
buildRibbon();
renderWishlist();
syncWishUI();
observeReveals();