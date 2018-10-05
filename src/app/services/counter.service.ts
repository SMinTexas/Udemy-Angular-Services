export class CounterService {
    transitionCount = 0;

    updateTransitionCount() {
        this.transitionCount++;
        console.log('Updated transition count: ' + this.transitionCount);
    }

    getTransitionCount() {
        return this.transitionCount;
    }
}
