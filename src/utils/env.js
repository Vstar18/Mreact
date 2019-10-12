
const currentEnv = process.env.REACT_APP_ENV
console.log('currentEnv', currentEnv)
export const getEnv = currentEnv
export const isDevEnv = currentEnv === 'dev'
export const isTestEnv = currentEnv === 'test'
export const isPreEnv = currentEnv === 'pre'
export const isProdEnv = currentEnv === 'prod'

export const getApiHttp = isPreEnv || isProdEnv ? 'https': 'https'
export const getApiPrefix = `api-${currentEnv}-`

// const env = ['test-', 'pre-', 'dev-']
// const { hostname } = window.location

// // 判断当前是哪个环境
// export const isDevEnv = () => {
//   return hostname.indexOf('dev-') === 0 || hostname === 'localhost'
// }

// export const isPreEnv = () => {
//   return hostname.indexOf('pre-') === 0
// }

// export const isTestEnv = () => {
//   return hostname.indexOf('test-') === 0
// }
// // 获取当前域名的前缀
// export const getDomainPrefix = () => {
//   // TODO: 待验证
//   let prefix = env.find(item => hostname.indexOf(item) === 0)
//   return prefix || ''
// }

// // 获取当前环境
// export const getEnv = () => {
//   let prefix = getDomainPrefix()
//   return prefix || 'prod'
// }

// // 当前api的前缀
// export const getApiPrefix = () => {
//   if (isDevEnv()) return 'dev-api-'
//   if (isTestEnv()) return 'test-api-'
//   if (isPreEnv()) return 'pre-api-'
//   return 'api-'
// }

// // api的请求头 http or https
// export const getApiHttp = () => {
//   if (isDevEnv()) return 'http'
//   if (isTestEnv()) return 'http'
//   if (isPreEnv()) return 'https'
//   return 'https'
// }
