import { Task } from '../Task/Task.Model';

export class Mocks {
    static t1 = new Task(
        {
            title: 'Create Todo App View',
            description: `Prepare responsive, clean and user-friendly 
            user interface and reusable UI components`
        }
    );
}
