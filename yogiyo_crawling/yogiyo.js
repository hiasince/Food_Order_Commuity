const axios = require('axios');
const qs = require('query-string');




async function page(category, page, zip_code) {
    const params = qs.stringify({
	category,
	items: '20',  // 이거 높은숫자 쳐도 잘 작동함
	order: 'rank',
	page,
	search: '',
	zip_code
    });

    const url =`https://www.yogiyo.co.kr/api/v1/restaurants-geo/?${params}`;

    const headers = {
	"X-ApiKey": "iphoneap",
	"X-ApiSecret" : "fe5183cc3dea12bd0ce299cf110a75a2",
	"X-MOD-SBB-CTYPE" : "xhr"
    };

    try {
	const result = await axios.get(url, { headers });
	console.log(result.data);
	console.log("OK");
    } catch (error) {
	console.log(error);
	console.log("sorry");
    }

}


page("한식", 0, 151015);
