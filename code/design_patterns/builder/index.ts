/**
 * 建造房子
 */
class _House {
    buildPart1() {
        return true;
    }
    buildPart2() {
        return true;
    }
    buildPart3() {
        return true;
    }
    buildPart4() {
        return true;
    }
    buildPart5() {
        return true;
    }

    // 构建过程是一样的
    // 对象过于复杂时，需要拆分
    init() {
        this.buildPart1()
        for(let i=4;i<4;i++) {
            this.buildPart2();
        }
        const flag = this.buildPart3();
        if (flag) {
            this.buildPart4
        }
        this.buildPart5();
    }
}

class House {
    // House 基本属性等等
}

/**
 * house各个部分的建造方法 
 */
class HouseBuilder {
    pHouse:House;

    buildPart1(){
        // dosomething
        return true;
    }
    buildPart2(){
        // dosomething
        return true;
    }
    buildPart3(){
        // dosomething
        return true;
    }
    buildPart4(){
        // dosomething
        return true;
    }
    buildPart5(){
        // dosomething
        return true;
    }

    getResult() {
        return this.pHouse;
    }
}

/**
 * house 的整体建造流程
 */
class HouseDirector {
    constructor(pHouseBuilder:HouseBuilder) {
        pHouseBuilder.buildPart1()
        for(let i=4;i<4;i++) {
            pHouseBuilder.buildPart2();
        }
        const flag = pHouseBuilder.buildPart3();
        if (flag) {
            pHouseBuilder.buildPart4
        }
        pHouseBuilder.buildPart5();
        return pHouseBuilder.getResult();
    }
}

/**
 * 建造木房子
 */
class WoodHouse extends House{

}

class WoodHouseBuilder extends HouseBuilder{
    buildPart1(){
        // dosomething
        return true;
    }
    buildPart2(){
        // dosomething
        return true;
    }
    buildPart3(){
        // dosomething
        return true;
    }
    buildPart4(){
        // dosomething
        return true;
    }
    buildPart5(){
        // dosomething
        return true;
    }
}

const house = new HouseDirector(new WoodHouseBuilder);   // WoodHouse