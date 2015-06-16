//Mo' Sticks Mod by DragonSteve142(ModPE)

ModPE.setItem(500,"stick",0,"Victim Flinging Stick ");
Item.addCraftRecipe(500, 1, 0, [280, 1, 0, 288, 2, 0]);
function attackHook(attacker,victim){

  if(getCarriedItem()==500){

    setVelY(victim, 2);
    preventDefault();

}
}

ModPE.setItem(501,"stick",0,"Flaming Stick ");
Item.addCraftRecipe(501, 1, 0, [280, 1, 0, 318, 2, 0]);
function attackHook(attacker,victim){

  if(getCarriedItem()==501){

    Entity.setFireTicks(victim, 200);

}
}

