(function(){
  const nav=document.querySelector('.nav');
  const toggle=document.querySelector('.menu-toggle');
  const themeBtn=document.getElementById('themeToggle');
  const yearSpan=document.getElementById('year');
  if(yearSpan) yearSpan.textContent=new Date().getFullYear();
  toggle&&toggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(isOpen));});
  const savedTheme=localStorage.getItem('theme');
  if(savedTheme==='dark') document.body.classList.add('dark');
  themeBtn&&themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark');const mode=document.body.classList.contains('dark')?'dark':'light';localStorage.setItem('theme',mode);themeBtn.textContent=mode==='dark'?'☀️':'🌙';});
  if(themeBtn) themeBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
  const form=document.getElementById('contactForm');
  if(!form) return;
  const name=document.getElementById('name');
  const email=document.getElementById('email');
  const message=document.getElementById('message');
  const errName=document.getElementById('err-name');
  const errEmail=document.getElementById('err-email');
  const errMessage=document.getElementById('err-message');
  const successMsg=document.getElementById('successMsg');
  function isEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);} 
  form.addEventListener('submit',(e)=>{e.preventDefault();let ok=true; if(!name.value||name.value.trim().length<3){errName.textContent='Informe um nome com pelo menos 3 caracteres.';ok=false;} else errName.textContent=''; if(!email.value||!isEmail(email.value)){errEmail.textContent='Informe um e-mail válido (ex.: usuario@dominio.com).';ok=false;} else errEmail.textContent=''; if(!message.value||message.value.trim().length<10){errMessage.textContent='Escreva uma mensagem com pelo menos 10 caracteres.';ok=false;} else errMessage.textContent=''; if(!ok) return; form.reset(); successMsg.hidden=false; setTimeout(()=>{successMsg.hidden=true;},4000); alert('Mensagem enviada com sucesso!');});
})();