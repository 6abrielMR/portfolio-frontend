import { fetchAllProjects } from "../helpers/fetch";
import { types } from "../types/types";

export const projectStartLoading = () => async (dispatch) => {
  try {
    const resp = await fetchAllProjects("projects");
    const body = await resp.json();
    const projects = body.body;

    dispatch(projectsLoaded(projects));
  } catch (e) {
    console.log(e);
  }
};

const projectsLoaded = (projects) => ({
  type: types.loadProjects,
  payload: projects,
});
