//Weapons+ Mod by Seasame

var soundDing = Level.playSoundEnt(Player, "break", 1, 1);
var soundExplode = Level.playSoundEnt(Player, "random.explode", 1, 1);
var soundFizz = Level.playSoundEnt(Player, "fizz", 1, 1);




ModPE.setItem(511, "DiamondSword", 0, "Sword of Justice" );
Item.addCraftRecipe(511, 1, 0, [57, 3, 0, 42, 1, 0]);
Item.setCategory(511, ItemCategory.TOOLS);

function attackHook(attacker, victim){

  if(Player.getCarriedItem() == 511){

    var dmgfsoj = 10;

    Entity.setHealth(victim, Entity.getHealth(victim) - dmgfsoj);

}

}

ModPE.setItem(510, "DiamondAxe", 0, "The Ban Hammer" );

function attackHook(attacker, victim){

  if(Player.getCarriedItem() == 510){

    var dmgftbh = 999999;

    Entity.setHealth(victim, Entity.getHealth(victim) - dmgftbh);

    soundExplode;

}

}

ModPE.setItem(509, "Paper", 0, "Friend Healer" );
Item.addCraftRecipe(509, 1, 0, [364, 1, 0, 366, 1, 0, 320, 1, 0, 393, 1, 0, 281, 1, 0]);
Item.setCategory(509, ItemCategory.TOOLS);

function attackHook(attacker, victim){

  if(Player.getCarriedItem() == 509){

    var dmgffh = 20;

    Entity.setHealth(victim, Entity.getHealth(victim) + dmgffh);

    soundDing;

}

}

ModPE.setItem(512, "IronPickaxe", 0, "Pocket Crafter" );
Item.addCraftRecipe(512, 1, 0, [364, 1, 0, 297, 1, 0, 320, 1, 0, 393, 1, 0, 281, 1, 0]);
Item.setCategory(512, ItemCategory.TOOLS);

 function useItem(x,y,z,itemId,blockId,side){
  if(itemId == 512){
    setTile(x, y, z, 58);
clientMessage(ChatColor.GOLD + "Here Is The Crafting Table You Needed!");
setRot(getPlayerEnt(),270,70);
   soundExplode;
}

}

ModPE.setItem(508, "Coal", 0, "Pocket Smelter" );
Item.addCraftRecipe(508, 1, 0, [364, 1, 0, 297, 1, 0, 320, 1, 0, 393, 1, 0, 281, 1, 0]);
Item.setCategory(508, ItemCategory.TOOLS);

 function useItem(x,y,z,itemId,blockId,side){
  if(itemId == 508){
    setTile(x, y, z, 57);
clientMessage(ChatColor.GOLD + "Here Is The Furnace You Needed!");
setRot(getPlayerEnt(),270,70);
  soundExplode;
}

}


ModPE.setItem(507, "Bowl", 0, "Self Healer" );
Item.addCraftRecipe(507, 1, 0, [364, 1, 0, 297, 1, 0, 320, 1, 0, 393, 1, 0, 281, 1, 0]);
Item.setCategory(507, ItemCategory.TOOLS);

 function useItem(x,y,z,itemId,blockId,side){

  if(itemId == 507){

    var dmgfsh = 20;

    Entity.setHealth(player, Entity.getHealth(player) + dmgfsh);

     soundDing;

}

}

ModPE.setFoodItem(506, "BeetrootSoup", 0, -5, "Poison");
Item.addCraftRecipe(506, 20, 0, [281, 1, 0, 236, 1, 0]);
Item.setCategory(506, ItemCategory.FOOD);

ModPE.setFoodItem(505, "BeetrootSoup", 0, -100, "Lethal Poison");
Item.addCraftRecipe(505, 1, 0, [281, 1, 0, 236, 1, 0]);
Item.setCategory(505, ItemCategory.FOOD);
