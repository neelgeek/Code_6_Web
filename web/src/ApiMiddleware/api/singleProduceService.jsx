import HttpService from './HttpService';

// class for for any fuctionality's service (for now name is for understanding) 
export default class singleProduceService {

   
    static postService(url,data){
        return HttpService.post(url,null,data);
    } 


    static postServiceApi(url,data){
        return {
            callApi:{
                types:[singleProduceService.postServiceReturn().success,singleProduceService.postServiceReturn().fail],
                apiCall:singleProduceService.postService(url,data)
            }
        }
    }
    static postServiceReturn(){
        return {
            success:'sucessful return',
            fail:'failure return'
        }
    }

}