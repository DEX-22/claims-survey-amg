import { type ValidateAccessI } from '@/types/index';
import amgApi from './axios';


class Service {

  async validateAccess(body : ValidateAccessI) {
    try{
      const {data} = await amgApi.post("/survey/validate-access", body);
      return data;
    }catch(e){
      return {
        access:false,
        status:'TIME EXPIRED'
      }
    }
  }
    async getQuestions() {
      const {data} = await amgApi.get("/survey/get-questions");
      return data;
    }

}

export default new Service();