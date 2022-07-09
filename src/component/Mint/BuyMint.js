import React from 'react'
import './buymint.css'

function BuyMint() {
    return (
        <>
            <div className="buy-mint">
                <input style={{ width: "15%" }} className="mint-input" type="number" name="" id="" placeholder="Number of NFT's" />
                <div style={{ width: "35%" }} class="input-group-presuffix">
                    <span class="input-group-addon prefix">Price:{" "}</span>
                    <input className="mint-input" type="text" name="" id="" placeholder="0.00" />
                    <span class="input-group-addon suffix">ETH</span>
                </div>
                <button style={{ width: "20%", fontWeight: 'bold' }} className="btn">MINT YOUR NFT'S</button>
                <button style={{ width: "25%", fontWeight: 'bold' }} className="btn">BUY ON OPENSEA</button>
            </div>
        </>
    )
}

export default BuyMint