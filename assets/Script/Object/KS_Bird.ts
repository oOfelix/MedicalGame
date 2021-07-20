// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseObject from "./BaseObject";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends BaseObject {
    // @property(cc.Label)
    // label: cc.Label = null;

    @property(cc.Node)
    Choice: cc.Node = null;

    @property(cc.Node)
    TextBox: cc.Node = null;

    @property(cc.Label)
    Text: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.TextBox.active = false;
        this.node.runAction(
            cc.sequence(
                cc.delayTime(3),
                cc.callFunc(() => {
                    this.talk();
                }),
                cc.delayTime(2)
            )
        );
    }

    talk() {
        this.Text.string = "吃完饭，\n我们就去上幼儿园吧。";
        this.TextBox.active = true;
        this.Choice.active = true;
    }

    // update (dt) {}
}
