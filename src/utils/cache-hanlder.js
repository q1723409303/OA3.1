import { get_power_group } from '@/api/account'
import { getList } from '@/api/product'

let power_group = []

export async function get_power_group_go () {
  if (power_group.length < 1) {
    await get_power_group().then(res => {
      power_group = res.data
      console.log(power_group);
    })
  }
  return power_group
}

export async function get_product_list () {
  if (product_list.length < 1) {
    await getList().then(res => {
      product_list = res.data
    })
  }
  return product_list
}
