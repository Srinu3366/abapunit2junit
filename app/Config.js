const argv = require("yargs")
    .describe('host', 'Netweaver Host')
    .describe('password','Password')
    .describe('username','Username')
    .choices('protocol',['http','https'])
    .describe('protocol',"HTTP or HTTPS")
    .default('protocol','https')
    .describe('insecure', "Allow untrusted ssl certificates")
    .default('insecure',false)
    .describe('package', 'ABAP Package containing the unit tests')
    .describe('out', "Output file")
    .default('out', 'result/output.xml')
    .demandOption(['host', 'username','password','package'], '').argv;

var configuration;

function Config(  ) {
    this.configuration = initialize();
}



/**
 * Initialize variables needed
 * @param Setting parameters
 */
function initialize(  ) {
    const config =
        {
            network : {
                host : argv.host,
                protocol : argv.protocol, 
                insecure :  argv.insecure,  
            },
            auth : {
                username : argv.username ,
                password : argv.password, 
            },
            test : {
                package: argv.package, 
            },
            result :{
                file : argv.out,
            }

        }
        return config; 
    
}


module.exports = Config;