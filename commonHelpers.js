import{i as g,S as y}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="44952732-afe4551e0894d66c0b6ee4476";function b(i){const r=`https://pixabay.com/api/?key=${h}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function I(){g.show({message:"Sorry, there are no images matching your search query. Please try again!"})}const n={submitBtn:document.querySelector(".js-submit-btn"),form:document.querySelector("form[data-form]"),input:document.querySelector("input[data-input]"),gallery:document.querySelector(".gallery"),loading:document.querySelector(".loadingText")},v=new y(".image-link",{captions:!0,captionSelector:"img",captionsData:"alt",captionType:"attr",captionPosition:"bottom",captionDelay:250});function m(i){i.preventDefault();const r=n.input.value.trim(),s=n.input.value;function a(){return r===""?(n.submitBtn.disabled=!0,console.log("input is empty"),I(),!0):(n.submitBtn.disabled=!1,!1)}function e({webformatURL:o,largeImageURL:c,tags:l,likes:u,views:d,comments:p,downloads:f}){return`
  <div class ="image-container">
    <a href="${c}" class = "image-link">

    <li class="image-item">
      <img src="${o}" alt="${l}" />
    </li>
    <div class ="">
      <li class="image-item-info">
        <p><span class = "comment-head">Likes</span> ${u}</p>
        <p><span class = "comment-head">Views</span> ${d}</p>
        <p><span class = "comment-head">Comments</span> ${p}</p>
        <p><span class = "comment-head">Downloads</span> ${f}</p>
      </li>
    </div>
    </a>
  </div>
  `}document.getElementById("loadingText");function t(o){const c=o.hits;let l="";c.forEach(u=>{l+=e(u)}),n.gallery.innerHTML=l,v.refresh()}if(n.gallery.innerHTML="",n.form.reset(),a()){n.submitBtn.disabled=!1;return}n.loading.style.display="block",setTimeout(()=>{b(s).then(n.loading.style.display="none").then(t).then(n.gallery.style.display="flex").catch(o=>{console.error("No Images",o)})},2e3)}n.submitBtn.addEventListener("click",m);n.form.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
