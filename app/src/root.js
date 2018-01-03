import {root, StaticViewGroup} from "adajs";
import Welcome from "./welcome/base";

@root()
class Root extends StaticViewGroup {
    constructor(parameters) {
        super(parameters);
        this.addChild(Welcome);
    }
}

export default Root;