
const chat = document.querySelector('.chat');
const chatToggle = document.querySelector('.chat-toggle');
if(chatToggle && chat){chatToggle.addEventListener('click',()=>chat.classList.toggle('open'));}
const menuBtn=document.querySelector('.menu-btn');
if(menuBtn){menuBtn.addEventListener('click',()=>document.querySelector('.nav').classList.toggle('mobile-open'));}
document.querySelectorAll('[data-order]').forEach(btn=>{
 btn.addEventListener('click',()=>{
  const item=btn.dataset.order;
  const msg=encodeURIComponent(`Hello Comfy's Food! I'd like to order: ${item}. Please share availability and delivery details.`);
  window.open(`https://wa.me/2349051265301?text=${msg}`,'_blank');
 });
});
const booking=document.querySelector('#booking-form');
if(booking){booking.addEventListener('submit',e=>{
 e.preventDefault();
 const data=new FormData(booking);
 const msg=encodeURIComponent(`Hello Comfy's Food! I'd like to make an enquiry. Name: ${data.get('name')}; Date: ${data.get('date')}; Guests: ${data.get('guests')}; Message: ${data.get('message')}`);
 window.open(`https://wa.me/2349051265301?text=${msg}`,'_blank');
});}
