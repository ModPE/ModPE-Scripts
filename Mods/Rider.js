//Rider Mod by DragonSteve142(ModPE)
var rr = 0;
var pbr = 0;
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

else if(cmd[0] == "help" && rp === 0){

    clientMessage("1. /rr - Toggles rider mode");
    clientMessage("2. /rider - Toggles rider mode");
    clientMessage("3. /pb - Toggles piggybacker mode");
    clientMessage("4. /piggybacker - Toggles piggybacker mode");

}

}

function attackHook(attacker, victim){
        if(rr === 1){
        rideAnimal(attacker, victim);

    }
        else if(pbr === 1){
        rideAnimal(victim, attacker);

    }
}
