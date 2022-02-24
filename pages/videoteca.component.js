// DECLARACIÓN DE VARIABLES Y CONSTANTES
const videosContainer = document.getElementById('videos');
const channelsContainer = document.getElementById('channels');
const videoContainer = document.getElementById("videoContainer");
const videoViewer = document.getElementById("video");
const videosTitle = document.getElementById("videosTitle");
let videos;
let channels;

// ON INIT

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-175331439-1');

getJSON("https://acercandonos.firebaseio.com/videotec/videos.json")
.then(data => {
  videos = data;
  videos.sort(function (a, b) {
    if (a.dateupload < b.dateupload) {
      return 1;
    }
    if (a.dateupload > b.dateupload) {
      return -1;
    }
    return 0;
  });
  setVideos(videos);
  setVideo(videos.length - 1);
});

getJSON("https://acercandonos.firebaseio.com/videotec/channels.json")
.then(data => {
  channels = data;
  channels.forEach(channel => {
    channelElement = document.createElement('acrk-chanel');
    for (index in channel) {
      channelElement.setAttribute(index, channel[index]);
      channelElement.setAttribute('onclick', 'updateVideos(' + channel.id +', "' + channel.title + '")');
    }
    channelsContainer.appendChild(channelElement);
  });
});

window.addEventListener("resize", (e) => {
  resizeVideo(videoViewer);
});

// FUNCIONES
function setVideo(id) {
  videoContainer.innerHTML = null;
  videoPlay = document.createElement('acrk-video');
  const currentVideo = videos.filter(f => f['id'] === id)[0];
  for (index in currentVideo) {
    videoPlay.setAttribute(index, currentVideo[index]);
  }
  videoPlay.setAttribute('id', 'video');
  videoPlay.setAttribute('class', 'video');
  videoContainer.appendChild(videoPlay);
  window.scrollTo(0, videoContainer.offsetTop);
  videoPlay.style.height = videoPlay.offsetWidth  * 0.5636 + 'px';
}

function setVideos(videos) {
  videos.forEach(video => {
    videoContent = document.createElement('div');
    videoContent.setAttribute('class', 'col-md-6');
    videoElement = document.createElement('acrk-videolib');
    for (index in video) {
      videoElement.setAttribute(index, video[index]);
      videoElement.setAttribute('onclick', 'setVideo(' + video.id + ')');
    }
    videoContent.appendChild(videoElement);
    videosContainer.appendChild(videoContent);
  });
}

function updateVideos(channel_id, title) {
  videosContainer.innerHTML = null;
  const videoFilter = videos.filter(f => f['channel_id'] === channel_id);
  videosTitle.innerHTML = 'Canal de ' + title;
  setVideos(videoFilter);
}
function resizeVideo(videoStyle) {
  videoStyle.style.height = videoStyle.offsetWidth  * 0.5636 + 'px';
}

function getJSON(url, qs_params) {
  function buildQueryString(params) {
    return Object.entries(params).map(d => `${d[0]}=${d[1]}`).join('&');
  }
  return new Promise((resolve, reject) => {
    const qs = qs_params ? '?' + buildQueryString(qs_params) : '';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}${qs}`);
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        resolve(xhr.responseText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}