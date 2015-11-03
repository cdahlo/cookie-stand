var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var pikePlace = {
  name: 'pike',
  min: 17,
  max: 88,
  avg: 5.2,
  salesHour: [],
  dailyTotal: 0,

  getIt: function() {
     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
   },

  totalEachHour: function() {
    for (var i=0; i < hours.length; i++) {
      this.salesHour.push(Math.floor(this.avg * this.getIt()));
      console.log(this.salesHour);
      this.salesHour.textContent;
      this.dailyTotal += this.salesHour[i];
      console.log(this.dailyTotal);
    }
  },

  display: function() {
    for (var i = 0; i < pikePlace.salesHour.length; i++) {
      var node = document.createElement('li');
      var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
      node.appendChild(textNode);
      document.getElementById('list1').appendChild(node);
    };
    var totalNode = document.createElement('li')
    totalNode.innerHTML = 'Total: ' + this.dailyTotal;
    document.getElementById('list1').appendChild(totalNode);
  }


}


var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var seaTac = {
  name: 'sea',
  min: 8,
  max: 44,
  avg: 1.2,
  salesHour: [],
  dailyTotal: 0,

  getIt: function() {
     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
   },

  totalEachHour: function() {
    for (var i=0; i < hours.length; i++) {
      this.salesHour.push(Math.floor(this.avg * this.getIt()));
      console.log(this.salesHour);
      this.dailyTotal += this.salesHour[i];
      console.log(this.dailyTotal);
    }
  },

  display: function() {
    for (var i = 0; i < seaTac.salesHour.length; i++) {
      var node = document.createElement('li');
      var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
      node.appendChild(textNode);
      document.getElementById('list1').appendChild(node);
    };
    var totalNode = document.createElement('li')
    totalNode.innerHTML = 'Total: ' + this.dailyTotal;
    document.getElementById('list1').appendChild(totalNode);
  }
}

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var south = {
  name: 'south',
  min: 11,
  max: 38,
  avg: 1.9,
  salesHour: [],
  dailyTotal: 0,

  getIt: function() {
     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
   },

  totalEachHour: function() {
    for (var i=0; i < hours.length; i++) {
      this.salesHour.push(Math.floor(this.avg * this.getIt()));
      console.log(this.salesHour);
      this.dailyTotal += this.salesHour[i];
      console.log(this.dailyTotal);
    }
  },

  display: function() {
    for (var i = 0; i < south.salesHour.length; i++) {
      var node = document.createElement('li');
      var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
      node.appendChild(textNode);
      document.getElementById('list1').appendChild(node);
    };
    var totalNode = document.createElement('li')
    totalNode.innerHTML = 'Total: ' + this.dailyTotal;
    document.getElementById('list1').appendChild(totalNode);
  }

}

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var bellevue = {
  name: 'bell',
  min: 20,
  max: 48,
  avg: 3.3,
  salesHour: [],
  dailyTotal: 0,

  getIt: function() {
     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
   },

  totalEachHour: function() {
    for (var i=0; i < hours.length; i++) {
      this.salesHour.push(Math.floor(this.avg * this.getIt()));
      console.log(this.salesHour);
      this.dailyTotal += this.salesHour[i];
      console.log(this.dailyTotal);
    }
  },

  display: function() {
    for (var i = 0; i < bellevue.salesHour.length; i++) {
      var node = document.createElement('li');
      var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
      node.appendChild(textNode);
      document.getElementById('list1').appendChild(node);
    };
    var totalNode = document.createElement('li')
    totalNode.innerHTML = 'Total: ' + this.dailyTotal;
    document.getElementById('list1').appendChild(totalNode);
  }

}

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var alki = {
  name: 'alki',
  min: 3,
  max: 24,
  avg: 2.6,
  salesHour: [],
  dailyTotal: 0,

  getIt: function() {
     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
   },

  totalEachHour: function() {
    for (var i=0; i < hours.length; i++) {
      this.salesHour.push(Math.floor(this.avg * this.getIt()));
      console.log(this.salesHour);
      this.dailyTotal += this.salesHour[i];
      console.log(this.dailyTotal);
    }
  },
  display: function() {
    for (var i = 0; i < alki.salesHour.length; i++) {
      var node = document.createElement('li');
      var textNode = document.createTextNode(hours[i]+ ': '+ this.salesHour[i]);
      node.appendChild(textNode);
      document.getElementById('list1').appendChild(node);
    };
    var totalNode = document.createElement('li')
    totalNode.innerHTML = 'Total: ' + this.dailyTotal;
    document.getElementById('list1').appendChild(totalNode);
  }

}

pikePlace.totalEachHour();
pikePlace.display();
seaTac.totalEachHour();
seaTac.display();
south.totalEachHour();
south.display();
bellevue.totalEachHour();
bellevue.display();
alki.totalEachHour();
alkiPlace.display();


