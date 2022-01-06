new Vue({
    el: "#app",
    data() {
     return {
      todoList: [
       { id: 0, title: "ToDoList-Example A", done: false, del: false},
       { id: 1, title: "ToDoList-Example B", done: false, del: false},
       { id: 4, title: "ToDoList-Example C", done: true, del: true}
      ],
      new_todo: "",
      showComplete: false,
      //ans-Del List
      showDelete: false
      //ans
     };
    },
    computed: {},
    mounted() {
     this.getTodos();
    },
    watch: {
     todoList: {
      handler: function(updatedList) {
       localStorage.setItem("todo_list", JSON.stringify(updatedList));
      },
      deep: true
     }
    },
    computed: {
     pending: function() {
      return this.todoList.filter(function(item) {
       return !item.done;
      });
     },
     completed: function() {
      return this.todoList.filter(function(item) {
       return item.done;
      });
     },
     completedPercentage: function() {
      return Math.floor(this.completed.length / this.todoList.length * 100) + "%";
     },


     // Answer Deleted List//
     deleted: function() {
        return this.todoList.filter(function(item) {
         return item.del;
        });
       },
    //answer//
    },
   
    methods: {
     do() {
     
      this.intervalId = setInterval(() => {
      
      }, 1000); 
     }
    },
   
    mounted() {
    
     this.do();
    },
   
    methods: {
     // get all todos when loading the page
     getTodos() {
      if (localStorage.getItem("todo_list")) {
       this.todoList = JSON.parse(localStorage.getItem("todo_list"));
      }
     },
     // add a new item
     addItem() {
      // validation check
      if (this.new_todo) {
       this.todoList.unshift({
        id: this.todoList.length,
        title: this.new_todo,
        done: false,
        del: false
       });
      }
      // reset new_todo
      this.new_todo = "";
      // save the new item in localstorage
      return true;
     },
     
     toggleShowComplete() {
      this.showComplete = !this.showComplete;
     },

     // ans Del-List
     toggleShowDelete() {
      this.showDelete = !this.showDelete;
     },
     // Del
    
    }
   });
   