import {gql} from '@apollo/client';


export const GET_TASKS_FOR_SORTING = gql`
query GetTasks {
  memba_Task {
    uuid
    created_at
    state
    Project {
      uuid
      priority
    }
  }
}
`;

export const GET_PROJECT = gql``;

export const GET_TASK = gql``;