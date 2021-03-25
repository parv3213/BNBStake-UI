import './StakeCard.css';

function StakeCard() {
  return (
    <div className="StakeCard">
        <div class="flex-row" style={{justifyContent: "space-between", padding: "0 16px"}}>
            <p class="bg-txt">0.000</p>
            <p class="bg-txt">0.000</p>
        </div>
        <div class="flex-row" style={{justifyContent: "space-between", padding: "0 16px"}}>
            <p class="sm-txt">CAKE</p>
            <p class="sm-txt">CAKE</p>
        </div>

        <div class="progress">
            <div class="completed sm-txt">25%</div>
        </div>
    </div>
  );
}

export default StakeCard;