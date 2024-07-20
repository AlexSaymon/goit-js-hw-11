import{i as b,S as v}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const L="44952732-afe4551e0894d66c0b6ee4476";function I(a){const s=`https://pixabay.com/api/?key=${L}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function S(){b.show({message:"Sorry, there are no images matching your search query. Please try again!"})}const r={submitBtn:document.querySelector(".js-submit-btn"),form:document.querySelector("form[data-form]"),input:document.querySelector("input[data-input]"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},$=new v(".image-link",{captions:!0,captionSelector:"img",captionsData:"alt",captionType:"attr",captionPosition:"bottom",captionDelay:250});function f(a){a.preventDefault();const s=r.input.value.trim(),o=r.input.value;function c(){return s===""?(r.submitBtn.disabled=!0,console.log("input is empty"),S(),!0):(r.submitBtn.disabled=!1,!1)}function e({webformatURL:i,largeImageURL:m,tags:l,likes:d,views:g,comments:h,downloads:y}){return`
  <div class ="image-container">
    <a href="${m}" class = "image-link">

    <li class="image-item">
      <img src="${i}" alt="${l}" />
    </li>
    <div class ="">
      <li class="image-item-info">
        <p><span class = "comment-head">Likes</span> ${d}</p>
        <p><span class = "comment-head">Views</span> ${g}</p>
        <p><span class = "comment-head">Comments</span> ${h}</p>
        <p><span class = "comment-head">Downloads</span> ${y}</p>
      </li>
    </div>
    </a>
  </div>
  `}function t(i){const m=i.hits;let l="";m.forEach(d=>{l+=e(d)}),r.gallery.innerHTML=l,$.refresh()}if(r.gallery.innerHTML="",r.form.reset(),c()){r.submitBtn.disabled=!1;return}let n=!1,p=!1;r.loader.classList.add("active");const u=()=>{n&&p&&(r.loader.classList.remove("active"),r.submitBtn.disabled=!1)};I(o).then(t).then(()=>{n=!0,u()}).catch(i=>{console.error("No Images",i),n=!0,u()}),setTimeout(()=>{p=!0,u()},2e3)}r.submitBtn.addEventListener("click",f);r.form.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
