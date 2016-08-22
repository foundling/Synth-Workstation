var Workstation = function(config) {

    this.config = config;
    this.activeModules = [];

    console.log('workstation loaded with config: %s', this.config);
}

export default Workstation; 
