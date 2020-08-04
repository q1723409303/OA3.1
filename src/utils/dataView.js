/**
 * @param {*} data.msg
 * @param {string} data.request
 */
import { isString } from '@/utils/validate'

export function serverCodeReturn(data) {
  let msg = ''
  if (isString(data.msg)) {
    return addHtmlSpan(data.msg) + '<br/>' + addHtmlSpan('接口：' + data.request)
  } else if(data.msg) {
    for (const key of Object.keys(data.msg)) {
      msg += addHtmlSpan(key + ':' + data.msg[key]) + '<br/>'
    }
  }
  return msg || '链接拒绝访问'
}

function addHtmlSpan(str) {
  return '<span style="line-height: 20px">' + str + '</span>'
}

export const EDITION_CH = {grade:'年级',subject:'科目',edition:'版本',chapter:'章',node:'节',knowledge:'知识点'}
