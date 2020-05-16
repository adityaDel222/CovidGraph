window.onload = () => {
    fetch('https://api.covid19api.com/dayone/country/india/status/confirmed')
        .then(res => res.json())
        .then(data => {
            console.log(data[data.length - 1].Cases);
            displayGraph(data)
        })
        .catch(err => console.error(err));
    fetch('https://api.covid19api.com/dayone/country/germany/status/confirmed')
        .then(res => res.json())
        .then(data => {
            console.log(data[data.length - 1].Cases);
            displayGraph(data)
        })
        .catch(err => console.error(err));
    fetch('https://api.covid19api.com/dayone/country/italy/status/confirmed')
        .then(res => res.json())
        .then(data => {
            console.log(data[data.length - 1].Cases);
            displayGraph(data)
        })
        .catch(err => console.error(err));
    fetch('https://api.covid19api.com/dayone/country/spain/status/confirmed')
        .then(res => res.json())
        .then(data => {
            console.log(data[data.length - 1].Cases);
            displayGraph(data)
        })
        .catch(err => console.error(err));
    fetch('https://api.covid19api.com/dayone/country/pakistan/status/confirmed')
        .then(res => res.json())
        .then(data => {
            console.log(data[data.length - 1].Cases);
            displayGraph(data)
        })
        .catch(err => console.error(err));
    fetch('https://api.covid19api.com/dayone/country/south-korea/status/confirmed')
        .then(res => res.json())
        .then(data => {
            console.log(data[data.length - 1].Cases);
            displayGraph(data)
        })
        .catch(err => console.error(err));
}

const displayGraph = data => {
    let htmlString = ``;
    let hue = Math.floor(Math.random() * 361)
    for(let i = 0;i < data.length - 1 ; ++i) {
        htmlString += `
            <line
                x1="${ i * 3.85 }"
                y1="${ data[i].Cases / 150 }"
                x2="${ (i + 1) * 3.85 }"
                y2="${ data[i + 1].Cases / 150 }"
                style="stroke: hsl(${ hue }, 50%, 50%); stroke-width: 2"
            />
        `;
    }
    document.getElementById('graph').innerHTML += htmlString;
}