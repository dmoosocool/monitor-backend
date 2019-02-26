export interface BaseInterface {
  code: number;
  msg: string;
  data: object;
}

export const DataNotFound: BaseInterface = {
  code: 404,
  msg: 'data is not fund.',
  data: null,
};

export const TypeError: BaseInterface = {
  code: 504,
  msg: 'request param type is error.',
  data: null,
};
