const { log } = require("console");
const {csv}= require("csvtojson")            
const fs= require('fs')

const resolvers={
    Query:{
        async get_running_halt(){
            const rawData= fs.readFileSync('schema/Longest_journey.json')
            const result=JSON.parse(rawData)
            a=result;
            console.log(a)
            return result
        },
        async get_percentage(){
            const rawData= fs.readFileSync('schema/Ipl_result.json')
            const result=JSON.parse(rawData)
            return result
        }  
    }
};

module.exports={resolvers}