export class Painting {
    constructor(data = {}) {
        this.label = data.label || null;
        this.description = data.description || null;
        this.src = data.src || null;
    }
}