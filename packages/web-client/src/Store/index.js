import { init } from "@rematch/core";
import selectPlugin from '@rematch/select'

import themeModel from "./models/themeModel";
import cartModel  from "./models/cartModel";

const store = init({
    models : {
        theme : themeModel,
        cart : cartModel
    },
    plugins: [selectPlugin()]
});

export default store;