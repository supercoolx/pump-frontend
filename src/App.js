import React from 'react';
import Header from './Header';
import './App.css';
import { Button, Container, Accordion, Image } from 'react-bootstrap';

function App() {
	return (
		<div>
			<Header />
			<div className='d-flex flex-column text-center img1-back'>
				<h1 className='boreth'>$Pumps - on Bitcoin and Ethereum</h1>
				<div className='d-flex justify-content-center'>
					<h3 className='promise'>They promised to send you to the Moon. Pumps will send you to the gym!</h3>
				</div>
				<div className='poweredby'>Powered By <span>Runesbridge</span></div>
				<p className='production'>A V-Guy Production</p>
				<div style={{ marginBottom: "-45px" }}>
					<Button className='btn-contract'>Contract Address</Button>
				</div>
			</div>
			<div className='row'>
				<img className="col-1 transY" src="./coin1.png" />
			</div>
			{/* <div className='gradient-div'></div> */}
			<div className='row'>
				<div className='col-10 col-10'></div>
				<img src="./coin2.png" className='col-1 transY' />
				<div className='col-1'></div>
			</div>
			<Container className='mt-5'>
				<div className='row'>
					<div className='col-md-8'>
						<h3>About Us</h3>
						<h1>$Pumps is Launched on October 1st 2024</h1>
						<p>This historic event led to $Pumps being awesome and more and more people started going to the gym and getting Pumped. $Pumps is the number one meme coin for people who respect themselves</p>
						<p>$Pumps is powered by Runesbridge.xyz and produced by the Runesbridge Airdrop Guild.</p>
						<div className='row'>
							<div className='col-8' />
							<img src="./coin1.png" alt="coin1.png" className='mt-5 col-2 transY' />
							<div className='col-2' />
						</div>
					</div>
					<div className='col-md-4'>
						<img className='w-125' src="./img2.png" alt="img2.png" />
					</div>
				</div>
				<div>
					<img src='./img7.png' alt="img" className='stick-right' />
					<img src='./img8.png' alt="img" className='stick-left' />
				</div>
				<div className='row'>
					<div className='col-md-5 w-130'><img className='w-100' src="./img3.png" alt="img3" /></div>

					<div className='col-md-7 mt-5'>
						<h1 className='weight-600'>Feel the Burn</h1>
						<p>$Pumps Go To The Gym functions with a “Proof Of Burn” (POB) system. We will build toys which are fun inexpensive and cause people to burn tokens while having fun. Post a meme, burn some $Pumps, advertise your wellness or fitness product by burning some $pumps. Wanna buy a wacky gym meme that allows you the right to modify and commercialize as you see fit, burn some $pumps as well as pay the creator.</p>
					</div>
				</div>
			</Container>
			<Container fluid>
				<div className='d-flex justify-content-end mx-5'>
					<img src="./coin2.png" alt="img" className='transYDown-25' />
					<img src="./coin1.png" alt="img" className='transYDown' />
				</div>
				<div className='row img4-back p-5'>
					<div className='col-md-4'></div>
					<div className='col-md-8' style={{ paddingTop: '201px' }}>
						<h1 className='weight-600'>Burn Factory</h1>
						<h3 className='mt-5'>Did someone promise to bring you to the moon and they didn’t deliver? $Pumps will send you to the Gym. Going to the gym is healthy so telling everyone about Pumps might make people healthier</h3>
						<h3 className='mt-5'>We believe that anyone can understand and get onboard with $Pumps because we are <span className='color-primary font-size-30'>“Powered by Runesbridge”</span> to be both <span className='color-primary font-size-30'>ERC-20 and BTC Runes.</span></h3>
						<div className='my-5'>
							<div className='row gap-3'>
								<Button className='col-md-4 btn-bf'>$Pumps on Telegram</Button>
								<Button className='col-md-7 btn-bf'>Updates on Twitter</Button>
							</div>
							<div className='row gap-3 mt-3'>
								<Button className='col-md-4 btn-bf'>FunBot on Twitter</Button>
								<Button className='col-md-7 btn-bf'>The Runesbridge AirDrop Guild (RAG)</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container fluid className='p-0'>
				<div id="coin3-container" style={{ marginTop: '-120px' }}>
					<img id="coin3" src="./coin3.png" alt="img" style={{ width: '240px' }} />
				</div>
			</Container>
			<Container>
				<div>
					<div className='row d-flex justify-content-center gap-5'>
						<div className='card-small col-md-5'>
							<div className='round-rect'>
								<img src="./fire.svg" alt="img" className='icon' />
							</div>
							<h2 className='tg-bot p-5 text-center'>Telegram bot to post a meme, in exchange for a small burn of $pumps.</h2>
						</div>
						<div className='card-small col-md-5'>
							<div className='round-rect'>
								<img src="./people.svg" alt="img" className='icon' />
							</div>
							<h2 className='nft p-5'>Pumps will have an NFT marketplace where purchases award 80% to the creator and 20% gets burned.</h2>
						</div>
					</div>
					<div className='row d-flex justify-content-center'>
						<div className='card-small col-md-7 m-5'>
							<div className='round-rect'>
								<img src="./split.png" alt="img" className='icon-split' />
							</div>
							<h2 className='twitter p-5'>Twitter post bot, submit a meme and a burn offering via our website. Your request will be approved by a $pumps committee and if accepted your tokens are burned and your meme and post is automatically posted on our twitter.</h2>
						</div>
					</div>
				</div>
				<div>
					<h1 className='weight-600'>Roadmap</h1>
					<div className='row'>
						<div className='col-8'></div>
						<img src="./img4.png" alt="img" className='col-4 scale' />
					</div>
				</div>
				<div>
					<img src="./line.png" alt="img" className='w-100' />
					<img src="./coin1.png" alt="img" style={{ marginTop: "-50px" }} />
				</div>
				<div className='text-center'>
					<h3>Governance</h3>
					<h1>Governance of the $Pumps Token</h1>
					<p>Phased Committee-Based Governance Model</p>
					<div className='d-flex justify-content-center'>
						<h3 className='w-75'>The governance of the $Pumps token is designed to evolve with the growth and maturity of our community. Initially, committees will be formed with a focus on expediency and effectiveness, gradually transitioning to a more transparent and formal governance structure. This phased approach ensures both quick decision-making and long-term stability.</h3>
					</div>
				</div>
				<div className='d-flex justify-content-end'>
					<img src="./coin2.png"></img>
				</div>
				<div className='card-pt-98'>
					<h1 className='phase' style={{ marginLeft: '6%' }}>PHASE 1</h1>
					<div className=' d-flex justify-content-center phase-card'>
						<div className='card p-5'>
							<h1 className='text-center pt-5'>Initial Formation</h1>
							<h3 className='color-primary pt-5'>Mechanism:</h3>
							<h3 className='pt-2'>In the initial phase, the governance committees will be composed of trusted and knowledgeable individuals from the Runesbridge Airdrop Guild and the $Pumps community. These committees will be formed opaquely to expedite critical early decisions and set up the foundational governance structures.</h3>
							<h3 className='color-primary pt-5'>Committee Composition:</h3>
							<ul className='pt-2'>
								<li>Members from the Runesbridge Airdrop Guild</li>
								<li>Active members of the $Pumps community</li>
							</ul>
							<h3 className='color-primary pt-5'>Purpose:</h3>
							<ul className='pt-2'>
								<li>Establish foundational governance structures</li>
								<li>Make swift decisions to ensure community stability and growth</li>
							</ul>
							<h3 className='color-primary pt-5'>Authority:</h3>
							<ul className='pt-2'>
								<li>Committees will have broad authority to make necessary decisions during the initial phase.</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='card-pt-98'>
					<h1 className='phase' style={{ marginLeft: '12%' }}>PHASE 2</h1>
					<div className=' d-flex justify-content-center phase-card'>
						<div className='card p-5'>
							<h1 className='text-center pt-5'>Transition to Transparency</h1>
							<h3 className='color-primary pt-5'>Mechanism:</h3>
							<h3 className='pt-2'>As the community grows, we will introduce transparency and formalization in the committee selection and decision-making processes. Committee membership will be expanded to include broader community representation through a nomination and vetting process.</h3>
							<h3 className='color-primary pt-5'>Steps:</h3>
							<ul className='pt-2'>
								<li>Implement a nomination process where community members can suggest new committee members.</li>
								<li>Introduce periodic reporting from committees to the community.</li>
								<li>Begin documenting and publishing committee decisions and processes.</li>
							</ul>
							<h3 className='color-primary pt-5'>Goals:</h3>
							<ul className='pt-2'>
								<li>Increase community trust and involvement in governance</li>
								<li>Establish formal processes and structures for long-term stability</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='card-pt-98'>
					<h1 className='phase' style={{ marginLeft: '18%' }}>PHASE 3</h1>
					<div className=' d-flex justify-content-center phase-card'>
						<div className='card p-5'>
							<h1 className='text-center pt-5'>Full Transparency and Strict Governance</h1>
							<h3 className='color-primary pt-5'>Mechanism:</h3>
							<h3 className='pt-2'>In the final phase, we will fully transition to a transparent and formal governance model with strict rules and processes. This includes clear criteria and procedures for committee membership, regular elections, and the establishment of sub-committees or working groups for specialized tasks.</h3>
							<h3 className='color-primary pt-5'>Steps:</h3>
							<ul className='pt-2'>
								<li>Develop and publish detailed governance documents (bylaws, charters, etc.).</li>
								<li>Set up a transparent election process for committee members with defined term limits.</li>
								<li>Conduct regular audits and performance reviews of committees and sub-committees.</li>
								<li>Encourage active participation through structured feedback mechanisms and community engagement activities.</li>
							</ul>
							<h3 className='color-primary pt-5'>Goals:</h3>
							<ul className='pt-2'>
								<li>Ensure robust and accountable governance</li>
								<li>Provide clear roles and responsibilities, reducing the risk of mismanagement</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='card-pt-98'>
					<h1 className='phase' style={{ marginLeft: '24%' }}>PHASE 4</h1>
					<div className=' d-flex justify-content-center phase-card'>
						<div className='card p-5'>
							<h1 className='text-center pt-5'>Staking and Reward System</h1>
							<h3 className='color-primary pt-5'>Mechanism:</h3>
							<h3>To incentivize participation and reward those who serve on the governance committees, we will implement a staking and reward system.</h3>
							<h3 className='color-primary pt-5'>Steps:</h3>
							<ul className='pt-2'>
								<li>Members who serve on committees will be required to stake a certain amount of $Pumps tokens.</li>
								<li>In return for their service and commitment, these members will receive rewards in the form of additional $Pumps tokens.</li>
								<li> Rewards will be distributed based on the length of service and the contributions made to the governance process.</li>
							</ul>
							<h3 className='color-primary pt-5'>Goals:</h3>
							<ul className='pt-2'>
								<li>Encourage active participation in governance</li>
								<li>Reward commitment and valuable contributions to the community</li>
							</ul>
						</div>
					</div>
				</div>
				<div style={{ paddingTop: '112px' }}>
					<h1 className='text-center'>Safeguards and Mechanisms</h1>
					<div className='d-flex gap-5 flex-wrap justify-content-center'>
						<div className='moon-border d-flex align-items-center justify-content-center'>
							<span className='width-351px text-center'>Multi-Signature Wallets: Require multiple committee members to approve significant transactions, ensuring no single person has undue control.</span>
						</div>
						<div className='moon-border d-flex align-items-center justify-content-center'>
							<span className='width-351px text-center'>Transparency Milestones: Set clear milestones for increasing transparency, such as public reporting of decisions and financial audits.</span>
						</div>
						<div className='moon-border d-flex align-items-center justify-content-center'>
							<span className='width-351px text-center'>Feedback Mechanisms: Establish regular channels for community feedback and incorporate it into decision-making processes.</span>
						</div>
					</div>
					<div className='d-flex flex-wrap gap-5 mt-5 justify-content-center'>
						<div className='moon-border d-flex align-items-center justify-content-center'>
							<span className='width-351px text-center'>Proposal Thresholds: Define thresholds for proposal submission and approval, ensuring only well-supported initiatives move forward.</span>
						</div>
						<div className='moon-border d-flex align-items-center justify-content-center'>
							<span className='width-351px text-center'>Accountability Measures: Implement penalties or corrective actions for committee members who fail to perform or act against the community’s interests.</span>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-8'>
						<h1 className='col-md-8 card-pt-98'>Tokenomics</h1>
						<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
							<h3 className='flex-1 color-primary'>Name:</h3>
							<h3 className='flex-1 '>Pumps Go To The Gym</h3>
						</div>
						<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
							<h3 className='flex-1 color-primary '>ERC-20 Ticker:</h3>
							<h3 className='flex-1 '>$Pumps</h3>
						</div>
						<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
							<h3 className='flex-1 color-primary '>BTC Runes Ticker:</h3>
							<h3 className='flex-1 '>$Pumps*Go*To*The*Gym</h3>
						</div>
						<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
							<h3 className='flex-1 color-primary '>Total Tokens:</h3>
							<h3 className='flex-1 '>100,000,000</h3>
						</div>
						<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
							<h3 className='flex-1 color-primary '>ERC20 Launch Date:</h3>
							<h3 className='flex-1 '>April 1, 2024</h3>
						</div>
						<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
							<h3 className='flex-1 color-primary '>BTC Runes Launch Date:</h3>
							<h3 className='flex-1 '>February 1, 2025</h3>
						</div>
						<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
							<h3 className='flex-1 color-primary '>Listing Date:</h3>
							<h3 className='flex-1 '>October 1, 2024</h3>
						</div>
						<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
							<h3 className='flex-1 color-primary '>Powered By:</h3>
							<h3 className='flex-1 '>RunesBridge Airdrop Guild</h3>
						</div>
					</div>
					<div className='col-md-4'>
						<img src="./img5.png" alt="img" />
					</div>
				</div>
			</Container>
			<Container fluid>
				<div className='row card-pt-98'>
					<div className='col-md-5 p-0'>
						<img src="./img6.png" alt="img" className='w-100' style={{ marginTop: "-90px" }} />
					</div>
					<div className='col-md-6'>
						<div className='pr-5'>
							<h3 className='color-primary'>ERC20 Initial Airdrop Distribution:</h3>
							<div className='px-5'>
								<div className='d-lg-flex d-block flex-wrap mt-3 w-full justify-content-center flex-wrap'>
									<h3 className='flex-1 color-primary'>Percentage:</h3>
									<h3 className='flex-1'>24% (24,000,000 $Pumps)</h3>
								</div>
								<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
									<h3 className='flex-1 color-primary'>Recipients:</h3>
									<h3 className='flex-1'>3,300 RAG Wallets (Join RAG)</h3>
								</div>
							</div>
						</div>
						<div>
							<h3 className='color-primary'>ERC20 Second Airdrop Distribution:</h3>
							<div className='px-5'>
								<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
									<h3 className='flex-1 color-primary'>Percentage:</h3>
									<h3 className='flex-1'>26% (26,000,000 $Pumps)</h3>
								</div>
								<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
									<h3 className='flex-1 color-primary'>Recipients:</h3>
									<h3 className='flex-1'>10,000+ RAG Wallets (Join RAG)</h3>
								</div>
							</div>
						</div>
						<div>
							<h3 className='color-primary'>BTC Runes Third Airdrop Distribution:</h3>
							<div className='px-5'>
								<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
									<h3 className='flex-1 color-primary'>Percentage:</h3>
									<h3 className='flex-1'>34% (34,000,000 $Pumps)</h3>
								</div>
								<div className='d-lg-flex d-block flex-wrap gap-2 mt-3 w-full justify-content-center flex-wrap'>
									<h3 className='flex-1 color-primary'>Recipients:</h3>
									<h3 className='flex-1'>30,000+ RAG Wallets (Join RAG)</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className='card mt-5' style={{ backgroundColor: 'rgba(32,31,28,0.77) !important;' }}>
					<h1 className='text-center mt-5'>Frequently Asked Questions</h1>
					<Accordion bg="dark" data-bs-theme="dark" defaultActiveKey="0" className='m-5'>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Why is $Pumps so great?</Accordion.Header>
							<Accordion.Body>
								Because $Pumps Go To The Gym
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1" className='mt-2'>
							<Accordion.Header>How can I improve my life ?</Accordion.Header>
							<Accordion.Body>

							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2" className='mt-2'>
							<Accordion.Header>If you are experiencing awkwardness discussing crypto with your loved ones ?</Accordion.Header>
							<Accordion.Body>

							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3" className='mt-2'>
							<Accordion.Header>If you are experiencing stress?</Accordion.Header>
							<Accordion.Body>

							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4" className='mt-2'>
							<Accordion.Header>If you are tired ? Perhaps because your Neighbor’s tree is dropping leafs and causing you to spend your day cleaning up leafs, putting them in garbages bags and hauling them to the road. If this causes stress or tiredness.</Accordion.Header>
							<Accordion.Body>

							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5" className='mt-2'>
							<Accordion.Header>Don’t feel comfortable speaking with “that side of the family” because of politics ?</Accordion.Header>
							<Accordion.Body>

							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6" className='mt-2'>
							<Accordion.Header>
								Do you have to be in shape to like pumps go to the gym ?Do you have to be in shape to like pumps go to the gym ?
							</Accordion.Header>
							<Accordion.Body>

							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7" className='mt-2'>
							<Accordion.Header>So there was this guy named Dave, right?</Accordion.Header>
							<Accordion.Body>

							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</Container>
			<Container>
				<div className='d-flex justify-content-between m-5'>
					<div className='d-flex'>
						<span>Follow us on:</span>
						<div className='px-5'>
							<Image className='mx-2' src="./telegram.svg" width={43} />
							<Image className='mx-2' src="./twitter.png" width={43} />
						</div>
					</div>
					<div>
						<span>2024 © Copyright $Pumps. All Rights Reserved</span>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default App;
