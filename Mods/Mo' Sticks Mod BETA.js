//Mo' Sticks Mod by DragonSteve142(ModPE)
//Flaming Stick is "Fire Aspect" but Igniting is Setting On Fire

ModPE.setItem(500,"stick",0,"Victim Flinging Stick ");
ModPE.setItem(501,"stick",0,"Flaming Stick ");
ModPE.setItem(502,"stick",0,"Vampiric Stick ");
ModPE.setItem(503,"stick",0,"Invisibility Stick ");
ModPE.setItem(504,"stick",0,"Riding Stick ");
ModPE.setItem(505,"stick",0,"Support Stick ");
ModPE.setItem(506,"stick",0,"Makeshift Hoe");
ModPE.setItem(507,"stick",0,"Igniting Stick");
ModPE.setItem(508,"stick",0,"Banishing Stick");

Item.addCraftRecipe(500, 1, 0,[280, 1 ,0, 288, 2, 0]);
Item.addCraftRecipe(501, 1, 0,[280, 1 ,0, 318, 2, 0]);
Item.addCraftRecipe(502, 1, 0,[280, 1 ,0, 291, 1, 0]);
Item.addCraftRecipe(503, 1, 0,[280, 1 ,0, 20, 2, 0]);
Item.addCraftRecipe(504, 1, 0,[280, 1 ,0, 334, 2, 0]);
Item.addCraftRecipe(505, 1, 0,[280, 1 ,0, 297, 2, 0]);
Item.addCraftRecipe(506, 1, 0,[280, 1 ,0, 3, 8, 0]);
Item.addCraftRecipe(507, 1, 0,[280, 1 ,0, 263, 2, 0]);
Item.addCraftRecipe(508, 1, 0,[280, 1 ,0, 57, 5, 0]);

function useItem(x,y,z,itemId,blockId,side){

  if (itemId==503){

    Entity.setRenderType(Player, 0);
    clientMessage("You are now invisible! Relog to reverse the effects!");

  }

  else if(getCarriedItem()==506){
		setTile (x, y, z, 60);

  }

  else if(getCarriedItem()==507){
		setTile (x, y+1, z, 51);

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

    Entity.setHealth(victim, Entity.getHealth(victim) + 100);
    }

    else if(getCarriedItem()==504){

      rideAnimal (getPlayerEnt(), victim);
      }

      else if(getCarriedItem()==508){

        Entity.remove(victim);

}
}
