import { BaseInterface, DataNotFound } from './base.interface';
export class BaseService {
  constructor(){}

  public ReturnJsonData(data: any): BaseInterface {
    if ( data ) {
      return {
        code: 200,
        msg: 'query ok',
        data,
      };
    } else {
      return DataNotFound;
    }
  }
}