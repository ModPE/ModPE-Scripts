//Weapons+ Mod by Seasame

var soundDing = Level.playSound(x, y, z, "break", 1, 1);
var soundExplode = Level.playSound(x, y, z, "random.explode", 1, 1);
var soundFizz = Level.playSound(x, y, z, "fizz", 1, 1);




ModPE.setItem(511, "diamond_sword", 0, "Sword of Justice" );
Item.addCraftRecipe(511, 1, 0, [57, 3, 0, 42, 1, 0]);
Item.setCategory(511, ItemCategory.TOOLS);

function attackHook(attacker, victim){

  if(Player.getCarriedItem() == 511){

    var dmgfsoj = 10;

    Entity.setHealth(victim, Entity.getHealth(victim) - dmgfsoj);

}

}

ModPE.setItem(510, "diamond_axe", 0, "The Ban Hammer" );

function attackHook(attacker, victim){

  if(Player.getCarriedItem() == 510){

    var dmgftbh = 999999;

    Entity.setHealth(victim, Entity.getHealth(victim) - dmgftbh);

    soundExplode;

}

}

ModPE.setItem(509, "paper", 0, "Friend Healer" );
Item.addCraftRecipe(509, 1, 0, [364, 1, 0, 366, 1, 0, 320, 1, 0, 393, 1, 0, 281, 1, 0]);
Item.setCategory(509, ItemCategory.TOOLS);

function attackHook(attacker, victim){

  if(Player.getCarriedItem() == 509){

    var dmgffh = 20;

    Entity.setHealth(victim, Entity.getHealth(victim) + dmgffh);

    soundDing;

}

}

ModPE.setItem(512, "iron_pickaxe", 0, "Pocket Crafter" );
Item.addCraftRecipe(512, 1, 0, [364, 1, 0, 297, 1, 0, 320, 1, 0, 393, 1, 0, 281, 1, 0]);
Item.setCategory(512, ItemCategory.TOOLS);

 function useItem(x,y,z,itemId,blockId,side){
  if(itemId == 512){
   Level.setTile(Player.getX()+1,Player.getY()-1,Player.getZ(),58);
clientMessage(ChatColor.GOLD + "Here Is The Crafting Table You Needed!");
setRot(getPlayerEnt(),270,70);
   soundExplode;
}

}

ModPE.setItem(508, "coal", 0, "Pocket Smelter" );
Item.addCraftRecipe(508, 1, 0, [364, 1, 0, 297, 1, 0, 320, 1, 0, 393, 1, 0, 281, 1, 0]);
Item.setCategory(508, ItemCategory.TOOLS);

 function useItem(x,y,z,itemId,blockId,side){
  if(itemId == 508){
clientMessage(ChatColor.GOLD + "Here Is The Furnace You Needed!") ;
Level.setTile(Player.getX(),Player.getY()-1,Player.getZ(),61);
clientMessage(ChatColor.GOLD + "Here Is The Furnace You Needed!");
setRot(getPlayerEnt(),270,70);
  soundExplode;
}

}


ModPE.setItem(507, "bowl", 0, "Self Healer" );
Item.addCraftRecipe(507, 1, 0, [364, 1, 0, 297, 1, 0, 320, 1, 0, 393, 1, 0, 281, 1, 0]);
Item.setCategory(507, ItemCategory.TOOLS);

 function useItem(x,y,z,itemId,blockId,side){

  if(itemId == 507){

    var dmgfsh = 20;

    Entity.setHealth(player, Entity.getHealth(player) + dmgfsh);

     soundDing;

}

}

ModPE.setFoodItem(506, experience_bottle, 0, -5, "Poison");
Item.addCraftRecipe(506, 20, 0, [281, 1, 0, 236, 1, 0]);
Item.setCategory(506, ItemCategory.FOOD);

ModPE.setFoodItem(505, experience_bottle, 0, -100, "Lethal Poison");
Item.addCraftRecipe(505, 1, 0, [281, 1, 0, 236, 1, 0]);
Item.setCategory(505, ItemCategory.FOOD);
