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

var location = new location (document.getElementById'location', document.getElementById'max', document.getElementById'min', (document.getElementById 'avg'* document.getElementById'cookies'));

location.totalEachHour();
location.display();

