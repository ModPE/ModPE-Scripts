//YATED Mod (You Are The EnderDragon Mod) by DragonSteve142(ModPE)
function newLevel(){

  clientMessage(ChatColor.GOLD + "YATED Mod Activated");
  clientMessage(ChatColor.GOLD + "If you die, relog to get your fang and flinger back!");
  Player.setHealth(200);
  addItemInventory(511,1,0);
  addItemInventory(510,1,0);
  Player.setCanFly(1);

}

ModPE.setItem(511,"sword",2,"EnderDragon Fang");
ModPE.setItem(510,"sword",2,"EnderDragon Flinger");



function attackHook(attacker,victim){
  if(getCarriedItem()==511){

Entity.setHealth(victim, Entity.getHealth(victim) - 9);

}

else if(getCarriedItem()==510){

setVelY(victim, 2);
preventDefault();

}
}

function deathHook(Player){

  clientMessage(ChatColor.GOLD + "You died! Relog to become the EnderDragon again!");

}
