const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this)
        this.timedelta = 0;
        this.has_called_start = false;
    }
    start() {
        //只执行一次
    }
    update() {
        //每一帧执行一次，除了第一帧
    }
    on_destroy() {
        //删除之前执行
    }
    destroy() {
        this.on_destroy();
        //in 遍历下标
        for (let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; //上一次执行的时刻
const step = timestamp => {
    //timestamp是request时传入的参数
    //of 遍历值
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    requestAnimationFrame(step)
}

requestAnimationFrame(step)