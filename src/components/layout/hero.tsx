import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className='h-dvh'>
      <div>
        <h1 className='font-raleway font-bold text-2xl sm:text-4xl'>
          Trusted Multi-Chain <span className='text-accent'>DEX</span> Platform
        </h1>
        <p className='text-dimmed'>
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
      </div>
      <div>
        <Button>Connect Wallet</Button>
        <Button>Trade Crypto</Button>
      </div>
    </section>
  );
};
