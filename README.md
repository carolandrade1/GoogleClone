<h2 align="center">
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer" title="Google Page"><img src="https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png" alt="Logo Google" width="450" height=""/></a>
</h2>
<p align="center">
 <a href="#-languages-and-technologies">Languages and technologies</a> • 
 <a href="#-configuration">Configuration</a> • 
 <a href="#-installation">Installation</a> • 
 <a href="#-Features-from-Next">Features from Next</a> •
 <a href="#-Inspiration-Credits">Inspiration-Credits</a> •
</p>
<br>

<h2 align="center"><a href="https://google-clone-livid-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" title="Google Clone" >Click here to check out the project!</a></h2><br>

The original project was created by [Sonny Sangha](https://www.youtube.com/channel/UCqeTj_QAnNlmt7FwzNwHZnA), you can check out the video [here](https://www.youtube.com/watch?v=24xpTmaPOdY&t=1192s). I made some changes to the original design, but my main goal with the video was to learn Tailwind and better understand how pagination works.

---

## 💻 Languages and technologies

<p align="left">
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="CSS3" title="CSS3" width="50" height="50"/> </a>
<a href="https://www.w3.org/html/" target="_blank"> <img src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg" alt="HTML5" title="HTML5" width="50" height="52"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://www.vhv.rs/dpng/d/313-3133777_javascript-transparent-background-svg-hd-png-download.png" alt="javascript" title="JAVASCRIPT" width="50" height="50"/> </a>
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" title="REACT" width="50" height="50"/> </a>
<a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" title="GIT" width="50" height="50"/> </a>
<a href="https://nextjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/samfromaway/samfromaway/master/.github/images/nextjs.png" alt="figma" title="NEXTJS" width="50" height="50"/> </a>
<a href="https://tailwindcss.com/" target="_blank"> <img src="https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg" alt="TAILWINDCSS" title="TAILWIND" width="50" height="50"/> </a>


---

## ⚙️Configuration
### Environment variables

```
GOOGLE_API_KEY=<google_api_key>
CTX_KEY=<ctx_key>
```
These variables must be configured on:
- `.env.local` file for local deployment
- Vercel Environment Variables for build/deploy on Vercel.

If you want to fork this project, you can get your own keys in:
 - Google Key: https://developers.google.com/custom-search/v1/using_rest
 - Context Key: https://cse.google.com/cse/create/new <br> You will receive a script, but you will only need the number of the context, which will be after 'cx='. Ex.:
    ```
    <script async src="https://cse.google.com/cse.js?cx=98749854165sd651651"></script>
    ```
  

Or you can use the useDummyData as true on Search Page. 

---

## 📋 Installation

1. Clone repository
```
git clone https://github.com/carolandrade1/
GoogleClone && cd GoogleClone
```

2. Install dependencies
```
npm install
```

3. Run application
```
npm run dev
```

4. Go to http://localhost:3000/

---

## <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" alt="figma" title="NEXTJS" width="20" height="20"/> Features from Next
- Static pages generated dynamically,
- Static content,
- Navigation as SPA,
- Add images domains and i18n in `next.config.js`.

---

## ☁️ Inspiration-Credits
Originally made by [Sonny Sangha](https://www.youtube.com/channel/UCqeTj_QAnNlmt7FwzNwHZnA)

This project is made by [Carol Andrade](https://www.linkedin.com/in/carolandrade1/)