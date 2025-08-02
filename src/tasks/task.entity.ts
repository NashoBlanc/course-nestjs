import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./task.model";
import { User } from "src/users/user.entity";

@Entity()
export class Task {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    title: string;
    @Column({
        type: 'text',
        nullable: false,
    })
    description: string;
    @Column({
        type: 'enum',
        enum: TaskStatus,
        default: TaskStatus.OPEN,})
    status: TaskStatus;

    @ManyToOne(() => User, user => user.tasks, { nullable: false })
    user: User;
}