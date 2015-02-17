// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");


startingLine = "red";
startingStation = "south station";
endingLine = "red";
endingStation =  "central";

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
lines = {
  green:["haymerket", "government center", "park st", "bolyston", "arlington", "copley"],
  red: ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  orange: ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};



// puts "Please enter the train line you intend start:"
// line_start = gets.chomp.downcase
// puts "Please enter which stop you beginning your trip:"
// stop_on = gets.chomp.downcase
// puts "Almost done... Please enter which train line you indend to end your trip:"
// line_end = gets.chomp.downcase
// puts "Last question, please enter the name of the stop you indend to end your trip:"
// stop_off = gets.chomp.downcase

// hash = {
//         "red line" => ["alewife", "davis", "porter", "harvard", "central", "kendall", "park street", "south station"],
//         "green line" => ["haymarket", "government center", "park street", "boylston", "arlington", "copley"],
//         "orange line" => ["north station", "haymarket", "park street", "state street", "downtown crossing", "chinatown", "tufts medical center"]
//         }
var calc = function() {
  return lines.red.indexOf(startingStation) - lines.red.indexOf(endingStation);
};

var dualLine = function(line1, line2, station1, station2) {
  return Math.abs(lines[line1].indexOf(station1) - lines[line1].indexOf('park st') + (lines[line2].indexOf(station2) - lines[line2].indexOf('park st')));
};

// fuck = function(so many fucks){
//   if ("Im a fucking retard" === true){
//     return "you are a retard";
//   } else {
//     return "fuck you";
//   };
// }



// else
//   start_index = (hash[line_start].index(stop_on))
//   index_from_park = hash[line_start].index("park street")
//   num_stops_to_park = (index_from_park - start_index).to_i.abs
//   #know how far from park they are
//   puts "you are #{num_stops_to_park} stop(s) to park street"

//   end_index = (hash[line_end].index(stop_off))
//   index_to_park = hash[line_end].index("park street")
//   num_stops_from_park = (index_to_park - end_index).to_i.abs
// #after transter how far from next stop on line they are
//   puts "and from park street there are #{num_stops_from_park} stop(s) until you're there!"
//   puts "So the total number of stops is: #{(num_stops_from_park + num_stops_to_park)}"
// end
