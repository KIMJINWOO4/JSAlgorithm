class Queue{
    constructor (){
        this.items = {}; //객체
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++; //tailIndex 증가
    } // 데이터 삽입
    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    } //head pop
    peek(){
        return this.items[this.headIndex];
    }
    getLength(){
        return this.tailIndex - this.headIndex;
    }
}

