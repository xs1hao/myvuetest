# my-vue-music-player 从 0 开始 我的 vue 项目

#### 2021年5月27日22:33:49 （第一天）
  * 时隔三年，在次手写一个vue项目，混迹于开发界已经快三年了，对写代码的认识也有了不少，那么现在再次从零开始，写一个VUE项目。
  * 先把 webpack 弄好吧，现在已经 webpack5 了，那就来个 webpack5 吧。
  * 对于一个已经使用 vue-cli 创建好的vue 项目，怎么快速添加webpck哩？

    1) 全局安装 /* npm i -g @vue/cli-init */ (这电脑不知道咋了，现在全局安装东西，都必须要以管理员身份运行cmd，TMD)；

    2) /* vue init webpack xxx */（xxx为项目名称）--- 是的，他就开始运行了，这一过程会让你做很多选择；

    这个时候，我发现，原来上面的命令，是又给我生成了一个 项目，我tm，原来如此，好吧，删了从来。
    3) 启动项目，在init项目的时候，使用了eslint 启动时会报了很多关于 eslint 检测的错，修改webpakc
    /* eslint-loader */ 里面的配置: fix: true; 项目成功启动；

#### 2021年5月28日21:01:22 （第二天，周五）
    目标：引入element-ui库；本地调用接口；做两个路由切换的页面；
  ##### 1、引入 element-ui 库
  >>* 安装element-ui ，执行命令：npm i element-ui -S；
  >>* 项目中按需加载 需要借助 babel-plugin-component；执行命令： npm install babel-plugin-component -D
  >>* **注意**：
  >>* 安装element-ui 官网给的配置，修改了babelrc文件，后项目需要执行如下命令： npm install babel-preset-es2015 --save-dev;
  >>* 放弃了，还是全部引入吧，一个个的引入，太慢了。
  ##### 2、快速生产vue模板，在 .vue 文件中输入vue 或者 自己在vscode 中配置模板即可。
  ##### 3、调用接口，怎么能缺少 axios，执行命令： npm install axios

#### 2021年5月30日05:59:06 （第三天，周天）
  ##### 1、Vue-router
  >>>>>[官方指南](https://router.vuejs.org/zh/guide/);

  >>>>>[完整的导航解析流程](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB)

        1. 在失活的组件里调用 beforeRouteLeave 守卫。

        2. 调用全局的 beforeEach 守卫。

        3. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。

        4. 在路由配置里调用 beforeEnter （独享的守卫）。

        5. 解析异步路由组件。

        6. 在被激活的组件里调用 beforeRouteEnter。

        7. 调用全局的 beforeResolve 守卫 (2.5+)。

        8. 导航被确认。

        9. 调用全局的 afterEach 钩子。

        10. 触发 DOM 更新。

        11. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
  ##### 2、添加 less
      安装 less 与 less-loader；
  ##### 3、封装axios 设置请求及响应拦截器；
  ##### 4、引入 iconfont 图标
      需要在引入iconfont.css文件的同时，还要引入该文件中对应的 三个文件。
      将 iconfont.css 在全局的css 文件中引入
#### 2021年5月31日21:30:48 （第四天，周一）
  计划：让音乐响起来

#### 2021年6月5日17:05:49 （第五天）
>>> 1.在vue中写函数式组件；
>>> 2.在vue中使用jsx 写法；
    jsx 和react一样，是一种语法，所以需要安装对应的babel;
    ++安装对应的依赖++
    npm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props
    使用 jsx 的函数式组件；
#### 2021年6月6日09:58:18 （第六天，周日）
>>> 练习使用vuex; Vuex 五大核心 state action mutation getters modules
  >>>1. state 数据中心，状态管理中心；
  >>>2. getters state 的计算属性；
  >>>3. action 通过dispatch 分发一个动作到 action，他支持异步动作。
  >>>4. mutation 更改state中的状态的唯一方法，就是是dispatch action 他也是commit 到了mutation 中，mutation 不支持异步动作；
  >>>5. modules 模块，用于创建不同模块的 store；各个模块可以拥有自己的 staore.
