const Scenario = function(id) {
    this.id = id;
    this.campaigns = new Map();
    this.currentCampaign = null;
}

Scenario.prototype.load = function(scenarioID) {
	const config = SCENARIOS[scenarioID];

	if(!config) {
		return;
	}

    const { campaigns } = config;

    for(let i = 0; i < campaigns.length; i++) {
        const campaignID = campaigns[i];
        const campaign = new Campaign(campaignID);

		campaign.load(campaignID);

		this.campaigns.set(campaignID, campaign);
    }
}