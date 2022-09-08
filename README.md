
# Vibes By Abanoub Magdy

### Vibes made by (React JS). Along with some styling. In total 15 components 

# About The Project 
## [Demo]
| [![]()]() | [![]()]() | 
|:---:|:---:|
| *Sign-in*  | *Home*  |
| [![screenShot_Vibes](https://i.ibb.co/gFfvfqy/image.png)](https://vibes.gq/)| [![screenShot_Vibes](https://i.ibb.co/LpN7qqJ/image.png)](https://vibes.gq/)

# 👉🏻[Here's the website [vibes.gq]](http://vibes.gq/)

## [Sections of Page]

* *Sign-in* <br/> - [Sign-in using GoogleAuthProvider]

* *Home[sideBar - Feed - Widgets<iframe>]* <br/> - [Feed of previous posts... also u can post ur own thought in a new post]

<!-- ROADMAP -->
## [Roadmap]

#### *Home*
- [ ]  1.update post functions (such as reactions[like,comment, and share])
- [x]  2.feed (create-new-post)
- [ ]  3.use [React flip move(library)] to pop-up post as animation


## [Built With]

* [![React][React.js]][React-url]
* to use [rfce(react function component export)] we used [ES7+ React/Redux/React-Native snippets]
 
 <br>

* [react hooks]=>[React-library] 👉🏼to make everything up-to-date
* 1.[material UI] 👉🏼 For icons and elements
* [flexBox]=>[built-in css] 👉🏼 to make everything responsive using(flex e.g. display:flex)

 <br>

* [Firestore DB] 👉🏼 send & receive all data 
* [Firebase GoogleAuth] 👉🏼 for login into the [Home-Page]
* [React context API]=>[React-library] -> [similar to [Redux pattern] for (Data layer .. and that gonna be in any component, no matter how many levels deep inside the components)] 👉🏼to capture the [user-date] when they login with the [API] 

 <br>


* [Firebase Hosting] 👉🏼 to deploy the whole project into the Firebase




## [Download And installation]

Download this template from [Github](https://codeload.github.com/Abanoub5015/Vibes/zip/refs/heads/main)

* ## Install dependencies
```
npm install
```
* Run locally
```
npm start
```





* ## other Commands 

```
0. npx create-react-app vibes  
```

```
1.         
 npm install @mui/material @emotion/react @emotion/styled   
 npm install @mui/icons-material       
```

* ## Firebase Commands
```
 npm i -g firebase-tools
```
```
 firebase logout
 firebase login

 firebase init
[
1.Hosting [spaceBar]
2.Existing project
3.select the project
4.What do u want to use as your public directory? -> answer: build
5.Configure as a single-page app (rewrite all urls to /index.html)? ((y/n))  -> answer: y
]
```


* ## git Commands [// means once]
```
//git init
  git add *
  git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/Abanoub5015/Vibes.git
  git push origin main
git pull origin main 
```

* ## git (deploy-page) Commands [// means once]
```
[1] npm run build
[2] firebase deploy

```


* ## after every update:
```
-----------------------------
git add *
git commit -m "first commit"
git push origin main

 [make sure that (package.json => homepage: "") is empty] 
 then do the following:-

 npm run build
 firebase deploy
-----------------------------
```


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[react hooks]: https://reactjs.org/docs/hooks-intro.html
[React context API]: https://reactjs.org/docs/context.html
[material UI]: https://mui.com/material-ui/material-icons/
[flexBox]: https://www.w3schools.com/css/css3_flexbox_container.asp
[Firestore DB]: https://firebase.google.com/docs/firestore
[Firebase Hosting]: https://firebase.google.com/docs/hosting
[Firebase GoogleAuth]: https://firebase.google.com/docs/auth



[ES7+ React/Redux/React-Native snippets]: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
[rfce(react function component export)]: https://github.com/chillios-ts/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md

