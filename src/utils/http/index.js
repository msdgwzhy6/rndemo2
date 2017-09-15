import axios from 'axios';
import qs from 'querystring';
import baseConfig from '../../common/httpBaseConfig.js';
axios.defaults.baseURL = baseConfig.baseUrl + ':' + baseConfig.port + baseConfig.prefix;

// fetch感觉略麻烦，不清爽，直接引了个axios，用es7写的。
export default class http {
  static async get(url, params) {
    /**
     * params{
     *  goods：id，
     *  name：string
     * } ==> ?goods=id&name=string
     */
    try {
      let query = await qs.stringify(params)
      let res = null;
      if (!params) {
        res = await axios.get(url)
      } else {
        res = await axios.get(url + '?' + query)
      }
      return res
    } catch (error) {
      return error
    }
  }
  static async post(url, params) {
    try {
      let res = await axios.post(url, params)
      return res
    } catch (error) {
      return error
    }
  }
  static async patch(url, params) {
    try {
      let res = await axios.patch(url, params)
      return res
    } catch (error) {
      return error
    }
  }
  static async put(url, params) {
    try {
      let res = await axios.put(url, params)
      return res
    } catch (error) {
      return error
    }
  }
  static async delete(url, params) {
    /**
     * params默认为数组
     */
    try {
      let res = await axios.post(url, params)
      return res
    } catch (error) {
      return error
    }
  }
}