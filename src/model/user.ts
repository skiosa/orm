import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";

@Entity()
@ObjectType
export class User{
    @PrimaryColumn()
    @Field(_type => string) 
    id!: string;

    @ManyToMany()
    @Column
}