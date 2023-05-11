const env = process.env.NODE_ENV || 'test';
const config = {
    getConfig : function() {
        switch (env) {
            case 'test':
                return "mongodb://localhost/filmfanaticdb";
            case 'development':
                return "mongodb://localhost/filmfanaticdb";
            case 'production':
                return "";
            default: 
                return "mongodb://localhost/filmfanaticdb"
        }
    }
};

module.exports = config;