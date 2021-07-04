const axios = require('axios');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');

// launch type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: {type: GraphQLInt},
        launch_date_local: {type: GraphQLString},
        mission_name: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        launch_year: {type: GraphQLInt},
        rocket: {type: RocketType}
    })
});

// rocket type

const RocketType = new GraphQLObjectType({
    name: 'RocketType',
    fields: () => ({
        rocket_type: {type: GraphQLString},
        rocket_id: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
    })
});

// root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        launches : {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data)
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: {type: GraphQLInt},
            },
                resolve(parent, args){
                    return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                        .then(res => res.data)
                }
            },
        rockets: {
            type: RocketType,
            resolve(parent, args){
                return axios.get(`https://api.spacexdata.com/v3/launches/`)
                    .then(res => res.data)
            }
        },
        rocket: {
            type: RocketType,
            args: {
                id: {type: GraphQLInt},
            },
            resolve(parent, args){
                return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
                    .then(res => res.data)
            }
        }
        }

})
module.exports = new GraphQLSchema({
    query: RootQuery
})
