import { showLoadingToast, closeToast } from 'vant'

export function withLoading(fn, opt = true) {
  return async (parmas, options = opt) => {
    if (typeof options === 'boolean' && options) {
      options = { duration: 0, forbidClick: true, message: 'Loading' }
    } else if (typeof options === 'string') {
      options = { duration: 0, forbidClick: true, message: options }
    }
    const toast = options ? showLoadingToast(options) : null
    try {
      const res = await fn(parmas)
      toast && closeToast()
      return res
    } catch (err) {
      toast && closeToast()
      throw err
    }
  }
}
