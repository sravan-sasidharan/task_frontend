import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(jobList: any[], filterString:string,jobName:any):any[]{
   const result:any=[]

    if(!jobList || filterString==''||jobName==''){
      return jobList;
    }
jobList.forEach((job:any)=>{
 if( job[jobName].trim().toLowerCase().includes(filterString.toLowerCase())){
  result.push(job);
 }
})

    return result;
  }

}
