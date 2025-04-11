import{r as c,b as ae,j as e,a as Z}from"./app-CDyc61az.js";import{A as X}from"./app-layout-77FvfO_M.js";import{B as $e}from"./button-BQm0QxUX.js";import"./sidebar-QSdEtK5A.js";import"./index-B3yxPaiJ.js";import"./index-BXlpOzM0.js";import"./app-logo-icon-B5CCbLyh.js";let tt={data:""},st=s=>typeof window=="object"?((s?s.querySelector("#_goober"):window._goober)||Object.assign((s||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:s||tt,at=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,rt=/\/\*[^]*?\*\/|  +/g,ke=/\n+/g,U=(s,l)=>{let o="",u="",f="";for(let n in s){let h=s[n];n[0]=="@"?n[1]=="i"?o=n+" "+h+";":u+=n[1]=="f"?U(h,n):n+"{"+U(h,n[1]=="k"?"":l)+"}":typeof h=="object"?u+=U(h,l?l.replace(/([^,])+/g,g=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,g):g?g+" "+b:b)):n):h!=null&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),f+=U.p?U.p(n,h):n+":"+h+";")}return o+(l&&f?l+"{"+f+"}":f)+u},q={},Le=s=>{if(typeof s=="object"){let l="";for(let o in s)l+=o+Le(s[o]);return l}return s},it=(s,l,o,u,f)=>{let n=Le(s),h=q[n]||(q[n]=(b=>{let N=0,x=11;for(;N<b.length;)x=101*x+b.charCodeAt(N++)>>>0;return"go"+x})(n));if(!q[h]){let b=n!==s?s:(N=>{let x,C,T=[{}];for(;x=at.exec(N.replace(rt,""));)x[4]?T.shift():x[3]?(C=x[3].replace(ke," ").trim(),T.unshift(T[0][C]=T[0][C]||{})):T[0][x[1]]=x[2].replace(ke," ").trim();return T[0]})(s);q[h]=U(f?{["@keyframes "+h]:b}:b,o?"":"."+h)}let g=o&&q.g?q.g:null;return o&&(q.g=q[h]),((b,N,x,C)=>{C?N.data=N.data.replace(C,b):N.data.indexOf(b)===-1&&(N.data=x?b+N.data:N.data+b)})(q[h],l,u,g),h},lt=(s,l,o)=>s.reduce((u,f,n)=>{let h=l[n];if(h&&h.call){let g=h(o),b=g&&g.props&&g.props.className||/^go/.test(g)&&g;h=b?"."+b:g&&typeof g=="object"?g.props?"":U(g,""):g===!1?"":g}return u+f+(h??"")},"");function oe(s){let l=this||{},o=s.call?s(l.p):s;return it(o.unshift?o.raw?lt(o,[].slice.call(arguments,1),l.p):o.reduce((u,f)=>Object.assign(u,f&&f.call?f(l.p):f),{}):o,st(l.target),l.g,l.o,l.k)}let Me,he,ge;oe.bind({g:1});let O=oe.bind({k:1});function ot(s,l,o,u){U.p=l,Me=s,he=o,ge=u}function z(s,l){let o=this||{};return function(){let u=arguments;function f(n,h){let g=Object.assign({},n),b=g.className||f.className;o.p=Object.assign({theme:he&&he()},g),o.o=/ *go\d+/.test(b),g.className=oe.apply(o,u)+(b?" "+b:"");let N=s;return s[0]&&(N=g.as||s,delete g.as),ge&&N[0]&&ge(g),Me(N,g)}return f}}var nt=s=>typeof s=="function",ve=(s,l)=>nt(s)?s(l):s,ct=(()=>{let s=0;return()=>(++s).toString()})(),dt=(()=>{let s;return()=>{if(s===void 0&&typeof window<"u"){let l=matchMedia("(prefers-reduced-motion: reduce)");s=!l||l.matches}return s}})(),mt=20,Te=(s,l)=>{switch(l.type){case 0:return{...s,toasts:[l.toast,...s.toasts].slice(0,mt)};case 1:return{...s,toasts:s.toasts.map(n=>n.id===l.toast.id?{...n,...l.toast}:n)};case 2:let{toast:o}=l;return Te(s,{type:s.toasts.find(n=>n.id===o.id)?1:0,toast:o});case 3:let{toastId:u}=l;return{...s,toasts:s.toasts.map(n=>n.id===u||u===void 0?{...n,dismissed:!0,visible:!1}:n)};case 4:return l.toastId===void 0?{...s,toasts:[]}:{...s,toasts:s.toasts.filter(n=>n.id!==l.toastId)};case 5:return{...s,pausedAt:l.time};case 6:let f=l.time-(s.pausedAt||0);return{...s,pausedAt:void 0,toasts:s.toasts.map(n=>({...n,pauseDuration:n.pauseDuration+f}))}}},ut=[],xe={toasts:[],pausedAt:void 0},be=s=>{xe=Te(xe,s),ut.forEach(l=>{l(xe)})},pt=(s,l="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:l,ariaProps:{role:"status","aria-live":"polite"},message:s,pauseDuration:0,...o,id:(o==null?void 0:o.id)||ct()}),re=s=>(l,o)=>{let u=pt(l,s,o);return be({type:2,toast:u}),u.id},j=(s,l)=>re("blank")(s,l);j.error=re("error");j.success=re("success");j.loading=re("loading");j.custom=re("custom");j.dismiss=s=>{be({type:3,toastId:s})};j.remove=s=>be({type:4,toastId:s});j.promise=(s,l,o)=>{let u=j.loading(l.loading,{...o,...o==null?void 0:o.loading});return typeof s=="function"&&(s=s()),s.then(f=>{let n=l.success?ve(l.success,f):void 0;return n?j.success(n,{id:u,...o,...o==null?void 0:o.success}):j.dismiss(u),f}).catch(f=>{let n=l.error?ve(l.error,f):void 0;n?j.error(n,{id:u,...o,...o==null?void 0:o.error}):j.dismiss(u)}),s};var ft=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,xt=O`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ht=O`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,gt=z("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ft} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${xt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${s=>s.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ht} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,vt=O`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,bt=z("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${s=>s.secondary||"#e0e0e0"};
  border-right-color: ${s=>s.primary||"#616161"};
  animation: ${vt} 1s linear infinite;
`,wt=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,yt=O`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,jt=z("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${yt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${s=>s.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Nt=z("div")`
  position: absolute;
`,Ct=z("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,St=O`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Rt=z("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${St} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,At=({toast:s})=>{let{icon:l,type:o,iconTheme:u}=s;return l!==void 0?typeof l=="string"?c.createElement(Rt,null,l):l:o==="blank"?null:c.createElement(Ct,null,c.createElement(bt,{...u}),o!=="loading"&&c.createElement(Nt,null,o==="error"?c.createElement(gt,{...u}):c.createElement(jt,{...u})))},Et=s=>`
0% {transform: translate3d(0,${s*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,$t=s=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s*-150}%,-1px) scale(.6); opacity:0;}
`,kt="0%{opacity:0;} 100%{opacity:1;}",Lt="0%{opacity:1;} 100%{opacity:0;}",Mt=z("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Tt=z("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,It=(s,l)=>{let o=s.includes("top")?1:-1,[u,f]=dt()?[kt,Lt]:[Et(o),$t(o)];return{animation:l?`${O(u)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${O(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};c.memo(({toast:s,position:l,style:o,children:u})=>{let f=s.height?It(s.position||l||"top-center",s.visible):{opacity:0},n=c.createElement(At,{toast:s}),h=c.createElement(Tt,{...s.ariaProps},ve(s.message,s));return c.createElement(Mt,{className:s.className,style:{...f,...o,...s.style}},typeof u=="function"?u({icon:n,message:h}):c.createElement(c.Fragment,null,n,h))});ot(c.createElement);oe`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;const ee=[{title:"play",href:"/play"}];function zt(s){const l=(s==null?void 0:s.gameData)||{};s==null||s.user;const[o,u]=c.useState(!0),[f,n]=c.useState(null),[h,g]=c.useState(!1),[b,N]=c.useState(!0),[x,C]=c.useState(0),[T,I]=c.useState(null),[F,$]=c.useState(!1),[W,K]=c.useState(null),[G,R]=c.useState("playing"),[Ie,k]=c.useState(!1),[J,we]=c.useState(null),[ye,v]=c.useState("Welcome to StudyQuest! Answer Philippine history trivia to collect rare items!"),[ne,S]=c.useState("happy"),[_,ce]=c.useState(20),[De,je]=c.useState(!1),[p,B]=c.useState([]),[de,Qe]=c.useState([]),[me,te]=c.useState([]),[d,E]=c.useState({id:0,level:1,currentRow:1,score:0,streak:0,hearts:3,gameMode:"normal"}),[Ne,L]=c.useState([]),[D,V]=c.useState({row1Completed:!1,row2Completed:!1,row3Completed:!1}),[Ce,Q]=c.useState(null),[Dt,H]=c.useState([]),[Se,ue]=c.useState(0),[Pe,pe]=c.useState(!1),[qe,Re]=c.useState([{level:1,used:!1},{level:2,used:!1},{level:3,used:!1}]),Y=c.useRef(null);c.useEffect(()=>{console.log("Initializing game data from props:",s);try{if(!s||!s.gameData){n("Game data is missing"),u(!1);return}const{gameData:t}=s;if(!t.triviaData||!Array.isArray(t.triviaData)||t.triviaData.length===0){n("Trivia questions are missing"),u(!1);return}B(t.triviaData),Qe(Array.isArray(t.cluesData)?t.cluesData:[]),te(Array.isArray(t.collectedItems)?t.collectedItems:[]),E(t.session&&typeof t.session=="object"?t.session:{id:0,level:1,currentRow:1,score:0,streak:0,hearts:3,gameMode:"normal"}),L(Array.isArray(t.powerUps)?t.powerUps:[]),V(t.rowStatus&&typeof t.rowStatus=="object"?t.rowStatus:{row1Completed:!1,row2Completed:!1,row3Completed:!1}),H(Array.isArray(t.completedQuestions)?t.completedQuestions:[]),u(!1)}catch(t){console.error("Error initializing game data:",t),n("Failed to initialize game data"),u(!1)}},[s]),c.useEffect(()=>{!o&&p&&p.length>0&&(console.log("Game data loaded, finding first question"),ie())},[o,p]),c.useEffect(()=>{if(G==="playing"&&!F){console.log("Starting timer - game state is 'playing' and question is not answered");const t=d.gameMode==="normal"?20:15;ce(t),je(!1),Y.current&&clearInterval(Y.current),Y.current=setInterval(()=>{ce(a=>(a<=5&&a>0&&je(!0),a<=1?(clearInterval(Y.current),F||Oe(),0):a-1))},1e3)}else Y.current&&(console.log("Clearing timer - game state is not 'playing' or question is answered"),clearInterval(Y.current));return()=>{Y.current&&(console.log("Cleaning up timer in effect cleanup"),clearInterval(Y.current))}},[G,F,d.gameMode]),c.useEffect(()=>{const t=d.gameMode==="normal"?20:15;ce(t)},[d.gameMode]);const ie=()=>{if(!p||p.length===0){console.error("Cannot find unanswered question - triviaData is empty");return}try{const a=p.filter(r=>r.row===d.currentRow).filter(r=>!r.completed);if(a.length>0){const r=p.findIndex(i=>i.id===a[0].id);r!==-1?C(r):console.error("Question index not found in triviaData")}else console.warn("No unanswered questions found in current row")}catch(t){console.error("Error finding unanswered question:",t)}},Oe=()=>{G==="playing"&&(W==="shield"?(v("Shield activated! Your heart is protected from the timer."),K(null)):(E(t=>({...t,hearts:t.hearts-1,streak:0})),S("sad"),v("Time's up! You lost a heart.")),$(!0),R("revealed"))};c.useEffect(()=>{d.streak===3?(v("You're becoming a history scholar! Keep it up!"),S("excited"),Math.random()<.3&&le()):d.streak===5?(v("Impressive knowledge! Rizal would be proud!"),S("excited"),le()):d.streak===10&&(v("LEGENDARY STREAK! You're writing your own place in history!"),S("excited"),le(),le())},[d.streak]);const le=async()=>{try{const t=await ae.post("/api/trivia/add-powerup");t.data.success&&L(a=>[...a,t.data.powerUp])}catch(t){console.error("Error adding power-up:",t);const a=["shield","fifty-fifty","double-points","heal","shuffle"],r=a[Math.floor(Math.random()*a.length)];L(i=>[...i,r])}},Ge=async t=>{var a,r;if(!(!p||!p[x])){try{const i=await ae.post("/api/trivia/clue",{questionId:p[x].id,clueLevel:t});i.data.success&&(ue(t),pe(!0),S("excited"),v(`CLUE: ${i.data.clue.text}`),E(m=>({...m,score:i.data.updatedScore})))}catch(i){console.error("Error getting clue:",i),ue(t),pe(!0),S("excited");const y={1:0,2:5,3:10}[t]||0;E(P=>({...P,score:Math.max(0,P.score-y)})),v(`CLUE: Think about the historical context of this question. (Cost: ${y} points)`),(r=(a=i.response)==null?void 0:a.data)!=null&&r.message&&(v(i.response.data.message),S("worried"))}Re(i=>i.map(m=>m.level===t?{...m,used:!0}:m))}},se=()=>{ue(0),pe(!1),Re([{level:1,used:!1},{level:2,used:!1},{level:3,used:!1}])},Ye=async t=>{if(!(F||G!=="playing")){I(t),$(!0);try{const a=await ae.post("/api/trivia/answer",{questionId:p[x].id,selectedAnswer:t,activePowerUp:W});if(a.data.success){const{isCorrect:r,pointsEarned:i,collectibleAwarded:m,gameState:y,session:P}=a.data;E(P),H(w=>[...w,p[x].id]),B(w=>w.map(M=>M.id===p[x].id?{...M,completed:!0}:M)),r?(S("excited"),v(`Correct! ${W==="double-points"?"DOUBLE POINTS!":""}`),m&&(we(m),te(w=>[...w,m]),setTimeout(()=>{k(!0)},1e3))):(S("sad"),v(`That's not correct. The answer was ${Ae(p[x].correctAnswer)}`)),R(y)}}catch(a){console.error("Error submitting answer:",a);const r=p[x],i=t===r.correctAnswer;H(w=>[...w,r.id]),B(w=>w.map(M=>M.id===r.id?{...M,completed:!0}:M));const P=(i?10:0)*(W==="double-points"?2:1);if(E(w=>({...w,score:w.score+P,streak:i?w.streak+1:0})),i){if(S("excited"),v(`Correct! ${W==="double-points"?"DOUBLE POINTS!":""}`),Math.random()<.1){const w=["Common","Rare","Very Rare","Legendary"],M=w[Math.floor(Math.random()*w.length)],Ee={id:Date.now(),name:"Philippine Artifact",rarity:M,bonus:M==="Legendary"?"+50 points on next correct answer":null};we(Ee),te(et=>[...et,Ee]),setTimeout(()=>{k(!0)},1e3)}}else S("sad"),v(`That's not correct. The answer was ${Ae(r.correctAnswer)}`);R("revealed")}W&&K(null)}},Ae=t=>{if(!p||!p[x])return"";const a=p[x].options.find(r=>r.id===t);return a?a.text:""},Ue=()=>{if(d.hearts<=0){R("gameOver");return}if(D.row1Completed&&D.row2Completed&&D.row3Completed){R("levelComplete");return}se();const a=p.filter(r=>r.row===d.currentRow).filter(r=>!r.completed);if(a.length>0){const r=Math.floor(Math.random()*a.length),i=p.findIndex(m=>m.id===a[r].id);C(i),I(null),$(!1),Q(null),R("playing"),v("What do you know about this piece of Philippine history?"),S("happy"),k(!1)}else if(d.currentRow<3){E(i=>({...i,currentRow:i.currentRow+1}));const r=p.filter(i=>i.row===d.currentRow+1);if(r.length>0){const i=p.findIndex(m=>m.id===r[0].id);C(i),I(null),$(!1),Q(null),R("playing"),v(`Moving to Row ${d.currentRow+1}!`),S("excited"),k(!1),V(m=>{const y={...m};return d.currentRow===1&&(y.row1Completed=!0),d.currentRow===2&&(y.row2Completed=!0),y})}}else R("levelComplete"),V(r=>({...r,row3Completed:!0}))},ze=async()=>{try{const t=await ae.post("/api/trivia/next-level");if(t.data.success){const{gameData:a}=t.data;B(a.triviaData),E(a.session),L(a.powerUps),V(a.rowStatus),H(a.completedQuestions),C(0),I(null),$(!1),Q(null),R("playing"),k(!1),se(),v(`Level ${a.session.level} begins! The questions will be more challenging now.`),S("excited");const r=a.triviaData.filter(i=>i.row===1);if(r.length>0){const i=a.triviaData.findIndex(m=>m.id===r[0].id);C(i)}}}catch(t){console.error("Error advancing to next level:",t);const a=d.level+1;E(r=>({...r,level:a,currentRow:1})),V({row1Completed:!1,row2Completed:!1,row3Completed:!1}),B(r=>r.map(i=>({...i,completed:!1}))),H([]),C(0),I(null),$(!1),Q(null),R("playing"),k(!1),se(),v(`Level ${a} begins! The questions will be more challenging now.`),S("excited"),ie(),j.success(`Advanced to Level ${a}!`)}},fe=async t=>{try{g(!0);const a=j.loading(`Restarting game in ${t} mode...`);try{const r=await ae.post("/api/trivia/restart",{gameMode:t==="suddenDeath"?"sudden_death":t});if(j.dismiss(a),r.data.success){j.success(`Game restarted in ${t} mode!`);const{gameData:i}=r.data;B(i.triviaData),E(i.session),L(i.powerUps||[]),V(i.rowStatus||{row1Completed:!1,row2Completed:!1,row3Completed:!1}),H(i.completedQuestions||[]),te(i.collectedItems||[]),C(0),I(null),$(!1),Q(null),R("playing"),k(!1),se(),v(`Game restarted in ${t} mode! Ready for more Philippine history trivia?`),S("happy"),ie()}else throw new Error(r.data.message||"Failed to restart game")}catch(r){console.error("Error restarting game with API:",r),j.dismiss(a),j.warning("API restart failed. Using client-side restart."),E({id:d.id,level:1,currentRow:1,score:0,streak:0,hearts:t==="normal"?3:1,gameMode:t}),C(0),I(null),$(!1),Q(null),R("playing"),k(!1),se(),V({row1Completed:!1,row2Completed:!1,row3Completed:!1}),B(i=>i.map(m=>({...m,completed:!1}))),H([]),te([]),L(["fifty-fifty"]),v(`Game restarted in ${t} mode! Ready for more Philippine history trivia?`),S("happy"),ie(),j.success(`Game restarted in ${t} mode!`)}}finally{g(!1)}},Fe=t=>{fe(t)},_e=t=>{if(!(G!=="playing"||F)){if(K(t),L(a=>a.filter(r=>r!==t)),t==="fifty-fifty"){const a=p[x];if(!a)return;const r=a.correctAnswer,y=a.options.filter(w=>w.id!==r).map(w=>w.id).sort(()=>Math.random()-.5).slice(0,2),P={};a.options.forEach(w=>{P[w.id]=!y.includes(w.id)}),Q(P),v("Your knowledge of history has helped you eliminate two wrong answers!")}else if(t==="shield")v("Rizal's wisdom protects you from losing a heart this round!");else if(t==="double-points")v("The revolutionary spirit doubles your score for this answer!");else if(t==="heal")d.hearts<3?(E(a=>({...a,hearts:Math.min(a.hearts+1,3)})),v("You restored a heart! ❤️")):(v("You already have maximum hearts!"),L(a=>[...a,t]),K(null));else if(t==="shuffle"){const r=p.filter(i=>i.row===d.currentRow).filter(i=>{var m;return!i.completed&&i.id!==((m=p[x])==null?void 0:m.id)});if(r.length>0){const i=Math.floor(Math.random()*r.length),m=p.findIndex(y=>y.id===r[i].id);C(m),I(null),$(!1),Q(null),v("Question shuffled! Let's try a different one."),R("playing")}else v("No more questions to shuffle to in this row!"),L(i=>[...i,t]),K(null)}else if(t==="shuffle"){const r=p.filter(i=>i.row===d.currentRow).filter(i=>{var m;return!i.completed&&i.id!==((m=p[x])==null?void 0:m.id)});if(r.length>0){const i=Math.floor(Math.random()*r.length),m=p.findIndex(y=>y.id===r[i].id);C(m),I(null),$(!1),Q(null),v("Question shuffled! Let's try a different one."),startTimer()}else v("No more questions to shuffle to in this row!"),L(i=>[...i,t]),K(null)}}},Be=({level:t,cost:a})=>{const r=qe.find(y=>y.level===t),i=(r==null?void 0:r.used)||!1,m=d.score>=a||a===0;return e.jsx("button",{onClick:()=>Ge(t),disabled:i||!m||F,className:`px-3 py-1 rounded-md text-sm ${i?"bg-gray-500 text-gray-300 cursor-not-allowed":m?"bg-primary text-white hover:bg-primary/80":"bg-red-300 text-red-800 cursor-not-allowed"}`,children:i?"Used":`Clue ${t} ${a>0?`(-${a})`:"(Free)"}`})},Ve=()=>e.jsx("div",{className:"trivia-hearts",children:[...Array(d.gameMode==="normal"?3:1)].map((t,a)=>e.jsx("span",{className:"text-2xl",children:a<d.hearts?"❤️":"🖤"},a))}),He={shuffle:{name:"Shuffle",icon:"🔄",description:"Changes the current question card"},shield:{name:"Shield",icon:"🛡️",description:"Protects you from losing a heart"},"fifty-fifty":{name:"50/50",icon:"50/50",description:"Removes two incorrect answers"},"double-points":{name:"Double Points",icon:"2x",description:"Doubles points for one question"},heal:{name:"Heal",icon:"❤️",description:"Restores one heart"}},We=()=>e.jsx("div",{className:"flex space-x-2 mb-4",children:Ne.map((t,a)=>{const r=He[t];return r?e.jsxs("button",{onClick:()=>_e(t),className:"trivia-powerup",title:r.description,children:[e.jsx("span",{className:"trivia-powerup-icon",children:r.icon}),e.jsx("span",{children:r.name})]},`${t}-${a}`):null})}),Ke=()=>{var i;let t="😊";if(ne==="excited"&&(t="🤩"),ne==="sad"&&(t="😢"),ne==="worried"&&(t="😟"),!p||!p[x])return e.jsxs("div",{className:"trivia-ai",children:[e.jsx("div",{className:"trivia-ai-avatar",children:t}),e.jsx("div",{className:"trivia-ai-message",children:e.jsx("p",{children:ye||"Loading game..."})})]});const a=(i=de.find(m=>{var y;return m&&typeof m=="object"&&m.question_id===((y=p[x])==null?void 0:y.id)}))==null?void 0:i.clues,r=a==null?void 0:a.find(m=>m&&typeof m=="object"&&m.level===Se);return e.jsxs("div",{className:"trivia-ai",children:[e.jsx("div",{className:"trivia-ai-avatar",children:t}),e.jsxs("div",{className:"trivia-ai-message",children:[e.jsx("p",{children:ye}),Pe&&r&&e.jsxs("div",{className:"mt-2 text-sm",children:[e.jsxs("span",{className:"text-accent font-medium",children:["Hint Level ",Se]}),r.cost>0&&e.jsxs("span",{className:"text-yellow-400 ml-2",children:["(-",r.cost," points)"]})]})]})]})},Je=()=>e.jsxs("div",{className:"trivia-level-rows-grid",children:[e.jsxs("div",{className:`trivia-level-row ${D.row1Completed?"bg-green-600":d.currentRow===1?"bg-primary":"bg-secondary"}`,children:["1 ",D.row1Completed&&"✓"]}),e.jsxs("div",{className:`trivia-level-row ${D.row2Completed?"bg-green-600":d.currentRow===2?"bg-primary":"bg-secondary"}`,children:["2 ",D.row2Completed&&"✓"]}),e.jsxs("div",{className:`trivia-level-row ${D.row3Completed?"bg-green-600":d.currentRow===3?"bg-primary":"bg-secondary"}`,children:["3 ",D.row3Completed&&"✓"]})]}),Ze=()=>{const t=d.gameMode==="normal"?20:15,a=_/t*100;let r="bg-green-500";return _<=5?r="bg-red-500":_<=10&&(r="bg-yellow-500"),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{children:"Time Remaining"}),e.jsxs("span",{className:_<=5?"text-red-500 font-bold":"",children:[_,"s"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5",children:e.jsx("div",{className:`h-2.5 rounded-full ${r}`,style:{width:`${a}%`}})}),De&&_<=5&&_>0&&e.jsx("div",{className:"text-red-500 text-sm mt-1 animate-pulse",children:"Hurry up!"})]})},Xe=()=>{var t;return!Ie||!J?null:e.jsx("div",{className:"trivia-modal",children:e.jsxs("div",{className:"trivia-modal-content",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-primary",children:"New Collectible!"}),e.jsx("button",{onClick:()=>k(!1),className:"text-accent hover:text-accent-foreground",children:"✕"})]}),e.jsxs("div",{className:"trivia-collectible",children:[e.jsx("div",{className:"trivia-collectible-image",children:e.jsx("span",{children:"🏆"})}),e.jsx("h4",{className:"trivia-collectible-title",children:J.name}),e.jsx("div",{className:`trivia-collectible-rarity ${J.rarity.replace(" ","-")}`,children:J.rarity}),e.jsx("p",{className:"trivia-collectible-description",children:((t=p[x])==null?void 0:t.revealText)||"An interesting piece of Philippine history!"}),J.bonus&&e.jsx("div",{className:"trivia-collectible-bonus",children:e.jsx("p",{children:J.bonus})})]}),e.jsx("div",{className:"mt-6 flex justify-center",children:e.jsx("button",{onClick:()=>k(!1),className:"trivia-button",children:"Continue"})})]})})};if(o)return e.jsxs(X,{breadcrumbs:ee,children:[e.jsx(Z,{title:"StudyQuest - Loading..."}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Loading StudyQuest..."}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})})]})})]});if(f)return e.jsxs(X,{breadcrumbs:ee,children:[e.jsx(Z,{title:"StudyQuest - Error"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-red-500",children:"Error Loading Game"}),e.jsx("p",{className:"mb-4",children:f}),e.jsx($e,{onClick:()=>window.location.reload(),children:"Reload Page"})]})})]});if(G==="levelComplete")return e.jsxs(X,{breadcrumbs:ee,children:[e.jsx(Z,{title:`StudyQuest - Level ${d.level} Complete`}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-card shadow-xl rounded-lg overflow-hidden",children:e.jsxs("div",{className:"p-6 md:p-8 text-center",children:[e.jsxs("h2",{className:"text-3xl font-bold text-accent mb-4",children:["Level ",d.level," Complete!"]}),e.jsx("p",{className:"text-xl mb-4",children:"You've completed all rows of questions!"}),e.jsxs("p",{className:"text-lg mb-8",children:["Current Score: ",e.jsx("span",{className:"font-bold text-primary",children:d.score})," points"]}),e.jsxs("div",{className:"bg-muted p-6 rounded-lg mb-8",children:[e.jsxs("h3",{className:"text-xl font-bold mb-4",children:["Level ",d.level," Stats"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-md mx-auto",children:[e.jsxs("div",{className:"bg-card p-3 rounded-lg",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Collectibles Earned"}),e.jsx("p",{className:"text-2xl font-bold",children:me.length})]}),e.jsxs("div",{className:"bg-card p-3 rounded-lg",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Current Streak"}),e.jsx("p",{className:"text-2xl font-bold",children:d.streak})]})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-center",children:[e.jsxs("button",{onClick:ze,className:"trivia-button bg-primary",children:["Advance to Level ",d.level+1]}),e.jsx("button",{onClick:()=>fe(d.gameMode),className:"trivia-button bg-secondary",children:"Restart Game"})]})]})})})})]});if(G==="gameOver")return e.jsxs(X,{breadcrumbs:ee,children:[e.jsx(Z,{title:"StudyQuest - Game Over"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-card shadow-xl rounded-lg overflow-hidden",children:e.jsxs("div",{className:"p-6 md:p-8 text-center",children:[e.jsx("h2",{className:"text-3xl font-bold text-accent mb-4",children:"Game Over!"}),e.jsxs("p",{className:"text-xl mb-8",children:["You scored ",e.jsx("span",{className:"font-bold text-primary",children:d.score})," points"]}),e.jsxs("div",{className:"bg-muted p-6 rounded-lg mb-8",children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Collectibles Earned"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:me.length>0?me.map((t,a)=>e.jsxs("div",{className:"bg-card p-3 rounded-lg",children:[e.jsx("div",{className:"trivia-collectible-image",style:{width:"4rem",height:"4rem",margin:"0 auto 0.5rem"},children:e.jsx("span",{className:"text-3xl",children:"🏆"})}),e.jsx("p",{className:"text-sm font-medium text-center",children:t.name}),e.jsx("p",{className:"text-xs text-center text-accent",children:t.rarity})]},a)):e.jsx("div",{className:"col-span-3 p-4",children:e.jsx("p",{className:"text-muted-foreground",children:"No collectibles earned this game."})})})]}),l.leaderboard&&l.leaderboard.length>0&&e.jsxs("div",{className:"bg-muted p-6 rounded-lg mb-8",children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Leaderboard"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b",children:[e.jsx("th",{className:"text-left py-2 px-4",children:"Rank"}),e.jsx("th",{className:"text-left py-2 px-4",children:"Player"}),e.jsx("th",{className:"text-right py-2 px-4",children:"Score"})]})}),e.jsx("tbody",{children:l.leaderboard.slice(0,5).map((t,a)=>e.jsxs("tr",{className:"border-b",children:[e.jsx("td",{className:"py-2 px-4",children:a+1}),e.jsx("td",{className:"py-2 px-4",children:t.user}),e.jsx("td",{className:"py-2 px-4 text-right",children:t.score})]},a))})]})}),e.jsx("div",{className:"mt-2 text-right",children:e.jsx("a",{href:"/leaderboard",className:"text-accent hover:underline",children:"View full leaderboard"})})]}),e.jsx("div",{className:"flex flex-col md:flex-row gap-4 justify-center",children:d.gameMode==="normal"?e.jsx("a",{href:"#",onClick:()=>window.location.reload(),className:"trivia-button bg-secondary",children:"Play Again"}):e.jsx("button",{onClick:()=>Fe("normal"),className:"trivia-button bg-secondary",children:"Return to Normal Mode"})})]})})})})]});const A=p[x];return A?e.jsxs(X,{breadcrumbs:ee,children:[e.jsx(Z,{title:`StudyQuest - Level ${d.level}`}),e.jsx("div",{className:"py-6",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-6 flex justify-between items-center",children:[e.jsxs("div",{className:"trivia-level",children:[e.jsxs("span",{className:"trivia-level-title",children:["Level ",d.level]}),e.jsxs("div",{className:"trivia-level-rows",children:[e.jsx("span",{className:"trivia-level-rows-label",children:"Row:"}),Je()]})]}),e.jsxs("div",{className:"trivia-stats",children:[e.jsxs("div",{className:"trivia-stats-item",children:[e.jsx("div",{className:"trivia-stats-label",children:"Score"}),e.jsx("div",{className:"trivia-stats-value",children:d.score})]}),e.jsxs("div",{className:"trivia-stats-item",children:[e.jsx("div",{className:"trivia-stats-label",children:"Streak"}),e.jsx("div",{className:"trivia-stats-value",children:d.streak})]}),e.jsx("button",{onClick:()=>N(t=>!t),className:"px-3 py-1 text-sm rounded-full bg-secondary text-white",children:b?"Hide AI":"Show AI"}),e.jsx("div",{children:Ve()})]})]}),b&&Ke(),b&&de.length>0&&e.jsxs("div",{className:"flex items-center justify-between mb-4 bg-secondary/20 p-2 rounded-lg",children:[e.jsx("span",{className:"text-sm font-medium",children:"Need help?"}),e.jsx("div",{className:"flex space-x-2",children:de.filter(t=>t&&typeof t=="object"&&t.question_id===A.id).flatMap(t=>Array.isArray(t.clues)?t.clues:[]).map(t=>t&&typeof t=="object"?e.jsx(Be,{level:t.level,cost:t.cost},t.level):null)})]}),Ne.length>0&&e.jsxs("div",{className:"mb-4",children:[e.jsx("span",{className:"text-sm font-medium mb-2 block",children:"Power-ups:"}),We()]}),Ze(),e.jsxs("div",{className:"trivia-question-card",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:`trivia-category-badge ${A.rarity.replace(" ","-")}`,children:[A.category," • ",A.rarity]}),e.jsxs("span",{className:"text-muted-foreground text-sm",children:["Row ",d.currentRow]})]}),e.jsx("h3",{className:"trivia-question",children:A.question}),e.jsx("div",{className:"grid grid-cols-1 gap-3",children:A.options.map(t=>{if(Ce&&!Ce[t.id])return null;let a="trivia-option";return F?t.id===A.correctAnswer?a+=" trivia-option-correct":t.id===T?a+=" trivia-option-incorrect":a+=" trivia-option-disabled":t.id===T&&(a+=" trivia-option-selected"),e.jsxs("div",{className:a,onClick:()=>Ye(t.id),children:[e.jsx("span",{className:"trivia-option-circle",children:t.id.toUpperCase()}),e.jsx("span",{className:"trivia-option-text",children:t.text})]},t.id)})}),G==="revealed"&&e.jsxs("div",{className:"trivia-reveal",children:[e.jsx("p",{className:"trivia-reveal-collectible",children:A.collectible.rarity==="LEGENDARY"?"🌟 LEGENDARY COLLECTIBLE UNLOCKED!":A.collectible.rarity==="VERY RARE"?"✨✨ You discovered a VERY RARE collectible!":A.collectible.rarity==="RARE"?"✨ You found a RARE collectible!":A.collectible.rarity==="COMMON"?"✓ You found a COMMON collectible!":"✓ You found a NORMAL collectible!"}),e.jsx("p",{className:"trivia-reveal-text",children:A.revealText}),e.jsx("button",{onClick:Ue,className:"trivia-button",children:"Next Question"})]})]})]})}),Xe()]}):e.jsxs(X,{breadcrumbs:ee,children:[e.jsx(Z,{title:`StudyQuest - Level ${d.level}`}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"No question available"}),e.jsx("p",{className:"mb-4",children:"There seems to be an issue loading the current question."}),e.jsx($e,{onClick:()=>fe(d.gameMode),children:"Restart Game"})]})})]})}export{zt as default};
