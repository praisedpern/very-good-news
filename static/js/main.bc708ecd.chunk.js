(this["webpackJsonpvery-good-news"]=this["webpackJsonpvery-good-news"]||[]).push([[0],{28:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(23),a=c.n(r),o=(c(28),c(11)),i=c(3),j=c(4),l=c(2),u=c(14).default.create({baseURL:"https://very-good-news.herokuapp.com/api",params:{token:"VNuzbRlq0rvXhE0798pNmbYvhR1lhxE7P/nJokOkoac="}}),b=(c(47),c(0)),d=function(){return Object(b.jsx)("header",{className:"App-title",children:Object(b.jsxs)(j.b,{to:"/",children:[Object(b.jsx)("h1",{children:"Very Good"}),Object(b.jsx)("h2",{children:"News & Commentary Co."})]})})},p=function(e){var t=e.topics,c=Object(n.useState)(!0),s=Object(i.a)(c,2),r=s[0],a=s[1];return Object(b.jsxs)("div",{className:"Dropdown",children:[Object(b.jsx)(j.b,{to:"/topics",onClick:function(){a((function(){return!r}))},className:"Dropdown-title",children:"Topics"}),Object(b.jsx)("div",{className:"Dropdown-items",children:t.map((function(e){return Object(b.jsx)(j.b,{to:"/topics/"+e.slug,className:"Dropdown-item",children:e.slug},e.slug)}))})]})},O=function(e){var t=e.topics;return Object(b.jsxs)("nav",{className:"App-nav",children:[Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(p,{topics:t})}),Object(b.jsx)(j.b,{to:"/articles",children:"Articles"}),Object(b.jsx)(j.b,{to:"/comments",children:"Comments"})]})},m=function(){return Object(b.jsxs)("section",{className:"App-sorter",children:["Sort by",Object(b.jsx)("input",{name:"sort_by",value:"created_at",type:"radio"}),Object(b.jsx)("label",{htmlFor:"created_at",children:"created_at"}),Object(b.jsx)("input",{name:"sort_by",value:"comment_count",type:"radio"}),Object(b.jsx)("label",{htmlFor:"comment_count",children:"comment_count"}),Object(b.jsx)("input",{name:"sort_by",value:"votes",type:"radio"}),Object(b.jsx)("label",{htmlFor:"votes",children:"votes "}),Object(b.jsx)("button",{children:"Asc/Desc"})]})},h=function(e){var t=e.user;return Object(b.jsxs)("section",{className:"App-user-card",children:[Object(b.jsx)("img",{alt:"User avatar ",src:"https://media.gq.com/photos/5582cbcb1177d66d68d5912d/master/pass/entertainment-2011-08-mustache-nick-offerman-mustache-96.jpg"}),Object(b.jsx)("p",{children:t})]})},x=c(14).default.create({baseURL:"https://very-good-news.herokuapp.com/api",params:{token:"VNuzbRlq0rvXhE0798pNmbYvhR1lhxE7P/nJokOkoac="}}),f=function(e){var t=e.props,c=Object(n.useState)(0),s=Object(i.a)(c,2),r=s[0],a=s[1],o=Object(n.useState)(!0),l=Object(i.a)(o,2),u=l[0],d=l[1],p=Object(n.useState)(!0),O=Object(i.a)(p,2),m=O[0],f=O[1],v=function(e){var c,n;t.article_id?(n="articles",c=t.article_id):(n="comments",c=t.comment_id),function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"articles";x.patch("/".concat(c,"/").concat(e),{inc_votes:t}).then((function(t){var n=t.data;return console.log("PATCH /".concat(c,"/").concat(e)),n[c]}))}(c,e,n),a((function(t){return t+e}))};return Object(n.useEffect)((function(){d((function(){return 1!==r})),f((function(){return-1!==r}))}),[r]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:Object(b.jsx)(j.b,{to:"/articles/".concat(t.article_id),children:t.title})}),Object(b.jsx)("p",{children:t.topic}),Object(b.jsxs)("section",{className:"App-vote-bar",children:[Object(b.jsx)("button",{disabled:!u,onClick:function(){return v(1)},children:"+"}),"votes: ",t.votes+r,Object(b.jsx)("button",{disabled:!m,onClick:function(){return v(-1)},children:"-"}),"posted: ",t.created_at,Object(b.jsx)(h,{user:t.author})]})]})},v=function(e){var t=e.comment;return Object(b.jsxs)("section",{className:"App-comment-card",children:[Object(b.jsx)(f,{props:t}),Object(b.jsx)("p",{children:t.body})]})},g=c(13),_=function(e){var t=e.article,c=e.renderComments,n=Object(g.useState)([]),s=Object(i.a)(n,2),r=s[0],a=s[1];return Object(g.useEffect)((function(){var e;c&&(e=t.article_id,u.get("/articles/".concat(e,"/comments")).then((function(e){var t=e.data;return console.log("GET /articles/:article_id/comments"),t.comments}))).then((function(e){a(e)}))}),[t.article_id,c]),Object(b.jsxs)("section",{className:"App-article-card",children:[Object(b.jsx)(f,{props:t}),Object(b.jsx)("p",{children:t.body}),r.map((function(e){return c?Object(b.jsx)(v,{comment:e},"comment".concat(e.comment_id)):null}))]})},N=function(e){var t=e.topic,c=Object(n.useState)([]),s=Object(i.a)(c,2),r=s[0],a=s[1],j=Object(l.g)().article_id,d=Object(n.useState)(!1),p=Object(i.a)(d,2),O=p[0],m=p[1];return Object(n.useEffect)((function(){var e;j?(e=j,u.get("/articles/".concat(e)).then((function(t){var c=t.data;return console.log("GET /articles/".concat(e)),c.article}))).then((function(e){a([e]),m(!0)})):u.get("/articles").then((function(e){var t=e.data;return console.log("GET /articles"),t.articles})).then((function(e){a(Object(o.a)(e)),m(!1)}))}),[j,a,m]),Object(b.jsx)(b.Fragment,{children:r.map((function(e){return t&&e.topic!==t?null:Object(b.jsx)(_,{article:e,renderComments:O,setRenderComments:m},"article".concat(e.article_id))}))})},y=function(e){return e.topics.map((function(e){return Object(b.jsx)(j.b,{to:"/topics/"+e.slug,children:e.slug},"all-topics-"+e.slug)}))};var k=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){u.get("/topics").then((function(e){var t=e.data;return console.log("GET /topics"),t.topics})).then((function(e){s(Object(o.a)(e))}))}),[]),Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"App-header",children:[Object(b.jsx)(d,{}),Object(b.jsx)(O,{topics:c})]}),Object(b.jsx)(m,{}),Object(b.jsx)("main",{className:"App-main",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/topics",element:Object(b.jsx)(y,{topics:c})}),Object(b.jsx)(l.a,{path:"/",element:Object(b.jsx)(N,{})}),Object(b.jsx)(l.a,{path:"/articles",element:Object(b.jsx)(N,{})}),c.map((function(e){return Object(b.jsx)(l.a,{path:"/topics/".concat(e.slug),element:Object(b.jsx)(N,{topic:e.slug})},"topicRoute-"+e.slug)})),Object(b.jsx)(l.a,{path:"/articles/:article_id",element:Object(b.jsx)(N,{})})]})})]})})},A=Object(n.createContext)(),E=function(e){var t=e.children,c=Object(n.useState)(""),s=Object(i.a)(c,2),r=s[0],a=s[1],o=Object(n.useState)([]),j=Object(i.a)(o,2),l=j[0],u=j[1];return Object(b.jsx)(A.Provider,{value:{currentUser:r,setCurrentUser:a,allUsers:l,setAllUsers:u},children:t})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(E,{children:Object(b.jsx)(k,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.bc708ecd.chunk.js.map