// 一切皆对象
// 有些是不能对象的
class Font {
    key: string;

    constructor(key: string) {
        this.key = key;
    }
}

class FontFactory {
    // 使用一个池缓存font，如果存在就返回已存在的
    // 此处，创建好之后无法更改，只读
    fontPool: Map<string, Font> = new Map();

    getFont(key: string) {
        if (this.fontPool.has(key)) {
            return this.fontPool.get(key);
        }
        const font = new Font(key);
        this.fontPool.set(key, font);
        return font;
    }
}

const fontFactory = new FontFactory();

console.log(fontFactory.getFont("h"));
