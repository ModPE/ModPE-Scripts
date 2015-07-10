//Ore Chests by DragonSteve142(ModPE)
var diam = 0;
var gold = 0;
var iron = 0;
var coal = 0;
var emer = 0;
var cmd = cmd.split(" ");

function procCmd(cmd){

if(cmd[0] == "dchest" && diam === 1){

     diam--;

}

else if(cmd[0] == "dchest" && diam === 0){

    diam++;

}

else if(cmd[0] == "diamondchest" && diam === 1){

    diam--;

}

else if(cmd[0] == "diamondchest" && diam === 0){

    diam++;

}

else if(cmd[0] == "gchest" && gold === 1){

     gold--;

}

else if(cmd[0] == "gchest" && gold === 0){

    gold++;

}

else if(cmd[0] == "goldchest" && gold === 1){

    gold--;

}

else if(cmd[0] == "goldchest" && gold === 0){

    gold++;

}

else if(cmd[0] == "ichest" && iron === 1){

    iron--;

}

else if(cmd[0] == "ichest" && iron === 0){

    iron++;

}

else if(cmd[0] == "ironchest" && iron === 1){

    iron--;

}

else if(cmd[0] == "ironchest" && iron === 0){

    iron++;

}

else if(cmd[0] == "cchest" && coal === 1){

    coal--;

}

else if(cmd[0] == "cchest" && coal === 0){

    coal++;

}

else if(cmd[0] == "coalchest" && coal === 1){

    coal--;

}

else if(cmd[0] == "coalchest" && coal === 0){

    coal++;

}

else if(cmd[0] == "emchest" && emer === 1){

    emer--;

}

else if(cmd[0] == "emchest" && emer === 0){

    emer++;

}

else if(cmd[0] == "emeraldchest" && emer === 1){

    emer--;

}

else if(cmd[0] == "emeraldchest" && emer === 0){

    emer++;

}

else if(cmd[0] == "allchestson"){

    emer = 1;
    iron = 1;
    diam = 1;
    coal = 1;
    gold = 1;

}

else if(cmd[0] == "allchestsoff"){

    emer = 0;
    iron = 0;
    diam = 0;
    coal = 0;
    gold = 0;

}

else if(cmd[0] == "help"){

    clientMessage("1. /dchest or /diamondchest - Makes a chest below you(if any) have diamonds inside.");
    clientMessage("2. /gchest or /goldchest - Makes a chest below you(if any) have gold inside.");
    clientMessage("3./ichest or /ironchest - Makes a chest below you(if any) have iron inside.");
    clientMessage("4./cchest or /coalchest - Makes a chest below you(if any) have coal inside.");
    clientMessage("5./emchest or /emeraldchest - Makes a chest below you(if any) have emeralds inside.");
    clientMessage("6./allchestson or /allchestsoff - Self-explanatory.");
    clientMessage("7. /help - The command you just used.");

}

}

if(diac === 1){

  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),1,diamond,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),2,diamond,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),3,diamond,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),4,diamond,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),5,diamond,0,64);

}

else if(gold === 1){

  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),6,gold_ingot,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),7,gold_ingot,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),8,gold_ingot,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),9,gold_ingot,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),10,gold_ingot,0,64);

}

else if(iron === 1){

  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),11,iron_ingot,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),12,iron_ingot,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),13,iron_ingot,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),14,iron_ingot,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),15,iron_ingot,0,64);

}

else if(coal === 1){

  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),16,coal,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),17,coal,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),18,coal,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),19,coal,0,64);
  Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),20,coal,0,64);

}

  else if(emer === 1){

    Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),21,emerald,0,64);
    Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),22,emerald,0,64);
    Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),23,emerald,0,64);
    Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),24,emerald,0,64);
    Level.setChestSlot(Player.getX(),Player.getY()-1,Player.getZ(),25,emerald,0,64);


}
