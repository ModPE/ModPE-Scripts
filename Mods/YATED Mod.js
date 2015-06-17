//YATED Mod (You Are The EnderDragon Mod)
function newLevel(){

  clientMessage("YATED Mod Activated");
  setPlayerHealth(200);
  addItemInventory(511,1,0);
  Player.setCanFly(1);

}

ModPE.setItem(511,"sword",2,"EnderDragon Fang");


function attackHook(attacker,victim){
  if(getCarriedItem()==511){

Entity.setHealth(victim, Entity.getHealth(victim) - 9);

}

function deathHook(Player) {

  setPlayerHealth(200);
  addItemInventory(511,1,0);
  Player.setCanFly(1);

    }
}
