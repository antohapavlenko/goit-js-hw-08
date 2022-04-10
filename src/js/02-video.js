import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    

    player.on('timeupdate', throttle((function(event) {
        console.log('played the video!');
        localStorage.setItem("videoplayer-current-time", event.seconds)
    }), 3000)
    );


    
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });


    

   

    