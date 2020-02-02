<template>
    <div class="container">
        <nav>
            <a v-on:click="logout">退出登陆</a>
        </nav>
        <form>
                <!-- // 用户在这个输入框输入 todo 事项
                // 点击回车后执行 input_todo 方法 -->
            <input v-on:keyup.enter="input_todo" v-model="whatTodo" type="text">
        </form>
        <div>
            <!-- // 输入每一个 todo 事项后展示在这里
            // 用户重新登录后也会在这里看到已经输入的 todo 事项
            // todo 事项肯定有很多条，我们把他们装在一个数组里，用 v-for 输出
            // 用到的都是 vue 很基础的 就不解释了 -->
            <ul class="todo-list">
                <li v-for="(item, index) in todos" :key="index">
                    <!-- // 选择 input 来装 todo 事项本来是想给一个修改的功能
                    // 点击 label 里的 modify 将 input 的 disabled 属性去掉
                    // 但是没成功实现用 vue 去掉元素属性的方法
                    // 所以这里不用点击 modify 直接点击 input 框直接就可以修改了...
                    // 这个方法很挫了.. 有追求的可以自己改一下 -->
                    <input v-bind:value="item" v-bind:id="index">
                    <label v-bind:for="index" >modify</label>
                    <span v-on:click="deleteTodo(index)">delete</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import AV from 'leancloud-storage';
var Todo = AV.Object.extend('Todo');
    var todolists = [];
    export default {
        name: "TodoList",
        data() {
            return {
                whatTodo: "",
                todos: todolists
            }
        },
        methods: {
            input_todo() {
                // 在页面添加 todo 事项
                var whatTodo = this.whatTodo;
                if (whatTodo == '') {
                    alert('请输入待办事项');
                    return 0;
                }
                // 暂时保存当前 todo 的 id
                // 因为 leancloud 对数据操作需要取得该条数据的 id
                var userID;
                var currentUser = AV.User.current();
                var currentUserId = currentUser['id'];

                this.todos.push(whatTodo);

                // 添加到 leancloud
                var todo = new Todo();
                todo.set('todoList', whatTodo);
                todo.set('owner', AV.User.current());
                todo.set('userID', currentUserId)
                todo.save().then(function (todo) {
                  // 成功保存之后返回当前对象，ID在这里能拿到，删除用
                  userID = todo.id;
                  // 取到 id 后存给这个对象，后面再要用某个todo的id就容易拿到了
                  // 不管后面有没有用，先存起来
                  todo.set('myId', userID);
                  todo.save();
                }, function (error) {
                  console.error('Failed to create new object, with error message: ' + error.message);
                });
                // 清空输入框，方便下次输入
                this.whatTodo = '';
            },
            deleteTodo(index) {
                // 在 leancloud 里删除todo需要拿到该todo的某属性来找到该todo
                // 这里我们拿该todo文字内容
                var todoContent = this.todos[index];

                this.todos.splice(index, 1);

                // leancloud 的查找操作
                var query = new AV.Query('Todo');
                // 根据文字内容找到那条todo
                query.equalTo('todoList', todoContent)
                query.find().then(function(results) {
                    // 成功找到之后取得他的id
                    var currentID = results[0]['id'];
                    // 然后删除
                    var deleteTodo = AV.Object.createWithoutData('Todo', currentID);
                    deleteTodo.destroy().then(function (success) {
                        // 删除成功
                        console.log("删除成功", success);
                    }, function (error) {
                        alert(error)
                    });
                })
            },
            logout: function() {
                // 退出账号
                AV.User.logOut();
                this.$router.push('/')
            },
            init() {
                this.$nextTick(function () {
                    // 初始化
                    todolists = [];
                    // 获取当前用户及用户ID
                    var currentUser = AV.User.current();
                    var currentUserId = currentUser['id'];
    
                    // 查找实例化
                    var query = new AV.Query('Todo');
                    // 在 Todo 类里查找 userID 为当前用户ID的对象
                    query.equalTo('userID', currentUserId);
    
                    // query.descending('createdAt');
                    query.find().then(function (lists) {
                        // 遍历查找结果
                        lists.forEach(function(list) {
                            // 获取对象的 todolist 文本内容
                            let todolist = list.get('todoList')
                            // 将每条 todo 添加到 todolist数组
                            todolists.push(todolist);
                        })
                    })
                    // 将数组赋值给 data 里的 todos
                    this.todos = todolists;
                    console.log('this.todos' + this.todos)
    
                });
            }
        },
        mounted () {
            // this.init();
        },
    }
</script>

<style lang="scss" scoped>

</style>