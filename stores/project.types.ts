export interface CreateProject {
  code: string;
  description: string;
  name: string;
}

export interface Project {
  id: string;
  code: string;
  name: string;
  description: string;
  deleted: boolean;
}
