export const useTodoStore = defineStore("todo", {
  state: () => ({
    todoList: [],
    isWantToCreate: false,
  }),
  actions: {
    // async fetchTodoList() {
    //   await axios
    //     .get('/v1/todos')
    //     .then((res) => {
    //       this.todoList = res.data.data
    //     })
    // },
    mutateCreateDialog() {
      this.isWantToCreate = !this.isWantToCreate;
    },
  },
});
