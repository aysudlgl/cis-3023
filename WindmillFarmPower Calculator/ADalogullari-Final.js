//Aysu Dalogullari, CIS-3023, MAY 3 3023, FINAL EXAM//
      
class windmill {
    constructor(windmillID, turbine, velocity, density) {
      this.windmillID = windmillID;
      this.turbine = turbine;
      this.velocity = velocity;
      this.density = density;
      this.total = 0;
    }
  
    power() {
      return 1/2*this.density*(3.14159*(Math.pow(this.turbine/2,2)))*((Math.pow(this.velocity,3))); 
    }
  }
  
  const Windmills = [];
  
  Windmills[0] = new windmill("KS1234", 12, 10, 1.2);
  Windmills[1] = new windmill("KS5678", 33, 12, 1.3);
  Windmills[2] = new windmill("KS3456", 22, 14, 1.4);
  Windmills[3] = new windmill("KS8901", 34, 16, 1.5);
  Windmills[4] = new windmill("KS8976", 21, 18, 1.6);
  
  function windmills() {
    let bwindmillID = document.getElementById("windmillID").value;
    let bturbine = document.getElementById("turbine").value;
    let bvelocity = document.getElementById("velocity").value;
    let bdensity = document.getElementById("density").value;
    Windmills.push(new windmill(bwindmillID, bturbine, bvelocity, bdensity));
  }
  
  function calcTOTAL() {
    var total = 0;
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < Windmills.length && i < rows.length; i++) {
      var linetotal = Windmills[i].power();
      Windmills[i].total = linetotal;
      rows[i].getElementsByTagName('input')[1].value = linetotal;
      total += linetotal;
    }
    document.getElementById('total').value = total;
  }
  
  onload = function () {
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
      rows[i].getElementsByTagName('input')[1].onkeyup = calcTOTAL;
    }
  }
  
  function displayPower() {
    // Shortened sort statement
    Windmills.sort((a,b) => (a.power() - b.power()))
    // Initialize Display Text with a Header
    let displayText = "<h4>WindmillPower</h4><hr><br>";
    // Add the list
        for (obj of Windmills) {
            displayText += obj.windmillID + " " + obj.turbine + "m:" + "<br>" + obj.power() + "kW" + "<br>";
          }
    // Display the list
    document.getElementById("div2").innerHTML = displayText;
}