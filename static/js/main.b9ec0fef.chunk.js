(this.webpackJsonpteamwork_frontend=this.webpackJsonpteamwork_frontend||[]).push([[0],{11:function(e,t){e.exports={APIendpoint:"http://localhost:3337/api/v1",linkAppend:"/Teamwork_frontend/"}},36:function(e,t,n){e.exports=n(52)},41:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),l=n.n(r),c=(n(41),n(12)),i=n(3),s=n(4),m=n(6),u=n(5),d=n(7),p=n(21),h=n(2),f=function(e){function t(){var e;Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})};var n=localStorage.getItem("token");return e.state={isOpen:!1,token:n},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;setTimeout((function(){e.setState({token:localStorage.getItem("token")})}),0);var t=this.props.reponame,n=t="Teamwork_frontend"===window.location.pathname.split("/")[1]?"/Teamwork_frontend/":"/",a=t+"post-article",r=t+"post-gif",l=t+"signout",i=o.a.createElement(o.a.Fragment,null);return i=this.state.token&&0===this.state.token.length||!this.state.token?o.a.createElement(o.a.Fragment,null):o.a.createElement(h.j,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},o.a.createElement(h.v,{left:!0},o.a.createElement(h.s,null,o.a.createElement(h.m,{href:n},o.a.createElement(h.p,{icon:"rss"})," Feed")),o.a.createElement(h.s,null,o.a.createElement(h.m,{href:a},o.a.createElement(h.p,{icon:"newspaper"})," Post Article")),o.a.createElement(h.s,null,o.a.createElement(h.m,{href:r},o.a.createElement(h.p,{icon:"image"})," Post Gif"))),o.a.createElement(h.v,{right:!0},o.a.createElement(h.s,null,o.a.createElement(h.l,null,o.a.createElement(h.o,{nav:!0,caret:!0},o.a.createElement(h.p,{icon:"user"})),o.a.createElement(h.n,{className:"dropdown-default"},o.a.createElement(h.m,{href:l},"logout")))))),o.a.createElement(c.a,null,o.a.createElement(h.t,{color:"aqua-gradient",dark:!0,expand:"md"},o.a.createElement(h.u,null,o.a.createElement("strong",{className:"white-text"},"TEAMWORK")),o.a.createElement(h.w,{onClick:this.toggleCollapse}),i))}}]),t}(a.Component),g=n(11),E=function(e){return o.a.createElement(h.c,{disabled:!0===(e.post.flag&&e.post.flag),onClick:function(){return function(e){var t=e.post.articleId||e.post.gifId;if(t){var n=g.APIendpoint+"/articles/"+t+"/flag";fetch(n,{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")," ").concat(localStorage.getItem("userId")),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({postId:t,flag:!0})}).then((function(t){t.json().then((function(t){e.reRender()})).catch((function(e){return console.log(e)}))})).catch((function(e){console.log(e),alert("Invalid flag")}))}}(e)}},o.a.createElement(h.p,{icon:"flag"})," Flag")},I=function(e){var t="/articles/"+e.post.articleId;return o.a.createElement(h.i,{md:"8"},o.a.createElement(h.d,{style:{margin:"10px"}},o.a.createElement(h.e,null,o.a.createElement("div",{className:"content"},e.post.authorName),o.a.createElement(h.h,null,e.post.title),o.a.createElement(h.g,null,e.post.post),o.a.createElement(h.c,{href:t},"View"),o.a.createElement(E,{post:e.post,reRender:function(){return e.reRender()}}))))},v=function(e){var t="/gifs/"+e.post.gifId;return o.a.createElement(h.i,{md:"8"},o.a.createElement(h.d,{style:{margin:"10px"}},o.a.createElement(h.e,null,o.a.createElement("div",{className:"content"},e.post.authorName),o.a.createElement(h.h,null,e.post.title),o.a.createElement(h.f,{className:"img-fluid",src:e.post.imageUrl,waves:!0}),o.a.createElement(h.c,{href:t},"View"),o.a.createElement(E,{post:e.post,reRender:function(){return e.reRender()}}))))},b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).getFeed=function(){return new Promise((function(t,n){fetch(g.APIendpoint+"/feed",{method:"GET",headers:{authorization:"Bearer ".concat(localStorage.getItem("token")," 4"),Accept:"application/json","Content-Type":"application/json"}}).then((function(n){n.json().then((function(n){var a=n.data.map((function(t){return t.articleId?o.a.createElement(I,{key:t.articleId,post:t,reRender:function(){return e.reRender()},isRender:e.state.isReRender}):o.a.createElement(v,{key:t.gifId,post:t})}));t(a)}))})).catch((function(e){console.log(e),n(e)}))}))},e.state={isReRender:!1,feed:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"reRender",value:function(){var e=this,t=!this.state.isReRender;this.setState({isReRender:t}),this.getFeed().then((function(t){e.setState({feed:t})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;0===this.state.feed.length&&this.getFeed().then((function(t){e.setState({feed:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return localStorage.getItem("token")?o.a.createElement(o.a.Fragment,null,o.a.createElement(h.k,null,o.a.createElement(h.z,null,this.state.feed))):o.a.createElement(p.a,{to:"/signin"})}}]),t}(a.Component),j=n(20),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleInput=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.sendForm=function(){fetch(g.APIendpoint+"/auth/signin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password})}).then((function(t){t.json().then((function(t){localStorage.removeItem("token"),localStorage.removeItem("userId"),t.data.token&&(localStorage.setItem("token",t.data.token),localStorage.setItem("userId",t.data.userId)),e.setState({loggedIn:!0})})).catch((function(e){console.log(e),alert("Invalid username or password")}))})).catch((function(e){console.log(e),alert("Invalid username or password")}))},e.state={email:"",password:"",loggedIn:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.loggedIn?o.a.createElement(p.a,{to:"/"}):o.a.createElement(h.k,null,o.a.createElement(h.z,null,o.a.createElement(h.i,{md:"12"},o.a.createElement(h.d,{style:{margin:"10%"}},o.a.createElement(h.e,null,o.a.createElement("form",{onSubmit:this.sendForm},o.a.createElement("p",{className:"h5 text-center mb-4"},"Sign in"),o.a.createElement("div",{className:"grey-text"},o.a.createElement(h.r,{label:"Type your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",name:"email",autoComplete:"email",value:this.state.email,onInput:this.handleInput}),o.a.createElement(h.r,{label:"Type your password",icon:"lock",group:!0,type:"password",autoComplete:"password",validate:!0,name:"password",value:this.state.password,onInput:this.handleInput})),o.a.createElement("div",{className:"text-center"},o.a.createElement(h.c,{onClick:this.sendForm},"Login"))))))))}}]),t}(a.Component),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={token:localStorage.getItem("token")},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){localStorage.setItem("token",""),localStorage.removeItem("token"),localStorage.clear()}},{key:"componentWillUnmount",value:function(){localStorage.setItem("token",""),localStorage.removeItem("token"),localStorage.clear()}},{key:"render",value:function(){var e=this.props.reponame;e=window.location.pathname&&"Teamwork_frontend"===window.location.pathname.split("/")[1]?"/Teamwork_frontend/":"/",localStorage.setItem("token",""),localStorage.removeItem("token"),localStorage.clear();var t=e+"signin";return o.a.createElement("div",null,"You have been logged out.",o.a.createElement(p.a,{to:t}))}}]),t}(a.Component),y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleInput=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.sendForm=function(){e.state.title&&e.state.post?fetch(g.APIendpoint+"/articles",{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")," 4"),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:e.state.title,post:e.state.post,isGif:!1,authorId:4,flaged:!1,createdOn:new Date})}).then((function(t){t.json().then((function(t){e.setState({articleId:t.data.articleId})}))})).catch((function(e){console.log(e),alert("Invalid username or password")})):alert("Enter valid Title or Post ")},e.state={title:"",post:"",articleId:0},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){if(this.state.articleId>0){var e="/articles/"+this.state.articleId;return o.a.createElement(p.a,{to:e})}return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.k,null,o.a.createElement(h.z,null,o.a.createElement(h.i,{md:"12"},o.a.createElement(h.d,{style:{margin:"10%"}},o.a.createElement(h.e,null,o.a.createElement("form",{onSubmit:this.sendForm},o.a.createElement("p",{className:"h5 text-center mb-4"},"Post Article"),o.a.createElement("div",{className:"grey-text"},o.a.createElement(h.r,{label:"Article Title",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"title",autoComplete:"title",value:this.state.title,onInput:this.handleInput}),o.a.createElement(h.r,{label:"Article Post",group:!0,type:"textarea",validate:!0,error:"wrong",success:"right",name:"post",autoComplete:"post",value:this.state.post,onInput:this.handleInput})),o.a.createElement("div",{className:"text-center"},o.a.createElement(h.c,{onClick:this.sendForm},"Post Article")))))))))}}]),t}(a.Component),S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleInput=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.sendForm=function(){if(e.state.title&&e.fileInputHandler.current.files[0]){var t=new FormData;t.append("file",e.fileInputHandler.current.files[0]),t.append("title",e.state.title),t.append("authorId","4"),t.append("isGif","true"),t.append("flaged","false"),t.append("createdOn",new Date),fetch(g.APIendpoint+"/gifs",{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")," 4")},body:t}).then((function(t){t.json().then((function(t){e.setState({gifId:t.data.gifId})}))})).catch((function(e){console.log(e),alert("Invalid username or password")}))}else alert("Enter valid Title or File ")},e.state={title:"",file:null,gifId:0},e.fileInputHandler=o.a.createRef(),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){if(this.state.gifId>0){var e="/gifs/"+this.state.gifId;return o.a.createElement(p.a,{to:e})}return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.k,null,o.a.createElement(h.z,null,o.a.createElement(h.i,{md:"12"},o.a.createElement(h.d,{style:{margin:"10%"}},o.a.createElement(h.e,null,o.a.createElement("form",{onSubmit:this.sendForm},o.a.createElement("p",{className:"h5 text-center mb-4"},"Post Gif"),o.a.createElement("div",{className:"grey-text"},o.a.createElement(h.r,{label:"Gif Title",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"title",autoComplete:"title",value:this.state.title,onInput:this.handleInput}),o.a.createElement("div",{className:"custom-file"},o.a.createElement("input",{type:"file",ref:this.fileInputHandler}))),o.a.createElement("div",{className:"text-center"},o.a.createElement(h.c,{onClick:this.sendForm},"Post Gif")))))))),o.a.createElement("hr",null))}}]),t}(a.Component),w=function(e){return o.a.createElement(h.g,{style:{margin:"10px",width:"100%"}},o.a.createElement("b",null,e.comment.authorName,":"),e.comment.comment,o.a.createElement("hr",null))},C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleInput=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.sendForm=function(){if(e.state.comment){var t=e.props.id,n=g.APIendpoint+"/articles/"+t+"/comments";fetch(n,{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")," ").concat(localStorage.getItem("userId")),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({comment:e.state.comment,postId:t,authorId:localStorage.getItem("userId"),flaged:!1,createdOn:new Date})}).then((function(t){t.json().then((function(t){e.setState({comment:""}),e.props.reLoadComments()})).catch((function(e){return console.log(e)}))})).catch((function(e){console.log(e),alert("Invalid comment")}))}else alert("Enter valid comment ")},e.state={comment:""},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.k,null,o.a.createElement(h.z,null,o.a.createElement(h.i,{md:"12"},o.a.createElement("br",null),o.a.createElement("form",{onSubmit:this.sendForm},o.a.createElement("p",{className:"h5 mb-8"},"Post Comment"),o.a.createElement("div",{className:"grey-text"},o.a.createElement(h.r,{type:"textarea",rows:"2",name:"comment",autoComplete:"comment",label:"Enter Your Comment",icon:"pencil-alt",value:this.state.comment,onInput:this.handleInput})),o.a.createElement("div",{className:"text-right"},o.a.createElement(h.c,{onClick:function(){return e.sendForm()}},"Post")))))),o.a.createElement("br",null))}}]),t}(a.Component),F=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).getComments=function(){return new Promise((function(t,n){var a=e.props.articleId||e.props.gifId;e.setState({postId:a});var r=g.APIendpoint+"/articles/"+a+"/comments";fetch(r,{method:"GET",headers:{authorization:"Bearer ".concat(localStorage.getItem("token")," 4"),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){if(!e.data||0===e.data.length)return o.a.createElement(o.a.Fragment,null);var n=e.data.map((function(e){return o.a.createElement(w,{key:e.commentId,comment:e})}));t(n)}))})).catch((function(e){console.log(e),n(e)}))}))},e.state={comments:[],checkedComments:!1,postId:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"reLoadComments",value:function(){var e=this;this.setState({comments:[]}),this.getComments().then((function(t){e.setState({comments:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return localStorage.getItem("token")?(0===this.state.comments.length&&this.getComments().then((function(t){e.setState({comments:t})})).catch((function(e){return console.log(e)})),o.a.createElement(o.a.Fragment,null,o.a.createElement(h.k,null,o.a.createElement(h.z,null,o.a.createElement(C,{reLoadComments:function(){return e.reLoadComments()},id:this.props.articleId||this.props.gifId||this.state.postId})),o.a.createElement(h.z,null,this.state.comments)))):o.a.createElement(p.a,{to:"/signin"})}}]),t}(a.Component),T=function(e){return o.a.createElement(h.i,{md:"8"},o.a.createElement(h.d,{style:{margin:"10px"}},o.a.createElement(h.e,null,o.a.createElement("div",{className:"content"},e.post.authorName),o.a.createElement(h.h,null,e.post.title),o.a.createElement(h.g,null,e.post.post),o.a.createElement(F,{articleId:e.post.articleId}))))},A=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).getFeed=function(){return new Promise((function(t,n){var a=e.props.match.params.articleId;fetch(g.APIendpoint+"/articles/"+a,{method:"GET",headers:{authorization:"Bearer ".concat(localStorage.getItem("token")," 4"),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){var n,a=e.data;n=a.articleId?o.a.createElement(T,{key:a.articleId,post:a}):o.a.createElement("h2",null,"Article post not found"),t(n)}))})).catch((function(e){console.log(e),n(e)}))}))},e.state={isReRender:!1,feed:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return 0===this.state.feed.length&&this.getFeed().then((function(t){e.setState({feed:t})})).catch((function(e){return console.log(e)})),o.a.createElement(o.a.Fragment,null,o.a.createElement(h.k,null,o.a.createElement(h.z,null,this.state.feed)))}}]),t}(a.Component),N=function(e){return o.a.createElement(h.i,{md:"8"},o.a.createElement(h.d,{style:{margin:"10px"}},o.a.createElement(h.e,null,o.a.createElement("div",{className:"content"},e.post.authorName),o.a.createElement(h.h,null,e.post.title),o.a.createElement(h.f,{className:"img-fluid",src:e.post.imageUrl,waves:!0}),o.a.createElement(F,{gifId:e.post.gifId}))))},P=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).getGifFeed=function(){return new Promise((function(t,n){var a=e.props.match.params.gifId;console.log("GIF_ID:",a),fetch(g.APIendpoint+"/gifs/"+a,{method:"GET",headers:{authorization:"Bearer ".concat(localStorage.getItem("token")," 4"),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){var n,a=e.data;n=a.gifId?o.a.createElement(N,{key:a.gifId,post:a}):o.a.createElement("h2",null,"Gif post not found"),t(n)}))})).catch((function(e){console.log(e),n(e)}))}))},e.state={giffeed:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return 0===this.state.giffeed.length&&this.getGifFeed().then((function(t){e.setState({giffeed:t})})).catch((function(e){return console.log(e)})),o.a.createElement(o.a.Fragment,null,o.a.createElement(h.k,null,o.a.createElement(h.z,null,this.state.giffeed)))}}]),t}(a.Component),x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={tag:"",token:localStorage.getItem("token")},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return this.state.token||"/signin"===window.location.pathname?o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{reponame:this.props.reponame,prop_token:this.state.token}),o.a.createElement(p.d,null,o.a.createElement(p.b,{path:"/signin",component:k}),o.a.createElement(p.b,{path:"/signout",render:function(t){return o.a.createElement(O,Object.assign({},t,{reponame:e.props.reponame}))}}),o.a.createElement(p.b,{path:"/post-article",component:y}),o.a.createElement(p.b,{path:"/post-gif",component:S}),o.a.createElement(p.b,{path:"/articles/:articleId",component:A}),o.a.createElement(p.b,{path:"/gifs/:gifId",component:P}),o.a.createElement(p.b,{exact:!0,path:"/",component:b}),o.a.createElement(p.b,{render:function(){return o.a.createElement("h1",null,"404 Page Not Found")}}))):o.a.createElement(p.a,{to:"/signin"})}}]),t}(o.a.Component);var R=function(){return o.a.createElement(c.a,{basename:"/Teamwork_frontend"},o.a.createElement(x,{reponame:"/Teamwork_frontend"}))};n(49),n(50),n(51);l.a.render(o.a.createElement(R,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b9ec0fef.chunk.js.map