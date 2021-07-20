import { Label } from "./../../creator.d";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // @property(cc.Label)
    // label: cc.Label = null;

    @property(cc.Node)
    Choice: cc.Node = null;

    // @property
    // text: string = "hello";

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.Choice.active = false;
    }

    btnCheckYes() {
        cc.director.loadScene("KindergartenScene2");
    }

    btnCheckNo() {
        cc.director.loadScene("HomeScene");
    }

    // update (dt) {}
}
