import React from "react";
import Lyra from "./svgs/Lyra";
import Triangle from "./svgs/Triangle";
import Arbitrum from "./svgs/Arbitrum";
import Opp from "./svgs/Opp";
import Missing from "./svgs/Missing";
import heroImage from "../assets/heroImage.png";


const Hero = () => {
  return (
    <div className="hero">
      <div className="title" role="heading">
        Capital Efficient Options Trading
      </div>
      <p>
        One click multi leg options trades, capital efficient spreads, <br />
        automatically hedged vaults, and more.
      </p>

      <div className="mid-text">BUILT ON</div>
      <div className="lyra-triangle">
        <Lyra />
        <Missing />
        <Triangle />
      </div>
      <div className="mid-text">AVAILABLE ON</div>
      <div className="arbi-op">
        <Arbitrum />
        <Opp />
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="dashboard image" className="heroimage" />
      </div>

      {/* text-section */}

      <div className="hero-box-txt">
        <div className="main-heading">COMMUNITY DRIVEN </div>
        <div className="sub-heading">TOOLS FOR EVERYONE</div>

        <div className="main-box">
          <div className="box">
            <div className="heading">Trade Options</div>
            <div className="sub">
              Trade capital efficient option spreads. Traders just need to post
              the max loss possible and Otus handles the rest.
            </div>
          </div>
          <div className="box">
            <div className="heading">Provide Liquidity</div>
            <div className="sub">
              Earn fees from option spread traders, no withdrawal fees, capital
              is automatically hedged.
            </div>
          </div>
          <div className="box">
            <div className="heading">Ranged Markets</div>
            <div className="sub">
              Easily bet on the market direction through IN or OUT tokens.
            </div>
          </div>
          <div className="box">
            <div className="heading">Earn Vaults</div>
            <div className="sub">
              Create your own unique and private or public options vault with
              hedging tools.
            </div>
          </div>
          <div className="box">
            <div className="heading">Trade One Click Option Strategies</div>
            <div className="sub">
              Execute multi leg trades on Lyra and other platforms in 1 click
              with Otus.
            </div>
          </div>
          <div className="box">
            <div className="heading">One Click Hedge</div>
            <div className="sub">Hedge your Lyra position with one click.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
