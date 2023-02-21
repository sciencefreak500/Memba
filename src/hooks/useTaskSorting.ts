/** a hook for sorting tasks based on an adjusted priority
 * the sorting uses the formula y = mx^(1+(c/10)) + bm
 * m = is a constant value based on if the task is in backlog or in progress
 * backlog value is less than in progress value
 * c is a random value between 0 and 1, adding some randomness to the sort
 * b is a constant value based the project's priority, scale of 1 - 10
 * x is the age of the task, in minutes
 */


import { GET_TASKS_FOR_SORTING } from '../graphql/queries';
import { useQuery } from '@apollo/client';


type Task = {
    uuid: string;
    created_at: string;
    state: string;
    Project: {
        uuid: string;
        priority: number;
    };
};

function getNormalizedValueFromUUID(uuid: string) {
    const uuidArray = uuid.split('-').join('').split('');
    const uuidArraySum = uuidArray.reduce((acc, curr) => acc + parseInt(curr, 16), 0);
    // normalize the value to be between 0 and 1 
    // (uuid is 32 chars long, max value is 15*32 = 480, min value is 0)
    const normalizedValue = uuidArraySum / 480;
    return normalizedValue;
}


function useTaskSorting() {
  const { data, loading, error } = useQuery(GET_TASKS_FOR_SORTING);

  if (loading) return { loading };
  if (error) return { error };

  const tasks: Task[] = data.memba_Task;

  const getSortingValue = (task: Task) => {
    const m = task.state === 'BACKLOG' ? 0.3 : task.state === 'IN_PROGRESS' ? 0.6 : 0;
    const c = getNormalizedValueFromUUID(task.uuid);
    const b = task.Project.priority;
    // x = age of task, now - created_at in minutes
    const x = (new Date().getTime() - new Date(task.created_at).getTime()) / 1000 / 60;
    const y = m * Math.pow(x, 1 + (c / 10)) + b*m;
    return y;
  };

  const sortedTasks = tasks.sort((taskA, taskB) => {
    const a = getSortingValue(taskA);
    const b = getSortingValue(taskB);
    return b - a;
  });

  return { sortedTasks };
}

export default useTaskSorting;