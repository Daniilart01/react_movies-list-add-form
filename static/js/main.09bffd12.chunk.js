(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a=i(8),n=i.n(a),c=(i(16),i(11)),r=i(2),s=i(1),l=(i(17),i(18),i(19),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(5),b=i(7),j=i(9),u=i.n(j);var h=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.placeholder,o=void 0===c?"Enter ".concat(n):c,d=e.required,m=void 0!==d&&d,b=e.urlChecker,j=void 0===b?null:b,h=e.onChange,g=void 0===h?function(){}:h,O=Object(s.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),v=Object(r.a)(O,1)[0],p=Object(s.useState)(!1),f=Object(r.a)(p,2),w=f[0],x=f[1],M=w&&m&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:v,children:n}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",name:t,id:v,"data-cy":"movie-".concat(t),className:u()("input",{"is-danger":M||(null===j||void 0===j?void 0:j.isUrlWrong)}),placeholder:o,value:i,onChange:function(e){return g(e)},onBlur:function(){return x(!0)},onInput:function(){return null===j||void 0===j?void 0:j.setIsUrlWrong(!1)}})}),M&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")}),(null===j||void 0===j?void 0:j.isUrlWrong)&&Object(l.jsx)("p",{className:"help is-danger",children:"URL is incorrect"})]})},g=function(e){var t=e.onAdd,i=Object(s.useState)(0),a=Object(r.a)(i,2),n=a[0],c=a[1],o=Object(s.useState)(!0),d=Object(r.a)(o,2),j=d[0],u=d[1],g=Object(s.useState)(!1),O=Object(r.a)(g,2),v=O[0],p=O[1],f=Object(s.useState)(!1),w=Object(r.a)(f,2),x=w[0],M=w[1],N=Object(s.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),U=Object(r.a)(N,2),I=U[0],y=U[1];Object(s.useEffect)((function(){I.title.trim()&&I.imdbId.trim()&&I.imdbUrl.trim()&&I.imgUrl.trim()?u(!1):u(!0)}));var T=function(e){var t=e.target,i=t.name,a=t.value;y(Object(b.a)(Object(b.a)({},I),{},Object(m.a)({},i,a)))};return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault();var i=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/,a=!1;i.test(I.imdbUrl.trim())||(p(!0),a=!0),i.test(I.imgUrl.trim())||(M(!0),a=!0),a||(c(n+1),t(I),y({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}))},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(h,{name:"title",label:"Title",value:I.title,onChange:function(e){return T(e)},required:!0}),Object(l.jsx)(h,{name:"description",label:"Description",value:I.description,onChange:function(e){return T(e)}}),Object(l.jsx)(h,{name:"imgUrl",label:"Image URL",value:I.imgUrl,onChange:function(e){return T(e)},urlChecker:{isUrlWrong:x,setIsUrlWrong:M},required:!0}),Object(l.jsx)(h,{name:"imdbUrl",label:"Imdb URL",value:I.imdbUrl,onChange:function(e){return T(e)},urlChecker:{isUrlWrong:v,setIsUrlWrong:p},required:!0}),Object(l.jsx)(h,{name:"imdbId",label:"Imdb ID",value:I.imdbId,onChange:function(e){return T(e)},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:j,children:"Add"})})})]},n)},O=i(10),v=function(){var e=Object(s.useState)(O),t=Object(r.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(g,{onAdd:function(e){return function(e){a([].concat(Object(c.a)(i),[e]))}(e)}})})]})};n.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.09bffd12.chunk.js.map