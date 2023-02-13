import axios from 'axios'

// const USERS_REST_API_URL = 'http://airqualitymonitor-env.eba-mi5majjx.ap-northeast-1.elasticbeanstalk.com/list';
// const USERS_REST_API_URL1 = 'http://airqualitymonitor-env.eba-mi5majjx.ap-northeast-1.elasticbeanstalk.com/invalidData';
// const USERS_REST_API_URL2 = 'http://airqualitymonitor-env.eba-mi5majjx.ap-northeast-1.elasticbeanstalk.com/carbondioxide';
// const USERS_REST_API_URL3 = 'http://airqualitymonitor-env.eba-mi5majjx.ap-northeast-1.elasticbeanstalk.com/invalidcarbondioxide';
// const SEND_EMAIL = 'http://airqualitymonitor-env.eba-mi5majjx.ap-northeast-1.elasticbeanstalk.com/sendEmail';

const USERS_REST_API_URL = 'http://localhost:8080/list';
const USERS_REST_API_URL1 = 'http://localhost:8080/invalidData';
const USERS_REST_API_URL2 = 'http://localhost:8080/carbondioxide';
const USERS_REST_API_URL3 = 'http://localhost:8080/invalidcarbondioxide';
const SEND_EMAIL = 'http://localhost:8080/sendEmail';


class UserService {

    getList(){
        return axios.get(USERS_REST_API_URL);
    }

    getInvalidData(){
        return axios.get(USERS_REST_API_URL1);
    }

    sendEmail(){
        return axios.post(SEND_EMAIL);
    }

    getDustParticle(){
        return axios.get(USERS_REST_API_URL2);
    }
    
    getInvalidDustPartical(){
        return axios.get(USERS_REST_API_URL3);
    }
}

export default new UserService();