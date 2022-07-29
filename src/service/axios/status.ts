export type StatusType = 400 | 401 | 403 | 404 | 500 | 502 | 503 | 504;
const statusMap = {
  400: '请求错误',
  401: '请登录',
  403: '拒绝访问',
  404: '请求地址出错',
  408: '请求超时',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求',
};

export const showMessage = (status: StatusType): string => {
  return statusMap[status] || '未知错误';
};
