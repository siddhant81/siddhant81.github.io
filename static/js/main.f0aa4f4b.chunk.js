(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(30)},,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/wanderer.207b1645.png"},function(e,t,a){e.exports=a.p+"static/media/linkedin.898c0407.png"},function(e,t,a){e.exports=a.p+"static/media/email.894ecd08.png"},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),i=(a(13),a(1)),o=(a(15),a(17),function(){return l.a.createElement("header",{className:"header"},l.a.createElement("img",{src:a(19),alt:"Wanderer",className:"header-avatar"}),l.a.createElement("div",{className:"header-info"},l.a.createElement("h1",{className:"header-name"},"Reflections and Ramblings"),l.a.createElement("p",{className:"header-title"},"By Siddhant Gautam")),l.a.createElement("div",{className:"header-links"},l.a.createElement("a",{href:"https://www.linkedin.com/in/siddhant-gautam-80aa12147/",target:"_blank",rel:"noreferrer"},l.a.createElement("img",{src:a(20),alt:"LinkedIn",className:"header-icon"})),l.a.createElement("a",{href:"mailto:siddhant2219@gmail.com",target:"_blank",rel:"noreferrer"},l.a.createElement("img",{src:a(21),alt:"Email",className:"header-icon"}))))}),m=(a(22),function(){return l.a.createElement("div",{className:"resume"},l.a.createElement("h2",null,"Resume"),l.a.createElement("div",{className:"resume-container"},l.a.createElement("section",null,l.a.createElement("h3",null,"Education"),l.a.createElement("div",{className:"resume-item"},l.a.createElement("h4",null,"Indian Institute Of Information Technology, Allahabad"),l.a.createElement("p",null,"B.Tech. Information Technology, 2016-2020"))),l.a.createElement("section",null,l.a.createElement("h3",null,"Experience"),l.a.createElement("div",{className:"resume-item"},l.a.createElement("h4",null,"Software Engineer, Google"),l.a.createElement("p",null,"2020-Present"),l.a.createElement("ul",null,l.a.createElement("li",null,"Work on Google Shopping Ads."),l.a.createElement("li",null,"Improve Query Intent for Shopping Queries."))),l.a.createElement("div",{className:"resume-item"},l.a.createElement("h4",null,"Software Engineering Intern, Razorpay"),l.a.createElement("p",null,"Spring 2020"),l.a.createElement("ul",null,l.a.createElement("li",null,"Worked on engineering tools and performance optimization for Razorpay Payments."),l.a.createElement("li",null,"Collaborated with other interns to build some new performance trackers."))),l.a.createElement("div",{className:"resume-item"},l.a.createElement("h4",null,"Software Engineering Intern, Expedia"),l.a.createElement("p",null,"Summer 2019"),l.a.createElement("ul",null,l.a.createElement("li",null,"Worked on improving Egencia's (Expedia's B2B arm) travel booking page.")))),l.a.createElement("section",null,l.a.createElement("h3",null,"Skills"),l.a.createElement("div",{className:"resume-item"},l.a.createElement("ul",null,l.a.createElement("li",null,"Proficient in C++, Python, Java and SQL"),l.a.createElement("li",null,"Experience with Applied ML. Built some ML models using the trendy LLMs."),l.a.createElement("li",null,"Experience with React, Node.js."),l.a.createElement("li",null,"Strong problem-solving and communication skills"))))))}),s=(a(24),function(){return l.a.createElement("div",{className:"current-projects-container"},l.a.createElement("h2",null,"Current Projects"),l.a.createElement("div",{className:"current-projects-grid"},l.a.createElement("div",{className:"current-projects-item"},l.a.createElement("h3",null,"Project 1"),l.a.createElement("p",null,"Chat App with Sheldon and RC."),l.a.createElement("a",{href:"https://github.com/aarcee141/chat-app"},"View project"))))}),u=(a(26),function(e){var t=e.title,a=e.content,r=Object(n.useState)(!1),c=Object(i.a)(r,2),o=c[0],m=c[1],s=function(){m(!1)};return o?l.a.createElement("div",{className:"blog-post-expanded",onClick:s},l.a.createElement("h3",null,t),l.a.createElement("p",null,a),l.a.createElement("a",{href:"#",className:"back-button",onClick:s},"Back to All Posts")):l.a.createElement("div",{className:"blog-post",onClick:function(){m(!0)}},l.a.createElement("h3",null,t),l.a.createElement("p",null,a))}),d=(a(28),function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],c=function(e){r(e===a?null:e)};return l.a.createElement("div",{className:"blog-container"},l.a.createElement("h2",null,"Last Updated: Apr 16, 2023"),[{id:1,title:"Why Yes? I am Changing",content:"TBA - will feature Tame Impala."},{id:2,title:"Goes Out for A Run Once",content:"Running a marathon is a challenging but rewarding goal to strive for. It requires dedication, hard work,and a commitment to pushing yourself beyond your limits. My goal of running a marathon has been a long time in the making, and I am excited to finally take the leap and make it happen. Training for a marathon involves a lot of preparation, from building up endurance and stamina to perfecting running form and nutrition. But the payoff is immense, with the sense of accomplishment and pride that comes with crossing that finish line. I know it won't be easy, but I am determined to put in the effort and make my marathon goal a reality. Through hard work and perseverance, I believe that anything is possible."}].map(function(e){return l.a.createElement(u,{key:e.id,title:e.title,content:e.content,expanded:e.id===a,onPostClick:c})}))}),p=function(e){var t=e.activeTab,a=e.setActiveTab;return l.a.createElement("main",{className:"app-main"},l.a.createElement("nav",{className:"app-nav"},l.a.createElement("button",{className:"app-nav-item ".concat("blog"===t?"active":""),onClick:function(){return a("blog")}},"Blog"),l.a.createElement("button",{className:"app-nav-item ".concat("current-projects"===t?"active":""),onClick:function(){return a("current-projects")}},"Current Projects"),l.a.createElement("button",{className:"app-nav-item ".concat("resume"===t?"active":""),onClick:function(){return a("resume")}},"Resume")),"resume"===t&&l.a.createElement(m,null),"current-projects"===t&&l.a.createElement(s,null),"blog"===t&&l.a.createElement(d,null))},E=function(){var e=Object(n.useState)("blog"),t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"app"},l.a.createElement(o,null),l.a.createElement(p,{activeTab:a,setActiveTab:r}))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)))}],[[4,2,1]]]);
//# sourceMappingURL=main.f0aa4f4b.chunk.js.map