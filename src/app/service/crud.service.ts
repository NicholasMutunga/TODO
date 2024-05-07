import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task} from '../model/task';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http : HttpClient ) {  }
  
  private serviceURL = `${environment.taskAPI}/tasks`

  addTask(task:Task) : Observable<Task> {
    return this.http.post<Task>(this.serviceURL,task)
  }
  
  getAllTask() : Observable<Task[]> {
    return this.http.get<Task[]>(this.serviceURL)
  }

  deleteTask(task:Task) : Observable<Task> {
    return this.http.delete<Task>(this.serviceURL+'/'+task.id)
  }

  editTask(task:Task) : Observable<Task> {
    return this.http.put<Task>(this.serviceURL+'/'+task.id,task)
  }
}
