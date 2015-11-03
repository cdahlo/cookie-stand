var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', 'Total'];
var tbl = document.createElement('table');

function CookieStand(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesHour = [];
  this.dailyTotal = 0;
  this.getIt = function() {
     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
   };
  this.totalEachHour = function() {
    for (var i=0; i < hours.length; i++) {
      this.salesHour.push(Math.floor(this.avg * this.getIt()));
      console.log(this.salesHour);
      this.salesHour.textContent;
      this.dailyTotal += this.salesHour[i];
      console.log(this.dailyTotal);
    };
  }
  this.display = function() {

    var trElement = document.createElement('tr');
    var tdShopName = document.createElement('td');
    tdShopName.textContent = this.name;
    trElement.appendChild(tdShopName);
    for (var i = 0; i < this.salesHour.length; i++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = this.salesHour[i];
      trElement.appendChild(tdElement);
    }
      tdElement.textContent = this.dailyTotal;
      trElement.appendChild(tdElement);
    tbl.appendChild(trElement);
      document.body.appendChild(tbl);
  };

  this.time = function() {

    var trElement = document.createElement('tr');


    for (var i = -1; i < this.salesHour.length; i++) {
      var thElement = document.createElement('th');

      thElement.textContent = hours[i];
      trElement.appendChild(thElement);
    }
    tbl.appendChild(trElement);
      document.body.appendChild(tbl);
  };
      // var node = document.createElement('li');
      // var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
      // node.appendChild(textNode);
      // document.getElementById('list1').appendChild(node);


    // var totalNode = document.createElement('li')
    // totalNode.innerHTML = 'Total: ' + this.dailyTotal;
    // document.getElementById('list1').appendChild(totalNode);
  };

var pikePlace = new CookieStand ("Pike Place", 17, 88, 5.2);
var seaTac = new CookieStand ("Sea Tac", 8, 44, 1.2);
var southCenter = new CookieStand ("South Center", 11, 38, 1.9);
var bellevue = new CookieStand ("Bellevue Square", 20, 48, 3.3);
var alki = new CookieStand ("Alki", 3, 24, 2.6);

pikePlace.totalEachHour();
pikePlace.time();
pikePlace.display();

seaTac.totalEachHour();
seaTac.display();

southCenter.totalEachHour();
southCenter.display();

bellevue.totalEachHour();
bellevue.display();

alki.totalEachHour();
alki.display();


// var pikePlace = {
//   name: 'pike',
//   min: 17,
//   max: 88,
//   avg: 5.2,
//   salesHour: [],
//   dailyTotal: 0,

//   getIt: function() {
//      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//    },

//   totalEachHour: function() {
//     for (var i=0; i < hours.length; i++) {
//       this.salesHour.push(Math.floor(this.avg * this.getIt()));
//       console.log(this.salesHour);
//       this.salesHour.textContent;
//       this.dailyTotal += this.salesHour[i];
//       console.log(this.dailyTotal);
//     }
//   },

//   display: function() {
//     for (var i = 0; i < pikexPlace.salesHour.length; i++) {
//       var node = document.createElement('li');
//       var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
//       node.appendChild(textNode);
//       document.getElementById('list1').appendChild(node);
//     };
//     var totalNode = document.createElement('li')
//     totalNode.innerHTML = 'Total: ' + this.dailyTotal;
//     document.getElementById('list1').appendChild(totalNode);
//   }


// }


// var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

// var seaTac = {
//   name: 'sea',
//   min: 8,
//   max: 44,
//   avg: 1.2,
//   salesHour: [],
//   dailyTotal: 0,

//   getIt: function() {
//      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//    },

//   totalEachHour: function() {
//     for (var i=0; i < hours.length; i++) {
//       this.salesHour.push(Math.floor(this.avg * this.getIt()));
//       console.log(this.salesHour);
//       this.dailyTotal += this.salesHour[i];
//       console.log(this.dailyTotal);
//     }
//   },

//   display: function() {
//     for (var i = 0; i < seaTac.salesHour.length; i++) {
//       var node = document.createElement('li');
//       var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
//       node.appendChild(textNode);
//       document.getElementById('list1').appendChild(node);
//     };
//     var totalNode = document.createElement('li')
//     totalNode.innerHTML = 'Total: ' + this.dailyTotal;
//     document.getElementById('list1').appendChild(totalNode);
//   }
// }

// var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

// var south = {
//   name: 'south',
//   min: 11,
//   max: 38,
//   avg: 1.9,
//   salesHour: [],
//   dailyTotal: 0,

//   getIt: function() {
//      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//    },

//   totalEachHour: function() {
//     for (var i=0; i < hours.length; i++) {
//       this.salesHour.push(Math.floor(this.avg * this.getIt()));
//       console.log(this.salesHour);
//       this.dailyTotal += this.salesHour[i];
//       console.log(this.dailyTotal);
//     }
//   },

//   display: function() {
//     for (var i = 0; i < south.salesHour.length; i++) {
//       var node = document.createElement('li');
//       var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
//       node.appendChild(textNode);
//       document.getElementById('list1').appendChild(node);
//     };
//     var totalNode = document.createElement('li')
//     totalNode.innerHTML = 'Total: ' + this.dailyTotal;
//     document.getElementById('list1').appendChild(totalNode);
//   }

// }

// var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

// var bellevue = {
//   name: 'bell',
//   min: 20,
//   max: 48,
//   avg: 3.3,
//   salesHour: [],
//   dailyTotal: 0,

//   getIt: function() {
//      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//    },

//   totalEachHour: function() {
//     for (var i=0; i < hours.length; i++) {
//       this.salesHour.push(Math.floor(this.avg * this.getIt()));
//       console.log(this.salesHour);
//       this.dailyTotal += this.salesHour[i];
//       console.log(this.dailyTotal);
//     }
//   },

//   display: function() {
//     for (var i = 0; i < bellevue.salesHour.length; i++) {
//       var node = document.createElement('li');
//       var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
//       node.appendChild(textNode);
//       document.getElementById('list1').appendChild(node);
//     };
//     var totalNode = document.createElement('li')
//     totalNode.innerHTML = 'Total: ' + this.dailyTotal;
//     document.getElementById('list1').appendChild(totalNode);
//   }

// }

// var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

// var alki = {
//   name: 'alki',
//   min: 3,
//   max: 24,
//   avg: 2.6,
//   salesHour: [],
//   dailyTotal: 0,

//   getIt: function() {
//      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//    },

//   totalEachHour: function() {
//     for (var i=0; i < hours.length; i++) {
//       this.salesHour.push(Math.floor(this.avg * this.getIt()));
//       console.log(this.salesHour);
//       this.dailyTotal += this.salesHour[i];
//       console.log(this.dailyTotal);
//     }
//   },
//   display: function() {
//     for (var i = 0; i < alki.salesHour.length; i++) {
//       var node = document.createElement('li');
//       var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
//       node.appendChild(textNode);
//       document.getElementById('list1').appendChild(node);
//     };
//     var totalNode = document.createElement('li')
//     totalNode.innerHTML = 'Total: ' + this.dailyTotal;
//     document.getElementById('list1').appendChild(totalNode);
//   }

// }

// pikePlace.totalEachHour();
// pikePlace.display();
// seaTac.totalEachHour();
// seaTac.display();
// south.totalEachHour();
// south.display();
// bellevue.totalEachHour();
// bellevue.display();
// alki.totalEachHour();
// alkiPlace.display();


