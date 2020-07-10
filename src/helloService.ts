
export class HelloService {
    private hello: string = 'Hello World!';

    get helloProp(): string {
        return this.hello;
    }
}