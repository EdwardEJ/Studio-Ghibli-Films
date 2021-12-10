const Axios = require('axios');

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLSchema,
} = require('graphql');

//Ghibli Movie List

const GhibliMoviesType = new GraphQLObjectType({
	name: 'GhibliMovies',
	description: 'List of Ghibli Studio Films',
	fields: () => ({
		id: { type: GraphQLString },
		title: { type: GraphQLString },
		original_title: { type: GraphQLString },
		original_title_romanised: { type: GraphQLString },
		image: { type: GraphQLString },
		director: { type: GraphQLString },
		producer: { type: GraphQLString },
		release_date: { type: GraphQLString },
		rt_score: { type: GraphQLString },
	}),
});

//Film by ID

const FilmType = new GraphQLObjectType({
	name: 'Film',
	description: 'Individual Ghibli Film',
	fields: () => ({
		id: { type: GraphQLString },
		title: { type: GraphQLString },
		description: { type: GraphQLString },
		director: { type: GraphQLString },
		producer: { type: GraphQLString },
		release_date: { type: GraphQLString },
		image: { type: GraphQLString },
		people: {
			type: GraphQLString,
			resolve(obj) {
				return obj.people.toString();
			},
		},
	}),
});

//List of Ghibli People

const PeopleType = new GraphQLObjectType({
	name: 'GhibliPeople',
	description: 'List of Ghibli Characters',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		gender: { type: GraphQLString },
		eye_color: { type: GraphQLString },
		hair_color: { type: GraphQLString },
		films: {
			type: GraphQLString,
			resolve(obj) {
				return obj.films[0]; //using resolve takes in the whole current object?
			},
		},
	}),
});

//Ghibli Person by ID

const PersonType = new GraphQLObjectType({
	name: 'GhibliPerson',
	description: 'Individual Ghibli Person',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		gender: { type: GraphQLString },
		eye_color: { type: GraphQLString },
		hair_color: { type: GraphQLString },
		films: {
			type: GraphQLString,
			resolve(obj) {
				return obj.films[0]; //using resolve takes in the whole current object?
			},
		},
	}),
});

//Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Root Query',
	fields: {
		Movies: {
			type: new GraphQLList(GhibliMoviesType),
			resolve() {
				return Axios.get('https://ghibliapi.herokuapp.com/films').then(
					(res) => {
						return res.data;
					}
				);
			},
		},
		Film: {
			type: FilmType,
			args: {
				id: { type: GraphQLString },
			},
			resolve(parent, args) {
				return Axios.get(
					`https://ghibliapi.herokuapp.com/films/${args.id}`
				).then((res) => res.data);
			},
		},
		People: {
			type: new GraphQLList(PeopleType),
			resolve() {
				return Axios.get('https://ghibliapi.herokuapp.com/people').then(
					(res) => res.data
				);
			},
		},
		Person: {
			type: PersonType,
			args: {
				id: { type: GraphQLString },
			},
			resolve(parent, args) {
				return Axios.get(
					`https://ghibliapi.herokuapp.com/people/${args.id}`
				).then((res) => res.data);
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
