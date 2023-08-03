const { gql } = require('apollo-server');

const typeDefs = gql`

    type running_halt{
        uniqueid:String!
        Running:Float!
        Halt:Float!
    }
    type percentage{
        team:String!
        totalMatchesPlayed:Int!
        totalWins:Int!
        WinPercentage:Int!
    }

    type Query{
        get_running_halt:[running_halt!]!
        get_percentage:[percentage!]!
    }
`;

module.exports = { typeDefs };