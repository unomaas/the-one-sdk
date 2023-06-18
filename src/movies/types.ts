// /movie: {
//   "docs": [
//     {
//       "_id": "5cd95395de30eff6ebccde56",
//       "name": "The Lord of the Rings Series",
//       "runtimeInMinutes": 558,
//       "budgetInMillions": 281,
//       "boxOfficeRevenueInMillions": 2917,
//       "academyAwardNominations": 30,
//       "academyAwardWins": 17,
//       "rottenTomatoesScore": 94
//     },
//     {
//       "_id": "5cd95395de30eff6ebccde57",
//       "name": "The Hobbit Series",
//       "runtimeInMinutes": 462,
//       "budgetInMillions": 675,
//       "boxOfficeRevenueInMillions": 2932,
//       "academyAwardNominations": 7,
//       "academyAwardWins": 1,
//       "rottenTomatoesScore": 66.33333333
//     },
//     {
//       "_id": "5cd95395de30eff6ebccde58",
//       "name": "The Unexpected Journey",
//       "runtimeInMinutes": 169,
//       "budgetInMillions": 200,
//       "boxOfficeRevenueInMillions": 1021,
//       "academyAwardNominations": 3,
//       "academyAwardWins": 1,
//       "rottenTomatoesScore": 64
//     },
//     {
//       "_id": "5cd95395de30eff6ebccde59",
//       "name": "The Desolation of Smaug",
//       "runtimeInMinutes": 161,
//       "budgetInMillions": 217,
//       "boxOfficeRevenueInMillions": 958.4,
//       "academyAwardNominations": 3,
//       "academyAwardWins": 0,
//       "rottenTomatoesScore": 75
//     },
//     {
//       "_id": "5cd95395de30eff6ebccde5a",
//       "name": "The Battle of the Five Armies",
//       "runtimeInMinutes": 144,
//       "budgetInMillions": 250,
//       "boxOfficeRevenueInMillions": 956,
//       "academyAwardNominations": 1,
//       "academyAwardWins": 0,
//       "rottenTomatoesScore": 60
//     },
//     {
//       "_id": "5cd95395de30eff6ebccde5b",
//       "name": "The Two Towers",
//       "runtimeInMinutes": 179,
//       "budgetInMillions": 94,
//       "boxOfficeRevenueInMillions": 926,
//       "academyAwardNominations": 6,
//       "academyAwardWins": 2,
//       "rottenTomatoesScore": 96
//     },
//     {
//       "_id": "5cd95395de30eff6ebccde5c",
//       "name": "The Fellowship of the Ring",
//       "runtimeInMinutes": 178,
//       "budgetInMillions": 93,
//       "boxOfficeRevenueInMillions": 871.5,
//       "academyAwardNominations": 13,
//       "academyAwardWins": 4,
//       "rottenTomatoesScore": 91
//     },
//     {
//       "_id": "5cd95395de30eff6ebccde5d",
//       "name": "The Return of the King",
//       "runtimeInMinutes": 201,
//       "budgetInMillions": 94,
//       "boxOfficeRevenueInMillions": 1120,
//       "academyAwardNominations": 11,
//       "academyAwardWins": 11,
//       "rottenTomatoesScore": 95
//     }
//   ],
//   "total": 8,
//   "limit": 1000,
//   "offset": 0,
//   "page": 1,
//   "pages": 1
// }

// /movie/${id}: {
// 	"_id": "5cd95395de30eff6ebccde56",
// 	"name": "The Lord of the Rings Series",
// 	"runtimeInMinutes": 558,
// 	"budgetInMillions": 281,
// 	"boxOfficeRevenueInMillions": 2917,
// 	"academyAwardNominations": 30,
// 	"academyAwardWins": 17,
// 	"rottenTomatoesScore": 94
// }

export declare type Movie = {
	_id: string;
	name: string;
	runtimeInMinutes: number;
	budgetInMillions: number;
	boxOfficeRevenueInMillions: number;
	academyAwardNominations: number;
	academyAwardWins: number;
	rottenTomatoesScore: number;
}; // End type Movie