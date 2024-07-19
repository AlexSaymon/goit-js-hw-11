import{i as d}from"./assets/vendor-ad859c2f.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="44952732-afe4551e0894d66c0b6ee4476";function y(i){const n=`https://pixabay.com/api/?key=${g}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function h(){d.show({message:"Sorry, there are no images matching your search query. Please try again!"})}const s={submitBtn:document.querySelector(".js-submit-btn"),form:document.querySelector("form[data-form]"),input:document.querySelector("input[data-input]"),gallery:document.querySelector(".gallery")};s.submitBtn.addEventListener("click",i=>{i.preventDefault();const n=s.input.value.trim(),o=s.input.value;function a(){return n===""?(s.submitBtn.disabled=!0,console.log("input is empty"),h(),!0):(s.submitBtn.disabled=!1,!1)}function e({webformatURL:r,largeImageURL:l,tags:c,likes:u,views:m,comments:p,downloads:f}){return`
  <div class = "image-container">
    <li class="image-item">
      <img src="${r}" alt="${c}" />
    </li>
    <div class ="">
      <li class="image-item-info">
        <p><span class = "comment-head">Likes</span> ${u}</p>
        <p><span class = "comment-head">Views</span> ${m}</p>
        <p><span class = "comment-head">Comments</span> ${p}</p>
        <p><span class = "comment-head">Downloads</span> ${f}</p>
      </li>
    </div>
  </div>
    
  `}function t(r){const l=r.hits;let c="";l.forEach(u=>{c+=e(u)}),s.gallery.innerHTML=c}if(s.gallery.innerHTML="",s.form.reset(),a()){s.submitBtn.disabled=!1;return}y(o).then(t).catch(r=>{console.error("No Images",r)})});
//# sourceMappingURL=commonHelpers.js.map
