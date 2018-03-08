import request from 'utils/request';

export async function query (params) {
  return request(
    '/api/v1/users'
  )
}
