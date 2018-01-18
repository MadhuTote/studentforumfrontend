/**
 * JobService
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.saveJob=function(job){
		console.log(job)
	  return  $http.post("http://localhost:8083/studentforumbackend/savejob",job)
	}
	jobService.getAllJobs=function(){
		 return  $http.get("http://localhost:8083/studentforumbackend/getalljobs")
	}

	jobService.getJobDetails=function(id){
		return $http.get("http://localhost:8083/studentforumbackend/getjobbyid/"+id)
	}
	
	jobService.updateJob=function(job){
		return $http.put("http://localhost:8083/studentforumbackend/updatejob",job)
	}
	
	jobService.deleteJob=function(id){
		return $http.get("http://localhost:8083/studentforumbackend/deletejob/"+id)
	}
	return jobService;
	
})

