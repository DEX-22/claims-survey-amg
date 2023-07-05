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
    async getDetailsSurvey() {
      const client = await this.validateAccess({id:localStorage.getItem('token') || ""})
      const param = {id: client.id}
      
      const {data} = await amgApi.post("/survey/get-details-claim-survey", param);

      const questions: any = [] 

      JSON.parse(data[0].survey_questions_json).forEach(el => {
        const element = {...el,
          rate : null,
          question_id: el.id
        }
        questions.push(element)
      })

      data[0].survey_questions_json = questions

      return  data[0];
    }

    async sendSurvey(body: SurveyI){
      
        const {data} = await amgApi.post("/survey/save-answers", body);
        localStorage.removeItem('questionDetails');
        return data;

      
    }
}

export default new Service();