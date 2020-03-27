import { Task } from '../Task/Task.Model';

export class Mocks {
    static t1 = new Task(
        {
            title: 'Create Todo App View',
            isCreatedFromForm: true,
            description: `Prepare responsive, clean and user-friendly 
            user interface and reusable UI components`,
            subTasks: [
                'Find informations about UI reusable components',
                'Find Good Color Scheme',
                'Prepeare Responsive UI for diffrent Resolutions'

            ]
        }
    );
}
