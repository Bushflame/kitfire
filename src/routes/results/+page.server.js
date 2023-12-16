
// import {getByTitles} from '$lib/stores/store'
// import { get } from "svelte/store";
// import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
// const db = getFirestore();


// export async function load() {
// // set arg for fetching
//   let titleRef
//     function add() {
//       titleRef = get(getByTitles);
//       console.log('titleRef from page.server', titleRef)
//     }
//     add()

//     /**
//    * @type {import("@firebase/firestore").DocumentData[]}
//    */
//     let results = []
//     const q = query(collection(db, "listings"), where("title_1a", "==", titleRef));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//         results.push(doc.data())
//         //console.log('doc from page.server',)
//       console.log(doc.id, " => ", doc.data().title_1a);
//     });
// 	return {
//         results
// 	};
// }