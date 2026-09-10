import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [
        {
            id: 1,
            title: 'Learn NestJS',
            description: 'Week 1',
            status: 'Pending',
        },
    ];

    getAllTasks() {
        return this.tasks;
    }
}
