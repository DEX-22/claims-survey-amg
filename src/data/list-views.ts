import type { SurveyViewsI } from "@/types/index"

const SURVEY:SurveyViewsI = {
    INDEX: {name: 'survey-start',},
    QUESTION: {name: 'survey-questions'},
    COMPLETED: {name: 'survey-completed'},
    NOT_FOUND : {name: 'not-found'},
    AUTH : {name: 'auth'}
  }

export default SURVEY