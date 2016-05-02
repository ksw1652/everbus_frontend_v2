/**
 * Created by kimsungwoo on 2016. 3. 17..
 */
angular.module('everbus.services')
	.factory('remodelingPathlistService',[function(){
		return {
			remodel_pathList : function(pathList){
				//리모델링 되어 리턴되는 총 경로 객체
				var final_pathlist = [];

				//서비스에서 사용하기 위한 기차경로, 고속버스경로 객체
				var metro_pathList = undefined,
					bus_pathList = undefined,
					train_pathList = undefined,
					express_pathList = undefined;

				//리모델링 하여 객체를 모아주는 배열객체
				var remodeled_metroPathList = [],
					remodeled_busPathList = [],
					remodeled_trainPathList = [],
					remodeled_expressPathList = [];

				//경우의 수에 대한 4가지 경로 객체
				var temp_pathList_1 = {},
					temp_pathList_2 = {},
					temp_pathList_3 = {},
					temp_pathList_4 = {};

				console.log(pathList);


				/*final_pathlist.push(pathList[0]);*/
				/*final_pathlist.push(pathList[1]);*/

				//metro path data remodeling
				if(pathList[0].length != 0){
					metro_pathList = pathList[0];

					for(var i=0;i<metro_pathList.length; i++){
						if(metro_pathList[i].second_st.length != 0 && metro_pathList[i].second_ed.length != 0){
							if(metro_pathList[i].second_st[0].second_bus.length == 0 &&
								metro_pathList[i].second_st[0].second_metro.length != 0 &&
								metro_pathList[i].second_ed[0].second_bus.length != 0 &&
								metro_pathList[i].second_ed[0].second_metro.length != 0) {

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = metro_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = metro_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = metro_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = metro_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = metro_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = metro_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = metro_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = metro_pathList[i].second_ed[0].third_bus[0];

							} else if(metro_pathList[i].second_st[0].second_bus.length != 0 &&
								metro_pathList[i].second_st[0].second_metro.length == 0 &&
								metro_pathList[i].second_ed[0].second_bus.length != 0 &&
								metro_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = metro_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = metro_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = metro_pathList[i].first;
								temp_pathList_2.second_bus_st = metro_pathList[i].second_st[0].second_bus[0];
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_metro_ed = metro_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = metro_pathList[i].second_ed[0].third_bus[0];

							} else if(metro_pathList[i].second_st[0].second_bus.length != 0 &&
								metro_pathList[i].second_st[0].second_metro.length != 0 &&
								metro_pathList[i].second_ed[0].second_bus.length == 0 &&
								metro_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = metro_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_metro_ed = metro_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = metro_pathList[i].second_ed[0].third_bus[0];

								temp_pathList_2.first = metro_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = metro_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = metro_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = metro_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = metro_pathList[i].second_ed[0].third_bus[0];

							} else if(metro_pathList[i].second_st[0].second_bus.length != 0 &&
								metro_pathList[i].second_st[0].second_metro.length != 0 &&
								metro_pathList[i].second_ed[0].second_bus.length != 0 &&
								metro_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = metro_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = metro_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = metro_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = metro_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = metro_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = metro_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_2.second_metro_ed = undefined;
								temp_pathList_2.third_bus_ed = undefined;

							} else if(metro_pathList[i].second_st[0].second_bus.length == 0 &&
								metro_pathList[i].second_st[0].second_metro.length != 0 &&
								metro_pathList[i].second_ed[0].second_bus.length == 0 &&
								metro_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = metro_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = metro_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = metro_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = metro_pathList[i].second_ed[0].third_bus[0];

							} else if(metro_pathList[i].second_st[0].second_bus.length == 0 &&
								metro_pathList[i].second_st[0].second_metro.length != 0 &&
								metro_pathList[i].second_ed[0].second_bus.length != 0 &&
								metro_pathList[i].second_ed[0].second_metro.length == 0) {

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = metro_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = metro_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = metro_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(metro_pathList[i].second_st[0].second_bus.length != 0 &&
								metro_pathList[i].second_st[0].second_metro.length == 0 &&
								metro_pathList[i].second_ed[0].second_bus.length == 0 &&
								metro_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = metro_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = metro_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = metro_pathList[i].second_ed[0].third_bus[0];

							} else if(metro_pathList[i].second_st[0].second_bus.length != 0 &&
								metro_pathList[i].second_st[0].second_metro.length == 0 &&
								metro_pathList[i].second_ed[0].second_bus.length != 0 &&
								metro_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = metro_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = metro_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(metro_pathList[i].second_st[0].second_bus.length != 0 &&
								metro_pathList[i].second_st[0].second_metro.length != 0 &&
								metro_pathList[i].second_ed[0].second_bus.length != 0 &&
								metro_pathList[i].second_ed[0].second_metro.length != 0) {

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = metro_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = metro_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = metro_pathList[i].first;
								temp_pathList_2.second_bus_st = metro_pathList[i].second_st[0].second_bus[0];
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = metro_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = metro_pathList[i].second_ed[0].third_bus[0];

								temp_pathList_3.first = metro_pathList[i].first;
								temp_pathList_3.second_bus_st = undefined;
								temp_pathList_3.second_metro_st = metro_pathList[i].second_st[0].second_metro[0];
								temp_pathList_3.third_bus_st = metro_pathList[i].second_st[0].third_bus[0];
								temp_pathList_3.second_bus_ed = metro_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_3.second_metro_ed = undefined;
								temp_pathList_3.third_bus_ed = undefined;

								temp_pathList_4.first = metro_pathList[i].first;
								temp_pathList_4.second_bus_st = undefined;
								temp_pathList_4.second_metro_st = metro_pathList[i].second_st[0].second_metro[0];
								temp_pathList_4.third_bus_st = metro_pathList[i].second_st[0].third_bus[0];
								temp_pathList_4.second_bus_ed = undefined;
								temp_pathList_4.second_metro_ed = metro_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_4.third_bus_ed = metro_pathList[i].second_ed[0].third_bus[0];
							}

						} else if(metro_pathList[i].second_st.length != 0 && metro_pathList[i].second_ed.length == 0){
							if(metro_pathList[i].second_st[0].second_bus.length == 0 &&
								metro_pathList[i].second_st[0].second_metro.length != 0){
								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = metro_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = metro_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(metro_pathList[i].second_st[0].second_bus.length != 0 &&
								metro_pathList[i].second_st[0].second_metro.length == 0){

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = metro_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else {
								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = metro_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = metro_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = metro_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = metro_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = undefined;
								temp_pathList_2.third_bus_ed = undefined;
							}

						} else if(metro_pathList[i].second_st.length == 0 && metro_pathList[i].second_ed.length != 0){
							//서울역 --> 해운대
							if(metro_pathList[i].second_ed[0].second_bus.length == 0 &&
								metro_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = metro_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = metro_pathList[i].second_ed[0].third_bus[0];

							} else if(metro_pathList[i].second_ed[0].second_bus.length != 0 &&
								metro_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = metro_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else {
								temp_pathList_1.first = metro_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = metro_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = metro_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = metro_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = metro_pathList[i].second_ed[0].third_bus[0];

							}

						} else {
							//기차역 --> 기차역
							temp_pathList_1.first = metro_pathList[i].first;
							temp_pathList_1.second_bus_st = undefined;
							temp_pathList_1.second_metro_st = undefined;
							temp_pathList_1.third_bus_st = undefined;
							temp_pathList_1.second_bus_ed = undefined;
							temp_pathList_1.second_metro_ed = undefined;
							temp_pathList_1.third_bus_ed = undefined;
						}

						remodeled_metroPathList.push(temp_pathList_1);

						if(JSON.stringify(temp_pathList_2) != '{}'){
							remodeled_metroPathList.push(temp_pathList_2);
						}

						if(JSON.stringify(temp_pathList_3) != '{}'){
							remodeled_metroPathList.push(temp_pathList_3);
						}

						if(JSON.stringify(temp_pathList_4) != '{}'){
							remodeled_metroPathList.push(temp_pathList_4);
						}

						temp_pathList_1 = {};
						temp_pathList_2 = {};
						temp_pathList_3 = {};
						temp_pathList_4 = {};
					}
				}

				final_pathlist.push(remodeled_metroPathList);


				//bus path data remodeling
				if(pathList[1].length != 0){
					bus_pathList = pathList[1];

					for(var i=0;i<bus_pathList.length; i++){
						if(bus_pathList[i].second_st.length != 0 && bus_pathList[i].second_ed.length != 0){
							if(bus_pathList[i].second_st[0].second_bus.length == 0 &&
								bus_pathList[i].second_st[0].second_metro.length != 0 &&
								bus_pathList[i].second_ed[0].second_bus.length != 0 &&
								bus_pathList[i].second_ed[0].second_metro.length != 0) {

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = bus_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = bus_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = bus_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = bus_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = bus_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = bus_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = bus_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = bus_pathList[i].second_ed[0].third_bus[0];

							} else if(bus_pathList[i].second_st[0].second_bus.length != 0 &&
								bus_pathList[i].second_st[0].second_metro.length == 0 &&
								bus_pathList[i].second_ed[0].second_bus.length != 0 &&
								bus_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = bus_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = bus_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = bus_pathList[i].first;
								temp_pathList_2.second_bus_st = bus_pathList[i].second_st[0].second_bus[0];
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_metro_ed = bus_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = bus_pathList[i].second_ed[0].third_bus[0];

							} else if(bus_pathList[i].second_st[0].second_bus.length != 0 &&
								bus_pathList[i].second_st[0].second_metro.length != 0 &&
								bus_pathList[i].second_ed[0].second_bus.length == 0 &&
								bus_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = bus_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_metro_ed = bus_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = bus_pathList[i].second_ed[0].third_bus[0];

								temp_pathList_2.first = bus_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = bus_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = bus_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = bus_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = bus_pathList[i].second_ed[0].third_bus[0];

							} else if(bus_pathList[i].second_st[0].second_bus.length != 0 &&
								bus_pathList[i].second_st[0].second_metro.length != 0 &&
								bus_pathList[i].second_ed[0].second_bus.length != 0 &&
								bus_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = bus_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = bus_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = bus_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = bus_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = bus_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = bus_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_2.second_metro_ed = undefined;
								temp_pathList_2.third_bus_ed = undefined;

							} else if(bus_pathList[i].second_st[0].second_bus.length == 0 &&
								bus_pathList[i].second_st[0].second_metro.length != 0 &&
								bus_pathList[i].second_ed[0].second_bus.length == 0 &&
								bus_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = bus_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = bus_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = bus_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = bus_pathList[i].second_ed[0].third_bus[0];

							} else if(bus_pathList[i].second_st[0].second_bus.length == 0 &&
								bus_pathList[i].second_st[0].second_metro.length != 0 &&
								bus_pathList[i].second_ed[0].second_bus.length != 0 &&
								bus_pathList[i].second_ed[0].second_metro.length == 0) {

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = bus_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = bus_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = bus_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(bus_pathList[i].second_st[0].second_bus.length != 0 &&
								bus_pathList[i].second_st[0].second_metro.length == 0 &&
								bus_pathList[i].second_ed[0].second_bus.length == 0 &&
								bus_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = bus_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = bus_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = bus_pathList[i].second_ed[0].third_bus[0];

							} else if(bus_pathList[i].second_st[0].second_bus.length != 0 &&
								bus_pathList[i].second_st[0].second_metro.length == 0 &&
								bus_pathList[i].second_ed[0].second_bus.length != 0 &&
								bus_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = bus_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = bus_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(bus_pathList[i].second_st[0].second_bus.length != 0 &&
								bus_pathList[i].second_st[0].second_metro.length != 0 &&
								bus_pathList[i].second_ed[0].second_bus.length != 0 &&
								bus_pathList[i].second_ed[0].second_metro.length != 0) {

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = bus_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = bus_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = bus_pathList[i].first;
								temp_pathList_2.second_bus_st = bus_pathList[i].second_st[0].second_bus[0];
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = bus_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = bus_pathList[i].second_ed[0].third_bus[0];

								temp_pathList_3.first = bus_pathList[i].first;
								temp_pathList_3.second_bus_st = undefined;
								temp_pathList_3.second_metro_st = bus_pathList[i].second_st[0].second_metro[0];
								temp_pathList_3.third_bus_st = bus_pathList[i].second_st[0].third_bus[0];
								temp_pathList_3.second_bus_ed = bus_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_3.second_metro_ed = undefined;
								temp_pathList_3.third_bus_ed = undefined;

								temp_pathList_4.first = bus_pathList[i].first;
								temp_pathList_4.second_bus_st = undefined;
								temp_pathList_4.second_metro_st = bus_pathList[i].second_st[0].second_metro[0];
								temp_pathList_4.third_bus_st = bus_pathList[i].second_st[0].third_bus[0];
								temp_pathList_4.second_bus_ed = undefined;
								temp_pathList_4.second_metro_ed = bus_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_4.third_bus_ed = bus_pathList[i].second_ed[0].third_bus[0];
							}

						} else if(bus_pathList[i].second_st.length != 0 && bus_pathList[i].second_ed.length == 0){
							if(bus_pathList[i].second_st[0].second_bus.length == 0 &&
								bus_pathList[i].second_st[0].second_metro.length != 0){

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = bus_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = bus_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(bus_pathList[i].second_st[0].second_bus.length != 0 &&
								bus_pathList[i].second_st[0].second_metro.length == 0){

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = bus_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else {
								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = bus_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = bus_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = bus_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = bus_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = undefined;
								temp_pathList_2.third_bus_ed = undefined;
							}

						} else if(bus_pathList[i].second_st.length == 0 && bus_pathList[i].second_ed.length != 0){
							if(bus_pathList[i].second_ed[0].second_bus.length == 0 &&
								bus_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = bus_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = bus_pathList[i].second_ed[0].third_bus[0];

							} else if(bus_pathList[i].second_ed[0].second_bus.length != 0 &&
								bus_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = bus_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;
							} else {
								temp_pathList_1.first = bus_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = bus_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = bus_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = bus_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = bus_pathList[i].second_ed[0].third_bus[0];
							}

						} else {
							//기차역 --> 기차역
							temp_pathList_1.first = bus_pathList[i].first;
							temp_pathList_1.second_bus_st = undefined;
							temp_pathList_1.second_metro_st = undefined;
							temp_pathList_1.third_bus_st = undefined;
							temp_pathList_1.second_bus_ed = undefined;
							temp_pathList_1.second_metro_ed = undefined;
							temp_pathList_1.third_bus_ed = undefined;
						}

						remodeled_busPathList.push(temp_pathList_1);

						if(JSON.stringify(temp_pathList_2) != '{}'){
							remodeled_busPathList.push(temp_pathList_2);
						}

						if(JSON.stringify(temp_pathList_3) != '{}'){
							remodeled_busPathList.push(temp_pathList_3);
						}

						if(JSON.stringify(temp_pathList_4) != '{}'){
							remodeled_busPathList.push(temp_pathList_4);
						}

						temp_pathList_1 = {};
						temp_pathList_2 = {};
						temp_pathList_3 = {};
						temp_pathList_4 = {};
					}
				}

				final_pathlist.push(remodeled_busPathList);

				if(pathList[2].length != 0){

					/**
					 * 우선 기차와 고속버스에 대해서만 리모델링을 진행
					 * 순서에 맞게 출력할 수 있도록 배열을 재구성함.
					 * 버스 + 기차 + 버스  --> 1가지                  temp_pathList_1
					 * 버스 + 기차 + 지하철 + 버스 --> 1가지            temp_pathList_2
					 * 버스 + 지하철 + 기차 + 버스 --> 1가지            temp_pathList_3
					 * 버스 + 지하철 + 기차 + 지하철 + 버스 --> 1가지     temp_pathList_4
					 * 총 4가지
					 *
					 * 개별 분기 필요. 버스정류장 아이디가 같으면 함께 표시.
					 */

						//기차로 가는 경로가 존재한다면
					train_pathList = pathList[2];

					for(var i=0;i<train_pathList.length; i++){
						if(train_pathList[i].second_st.length != 0 && train_pathList[i].second_ed.length != 0){
							//변수 4개 (출발지 버스, 출발지 버스+지하철, 도착지 버스, 도착지 버스+지하철)
							//존재 하지 않으면 경로는 2개가 됨.


							//데이터가 1개씩 없는 경우와 2개가 없는 경우 (한 쪽에 2개가 없을 순 없음)
							if(train_pathList[i].second_st[0].second_bus.length == 0 &&
								train_pathList[i].second_st[0].second_metro.length != 0 &&
								train_pathList[i].second_ed[0].second_bus.length != 0 &&
								train_pathList[i].second_ed[0].second_metro.length != 0) {

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = train_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = train_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = train_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = train_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = train_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = train_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = train_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = train_pathList[i].second_ed[0].third_bus[0];

							} else if(train_pathList[i].second_st[0].second_bus.length != 0 &&
								train_pathList[i].second_st[0].second_metro.length == 0 &&
								train_pathList[i].second_ed[0].second_bus.length != 0 &&
								train_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = train_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = train_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = train_pathList[i].first;
								temp_pathList_2.second_bus_st = train_pathList[i].second_st[0].second_bus[0];
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_metro_ed = train_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = train_pathList[i].second_ed[0].third_bus[0];

							} else if(train_pathList[i].second_st[0].second_bus.length != 0 &&
								train_pathList[i].second_st[0].second_metro.length != 0 &&
								train_pathList[i].second_ed[0].second_bus.length == 0 &&
								train_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = train_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_metro_ed = train_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = train_pathList[i].second_ed[0].third_bus[0];

								temp_pathList_2.first = train_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = train_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = train_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = train_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = train_pathList[i].second_ed[0].third_bus[0];

							} else if(train_pathList[i].second_st[0].second_bus.length != 0 &&
								train_pathList[i].second_st[0].second_metro.length != 0 &&
								train_pathList[i].second_ed[0].second_bus.length != 0 &&
								train_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = train_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = train_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = train_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = train_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = train_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = train_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_2.second_metro_ed = undefined;
								temp_pathList_2.third_bus_ed = undefined;

							} else if(train_pathList[i].second_st[0].second_bus.length == 0 &&
								train_pathList[i].second_st[0].second_metro.length != 0 &&
								train_pathList[i].second_ed[0].second_bus.length == 0 &&
								train_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = train_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = train_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = train_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = train_pathList[i].second_ed[0].third_bus[0];

							} else if(train_pathList[i].second_st[0].second_bus.length == 0 &&
								train_pathList[i].second_st[0].second_metro.length != 0 &&
								train_pathList[i].second_ed[0].second_bus.length != 0 &&
								train_pathList[i].second_ed[0].second_metro.length == 0) {

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = train_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = train_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = train_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(train_pathList[i].second_st[0].second_bus.length != 0 &&
								train_pathList[i].second_st[0].second_metro.length == 0 &&
								train_pathList[i].second_ed[0].second_bus.length == 0 &&
								train_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = train_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = train_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = train_pathList[i].second_ed[0].third_bus[0];

							} else if(train_pathList[i].second_st[0].second_bus.length != 0 &&
								train_pathList[i].second_st[0].second_metro.length == 0 &&
								train_pathList[i].second_ed[0].second_bus.length != 0 &&
								train_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = train_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = train_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(train_pathList[i].second_st[0].second_bus.length != 0 &&
								train_pathList[i].second_st[0].second_metro.length != 0 &&
								train_pathList[i].second_ed[0].second_bus.length != 0 &&
								train_pathList[i].second_ed[0].second_metro.length != 0) {

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = train_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = train_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = train_pathList[i].first;
								temp_pathList_2.second_bus_st = train_pathList[i].second_st[0].second_bus[0];
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = train_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = train_pathList[i].second_ed[0].third_bus[0];

								temp_pathList_3.first = train_pathList[i].first;
								temp_pathList_3.second_bus_st = undefined;
								temp_pathList_3.second_metro_st = train_pathList[i].second_st[0].second_metro[0];
								temp_pathList_3.third_bus_st = train_pathList[i].second_st[0].third_bus[0];
								temp_pathList_3.second_bus_ed = train_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_3.second_metro_ed = undefined;
								temp_pathList_3.third_bus_ed = undefined;

								temp_pathList_4.first = train_pathList[i].first;
								temp_pathList_4.second_bus_st = undefined;
								temp_pathList_4.second_metro_st = train_pathList[i].second_st[0].second_metro[0];
								temp_pathList_4.third_bus_st = train_pathList[i].second_st[0].third_bus[0];
								temp_pathList_4.second_bus_ed = undefined;
								temp_pathList_4.second_metro_ed = train_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_4.third_bus_ed = train_pathList[i].second_ed[0].third_bus[0];
							}

						} else if(train_pathList[i].second_st.length != 0 && train_pathList[i].second_ed.length == 0){
							if(train_pathList[i].second_st[0].second_bus.length == 0 &&
								train_pathList[i].second_st[0].second_metro.length != 0){

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = train_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = train_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(train_pathList[i].second_st[0].second_bus.length != 0 &&
								train_pathList[i].second_st[0].second_metro.length == 0){

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = train_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else {
								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = train_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = train_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = train_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = train_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = undefined;
								temp_pathList_2.third_bus_ed = undefined;
							}

						} else if(train_pathList[i].second_st.length == 0 && train_pathList[i].second_ed.length != 0){
							if(train_pathList[i].second_ed[0].second_bus.length == 0 &&
								train_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = train_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = train_pathList[i].second_ed[0].third_bus[0];

							} else if(train_pathList[i].second_ed[0].second_bus.length != 0 &&
								train_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = train_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else {
								temp_pathList_1.first = train_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = train_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = train_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = train_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = train_pathList[i].second_ed[0].third_bus[0];
							}

						} else {
							//기차역 --> 기차역
							temp_pathList_1.first = train_pathList[i].first;
							temp_pathList_1.second_bus_st = undefined;
							temp_pathList_1.second_metro_st = undefined;
							temp_pathList_1.third_bus_st = undefined;
							temp_pathList_1.second_bus_ed = undefined;
							temp_pathList_1.second_metro_ed = undefined;
							temp_pathList_1.third_bus_ed = undefined;
						}

						remodeled_trainPathList.push(temp_pathList_1);

						if(JSON.stringify(temp_pathList_2) != '{}'){
							remodeled_trainPathList.push(temp_pathList_2);
						}

						if(JSON.stringify(temp_pathList_3) != '{}'){
							remodeled_trainPathList.push(temp_pathList_3);
						}

						if(JSON.stringify(temp_pathList_4) != '{}'){
							remodeled_trainPathList.push(temp_pathList_4);
						}

						temp_pathList_1 = {};
						temp_pathList_2 = {};
						temp_pathList_3 = {};
						temp_pathList_4 = {};
					}
				}

				final_pathlist.push(remodeled_trainPathList);


				if(pathList[3].length != 0){
					//기차로 가는 경로가 존재한다면
					express_pathList = pathList[3];

					for(var i=0;i<express_pathList.length; i++){
						if(express_pathList[i].second_st.length != 0 && express_pathList[i].second_ed.length != 0){
							//변수 4개 (출발지 버스, 출발지 버스+지하철, 도착지 버스, 도착지 버스+지하철)
							//존재 하지 않으면 경로는 2개가 됨.


							//데이터가 1개씩 없는 경우와 2개가 없는 경우 (한 쪽에 2개가 없을 순 없음)
							if(express_pathList[i].second_st[0].second_bus.length == 0 &&
								express_pathList[i].second_st[0].second_metro.length != 0 &&
								express_pathList[i].second_ed[0].second_bus.length != 0 &&
								express_pathList[i].second_ed[0].second_metro.length != 0) {

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = express_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = express_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = express_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = express_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = express_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = express_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = express_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = express_pathList[i].second_ed[0].third_bus[0];

							} else if(express_pathList[i].second_st[0].second_bus.length != 0 &&
								express_pathList[i].second_st[0].second_metro.length == 0 &&
								express_pathList[i].second_ed[0].second_bus.length != 0 &&
								express_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = express_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = express_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = express_pathList[i].first;
								temp_pathList_2.second_bus_st = express_pathList[i].second_st[0].second_bus[0];
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_metro_ed = express_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = express_pathList[i].second_ed[0].third_bus[0];

							} else if(express_pathList[i].second_st[0].second_bus.length != 0 &&
								express_pathList[i].second_st[0].second_metro.length != 0 &&
								express_pathList[i].second_ed[0].second_bus.length == 0 &&
								express_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = express_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_metro_ed = express_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = express_pathList[i].second_ed[0].third_bus[0];

								temp_pathList_2.first = express_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = express_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = express_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = express_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = express_pathList[i].second_ed[0].third_bus[0];

							} else if(express_pathList[i].second_st[0].second_bus.length != 0 &&
								express_pathList[i].second_st[0].second_metro.length != 0 &&
								express_pathList[i].second_ed[0].second_bus.length != 0 &&
								express_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = express_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = express_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = express_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = express_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = express_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = express_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_2.second_metro_ed = undefined;
								temp_pathList_2.third_bus_ed = undefined;

							} else if(express_pathList[i].second_st[0].second_bus.length == 0 &&
								express_pathList[i].second_st[0].second_metro.length != 0 &&
								express_pathList[i].second_ed[0].second_bus.length == 0 &&
								express_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = express_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = express_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = express_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = express_pathList[i].second_ed[0].third_bus[0];

							} else if(express_pathList[i].second_st[0].second_bus.length == 0 &&
								express_pathList[i].second_st[0].second_metro.length != 0 &&
								express_pathList[i].second_ed[0].second_bus.length != 0 &&
								express_pathList[i].second_ed[0].second_metro.length == 0) {

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = express_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = express_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = express_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(express_pathList[i].second_st[0].second_bus.length != 0 &&
								express_pathList[i].second_st[0].second_metro.length == 0 &&
								express_pathList[i].second_ed[0].second_bus.length == 0 &&
								express_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = express_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = express_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = express_pathList[i].second_ed[0].third_bus[0];

							} else if(express_pathList[i].second_st[0].second_bus.length != 0 &&
								express_pathList[i].second_st[0].second_metro.length == 0 &&
								express_pathList[i].second_ed[0].second_bus.length != 0 &&
								express_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = express_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = express_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(express_pathList[i].second_st[0].second_bus.length != 0 &&
								express_pathList[i].second_st[0].second_metro.length != 0 &&
								express_pathList[i].second_ed[0].second_bus.length != 0 &&
								express_pathList[i].second_ed[0].second_metro.length != 0) {

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = express_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = express_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = express_pathList[i].first;
								temp_pathList_2.second_bus_st = express_pathList[i].second_st[0].second_bus[0];
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = express_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = express_pathList[i].second_ed[0].third_bus[0];

								temp_pathList_3.first = express_pathList[i].first;
								temp_pathList_3.second_bus_st = undefined;
								temp_pathList_3.second_metro_st = express_pathList[i].second_st[0].second_metro[0];
								temp_pathList_3.third_bus_st = express_pathList[i].second_st[0].third_bus[0];
								temp_pathList_3.second_bus_ed = express_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_3.second_metro_ed = undefined;
								temp_pathList_3.third_bus_ed = undefined;

								temp_pathList_4.first = express_pathList[i].first;
								temp_pathList_4.second_bus_st = undefined;
								temp_pathList_4.second_metro_st = express_pathList[i].second_st[0].second_metro[0];
								temp_pathList_4.third_bus_st = express_pathList[i].second_st[0].third_bus[0];
								temp_pathList_4.second_bus_ed = undefined;
								temp_pathList_4.second_metro_ed = express_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_4.third_bus_ed = express_pathList[i].second_ed[0].third_bus[0];

							}

						} else if(express_pathList[i].second_st.length != 0 && express_pathList[i].second_ed.length == 0){
							if(express_pathList[i].second_st[0].second_bus.length == 0 &&
								express_pathList[i].second_st[0].second_metro.length != 0){

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = express_pathList[i].second_st[0].second_metro[0];
								temp_pathList_1.third_bus_st = express_pathList[i].second_st[0].third_bus[0];
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else if(express_pathList[i].second_st[0].second_bus.length != 0 &&
								express_pathList[i].second_st[0].second_metro.length == 0){

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = express_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else {
								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = express_pathList[i].second_st[0].second_bus[0];
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = express_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = express_pathList[i].second_st[0].second_metro[0];
								temp_pathList_2.third_bus_st = express_pathList[i].second_st[0].third_bus[0];
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = undefined;
								temp_pathList_2.third_bus_ed = undefined;
							}

						} else if(express_pathList[i].second_st.length == 0 && express_pathList[i].second_ed.length != 0){
							if(express_pathList[i].second_ed[0].second_bus.length == 0 &&
								express_pathList[i].second_ed[0].second_metro.length != 0){

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = undefined;
								temp_pathList_1.second_metro_ed = express_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_1.third_bus_ed = express_pathList[i].second_ed[0].third_bus[0];


							} else if(express_pathList[i].second_ed[0].second_bus.length != 0 &&
								express_pathList[i].second_ed[0].second_metro.length == 0){

								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = express_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

							} else {
								temp_pathList_1.first = express_pathList[i].first;
								temp_pathList_1.second_bus_st = undefined;
								temp_pathList_1.second_metro_st = undefined;
								temp_pathList_1.third_bus_st = undefined;
								temp_pathList_1.second_bus_ed = express_pathList[i].second_ed[0].second_bus[0];
								temp_pathList_1.second_metro_ed = undefined;
								temp_pathList_1.third_bus_ed = undefined;

								temp_pathList_2.first = express_pathList[i].first;
								temp_pathList_2.second_bus_st = undefined;
								temp_pathList_2.second_metro_st = undefined;
								temp_pathList_2.third_bus_st = undefined;
								temp_pathList_2.second_bus_ed = undefined;
								temp_pathList_2.second_metro_ed = express_pathList[i].second_ed[0].second_metro[0];
								temp_pathList_2.third_bus_ed = express_pathList[i].second_ed[0].third_bus[0];
							}

						} else {
							//기차역 --> 기차역
							temp_pathList_1.first = express_pathList[i].first;
							temp_pathList_1.second_bus_st = undefined;
							temp_pathList_1.second_metro_st = undefined;
							temp_pathList_1.third_bus_st = undefined;
							temp_pathList_1.second_bus_ed = undefined;
							temp_pathList_1.second_metro_ed = undefined;
							temp_pathList_1.third_bus_ed = undefined;
						}

						remodeled_expressPathList.push(temp_pathList_1);

						if(JSON.stringify(temp_pathList_2) != '{}'){
							remodeled_expressPathList.push(temp_pathList_2);
						}

						if(JSON.stringify(temp_pathList_3) != '{}'){
							remodeled_expressPathList.push(temp_pathList_3);
						}

						if(JSON.stringify(temp_pathList_4) != '{}'){
							remodeled_expressPathList.push(temp_pathList_4);
						}

						temp_pathList_1 = {};
						temp_pathList_2 = {};
						temp_pathList_3 = {};
						temp_pathList_4 = {};
					}
				}

				final_pathlist.push(remodeled_expressPathList);

				console.log(final_pathlist);

				return final_pathlist;

			}
		}
	}]);
