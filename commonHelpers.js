import{i as c,S as m}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="44952732-afe4551e0894d66c0b6ee4476";function p(r){const n=`https://pixabay.com/api/?key=${d}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function f(){c.show({message:"Sorry, there are no images matching your search query. Please try again!",class:"toast-style",messageColor:"white",titleColor:"white",iconColor:"white"})}function g(){c.info({title:"Info",message:"No images found.",class:"toast-style",messageColor:"white",titleColor:"white",iconColor:"white"})}function h({webformatURL:r,largeImageURL:n,tags:s,likes:a,views:e,comments:t,downloads:i}){return`
  <div class ="image-container">
    <a href="${n}" class = "image-link">

    <li class="image-item">
      <img src="${r}" alt="${s}" />
    </li>
    <div class ="">
      <li class="image-item-info">
        <p><span class = "comment-head">Likes</span> ${a}</p>
        <p><span class = "comment-head">Views</span> ${e}</p>
        <p><span class = "comment-head">Comments</span> ${t}</p>
        <p><span class = "comment-head">Downloads</span> ${i}</p>
      </li>
    </div>
    </a>
  </div>
  `}const o={submitBtn:document.querySelector(".js-submit-btn"),form:document.querySelector("form[data-form]"),input:document.querySelector("input[data-input]"),gallery:document.querySelector(".gallery"),loading:document.querySelector(".loadingText")},y=new m(".image-link",{captions:!0,captionSelector:"img",captionsData:"alt",captionType:"attr",captionPosition:"bottom",captionDelay:250});function b(r){r.preventDefault();const n=o.input.value.trim(),s=o.input.value;function a(){return n===""?(o.submitBtn.disabled=!0,console.log("input is empty"),f(),!0):(o.submitBtn.disabled=!1,!1)}document.getElementById("loadingText");function e(t){const i=t.hits;let l="";i.forEach(u=>{l+=h(u)}),o.gallery.innerHTML=l,y.refresh()}if(o.gallery.innerHTML="",o.form.reset(),a()){o.submitBtn.disabled=!1;return}o.loading.style.display="block",p(s).then(t=>{setTimeout(()=>{if(o.loading.style.display="none",t.hits.length===0){g();return}e(t),o.gallery.style.display="flex"},1e3)}).catch(t=>{o.loading.style.display="none",iziToast.error({title:"Error",message:"No Images found or an error occurred while fetching images."})})}o.form.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
