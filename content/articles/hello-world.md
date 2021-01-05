---
title: Hello World
description: Như mọi lần học lập trình, chương trình đầu tiên luôn là `Hello World`. Lần này mình bỏ Hexo và xây lại blog bằng NuxtJS.
---

Như mọi lần học lập trình, chương trình đầu tiên luôn là `Hello World`.<br/>
Trang blog cũ mặc dù chưa có nội dung gì nhưng ~~vì rỗi hơi~~ mình quyết định đập đi xây lại.

Lần này bỏ không dùng [Hexo](https://hexo.io/) nữa mà chuyển sang [Nuxt](https://nuxtjs.org/), có mấy lý do sau:

- Theme của Hexo khó customize, mình không muốn ngồi vọc CSS chay quá nhiều.
- Kinh nghiệm dev Nuxt/Vue + một cái component library ngon ngon thì compose UI dễ như ăn bánh.
- Nuxt từ bản `2.14` đã có thể build full static site.
- [@nuxt/content](https://content.nuxtjs.org/) dùng để viết post bằng markdown khá ngon, có [live edit](https://content.nuxtjs.org/displaying/#live-editing) ❤️.

Dù sao thì xây chỉ là một phần, maintain mới là quan trọng. Nên hi vọng với nhà mới, trong năm mới thì cũng viết lách được nhiều hơn, không thành nhà hoang như năm ngoái nữa 😉

## Stack

Base: [Nuxt.js](https://nuxtjs.org/) with [static mode](https://nuxtjs.org/blog/going-full-static/).<br/>
CMS: [@nuxt/content](https://content.nuxtjs.org/).<br/>
Component library: [Vuetify — A Material Design Framework for Vue.js](https://vuetifyjs.com/en/).<br/>
Comment: [CommentBox.io](https://commentbox.io/), thích tool này vì rất simple.<br/>
Analytics: [Google Analytics](https://analytics.google.com/).<br/>
Hosting: [GitHub Pages](https://pages.github.com/)

## Tham khảo

https://nuxtjs.org/blog/creating-blog-with-nuxt-content
