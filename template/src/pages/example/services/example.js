import request from 'utils/request';
import config from 'utils/config';

const { api } = config
const { users } = api
//FIXME:这里要修改请求的地址
export async function query (params) {
  return request({
    url: users,
    method: 'get',
    data: params,
  })
}
