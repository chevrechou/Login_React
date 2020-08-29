import React, { Component } from 'react';

class Home extends Component {
    call(){
    
        fetch("https://genius.p.rapidapi.com/artists/16775/songs", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "514130934dmsh2daaa7ac7640d19p10cb35jsne75e2504da10"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Home;