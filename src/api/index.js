import axios from 'axios'
import host from '@/config/apiConfig'

//host 是域名 后面加接口
export const getUuid = () => axios.get(host + '/school/backend/login/getUuid');