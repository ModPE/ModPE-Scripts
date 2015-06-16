//Mo' Sticks Mod by DragonSteve142(ModPE)

var c = 0;
var r = 0;
var m = 0;
var w = 0;
var g = 0;
var f = 0;
var j = 0;
var v = 0;
var p = 0;
var q = 0;
var u = 0;
var t = 0;
var o = 0;
var e = 0;
var m = 0;
var d = 0;
var h = 0;
var i = 0;

ModPE.setItem(500,"stick",0,"Victim Flinging Stick ");
ModPE.setItem(501,"stick",0,"Flaming Stick ");
ModPE.setItem(502,"stick",0,"Vampiric Stick ");
ModPE.setItem(503,"stick",0,"Invisibility Stick ");
ModPE.setItem(504,"stick",0,"Riding Stick ");
ModPE.setItem(505,"stick",0,"Support Stick ");
ModPE.setItem(505,"stick",0,""Hoe"");

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

    Entity.setHealth(victim, Entity.getHealth(victim) + 100);
    }

    else if(getCarriedItem()==504){

      rideAnimal (getPlayerEnt(), victim);
    else if(getCarriedItem()==506){
      d = getTile (x, y, z);
	if(d == 2 || d == 3)
	{
		setTile (x, y, z, 60);
		if (d == 2)
		{
			Level.dropItem (x, y+1, z, 1, 295, 1, 0);
		}
	}
}
}
}
