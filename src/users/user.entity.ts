import { Task } from "src/tasks/task.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @CreateDateColumn()
    createAt: Date;
    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany(() => Task, tasks => tasks.user)
    tasks: Task;
}