import { useAccount, useSigner } from 'wagmi';
import { NFTQueries } from '../../types/react-query-hooks';

const Mint = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
  const contract = new NFTQueries("0xfc960a57125d506349e36c7afa5ccd9e7b02ae0a", 5)
  const { data: mintPrice } = contract.useMINT_PRICE();
  const { data: signer } = useSigner();
  console.log("signer in Mint", signer)

  return (
    <div className="card">
      <p>Mint</p>
      <p>
        {`Mint Price: ${mintPrice}`}
      </p>
      {!!address && !!signer && (<MintFunction address={address}/>)}
    </div>
  )
}

const MintFunction = ({ address }: { address: string; }) => {
  const contract = new NFTQueries("0xfc960a57125d506349e36c7afa5ccd9e7b02ae0a", 5)
  
  const mutation = contract.useMintTo(address);
  return (
    <button onClick={() => mutation.mutate({recipient: address})}>Mint</button>
  )
};

export default Mint
