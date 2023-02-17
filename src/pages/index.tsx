import Head from 'next/head'
import { CardanoWallet, useWallet } from '@meshsdk/react'
import { gettingStartedTx } from '@src/mesh'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardanoWallet />
        <TxExample />
      </main>
    </>
  )
}

const TxExample = () => {
  const { wallet } = useWallet()
  // const [loading, setLoading] = useState<boolean>(false)

  return (
    <div>
      <button
        onClick={async () => {
          const signedTx = await gettingStartedTx(wallet)
          const txHash = await wallet.submitTx(signedTx)
          console.log('Tx Submitted', txHash)
        }}>
        123
      </button>
    </div>
  )
}
