import { BrowserWallet, Transaction } from '@meshsdk/core'

export const gettingStartedTx = async (wallet: BrowserWallet): Promise<string> => {
  const tx = new Transaction({ initiator: wallet }).sendLovelace(
    'addr_test1qqr27ps7uyqfrsg6pkrwhfnhzec9ths4lghjatsu2dakkneqr062jqd50h9upf9k3h5tkw4vx5ww7fjcy9yd5swrld4skp4u6x',
    '2000000'
  )
  const unsignedTx = await tx.build()
  const signedTx = await wallet.signTx(unsignedTx)
  return signedTx
}
