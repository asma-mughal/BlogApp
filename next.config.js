const { PHASE_PRODUCTION_SERVER, PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports =(phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env :{
        mongodb_username: 'testadmin',
        mongodb_password: 'SjEUSeNa2tqT5kNS', 
        mongodb_clustername: 'cluster0',
        mongodb_database: 'retryWrites'
      },
    }
  }
  return {
    env :{
      mongodb_username: 'testadmin',
      mongodb_password: 'SjEUSeNa2tqT5kNS', 
      mongodb_clustername: 'cluster0',
      mongodb_database: 'retryWrites'
    },
  }
  
};
