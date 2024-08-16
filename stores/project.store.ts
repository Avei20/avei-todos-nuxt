import type { IBaseApiResponse } from "./app.types";
import type { CreateProject, Project } from "./project.types";

export const useProjectStore = defineStore("project", {
  state: () => ({
    projectList: [] as Project[],
    create: {} as CreateProject,
    isWantToCreate: false,
  }),
  actions: {
    async fetchProjectList() {
      const { data, pending, error } = await useFetchApi("/v1/projects");
      console.log("This is the data: ");
      console.log(data);
      console.log("This is the pending: ");
      console.log(pending);
      console.log("This is the error: ");
      console.log(error);
      console.log("This is the response parsed: ");
      console.log(data.value);
      const response = data.value as IBaseApiResponse<Project[]>;
      console.log("This is parsed :");
      console.log(response);
      this.projectList = response ? response.data : [];
    },
    mutateCreateDialog() {
      this.isWantToCreate = !this.isWantToCreate;
    },
  },
});
