Page({
  data: {
    markers: [
      {
      iconPath: "/image/Bicycle.png",
      id: 0,
      latitude: 28.718258937567192,
      longitude: 115.82927764285277,
      width: 50,
      height: 50
    },
    {
      iconPath: "/image/Bicycle.png",
      id: 12,
      latitude: 28.717258937567192,
      longitude: 115.82527764285277,
      width: 50,
      height: 50
    }
    
  ],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onLoad() {
    let markers = this.data.markers
    for (let i = 0; i < 10; i++) {
      markers.push({
        iconPath: "/image/Bicycle.png",
        id: i,
        latitude: Number(`28.71${i}258937567192`),
        longitude: Number(`115.82${i}27764285277`),
        width: 50,
        height: 50
      })
    }
    this.setData({
      markers: markers
    })
    console.log(this.data.markers)
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})