export const createUseAccount = web3 => () => {
  return {
    account: web3 ? 'test' : 'null'
  }
}
