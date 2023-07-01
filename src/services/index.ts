import { type ValidateAccessI, type SurveyI } from '@/types/index';
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
    async getQuestions(body : ValidateAccessI) {
      const {data} = await amgApi.post("/survey/get-details-claim-survey", body);

      const questions: any = [] 

      data.forEach(el => {

        const element = {...el,
          rate : null,
          question_id: el.id
        }

          questions.push(element)
      })

      return questions;
    }
    async sendSurvey(body: SurveyI){
     
        const {data} = await amgApi.post("/survey/save-answers", body);
        return data;
      
    }
}

export default new Service();