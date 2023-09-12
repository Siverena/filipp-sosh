import common from '@/stores/data/d-common.js';
import { defineStore } from 'pinia';

async function API(category) {
	if (category) {
		return {data: [common.data.find((el) => el.category === category)]}
	} else {
		return common;
	}
}

export const useCommonStore = defineStore('CommonStore', {
	state: () => {
		return {
			common: [],
		};
	},
	getters: {
		getCommon(state) {
			return state.common;
		},
	},
	actions: {
		//mutations
		SET_COMMON(common) {
			this.common = common;
		},
		//actions
		async fetchCommon(category = null) {
			API(category)
				.then((data) => {
					// console.log(data);
					this.SET_COMMON(data.data);
				})
				.catch((e) => {
					console.log(e);
				});
		},
	},
});