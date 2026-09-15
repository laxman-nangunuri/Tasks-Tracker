import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

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
    createTask(createTaskDto: CreateTaskDto) {

        const newTask = {
            id: this.tasks.length + 1,
            title: createTaskDto.title,
            description: createTaskDto.description,
            status: 'Pending',
        };
        this.tasks.push(newTask);
        return newTask;
    }
    updateTask(id: number, updateTaskDto: UpdateTaskDto) {

        const task = this.tasks.find(
            t => t.id === id,
        );

        if (!task) {
            throw new NotFoundException(
                `Task ${id} not found`,
            );
        }

        Object.assign(task, updateTaskDto);

        return task;
    }

    deleteTask(id: number) {

        const index = this.tasks.findIndex(t => t.id === id,);

        if (index === -1) {
            throw new NotFoundException(`Task ${id} not found`,);
        }

        const deletedTask = this.tasks[index];

        this.tasks.splice(index, 1);

        return deletedTask;
    }
}
