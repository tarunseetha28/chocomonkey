import React from 'react'
import './buymint.css'

function BuyMint() {
    return (
        <>
            <div className="buy-mint">
                <input className="mint-input" type="number" name="" id="" placeholder="Number of NFT's" />
                <div class="input-group-presuffix">
                    <span class="input-group-addon prefix">Price:{" "}</span>
                    <input className="mint-input" type="text" name="" id="" placeholder="0.00" />
                    <span class="input-group-addon suffix">ETH</span>
                </div>
                <button className="btn btn-nft">BUY NFT'S</button>
                <button className="btn btn-opn">BUY ON OPENSEA</button>
            </div>

            <div className="buy-mintM">
                <input className="mint-input mint-inputM" type="number" name="" id="" placeholder="Number of NFT's" />
                <div class="input-group-presuffix input-group-presuffixM">
                    <span class="input-group-addon prefix">Price:{" "}</span>
                    <input className="mint-input" type="text" name="" id="" placeholder="0.00" />
                    <span class="input-group-addon suffix">ETH</span>
                </div>
                <button className="btn btn-nft btn-nftM">BUY NFT'S</button>
                <button className="btn btn-opn btn-opnM">BUY ON OPENSEA</button>
            </div>
        </>
    )
}

export default BuyMint