import './Referr.css';
import bckImg from '../fondo-stake.jpg';
import React, {useState, useEffect}  from 'react';
import Spinner from "react-bootstrap/Spinner";
import {findUserDownline, getUserReferralAmount} from "../utils.js";

function Referr(props) {

    const [loading, setLoading] = useState(false);
    const [userDownline, setUserDownline] = useState(0);
    const [userReferralTotalBonus, setUserReferralTotalBonus] = useState(0);
    const [userReferralWithdrawn, setUserReferralWithdrawn] = useState(0);
    const [referralLink, setReferralLink] = useState("");
    // const [totalStake, setTotalStale] = useState(0);

    useEffect(() => {
        const init = async () => {
            try {
                setLoading(true);
                if (props.web3 === undefined) return;
                const account = (await props.web3.eth.getAccounts())[0]
                const userDownline = await findUserDownline(props.web3, account);
                const {totalBonus, bonusWithdrawn} = await getUserReferralAmount(props.web3, account);
                setUserDownline(userDownline);
                setUserReferralTotalBonus(totalBonus)
                setUserReferralWithdrawn(bonusWithdrawn)
                setReferralLink("https://www.xyz.app/?ref="+account);
                setLoading(false);
            } catch (e) {
                console.error(`Error at Referr ${e.message}`);
            }
        };
        init();
    }, [props])

  return (
		<div className="Referr">
			{loading === true ? <Spinner className="text-align-center" animation="border" role="status" /> : null}
			<p className="sm-txt" style={{ margin: 0, marginBottom: 15 }}>
				1. Important: Plans return are float and daily profit for a new deposit will increase by 0.5% daily
				<br></br>
				2. Minimum deposit amount is 0.05 BNB and you can have multiple deposits<br></br>
				3. Earnings every moment, withdraw instantly any time (if you did not use capitalization of interest in
				Plan 4, Plan 5 and Plan 6)
			</p>

			<div className="flex-row">
				<div
					id="staked"
					style={{
						backgroundImage: "url(" + bckImg + ")",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<p style={{ marginBottom: 0, marginTop: 0 }}>Total Stacked CAKE</p>
					<p className="bg-txt">0.00</p>
					<p style={{ marginBottom: 0, marginTop: 30 }}>Available BNB for withdrawal</p>
					<p className="bg-txt">0.00</p>
					<a className="cta-fw" style={{ marginTop: 30 }}>
						WITHDRAW CAKE
					</a>
				</div>

				<div id="referral">
					<div className="flex-col">
						<p className="sm-txt" style={{ margin: "0 0 16px 0" }}>
							Your Referral Link
						</p>

						<div className="flex-row">
							<div className="input">{referralLink}</div>
							<a
								className="cta"
								style={{ marginRight: 15 }}
								onClick={() => navigator.clipboard.writeText({ referralLink })}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									width="20"
									height="20"
									fill="currentColor"
									className="mt-0"
								>
									<path
										fillRule="evenodd"
										d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
									></path>
									<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
									<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
								</svg>
							</a>
						</div>

						<div className="flex-row" style={{ marginTop: 25 }}>
							<div className="flex-col" style={{ width: "33%", padding: 0 }}>
								<p className="sm-txt">Total Referral Earned</p>
								<p className="bg-txt">{userReferralTotalBonus}</p>
								<p className="sm-txt">Invited Users by You</p>
								<p className="bg-txt">{userDownline}</p>
							</div>

							<div className="flex-col" style={{ width: "33%", padding: 0 }}>
								<p className="sm-txt">Total Referral Withdrawn</p>
								<p className="bg-txt">{userReferralWithdrawn}</p>
							</div>

							<div className="flex-col" style={{ width: "33%", padding: 0 }}>
								<p className="sm-txt">Earn for promotion BNBstake</p>
								<p className="sm-txt">You will receive:</p>
								<br></br>
								<p className="sm-txt">5% from each level 1 referral deposits</p>
								<p className="sm-txt">2.5% from each level 2 referral deposits</p>
								<p className="sm-txt">0.5% from each level 3 referral deposits</p>
								<br></br>
								<p className="sm-txt italic">
									Note! You need to have at least 1 deposit to start receive earnings
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Referr;