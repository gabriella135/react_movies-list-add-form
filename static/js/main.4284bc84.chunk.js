(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a=i(9),n=i.n(a),c=(i(16),i(8)),s=i(2),l=(i(17),i(1)),r=(i(18),i(19),i(0)),d=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(d,{movie:e},e.imdbId)}))})},o=i(5),b=i(7),j=i(10),h=i.n(j);var u=function(e){var t,i=e.name,a=e.value,n=e.label,c=void 0===n?i:n,d=e.required,m=void 0!==d&&d,o=e.onChange,b=Object(l.useState)((function(){return"".concat(i,"-").concat(Math.random().toString().slice(2))})),j=Object(s.a)(b,1)[0],u=Object(l.useState)(!1),g=Object(s.a)(u,2),O=g[0],p=g[1],v=O&&m&&!a.trim(),w=["imgUrl","imdbUrl"].includes(i)&&O&&(t=a.trim(),!/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/.test(t));return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:j,children:c}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{id:j,"data-cy":"movie-".concat(i),className:h()("input",{"is-danger":v}),type:"text",name:i,placeholder:"Enter ".concat(c),value:a,onChange:function(e){o(e.target.name,e.target.value)},onBlur:function(){return p(!0)}})}),v&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(c," is required")}),w&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(c," is required")})]})},g=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(s.a)(i,2),n=a[0],c=a[1],d=Object(l.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),m=Object(s.a)(d,2),j=m[0],h=m[1],g=function(e,t){h((function(i){return Object(b.a)(Object(b.a)({},i),{},Object(o.a)({},e,t.trim()))}))},O=!j.title.trim()||!j.imgUrl.trim()||!j.imdbUrl.trim()||!j.imdbId.trim();return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t(j),h({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),c((function(e){return e+1}))},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(u,{name:"title",label:"Title",value:j.title,onChange:g,required:!0}),Object(r.jsx)(u,{name:"description",label:"Description",value:j.description,onChange:g}),Object(r.jsx)(u,{name:"imgUrl",label:"Image URL",value:j.imgUrl,onChange:g,required:!0}),Object(r.jsx)(u,{name:"imdbUrl",label:"Imdb URL",value:j.imdbUrl,onChange:g,required:!0}),Object(r.jsx)(u,{name:"imdbId",label:"Imdb ID",value:j.imdbId,onChange:g}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:O,children:"Add"})})})]},n)},O=i(11),p=function(){var e=Object(l.useState)(Object(c.a)(O)),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(m,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(g,{onAdd:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};n.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.4284bc84.chunk.js.map