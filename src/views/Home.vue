<template>
  <div class="container">
    <nav>
        <router-link to="/">退出登陆</router-link>
    </nav>
    <p>Home page</p>
    <todo-list></todo-list>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: 'home',
  components: {
    TodoList
  }
}
</script>
