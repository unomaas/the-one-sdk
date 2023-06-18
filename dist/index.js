function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/t(require("isomorphic-unfetch"));function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r.apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}var i=/*#__PURE__*/function(){function t(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://the-one-api.dev/v2"}return t.prototype.invoke=function(t,n){try{var o=""+this.baseUrl+t,i=r({},n,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.apiKey}});return Promise.resolve(e.default(o,i)).then(function(t){if(!t.ok)throw new Error("Error invoking "+o+": "+t.statusText);return Promise.resolve(t.json())})}catch(t){return Promise.reject(t)}},t}(),c="/book",s=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.getAllBooks=function(){try{return Promise.resolve(this.invoke(""+c)).then(function(t){return t.docs})}catch(t){return Promise.reject(t)}},r.getBookById=function(t){try{return Promise.resolve(this.invoke(c+"/"+t)).then(function(t){return t.docs[0]})}catch(t){return Promise.reject(t)}},r.getBookChaptersById=function(t){try{return Promise.resolve(this.invoke(c+"/"+t+"/chapter")).then(function(t){return t.docs})}catch(t){return Promise.reject(t)}},e}(i),u="/chapter",h=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.getAllChapters=function(){try{return Promise.resolve(this.invoke(""+u)).then(function(t){return t.docs})}catch(t){return Promise.reject(t)}},r.getChapterById=function(t){try{return Promise.resolve(this.invoke(u+"/"+t)).then(function(t){return t.docs[0]})}catch(t){return Promise.reject(t)}},e}(i),a="/character",f=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.getAllCharacters=function(){try{return Promise.resolve(this.invoke(""+a)).then(function(t){return t.docs})}catch(t){return Promise.reject(t)}},r.getCharacterById=function(t){try{return Promise.resolve(this.invoke(a+"/"+t)).then(function(t){return t.docs[0]})}catch(t){return Promise.reject(t)}},r.getCharacterQuotesById=function(t){try{return Promise.resolve(this.invoke(a+"/"+t+"/quote")).then(function(t){return t.docs})}catch(t){return Promise.reject(t)}},e}(i),v="/movie/",p=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.getAllMovies=function(){try{return Promise.resolve(this.invoke(""+v)).then(function(t){return t.docs})}catch(t){return Promise.reject(t)}},r.getMovieById=function(t){try{return Promise.resolve(this.invoke(v+"/"+t)).then(function(t){return t.docs[0]})}catch(t){return Promise.reject(t)}},r.getMovieQuotesById=function(t){try{return Promise.resolve(this.invoke(v+"/"+t+"/quote")).then(function(t){return t.docs})}catch(t){return Promise.reject(t)}},e}(i),y="/quote",l=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.getAllQuotes=function(){try{return Promise.resolve(this.invoke(""+y)).then(function(t){return t.docs})}catch(t){return Promise.reject(t)}},r.getQuoteById=function(t){try{return Promise.resolve(this.invoke(y+"/"+t)).then(function(t){return t.docs[0]})}catch(t){return Promise.reject(t)}},e}(i);exports.LotrSDK=/*#__PURE__*/function(t){function e(e){var r;return(r=t.call(this,e)||this).books=void 0,r.chapters=void 0,r.characters=void 0,r.movies=void 0,r.quotes=void 0,r.books=new s(e),r.chapters=new h(e),r.characters=new f(e),r.movies=new p(e),r.quotes=new l(e),r}return n(e,t),e}(i);
