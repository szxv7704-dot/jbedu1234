// 자료는 data/practice.json에서 관리합니다. href가 비어 있으면 다운로드를 만들지 않습니다.
(() => {
 const root = document.getElementById('practice-list');
 if (!root) return;
 function text(tag, value, cls) { const el=document.createElement(tag); el.textContent=value; if(cls) el.className=cls; return el; }
 function fileUrl(path) {
  if (!path || typeof path !== 'string') return null;
  const u=new URL(path,document.baseURI);
  return u.origin===location.origin && /\.(hwpx|xlsx|html|pdf|zip)$/i.test(u.pathname) ? u : null;
 }
 fetch('data/practice.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error();return r.json();}).then(data=>{
  root.replaceChildren();
  for(const item of data.items || []) {
   const card=text('article','', 'practice-card'); card.id=item.id;
   card.append(text('p',item.session,'practice-session'),text('h3',item.name),text('p',item.description,'practice-desc'));
   const bottom=text('div','','practice-bottom');bottom.append(text('span',item.format,'practice-format'));
   const url=fileUrl(item.href);
   if(url){const a=text('a','다운로드','btn');a.href=url.href;a.download='';a.setAttribute('aria-label',item.name+' 다운로드');bottom.append(a);}
   else {const pending=text('span','준비 중','btn ghost');pending.setAttribute('aria-disabled','true');bottom.append(pending);}
   card.append(bottom);root.append(card);
  }
  if(!root.children.length)root.append(text('p','실습 자료를 준비하고 있습니다.'));
 }).catch(()=>{root.replaceChildren(text('p','실습 자료 목록을 불러오지 못했습니다. 페이지를 새로고침해 주세요.'));});
})();
