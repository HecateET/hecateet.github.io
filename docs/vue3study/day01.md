---
title: 01-Vue3.0自我介绍
author: 阿源 Hecate
date: '2022-10-11'
---

# 一、渐进式框架

Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue 的设计非常注重灵活性和“可以被逐步集成”这个特点。

根据你的需求场景，你可以用不同的方式使用 Vue：

-   无需构建步骤，渐进式增强静态的 HTML
-   在任何页面中作为 ` Web Components  `嵌入
-   单页应用 (SPA)
-   全栈 / 服务端渲染 (SSR)
-   Jamstack / 静态站点生成 (SSG)
-   开发桌面端、移动端、WebGL，甚至是命令行终端中的界面

# 二、单文件组件

在大多数启用了构建工具的 ` Vue  `项目中，我们可以使用一种类似`  HTML  `格式的文件来书写`  Vue  `组件，它被称为**单文件组件** (也被称为`  *.vue  `文件，英文`  Single-File Components `，缩写为 **SFC**)。

单文件组件的用法以及用途。

```
<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```

  


## 为什么要使用SFC？

使用SFC必须使用构建工具，但作为回报带来以下几个优点：

-   使用熟悉的`HTML`、`CSS`和`JavaScript`语法编写模块化的组件
-   [让本来就强相关的关注点自然内聚](https://cn.vuejs.org/guide/scaling-up/sfc.html#what-about-separation-of-concerns)
-   预编译模板，避免运行时的编译开销
-   [组件作用域的 CSS](https://cn.vuejs.org/api/sfc-css-features.html)
-   [在使用组合式 API 时语法更简单](https://cn.vuejs.org/api/sfc-script-setup.html)
-   通过交叉分析模板和逻辑代码能进行更多编译时优化
-   [更好的 IDE 支持](https://cn.vuejs.org/guide/scaling-up/tooling.html#ide-support)，提供自动补全和对模板中表达式的类型检查
-   开箱即用的模块热更新 (HMR) 支持

SFC是Vue框架提供的一个功能，并且在下列场景中都是官方推荐的项目组织方式：

-   单页面应用（SPA）
-   静态站点生产（SSG）
-   任何值得引入构建步骤以获得更好的开发体验（DX）的项目。

当然，在一些轻量级场景下使用SFC会显得有些杀鸡用牛刀。

因此，Vue同样也可以在无构建步骤的情况下以纯`JavaScript`方式使用。比如，你的用例只需要给静态`HTML`添加一些简单的交互，你可以看看

-   `petite-vue`，它是一个 6 kB 左右、预优化过的 Vue 子集，更适合渐进式增强的需求。
-   [petitie-vue](https://github.com/vuejs/petite-vue)：<https://github.com/vuejs/petite-vue>

## SFC是如何工作的？

Vue SFC 是一个框架指定的文件格式，因此必须交由 [@vue/compiler-sfc](https://github.com/vuejs/core/tree/main/packages/compiler-sfc) 编译为标准的 JavaScript 和 CSS，一个编译后的 SFC 是一个标准的 JavaScript(ES) 模块，这也意味着在构建配置正确的前提下，你可以像导入其他 ES 模块一样导入 SFC：

```
import MyComponent from './MyComponent.vue'

export default {
  components: {
    MyComponent
  }
}
```

  
SFC 中的 ` <style>  `标签一般会在开发时注入成原生的 ` <style>  `标签以支持热更新，而生产环境下它们会被抽取、合并成单独的 `CSS` 文件。

在实际项目中，我们一般会使用集成了 SFC 编译器的构建工具，比如 [Vite](https://cn.vitejs.dev/) 或者 [Vue CLI](https://cli.vuejs.org/zh/) (基于 [webpack](https://webpack.js.org/))，Vue 官方也提供了脚手架工具来帮助你尽可能快速地上手开发 SFC。

更多细节请查看 [SFC 工具链](https://cn.vuejs.org/guide/scaling-up/tooling.html)章节。

## 如何看待关注点分离？

一些有着传统 Web 开发背景的用户可能会因为 SFC 将不同的关注点集合在一处而有所顾虑，觉得 HTML/CSS/JS 应当是分离开的！

要回答这个问题，我们必须对这一点达成共识：**前端开发的关注点不是完全基于文件类型分离的**。前端工程化的最终目的都是为了能够更好地维护代码。关注点分离不应该是教条式地将其视为文件类型的区别和分离，仅仅这样并不够帮我们在日益复杂的前端应用的背景下提高开发效率。

在现代的 UI 开发中，我们发现与其将代码库划分为三个巨大的层，相互交织在一起，不如将它们划分为松散耦合的组件，再按需组合起来。在一个组件中，其模板、逻辑和样式本就是有内在联系的、是耦合的，将它们放在一起，实际上使组件更有内聚性和可维护性。

即使你不喜欢单文件组件这样的形式而仍然选择拆分单独的 JavaScript 和 CSS 文件，也没关系，你还是可以通过[资源导入](https://cn.vuejs.org/api/sfc-spec.html#src-imports)功能获得热更新和预编译等功能的支持。

# 三、API风格

## 选项式API（Options API）

使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，例如 `data`、` methods  `和 `mounted`。选项所定义的属性都会暴露在函数内部的 `this` 上，它会指向当前的组件实例.

```
<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

## 组合式API(Composition API)

通过组合式API，我们可以看使用导入的API函数来描述组件逻辑， 在单文件组件中，组合式API通常会与`<script setup>` 搭配使用。 这个`setup` attribute是一个标识，告诉`Vue`需要在编译时进行一些处理，让我们可以更简洁地使用组合式API。比如`<script setup>` 中的导入和顶层变量/函数都能狗在模版中直接使用。

下面是使用了组合式API与`<script setup>`改造后和上面的模版完全一样的组件：

```
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

  


## 应该选哪一个使用？

两种 API 风格都能够覆盖大部分的应用场景。它们只是同一个底层系统所提供的两套不同的接口。实际上，选项式 API 是在组合式 API 的基础上实现的！关于 Vue 的基础概念和知识在它们之间都是通用的。

**选项式 API 以“组件实例”的概念为中心** (即上述例子中的 this)，对于有面向对象语言背景的用户来说，这通常与基于类的心智模型更为一致。同时，它将响应性相关的细节抽象出来，并强制按照选项来组织代码，从而对初学者而言更为友好。

**组合式 API 的核心思想是直接在函数作用域内定义响应式状态变量**，**并将从多个函数中得到的状态组合起来处理复杂问题**。这种形式更加自由，也需要你对 Vue 的响应式系统有更深的理解才能高效使用。相应的，它的灵活性也使得组织和重用逻辑的模式变得更加强大。

-   在学习的过程中，推荐采用更易于自己理解的风格。再强调一下，大部分的核心概念在这两种风格之间都是通用的。熟悉了一种风格以后，你也能够很快地理解另一种风格。
-   在生产项目中：

<!---->

-   -   当你不需要使用构建工具，或者打算主要在低复杂度的场景中使用 Vue，例如渐进增强的应用场景，推荐采用选项式 API。
    -   当你打算用 Vue 构建完整的单页应用，推荐采用组合式 API + 单文件组件。