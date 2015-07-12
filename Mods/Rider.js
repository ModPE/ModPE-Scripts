//Rider Mod by DragonSteve142(ModPE)
var rr = 0;
var pbr = 0;
var fr = 0;
var cmd = cmd.split(" ");

function procCmd(cmd){

if(cmd[0] == "rr" && rr === 0){

rr++;

}

else if(cmd[0] == "rr" && rr === 1){

    rr--;

}

else if(cmd[0] == "rider" && rr === 1){

    rr--;

}

else if(cmd[0] == "rider" && rr === 0){

    rr++;

}

else if(cmd[0] == "pb" && pbr === 1){

    pbr--;

}

else if(cmd[0] == "pb" && pbr === 0){

    pbr++;

}

else if(cmd[0] == "piggybacker" && pbr === 1){

    pbr--;

}

else if(cmd[0] == "piggybacker" && pbr === 0){

    pbr++;

}

else if(cmd[0] == "flr" && fr === 1){

    fr--;

}

else if(cmd[0] == "flr" && fr === 0){

    fr++;

}

else if(cmd[0] == "flingride" && fr === 1){

    fr--;

}

else if(cmd[0] == "flingride" && fr === 0){

    fr++;

}

else if(cmd[0] == "help" && rp === 0){

    clientMessage("1. /rr or /rider - Toggles rider mode");
    clientMessage("2. /pb or /piggybacker - Toggles piggybacker mode");
    clientMessage("3. /flr or /flingride - Toggles fling ride mode");

}

}

function attackHook(attacker, victim){
        if(rr === 1){
        rideAnimal(attacker, victim);

    }
        else if(pbr === 1){
        rideAnimal(victim, attacker);

    }

    else if(fr === 1){
    rideAnimal(attacker, victim);
    setVelY(victim, 10);

}

}
