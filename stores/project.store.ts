export const useProjectStore = defineStore("project", {
  state: () => ({
    projectList: [],
    isWantToCreate: false,
  }),
  actions: {
    async fetchProjectList() {
      const { data, pending, error } = await useFetchApi("/v1/projects");
      const response: any = data.value;
      this.projectList = response ? response.data : [];
    },
    mutateCreateDialog() {
      this.isWantToCreate = !this.isWantToCreate;
    },
  },
});
