import axios from "axios";
const API_KEY = "dc3dae4c986a4186918e9eb306954c12";


export default {
	getArticles(topic, starYear=2010, endYear=2018) {
		const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		let params = `?api-key=${API_KEY}`;
		params += `&q=${topic}`;
		if(parseInt(starYear, 10))
			params += `&begin_date=${starYear}0101`;
		if(parseInt(endYear, 10))
			params += `&end_date=${endYear}1231`;
		console.log(BASE_URL + params)
		return axios.get(BASE_URL + params);
		
	}
	
};