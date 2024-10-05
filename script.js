const yakFacts = [
	{
		title: 'Scientific Name',
		fact: 'The scientific name for the domestic yak is Bos grunniens, while the wild yak is known as Bos mutus.',
	},
	{
		title: 'Domestication',
		fact: 'Yaks were domesticated in Tibet at least 3,000 years ago, and are still used for transportation, food, and fuel in Central Asia.',
	},
	{
		title: 'Physical Characteristics',
		fact: 'Yaks are characterized by their thick fur and upward-curving horns. They have a stocky build with a bulky frame and short legs.',
	},
	{
		title: 'Adaptations',
		fact: 'Yaks have larger lungs and hearts than cattle found at lower altitudes, allowing them to thrive in high altitude environments with low oxygen levels.',
	},
	{
		title: 'Diet',
		fact: 'Yaks are herbivores and graze on grasses, herbs, and lichens. They can digest plants that cattle cannot, due to their specialized digestive system.',
	},
	{
		title: 'Social Behavior',
		fact: 'Wild yaks typically form herds of between 10 and 100 individuals, consisting of females and their young. Adult males may form bachelor groups or live separately.',
	},
	{
		title: 'Conservation Status',
		fact: 'Wild yaks are listed as Vulnerable on the IUCN Red List due to hunting and habitat loss. Their population is estimated to be around 10,000 to 15,000 individuals.',
	},
	{
		title: 'Cultural Significance',
		fact: 'Yaks play a significant role in Tibetan culture and economy, providing milk, meat, fiber, and transportation in harsh mountain environments.',
	},
	{
		title: 'Yak Products',
		fact: 'Yak milk is often used to make butter, cheese, and yogurt. Yak fiber is used to make rope, blankets, and clothing.',
	},
	{
		title: 'Hybrid Vigor',
		fact: 'Yaks can be crossbred with cattle to produce offspring known as dzo or yakow, which often exhibit hybrid vigor and are valued for their productivity.',
	},
];

const yakStats = {
	wild: [
		{ label: 'Weight', value: 'Up to 1,000 kg (2,200 lbs)' },
		{
			label: 'Height',
			value: '1.6-2.2 meters (5.2-7.2 feet) at the shoulder',
		},
		{ label: 'Lifespan', value: '15-20 years' },
		{ label: 'Population', value: 'Approximately 10,000-15,000' },
	],
	domesticated: [
		{ label: 'Weight', value: '250-580 kg (550-1,280 lbs)' },
		{
			label: 'Height',
			value: '1.6-1.8 meters (5.2-5.9 feet) at the shoulder',
		},
		{ label: 'Lifespan', value: 'Up to 20 years' },
		{ label: 'Population', value: 'Over 14 million' },
	],
};

function displayYakStats() {
	const wildYakStatsContainer = document.getElementById('wild-yak-stats');
	const domesticatedYakStatsContainer = document.getElementById(
		'domesticated-yak-stats'
	);

	function createStatsList(stats, container) {
		stats.forEach((stat) => {
			const statItem = document.createElement('div');
			statItem.className = 'stat-item';
			statItem.innerHTML = `
				<span class="stat-label">${stat.label}:</span>
				<span class="stat-value">${stat.value}</span>
			`;
			container.appendChild(statItem);
		});
	}

	createStatsList(yakStats.wild, wildYakStatsContainer);
	createStatsList(yakStats.domesticated, domesticatedYakStatsContainer);
}

function displayYakFacts() {
	const yakFactsContainer = document.getElementById('yak-facts');

	yakFacts.forEach((fact) => {
		const factCard = document.createElement('div');
		factCard.className = 'col-md-4 mb-4';
		factCard.innerHTML = `
            <div class="card fact-card h-100">
                <div class="card-body">
                    <h5 class="card-title">${fact.title}</h5>
                    <p class="card-text">${fact.fact}</p>
                </div>
            </div>
        `;
		yakFactsContainer.appendChild(factCard);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	displayYakStats();
	displayYakFacts();
});
