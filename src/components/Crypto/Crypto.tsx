import "./Crypto.css";
import img1 from "../../assets/image (1)-Picsart-AiImageEnhancer.jpg";
import img2 from "../../assets/image (11)-Picsart-AiImageEnhancer.jpg";
const Crypto = () => {
  return (
    <div>
      <header className="header5">
        <div className="contnr">
          <div className="firstBox">
            <h4>Cryptocurrency</h4>
            <p>
              Working with you to understand your life goals and develop a
              personalized wealth strategy. Today and for the years to come.
            </p>
            <ul>
              <li>401(k) Rollovers Global Accessibility</li>
              <li>Wealth Accumulation Plans</li>
              <li>Financial Independence</li>
              <li>Diversification</li>
              <li>Passive Income Generation</li>
              <li>Global Accessibility</li>
            </ul>
            <button>Learn More</button>
          </div>
          <div className="imgInLink">
            <a href="">
              <div className="secondBox">
                <h2>
                  BITCOIN AND FINANCIAL FREEDOM: UNLOCKING THE POTENTIAL OF
                  CRYPTOCURRENCY
                </h2>
                <p>
                  Introduction: In the ever-evolving landscape of finance,
                  cryptocurrency has emerged as a disriptive force with the
                  potential to revolutionalize the concept of financial freedom.
                  Bitcoin, the pioneering cryptocurrency, has garnered
                  significant attention as a means to achieve financial
                  independence. In this article, we will explore the concept of
                  cryptocurrency, with a specific focus on Bitcoin.
                </p>
              </div>
              <div className="thirdBox">
                <img src={img1} alt="" />
              </div>
            </a>
          </div>
        </div>

        <div className="contnr">
          <div className="firstBox">
            <h4>Forex Trade</h4>
            <p>
              Provides an opportunity to break free from the limitations of
              traditional employment and achieve financial independence.
            </p>
            <ul>
              <li>Capital Growth</li>
              <li>Wealth Accumulation Plans</li>
              <li>Portfolio Diversification</li>
              <li>Passive Income Generation</li>
              <li>Global Market Exposure</li>
              <li>Lifestyle Flexibility</li>
            </ul>
            <button>Learn More</button>
          </div>
          <div className="imgInLink">
            <a href="">
              <div className="secondBox">
                <h2>
                  UNVEILING THE SECRETS OF FOREX TRADING HARNESSING MARKET
                  TRENDS FOR PROFITABILITY
                </h2>
                <p>
                  Introduction: "Forec trading holds the promise of financial
                  freedom, where astute traders navigate market trends to unlock
                  a world of profit-making opportunities".- Unknown in the vast
                  landscape of financial markets, the forex market stands out as
                  a dynamic and captivating arenafor individuals seeking to grow
                  their wealth with it's immense liquidity and global
                  accessibility.
                </p>
              </div>
              <div className="thirdBox">
                <img src={img2} alt="" />
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Crypto;
