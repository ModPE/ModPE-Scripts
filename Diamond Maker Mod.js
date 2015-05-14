//Diamond Maker Mod by DragonSteve142

ModPE.setItem(504, "diamond", 0, "Diamond Maker" );
Item.addCraftRecipe(504, 1, 0, [263, 8, 0, 265, 1, 0]);
Item.setCategory(504, ItemCategory.TOOLS);


function useItem(x, y, z, item, block, side){

    if(item == 504){

    setTile(x, y, z, 56);

}

}

ModPE.setItem(503, "diamond", 0, "Diamond Maker 2.0" );
Item.addCraftRecipe(503, 1, 0, [263, 8, 0, 42, 1, 0]);
Item.setCategory(503, ItemCategory.TOOLS);


function useItem(x, y, z, item, block, side){

    if(item == 503){

    setTile(x, y, z, 56);

}

}
