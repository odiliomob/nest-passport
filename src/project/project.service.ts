import { Injectable } from '@nestjs/common';
import {CreateProjectDto} from './models/CreateProjectDto';
import {ProjectEntity} from './project.entity';
import {UserEntity} from '../user/user.entity';

@Injectable()
export class ProjectService {

    public async createProject(projects: CreateProjectDto[], user: UserEntity): Promise<ProjectEntity[]> {
        return ProjectEntity.createProjects(projects, user);
 }

 public async getProjectsForUser(user: UserEntity): Promise<ProjectEntity[]> {
    return ProjectEntity.getProjects(user);
}
}
