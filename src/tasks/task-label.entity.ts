import { Column, CreateDateColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Task } from "./task.entity";

export class TaskLabel {
    @PrimaryGeneratedColumn('uuid')
    name: string;

    @Column()
    taskId: string;

    @ManyToOne(() => Task, task => task.labels, { nullable: false })
    task: Task;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}