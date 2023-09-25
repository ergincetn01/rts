import { ActionTypes } from "../action-types/actionTypes";

interface SearchRepositoriesAction {
    type: ActionTypes.SEARCH_REPOSITORES}
  
  interface SearchRepositoriesSuccessAction {
    type: ActionTypes.SEARCH_REPOSITORES_SUCCESS;
    payload: string[];
  }
  
  interface SearchRepositoriesErrorAction {
    type: ActionTypes.SEARCH_REPOSITORES_ERROR;
    payload: string;
  }

  export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;