//Mo' Sticks Mod by DragonSteve142(ModPE)

ModPE.setItem(500,"stick",0,"Victim Flinging Stick ");
Item.addCraftRecipe(500, 1, 0, [280, 1, 0, 288, 2, 0]);

ModPE.setItem(501,"stick",0,"Flaming Stick ");
Item.addCraftRecipe(501, 1, 0, [280, 1, 0, 318, 2, 0]);

ModPE.setItem(502,"stick",0,"Vampiric Stick ");
Item.addCraftRecipe(502, 1, 0, [280, 1, 0, 291, 1, 0]);

ModPE.setItem(503,"stick",0,"Invisibility Stick ");
Item.addCraftRecipe(503, 1, 0, [280, 1, 0, 20, 2, 0]);

ModPE.setItem(504,"stick",0,"Riding Stick ");
Item.addCraftRecipe(504, 1, 0, [280, 1, 0, 352, 2, 0]);

ModPE.setItem(505,"stick",0,"Support Stick ");
Item.addCraftRecipe(505, 1, 0, [280, 1, 0, 297, 2, 0]);


function useItem(x,y,z,itemId,blockId,side){

  if (itemId==503){

    Entity.setRenderType(attacker, 0);
    clientMessage("Toggled Invisibility");

  }

}

function attackHook(attacker,victim){

  if(getCarriedItem()==501){

    Entity.setFireTicks(victim, 200);
  }

    else if(getCarriedItem()==500){

    setVelY(victim, 2);
    preventDefault();
    }

    else if(getCarriedItem()==502){

    Entity.setHealth(victim, Entity.getHealth(victim) - 2);
    Entity.setHealth(attacker, Entity.getHealth(attacker) + 2);
    }

    else if(getCarriedItem()==505){

    Entity.setHealth(victim, Entity.getHealth(victim) + 50);
    }

    else if(getCarriedItem()==504){

      rideAnimal (getPlayerEnt(), victim);

}
}
