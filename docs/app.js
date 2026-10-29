(() => {
"use strict";
const REPO="xtesla/Basics_of_Mathematics_Student_Workbook_2026";
const BRANCH="main";
const ROOT="https://raw.githubusercontent.com/"+REPO+"/"+BRANCH+"/";
const API="https://api.github.com/repos/"+REPO;
const subjects=[
 {id:"1_Algebra",title:"Algebra",symbol:"∑",desc:"Matrices, determinants, inverse matrices and systems of equations."},
 {id:"2_Geometry",title:"Geometry",symbol:"◇",desc:"Vectors, lines, planes, curves and surfaces."},
 {id:"3_Calculus",title:"Calculus",symbol:"∫",desc:"Limits, derivatives, integrals and real-world applications."}
];
const known={
 "1_Algebra":["01_matrices_and_operations","02_determinants","03_matrix_inversion","04_systems_of_equations"],
 "2_Geometry":["01_vectors","02_lines_and_planes","03_second_degree_curves_and_surfaces"],
 "3_Calculus":["01_limits","02_derivatives","03_function_analysis","04_integrals","05_applications"]
};
const prettify=s=>s.replace(/^\d+_/,"").replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase());
const state={catalog:[],tree:[],filter:"all",layout:"split",hideSolution:false,cache:new Map(),completed:new Set(),bookmarks:new Set(),current:null,loaded:false};
const $=s=>document.querySelector(s);
const safe=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const slug=(g,n)=>g+"-"+n;
const urlFor=x=>"#/exercise/"+encodeURIComponent(x.subject)+"/"+encodeURIComponent(x.group)+"/"+x.n;
const githubPath=p=>"https://github.com/"+REPO+"/blob/"+BRANCH+"/"+p;
const numeric=(n)=>String(n).padStart(2,"0");
const status=x=>x.hasSolution?"Solved":"Not solved yet";
function readStorage(){try{state.completed=new Set(JSON.parse(localStorage.getItem("atlas-completed")||"[]"));state.bookmarks=new Set(JSON.parse(localStorage.getItem("atlas-bookmarks")||"[]"));const t=localStorage.getItem("atlas-theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch{}}
function store(k,s){try{localStorage.setItem(k,JSON.stringify([...s]))}catch{}}
function toast(s){const el=$("#toast");el.textContent=s;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2400)}
const cacheFetch=async(path,refresh=false)=>{if(!refresh&&state.cache.has(path))return state.cache.get(path);const res=await fetch(ROOT+path+(refresh?"?v="+Date.now():""),{cache:refresh?"no-store":"default"});if(!res.ok)throw new Error("Unable to load "+path+" ("+res.status+")");const data=await res.text();state.cache.set(path,data);return data};
const exerciseParser=(text,subject,group)=>{const rx=/^### (?:Exercise|Problem) (\d+)\.\s+(.+)$/gm,heads=[...text.matchAll(rx)];return heads.map((m,i)=>{const body=text.slice(m.index+m[0].length,heads[i+1]?.index??text.length).trim();const title=m[2].trim(),n=+m[1],p="solutions/"+subject+"/"+group+"/problem_"+numeric(n)+"_solution.md";return {subject,group,n,title,body:body.replace(/^> \*\*Why this (?:exercise|problem):\*\*[\s\S]*$/mi,"").trim(),path:p,hasSolution:false,id:slug(subject+"/"+group,n)}})};
async function load(){
 readStorage();
 try{
  const indexResponse=await fetch(API+"/git/trees/"+BRANCH+"?recursive=1",{headers:{Accept:"application/vnd.github+json"}});
  if(!indexResponse.ok)throw Error("GitHub index is temporarily unavailable");
  const index=await indexResponse.json();state.tree=index.tree||[];
  const paths=state.tree.filter(x=>x.type==="blob"&&x.path.startsWith("exercises/")&&x.path.endsWith("_en.md"));
  const results=await Promise.allSettled(paths.map(async x=>{const parts=x.path.split("/"),subject=parts[1],group=parts[2].replace(/_en\.md$/,"");return exerciseParser(await cacheFetch(x.path),subject,group)}));
  state.catalog=results.flatMap(x=>x.status==="fulfilled"?x.value:[]);
  if(!state.catalog.length)throw Error("Could not read any exercises");
  const existing=new Set(state.tree.filter(x=>x.type==="blob"&&x.size>0).map(x=>x.path));
  for(const x of state.catalog)x.hasSolution=existing.has(x.path);
  state.catalog.sort((a,b)=>a.subject.localeCompare(b.subject)||a.group.localeCompare(b.group)||a.n-b.n);
  state.loaded=true;$("#sync-text").textContent=state.catalog.length+" exercises · live repository";
  render();
 }catch(err){console.error(err);$("#sync-text").textContent="Connection unavailable";$("#view").innerHTML='<div class="empty-state"><div class="empty-icon">↻</div><h3>Could not load the workbook</h3><p>'+safe(err.message)+'. Please check your connection and try again.</p><button class="btn btn-primary" data-action="refresh">Try again</button></div>';$("#nav").innerHTML='<a class="nav-dashboard" href="#/">Overview</a>'}
}
function groups(subject){return [...new Set(state.catalog.filter(x=>!subject||x.subject===subject).map(x=>x.group))]}
function groupRows(subject,group){return state.catalog.filter(x=>x.subject===subject&&x.group===group)}
const countSolved=arr=>arr.filter(x=>x.hasSolution).length;
const pct=arr=>arr.length?Math.round(countSolved(arr)/arr.length*100):0;
const progress=arr=>'<div class="progress-track"><div class="progress-fill" style="width:'+pct(arr)+'%"></div></div>';
function renderNav(){
 let html='<div class="nav-label">WORKSPACE</div><a class="nav-dashboard '+(location.hash==="#/"||!location.hash?"active":"")+'" href="#/">◈ &nbsp; Overview</a><div class="nav-label">YOUR SUBJECTS</div>';
 for(const s of subjects){const rows=state.catalog.filter(x=>x.subject===s.id);html+='<a class="nav-topic" href="#/subject/'+s.id+'"><span class="nav-topic-left"><span class="nav-symbol">'+s.symbol+'</span>'+s.title+'</span><span class="nav-count">'+countSolved(rows)+'/'+rows.length+'</span></a>';
 for(const g of groups(s.id)){html+='<a class="nav-group" href="#/group/'+s.id+'/'+g+'">'+safe(prettify(g))+'</a>'}}
 $("#nav").innerHTML=html;const current=decodeURI(location.hash||"");document.querySelectorAll("#nav a").forEach(a=>{if(a.getAttribute("href")===current)a.classList.add("active")})}
function bread(...parts){$("#breadcrumb").innerHTML='<span>Workspace</span>'+parts.map((p,i)=>'<span class="slash">/</span><strong>'+safe(p)+'</strong>').join("")}
function subjectCard(s){const rows=state.catalog.filter(x=>x.subject===s.id);return '<a class="topic-card" href="#/subject/'+s.id+'"><div class="big-symbol">'+s.symbol+'</div><span class="tiny-label">'+groups(s.id).length+' TOPIC COLLECTIONS</span><h3>'+s.title+'</h3><p>'+s.desc+'</p>'+progress(rows)+'<div class="topic-card-footer"><span>'+countSolved(rows)+' of '+rows.length+' solutions available</span><strong>'+pct(rows)+'%</strong></div></a>'}
function home(){bread("Overview");const total=state.catalog.length,solved=countSolved(state.catalog),read=state.completed.size;const recent=state.catalog.find(x=>x.hasSolution&&!state.completed.has(x.id))||state.catalog[0];
 $("#view").innerHTML='<section class="hero"><span class="eyebrow">YOUR PERSONAL LEARNING SPACE</span><h1>Mathematics, <em>reimagined.</em></h1><p>Every question, every solution, beautifully organized. Explore the VIZJA workbook with a focused study interface that stays in sync with your GitHub repository.</p><div class="hero-actions"><a class="btn btn-primary" href="'+urlFor(recent)+'">Start studying <span>↗</span></a><button class="btn" data-action="search">Explore problems <span>⌕</span></button></div></section>'+
 '<section class="stats"><div class="stat"><div class="stat-label">TOTAL EXERCISES</div><div class="stat-value">'+total+'<span class="stat-symbol">↗</span></div><div class="stat-meta">Across all subjects</div></div><div class="stat"><div class="stat-label">SOLUTIONS AVAILABLE</div><div class="stat-value">'+solved+'</div><div class="stat-meta">'+Math.round(solved/Math.max(total,1)*100)+'% of the workbook</div></div><div class="stat"><div class="stat-label">YOU HAVE STUDIED</div><div class="stat-value">'+read+'</div><div class="stat-meta">Tracked locally on this device</div></div><div class="stat"><div class="stat-label">TOPIC COLLECTIONS</div><div class="stat-value">'+groups().length+'</div><div class="stat-meta">Three mathematics areas</div></div></section>'+
 '<section><div class="section-head"><div><h2>Explore the curriculum</h2><div class="section-sub">Pick a subject and get straight into the material.</div></div><span class="tiny-label">01 — 03</span></div><div class="topic-grid">'+subjects.map(subjectCard).join("")+'</div></section>'+
 '<section><div class="section-head"><div><h2>Pick up where you left off</h2><div class="section-sub">One exercise at a time. Understand it, then mark it done.</div></div></div><div class="continue-card"><div><span class="eyebrow">SUGGESTED NEXT</span><h3>'+safe(recent.title)+'</h3><p>'+safe(prettify(recent.group))+' · '+safe(subjects.find(s=>s.id===recent.subject)?.title||"")+'</p></div><a class="btn btn-primary" href="'+urlFor(recent)+'">Open exercise ↗</a></div></section>';
}
function subjectPage(id){const s=subjects.find(x=>x.id===id);if(!s)return home();bread(s.title);const rows=state.catalog.filter(x=>x.subject===id);
 $("#view").innerHTML='<div class="page-heading"><span class="eyebrow">SUBJECT / '+safe(s.title.toUpperCase())+'</span><h1>'+s.symbol+' &nbsp;'+s.title+'</h1><p>'+safe(s.desc)+' Choose a collection to browse its problems and solutions.</p></div><section class="stats"><div class="stat"><div class="stat-label">QUESTIONS</div><div class="stat-value">'+rows.length+'</div><div class="stat-meta">Complete curriculum</div></div><div class="stat"><div class="stat-label">SOLUTIONS</div><div class="stat-value">'+countSolved(rows)+'</div><div class="stat-meta">From GitHub</div></div><div class="stat"><div class="stat-label">STUDIED</div><div class="stat-value">'+rows.filter(x=>state.completed.has(x.id)).length+'</div><div class="stat-meta">Your local checklist</div></div><div class="stat"><div class="stat-label">COLLECTIONS</div><div class="stat-value">'+groups(id).length+'</div><div class="stat-meta">Topic sets</div></div></section><div class="section-head"><h2>Topic collections</h2></div><div class="group-list">'+groups(id).map(group=>{const arr=groupRows(id,group);return '<a class="group-item" href="#/group/'+id+'/'+group+'"><div><h3>'+safe(prettify(group))+'</h3><p>'+arr.length+' exercises · '+countSolved(arr)+' solutions available</p></div><span class="go">↗</span></a>'}).join("")+'</div>'}
function groupPage(subject,group){const s=subjects.find(x=>x.id===subject),rows=groupRows(subject,group);if(!rows.length)return home();bread(s.title,prettify(group));
 const filter=["all","solved","unsolved","bookmarked"];if(!filter.includes(state.filter))state.filter="all";
 const visible=rows.filter(x=>state.filter==="all"||state.filter==="solved"&&x.hasSolution||state.filter==="unsolved"&&!x.hasSolution||state.filter==="bookmarked"&&state.bookmarks.has(x.id));
 $("#view").innerHTML='<div class="page-heading"><span class="eyebrow">'+safe(s.title.toUpperCase())+' / TOPIC COLLECTION</span><h1>'+safe(prettify(group))+'</h1><p>Explore the original questions and available solutions. Study at your own pace and keep track of what you finish.</p></div>'+
 '<div class="info-panel">'+countSolved(rows)+' / '+rows.length+' solutions available on GitHub '+progress(rows)+'</div><div class="pill-row">'+filter.map(f=>'<button class="pill '+(state.filter===f?"active":"")+'" data-filter="'+f+'">'+({all:"All questions",solved:"With solutions",unsolved:"Without solutions",bookmarked:"Bookmarked"}[f])+'</button>').join("")+'</div>'+
 (visible.length?'<div class="exercise-grid">'+visible.map(x=>'<a class="exercise-card" href="'+urlFor(x)+'"><div class="exercise-top"><span class="exercise-number">EXERCISE '+numeric(x.n)+'</span><span class="tag '+(x.hasSolution?"solved":"")+'">'+status(x)+'</span></div><h3>'+safe(x.title)+'</h3><p>'+safe(prettify(x.group))+'</p><div class="small-stats"><span>'+(state.completed.has(x.id)?"✓ Studied":"○ Not studied")+'</span><span>'+(state.bookmarks.has(x.id)?"★ Saved":"☆ Save for later")+'</span></div></a>').join("")+'</div>':'<div class="empty-state"><h3>Nothing matches this filter</h3><p>Try another filter or browse all exercises.</p><button class="btn" data-filter="all">Show all</button></div>')}
function extractMath(text){
 const saved=[];const token=html=>{const id=saved.length;saved.push(html);return "@@MATHATLAS"+id+"TOKEN@@"};
 if(typeof katex==="undefined")return {text,saved,token};
 const block=(formula,display)=>{try{return katex.renderToString(formula,{displayMode:display,throwOnError:false,trust:false,strict:"ignore",output:"html"})}catch{return '<code>'+safe(formula)+'</code>'}};
 text=text.replace(/```math\s*\n([\s\S]*?)```/g,(_,f)=>token(block(f.trim(),true)));
 text=text.replace(/\$\$([\s\S]*?)\$\$/g,(_,f)=>token(block(f.trim(),true)));
 text=text.replace(/(?<!\\)\$((?:\\.|[^$\\\n])+?)\$/g,(_,f)=>token(block(f.trim(),false)));
 text=text.replace(/\\\[((?:.|\n)*?)\\\]/g,(_,f)=>token(block(f.trim(),true)));
 text=text.replace(/\\\((.*?)\\\)/g,(_,f)=>token(block(f.trim(),false)));
 return {text,saved,token};
}
function markdown(source){
 const original=extractMath(source);
 if(typeof marked==="undefined"||typeof DOMPurify==="undefined")return '<pre>'+safe(source)+'</pre>';
 const compiled=marked.parse(original.text,{gfm:true,breaks:false});
 const html=DOMPurify.sanitize(compiled,{ADD_ATTR:["class"],USE_PROFILES:{html:true}});
 return html.replace(/@@MATHATLAS(\d+)TOKEN@@/g,(_,n)=>original.saved[+n]||"");
}
function problemMarkup(exercise){
 const txt=exercise.body.replace(/(?:^|\n)>\s*\*\*Why this (?:exercise|problem):\*\*[^\n]*/gi,"").trim();
 return markdown(txt);
}
function workspaceHtml(x,solution){const arr=groupRows(x.subject,x.group);const idx=arr.findIndex(a=>a.n===x.n),prev=arr[idx-1],next=arr[idx+1];
 const path="exercises/"+x.subject+"/"+x.group+"_en.md",good=!!solution?.trim();
 return '<div class="workspace-header"><div class="page-heading"><span class="eyebrow">EXERCISE '+numeric(x.n)+' / '+safe(prettify(x.group).toUpperCase())+'</span><h1>'+safe(x.title)+'</h1><p>'+safe(subjects.find(s=>s.id===x.subject)?.title)+' · Question '+x.n+' of '+arr.length+'</p></div><div class="workspace-controls"><button class="btn" data-action="bookmark">'+(state.bookmarks.has(x.id)?"★ Bookmarked":"☆ Bookmark")+'</button><button class="btn" data-action="complete">'+(state.completed.has(x.id)?"✓ Studied":"Mark as studied")+'</button></div></div>'+
 '<div class="workspace-controls" style="margin-bottom:16px"><button class="pill '+(state.layout==="split"?"active":"")+'" data-layout="split">Side by side</button><button class="pill '+(state.layout==="stacked"?"active":"")+'" data-layout="stacked">Stacked view</button><button class="pill" data-action="toggle-solution">'+(state.hideSolution?"Show solution":"Hide solution")+'</button></div>'+
 '<div class="workspace-grid '+(state.layout==="stacked"?"stacked":"")+'"><section class="question-panel"><div class="panel-header"><h2>01 / The question</h2><a class="subtle-link" target="_blank" rel="noopener noreferrer" href="'+githubPath(path)+'">Original ↗</a></div><div class="panel-body">'+problemMarkup(x)+'</div></section>'+
 (!state.hideSolution?'<section class="solution-panel"><div class="panel-header"><h2>02 / Worked solution</h2>'+(good?'<a class="subtle-link" target="_blank" rel="noopener noreferrer" href="'+githubPath(x.path)+'">Open on GitHub ↗</a>':'<small>AWAITING SOLUTION</small>')+'</div>'+(good?'<div class="panel-body">'+markdown(solution)+'</div>':'<div class="empty-state"><div class="empty-icon">✧</div><h3>Solution coming soon</h3><p>This question is ready to study. The solution file is still empty in the GitHub repository.</p><a class="btn" target="_blank" rel="noopener noreferrer" href="'+githubPath(x.path)+'">View source file ↗</a></div>')+'</section>':'')+'</div>'+
 '<div class="workspace-footer"><div>'+(prev?'<a class="btn" href="'+urlFor(prev)+'">← Previous</a>':'')+'</div><div>'+(next?'<a class="btn btn-primary" href="'+urlFor(next)+'">Next exercise →</a>':'<a class="btn" href="#/group/'+x.subject+'/'+x.group+'">Back to collection</a>')+'</div></div>'+
 '<div class="info-panel">All problems and solutions come from the repository. “Studied” and bookmarks are saved only in this browser; they are not course grades or official teacher review statuses.</div>';
}
async function exercisePage(subject,group,n){const x=state.catalog.find(x=>x.subject===subject&&x.group===group&&x.n===n);if(!x)return home();state.current=x;bread(subjects.find(s=>s.id===subject)?.title||subject,prettify(group),"Exercise "+n);$("#view").innerHTML='<div class="loading-hero"><span class="eyebrow">LOADING THE WORKSPACE</span><h1>'+safe(x.title)+'</h1><div class="loading-track"><div></div></div></div>';let solution="";if(x.hasSolution){try{solution=await cacheFetch(x.path)}catch(e){console.warn(e);toast("Solution temporarily unavailable")}}if(state.current!==x)return;$("#view").innerHTML=workspaceHtml(x,solution)}
function searchResults(query){
 const q=query.trim().toLowerCase();const results=state.catalog.filter(x=>!q||(x.title+" "+x.subject+" "+x.group+" "+x.body.replace(/\$|\\/g," ")).toLowerCase().includes(q)).slice(0,35);
 $("#search-results").innerHTML=results.length?results.map(x=>'<a class="search-result" href="'+urlFor(x)+'"><div><strong>'+safe(x.title)+'</strong><span>'+safe(prettify(x.group))+' · Exercise '+x.n+'</span></div><span>'+ (x.hasSolution?"✓":"↗")+'</span></a>').join(""):'<div class="empty-state"><h3>No matching exercises</h3><p>Try a different concept or topic.</p></div>';
}
function dialog(open){$("#search-dialog").hidden=!open;document.body.style.overflow=open?"hidden":"";if(open){$("#global-search").value="";searchResults("");$("#global-search").focus()}}
function render(){renderNav();const parts=(location.hash||"#/").replace(/^#\/?/,"").split("/").filter(Boolean).map(decodeURIComponent);const [route,s,g,n]=parts;state.current=null;window.scrollTo({top:0,behavior:"instant"});if(!route)home();else if(route==="subject")subjectPage(s);else if(route==="group")groupPage(s,g);else if(route==="exercise")exercisePage(s,g,+n);else home()}
document.addEventListener("click",e=>{
 const link=e.target.closest('a[href^="#/"]');if(link){dialog(false);$("#sidebar").classList.remove("open");$("#mobile-overlay").classList.remove("open")}
 const filter=e.target.closest("[data-filter]");if(filter){state.filter=filter.dataset.filter;const hash=location.hash.split("/").map(decodeURIComponent);groupPage(hash[2],hash[3]);return}
 const layout=e.target.closest("[data-layout]");if(layout){state.layout=layout.dataset.layout;if(state.current)exercisePage(state.current.subject,state.current.group,state.current.n);return}
 const action=e.target.closest("[data-action]");if(!action)return;
 switch(action.dataset.action){
 case "search":dialog(true);break;
 case "close-search":dialog(false);break;
 case "toggle-sidebar":$("#sidebar").classList.toggle("open");$("#mobile-overlay").classList.toggle("open");break;
 case "close-sidebar":$("#sidebar").classList.remove("open");$("#mobile-overlay").classList.remove("open");break;
 case "theme":document.documentElement.dataset.theme=document.documentElement.dataset.theme==="dark"?"light":"dark";try{localStorage.setItem("atlas-theme",document.documentElement.dataset.theme)}catch{}break;
 case "refresh":state.cache.clear();load();toast("Checking GitHub for updates");break;
 case "toggle-solution":state.hideSolution=!state.hideSolution;if(state.current)exercisePage(state.current.subject,state.current.group,state.current.n);break;
 case "bookmark":if(!state.current)return;state.bookmarks.has(state.current.id)?state.bookmarks.delete(state.current.id):state.bookmarks.add(state.current.id);store("atlas-bookmarks",state.bookmarks);exercisePage(state.current.subject,state.current.group,state.current.n);break;
 case "complete":if(!state.current)return;state.completed.has(state.current.id)?state.completed.delete(state.current.id):state.completed.add(state.current.id);store("atlas-completed",state.completed);exercisePage(state.current.subject,state.current.group,state.current.n);toast("Study progress updated");break;
 }
});
$("#global-search").addEventListener("input",e=>searchResults(e.target.value));
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"||e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();dialog(true)}if(e.key==="Escape")dialog(false)});
window.addEventListener("hashchange",()=>{if(state.loaded){state.filter="all";render()}});
load();
})();
