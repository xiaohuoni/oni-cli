import request from '../../../utils/request';

export async function query (params) {
  return request({
    url: "https://api.douban.com/v2/movie/in_theaters?count=3",
    method: 'get',
    data: params,
  })
}
