const Scenario = function(id) {
    this.id = id;
    this.type = null
    this.campaigns = new Map();
}

Scenario.prototype.getCampaign = function(campaignID) {
    const campaign = this.campaigns.get(campaignID);

    if(!campaign) {
        return null;
    }

    return campaign;
}

Scenario.prototype.load = function(scenarioID) {
	const config = SCENARIOS[scenarioID];

	if(!config) {
		return;
	}

    this.id = scenarioID;
    this.type = config;
    
    const { campaigns } = config;

    for(let i = 0; i < campaigns.length; i++) {
        const campaignID = campaigns[i];
        const campaign = new Campaign(campaignID);

		campaign.load(campaignID);

		this.campaigns.set(campaignID, campaign);
    }
}