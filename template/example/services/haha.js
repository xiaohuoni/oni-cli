import request from 'utils/request';

export async function query (params) {
  return request({
    url:  '/api/req',
    method: 'get',
    data: params,
  })
}
