$(window).on('load', function() {
  var delay = 1000;
  setTimeout(function() {
    $('body').addClass('is-loaded');
  }, delay);
});


const images1 = new Array();
images1.push("assets/images/map.jpg")
images1.push("assets/images/irk_lake.jpg")
images1.push("assets/images/irk_tree.jpg")
images1.push("assets/images/irk_ship.jpg")
images1.push("assets/images/m_truck.jpg")
images1.push("assets/images/irk_cafe.jpg");
images1.push("assets/images/m_building.jpg");
images1.push("assets/images/st_hotel.jpg");
images1.push("assets/images/ticket.jpg");
images1.push("assets/images/v_bottle.jpg");
images1.push("assets/images/girl.jpg");
images1.push("assets/images/v_tower.jpg");
images1.push("assets/images/mumu.jpg");
images1.push("assets/images/museum1.jpg");
images1.push("assets/images/museum2.jpg");
images1.push("assets/images/museum3.jpg");
images1.push("assets/images/kremlin1.jpg");
images1.push("assets/images/kremlin2.jpg");
images1.push("assets/images/st_room.jpg");
images1.push("assets/images/irk_house.jpg");
images1.push("assets/images/v_bridge.jpg");

const images2 = new Array();
images2.push("assets/images/v_cafe.jpg");
images2.push("assets/images/v_church.jpg");
images2.push("assets/images/v_hotel.jpg");
images2.push("assets/images/statue1.jpg");
images2.push("assets/images/m_church.jpg");
images2.push("assets/images/sketch4.jpg");
images2.push("assets/images/receipt1.jpg");
images2.push("assets/images/museumtickets.jpg");
images2.push("assets/images/subway.jpg");
images2.push("assets/images/painting.jpg");
images2.push("assets/images/sketch3.jpg");
images2.push("assets/images/theater.jpg");
images2.push("assets/images/m_fries.jpg");
images2.push("assets/images/train.jpg");
images2.push("assets/images/m_christmas.jpg");
images2.push("assets/images/st_church.jpg");
images2.push("assets/images/st_bus.jpg");
images2.push("assets/images/sketch5.jpg");
images2.push("assets/images/st_street.jpg");
images2.push("assets/images/kremlin3.jpg");
images2.push("assets/images/statue2.jpg");
images2.push("assets/images/v_sign.jpg");
images2.push("assets/images/m_cafe.jpg");
images2.push("assets/images/m_door.jpg");
images2.push("assets/images/sketch1.jpg");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pickimg1() {
  document.left.src = images1[getRandomInt(0, images1.length - 1)];
}
function pickimg2() {
  document.right.src = images2[getRandomInt(0, images2.length - 1)];
}


